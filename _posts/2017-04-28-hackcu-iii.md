---
layout: post
title: HackCU III
subtitle:
description: My experience organizing the third edition of Colorado's largest student hackathon, HackCU III
published: true
comments: true
---

Last week, the third edition of Colorado's largest student hackathon, [HackCU III](https://hackcu.org/), took place at Boulder. With nearly 400 hackers from all over US, this 24 hour hackathon is the largest one yet. And being a part of the [organizing team](https://2017.hackcu.org/#team) this year was an amazing experience.
<!--excerpt_ends-->

Along with meeting new people, the learning, and having fun, the best thing about a hackathon is simply being in an atmosphere filled with passionate students skipping school, sleep, and what-not to travel a long way just to do what they love - creating something cool. Even if you're not a tech person, if you've ever been to a place that is so full of energy and enthusiasm you'd definitely agree that there's no other place you'd rather be!

## My role

I was mostly involved in the web team and helped build the website. The website was nearly finished early in January, so I started helping put together another event - [Startups2Students](https://startups2students.hackcu.org/). As the main event drew closer, we started creating a live page that displays updated schedules, a countdown timer, API's and hardware available, etc. We used Google Sheets to fetch the information to display on the website rather than editing the source. This was done to make sure that it is easy for any admin to edit the schedule on the fly (as opposed to someone cloning, fetching commits, and all that mess) and to bypass the caching process (we don't want any hacker to have an outdated schedule simply because they didn't clear their browser cache).

## Other cool things we used

We had a [SMS notification system](https://github.com/HackCU/mercurysms) through which we could send text messages reminding hackers about upcoming tech talks, workshops, deadlines, etc. This was a really sweet software we had. However, we never tested the software on a large set of phone numbers. So, unfortunately, during the first run, the server timed out and killed the program. This was because Twilio took a long time to validate a single request and running it on an entire list timed out the process. And during the event, we didn't have enough time to find a legit solution (like a separate worker/thread). So, the impromptu hack (*it is a hackathon*) was overwriting the worker timeout.

>**UPDATE 05/23/2017**: I was able to fix it by moving the process to a background worker and making AJAX calls to check for completion. View this [Pull request](https://github.com/HackCU/mercurysms/pull/6)

This year, we also used [HelpQ](https://github.com/ehzhang/HELPq) created by the HackMIT team for mentoring hackers. Earlier, Slack was used. But with 400 hackers, Slack is very inefficient and requests for help can get buried in messages. So we [adapted HelpQ](https://github.com/HackCU/mentors). It is a very effective tool that uses tickets hackers create to tell mentors what issues they have with their code. The mentors, on the other side, can view all of these tickets and choose the one they want to help with. Despite my initial skepticism, quite a few hackers and mentors used this and I think we will definitely use this moving forward (unless we find a better alternative). You can find some stats we collected from that app <a href="{{ site.url }}/supplements/hackcu-iii-mentors-stats/" target="_blank">here</a>.

## During the hackathon

The event was 24 hours and I was there during the entire event. I took a 90 minute (power?) nap at 1:30 AM. At other times, you'd have probably met me at check-in at MATH 100 or at the MLH Hardware Lab helping you folks check out the right hardware. Or you might have seen me moving tables around or caught me taking out the trash or refilling RedBull (they ran out fast!).

I haven't been to a lot of hackathons. But I felt that HackCU proceeded smoothly overall except for two small hiccups. At the beginning, the lunch order was messed up by the vendor (which we corrected soon to get more food!). And towards the end, there was a lot of confusion and panic among hackers about when they had to submit their projects to Devpost. This was due to the clock on out-of-state hackers' computers not set to MST (Mountain Standard Time). So the countdown on the live page and the Devpost both told the hackers to submit their hacks an hour earlier! Luckily we found what was going wrong soon and notified all hackers to correct their clocks.

## The aftermath

After the closing ceremonies, and after all the hackers had bid farewells, came the most tedious job - cleaning up the rooms. The building we had rented was a new building and the officials wanted the rooms to be super clean after the event. So we manually picked out all the trash and soda cans that hackers left behind. wiped all the tables clean with a solvent, cleared the boards that had been used, vacuumed the carpets, rearranged the tables to how they were before, etc. It was very tiring work - especially vacuuming the carpets. The coffee spills are another story.

10 people cleaning up after 400 hackers is quite a tall task. Since we're planning to expand to 600 hackers next year, we're also thinking about hiring a professional cleaning service next time.

## Final remarks and takeaways

The venue we had (Wolf Law Building) was not best suited for a hackathon. Firstly, there was no classroom that could house all the hackers for opening and closing ceremonies. There was a court room, but that was out of bounds and it couldn't serve as an auditorium. This brings us to the next issue - for the ceremonies, we rented a classroom that was 15 minutes away from the hacking space. This was quite disheartening and confusing to hackers. Finally, as mentioned earlier, the officials wanted the building to be spotless after the event (can't blame them). And the entire place was carpeted. This made cleaning [vacuuming] a tedious job. And, spills are inevitable and spills on carpets are always harder to clean.

**If there were so many issues with this venue, why did you people rent it in the first place?**<br>
This was the only building on campus that could house 400 hackers and allowed overnight events. Other event spaces were either too expensive or did not allow overnight events (which meant hackers couldn't sleep at the venue). So we had to make the best out of what we had.

With that said, here are some takeaways. As a hacker (or any sensible human being) you must really take the following seriously when you travel to hackathons (or any other event):

1. Always clean up after your mess. If you spilt coffee on the table, go get a paper towel and wipe it clean. It is much easier to clean a coffee spill when the coffee still hasn't dried up.
2. If it is a mess you can't clean up on your own (such as a radioactive leak), inform one of the admins or other staff.
3. If you emptied a soda can, throw it in the trash. Don't leave it lying around or wait for someone else to do it.
4. When you travel to another state, make sure to update your computer and phone clocks to the local time (just like your watches during daylight savings). This can prevent mass false panic attacks at a later time.

## The future

Now that this edition came to successful end, our team has taken a small break and started buckling up for the final exams. Next year, it's going to be a lot bigger and better with  more cool prizes! So be sure to keep an eye out for us next year and return to make more awesome stuff! Until then, keep hacking hard!
