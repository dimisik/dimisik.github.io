---
layout: post
title: How I built an app from scratch
description: My first web app and how I crafted it using Python
subtitle: Also posted at <a href="https://medium.com/@apara/how-i-built-an-app-from-scratch-cf71c9f7d23f#.t25o3b56f">medium.com</a>
comments: true
---

[Popularity on Twitter](https://popularity-on-twitter.herokuapp.com/) was never intended to be what it is right now (an app hosted on [Heroku](http://heroku.com/)).
It started out as a weekend project to help me learn Python and APIs.
I previously had little knowledge of Python and knew nothing about APIs.
Over Thanksgiving break, I decided to learn them using the Twitter API.
<!--excerpt_ends-->

The results of the simple `get_status` function seemed magical.
And I decided to take it a bit further.
By following a [tutorial](https://marcobonzanini.com/2015/03/02/mining-twitter-data-with-python-part-1/), I implemented a functionality to analyze tweets and find the most common words amongst them (ignoring stopwords like ‘the’, ‘I’, ‘there’, etc.) and plot a time frequency chart to see the tweet trends with time.
But that wasn’t enough.

## Adding my small feature

Nothing’s ever enough.
I decided to add a small feature of my own that would track live tweets containing the requested search query and calculate a score to determine how popular the query is at that instant.
This was where I started facing a lot of problems and thus learnt a lot.

The biggest issue was that the streaming API would not stop until I terminated the script manually.
So I had to modify the API wrapper’s implementation of the stream listener to add a timer to stop streaming after the limit exceeds.
Then I realized that this method failed when streaming low volume tweets.
After scouring stackoverflow to no avail, I came up with a novel idea.
I used the original implementation, but ran it on a separate thread.
I used a timer in the main thread and disconnected the stream, from the main thread, upon completion of the timer.
Check out the [gist](https://gist.github.com/AparaV/6facd7db460b905933cf908c8b919b89).

Then there is the calculation itself.
As you might know, my formula isn’t necessarily perfect.
But it does a good job of giving qualitative results when comparing two or more scores.
The formula isn’t perfect because, it does not give you an absolutely deterministic score.
Unlike looking at your math grade and feeling satisfied you got a 95, you cannot look at the score of a query and determine whether it is actually popular or not.
This is not possible (correct me if I’m wrong) because the Streaming API does not allow you to get all tweets (and you do not want to, unless you are trying to run out of memory).
You can only track tweets by applying a filter and there is no empty filter to download all of them.

## The algorithm

First, I had find all the factors that determine the popularity.
The total number of tweets gathered in the time interval is the most obvious.
The number of followers the tweeter has should also play a role because if he has more followers, then the tweet ends up on more user’s feeds.
Then there is the retweet count.
This makes sense because if a tweet is being retweeted more, then it is clearly reaching more people and getting more attention.
The number of likes is similar to the retweet count.

Hence, I calculated the total number of tweets ( \\(T\\) ).
Then I summed up retweet count for all tweets ( \\(T\_R\\) ) and calculated the retweet index ( \\(R\\) ).
Then I averaged the number of followers each user had ( \\(f\_i\\) ) across the entire set.
Then, for the likes, I divided the likes each tweet had ( \\(l\_i\\) ) with the number of followers the user had because liked tweets show up less on someone else’s feed.
I averaged this new likes index ( \\(L\_i\\) ) across the entire set.
Then I summed them all up and divided them by the amount of time ( \\(t\\) ) the tweets were collected.

\\[ L\_i = \frac{l\_i}{f\_i} \\]
\\[ R = \frac{T\_R}{T} \\]
\\[p = \frac{\sum\_{i}L\_i}{T} + \frac{\sum\_{i}f\_i}{T} + R + T\\]
\\[ P = \frac{p}{t} \\]

Clearly there are some fallacies here.
For instance, I should probably factor in the number of followers for the retweets, similar to the likes count.
Maybe I could assign weights to each of these factors and then find the score which would help a lot as it scales down the score to a range.
There is obviously scope for improvement here.
In fact, I want to improve this and I tweak this often when I get new ideas.

Thus I created something that works alright locally, on the console.

***

## The next level

During the winter break, I decided to take it to the next level by running it on a website.
I knew how JavaScript works on browsers, but not much about Python and I’ve come across Python and web app put together frequently.

I used Flask to set up a local server and added some (not so) fancy front-end stuff to deliver data the client provides to my Python program.
Then I wanted to host it on some web service to show it to the world.

## Hosting on Heroku

This was the next biggest hurdle.
I had to learn how this service worked and modify a lot of my existing code to comply with their service.
This was harder than I expected because I’m using Windows as my development environment and let’s just say that Windows has its own way of dealing with things that aren’t quite friendly with developers.
And migrating the entire project to my VM wasn’t an option now.

I learnt to live with Windows and finally managed to deploy it on Heroku.
Then came the next shock.
If the client wanted to stream for more than 30 seconds, the request would time out and lead to an error page.
So I had to move the streaming process and calculation process to a background worker in a separate thread and lead the client to a loading page, which would periodically make calls to see if the calculation has completed.

Finally, I had to make sure I notified the client if the app began to hit the rate limits set by the streaming API.
This was necessary to prevent erroneous results from being delivered to the client and most importantly prevent Twitter from banning my API credentials for making frequent requests.

## What did I learn?

A great deal more about python – file I/O, turning a console app into a web app using Flask.
I can also confidently say that I will be able to deploy another app on the Heroku infrastructure, which is pretty straightforward and intuitive now that I know how it works.
Finally, I learnt a lot about multi-threading and feel safe about using threads, which is something I’ve been dodging for a while because it sounded very dangerous.

Overall, it's been an amazing learning experience.
