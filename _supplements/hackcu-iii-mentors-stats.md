---
layout: post
title: HackCU III - Mentors Stats
description: HackCU III - Mentors Stats
published: true
comments: false
---

[*Original post*]({% post_url 2017-04-28-hackcu-iii %})

Here are the stats we collected from our [mentors app](https://github.com/HackCU/mentors).

We originally didn't want students to also be mentors. So we defaulted a new user to student only. Later on, we decided that students who want to help others shouldn't be stopped from helping because of this limitation. Thus, we created a new URL that will turn a user into a mentor if they are not already a mentor.

![overall-stats]({{ site.url }}//assets/images/hackcu3/overallStats.PNG)
![user-summary]({{ site.url }}//assets/images/hackcu3/userSummary.PNG)
![response-time]({{ site.url }}//assets/images/hackcu3/responseTime.PNG)

Here are a few things to note:

* The average response time is round 30 minutes with a median of 13 minutes. This is actually a pretty good response time in my opinion. However, we could certainly improve upon this to provide faster help to hackers. I think this might be because the mentors were a bit skeptical to use this. Reiteration can definitely help solve this
* Average completion time is around 12 minutes which is in complete contrast to the response time. Once again, this indicates that we did not "market it" enough to hackers and mentors
* The marketing problem is unveiled in the user summary stats. Out of 400 hackers, only about 100 registered and out of them, only 40 created tickets. Was this because they didn't need help (which I refuse to believe) or because they weren't aware of this tool or because they were reluctant to use it?
* Out of 40 tickets, only 15 seem to be completed. Once again, either mentors were reluctant to use it or hackers found solutions before help could arrive.
* The top frequently used words need to be improved. The original source code has the exceptions hard coded in them. Next time, we should probably use a Natural Language Processing Toolkit to ignore commonly used English words such as "to", "with", "and", etc.
* Apart from that, notice that JavaScript (particularly node.js) and Python were the popular language choices.

Other things we observed:

* Initially, the app showed 0 mentors available even though a lot of people had logged in. We restarted the meteor server to fix this.
* Many hackers didn't submit reviews to the mentors who helped them. 6 hours into the event, we realized this and had to remind the hackers to give ratings to their mentors.

Now that we know what went wrong with our version of [HelpQ](https://github.com/ehzhang/HELPq), this will help us make it better for the next hackathon. Hopefully you also learnt something from this that could help you from preventing the same mistakes.

Return to the [original post]({% post_url 2017-04-28-hackcu-iii %}).
