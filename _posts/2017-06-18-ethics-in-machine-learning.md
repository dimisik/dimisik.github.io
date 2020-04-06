---
layout: post
title: Ethics in Machine Learning
description: >
    How will this sentience affect our lives? This is a question that crosses our minds often. One of the less commonly asked questions about AI and Machine Learning is, was this built and founded with the right virtues?
subtitle: Also posted at <a href="https://medium.com/@apara/ethics-in-machine-learning-9fa5b1aadc12" target="_blank">medium.com</a>
published: true
comments: true
---

The ethics of how a Machine Learning (ML) or an Artificially Intelligent (AI) system is to function is a common thought that arises when we read about significant advancements in those fields. Will this *sentience* take over humanity? Or will it help us reach a Utopian era? It's definitely not a binary question. But, one of the less commonly asked questions (and perhaps rightly so) is "Was this built and founded with the right virtues?". And this question concerns less about the motivation behind building a ML system than it seems.

<!--excerpt_ends-->

## Background

If you have no experience or no knowledge about what a ML system is, think of it as a black box. A black box which when posed with a question outputs an answer that has a high probability of being correct. In order to get this high probability, we need to setup the black box first.<br><br>
In practice, we try to create a set of many black boxes and choose the one with the highest accuracy. To build these we need lots of data and an algorithm. Think of the data as a long list of questions with correct answers. The algorithm *learns* from this data. Each black box in a set has a slightly different version of the same algorithm. Finally, we pick the version that is most accurate (technically called *tuning the hyperparameters*).

## The Problems

In ML, there are primarily three possible avenues for *cheating*. They are:
1. Data
2. Algorithm
3. Results

### 1. The Data

This is perhaps the biggest of the Three Problems. A good ML system needs lots of data. But where are we going to get this data? And if this data we are seeking doesn't already exist, how are we going to mine it? Sometimes, the data sought exists already. It might be open sourced and free. It might be publically available for a price. Or the data might be privately owned by a group of people. All is well, if it's free and open sourced. Perhaps it is good even if it's available to buy. But is it alright if you steal the someone's private data? You might lean towards "No". But what if that data, currently accessible only to a few, can help millions around the world with your brand new ML model. Would it then be considered *right*? Suddenly the question does not seem so black and white.<br><br>
The answer becomes more ambiguous when we talk about tracking people anonymously, without their consent, to collect data. This data could perhaps be used to detect unusual activities. We already know <a href="https://www.theguardian.com/world/2013/aug/01/new-york-police-terrorism-pressure-cooker" target="_blank">our web searches are being tracked</a>. If your ML system can help prevent the next terrorist attack by tracking the common people, does it become right to track them? Or does the action at least become justified?

### 2. The Algorithm

It's a good thing that many of the important and useful algorithms are open sourced. This means that everybody has access to it and some even allow us to modify it and make profit. This is great! Now, once again, imagine the same scenario with the data. If a group of people own a patented algorithm, the laws make it illegal to use the same algorithm. But what if that algorithm, in the right hands can help millions? Can one's own sense of right and wrong be used to reverse engineer the algorithm to benefit others? This deals with theft of intellectual property, but is nonetheless a concern of ML.<br><br>
A problem with developing a new algorithm is closely tied with the datasets. If you don't have a complete dataset (i.e., you have a dataset that doesn't accurately consolidate a good number of all possible cases), it might just happen that your resulting ML system becomes biased and it could start discriminating. For example, an AI that helps a bank determine whether to invest in a particular business could deny loans to everybody with a poor credit history even though their business has great potential (something a human would have noticed and made an exception for). This is a bad example of automating human tasks that could take place unnoticed.

### 3. The Results

The first two problems are concerned with the larger picture. This one is more isolated to ML. In ML, to report the accuracy of a model, we compare the results the model produced to the actual answers. The more close they are, the higher the accuracy. There are different ways to report this score.<br><br>
The most common way people cheat here, is they train their model on a dataset and report the error they get on the same dataset. This is a common mistake beginners make because they don't understand that it is wrong. And it's also a mistake that is sometimes made intentionally to be able to report a greater accuracy.<br><br>
Why is this wrong? Imagine you are preparing for an exam and you are given a list of questions and answers to prepare for it. If you get the same questions in the exam, is your score on the exam a good measure of how much you learnt? Or is it a measure of how much you were able to memorize? The same is true for a computer. If you test the model on the same dataset you trained, your model will yield a high accuracy because, your model has now *memorized* the dataset and knows all the correct answers. But if I ask it a new question, there is a good chance that the answer is way off. This problem is called *overfitting the dataset*. Thankfully, the fix to this problem is very simple, but is out of the scope of this article.<br><br>
Another way to cheat is creating a synthetic dataset on which the model performs extremely well and using that to report the accuracy.<br><br>
If you're wondering if people even do this, take a look at the leaderboards of some Kaggle competitions. In the public dataset (the training dataset), there are many people with high accuracies. But, when looking at the leaderboards in the private dataset (an invisible test dataset), only few who had high scores in the earlier leaderboard got similar results. The others had models that heavily overfit the data. Such a model, if put into practice, is only detrimental to the society.<br><br>
This might not seem like a big ethical issue. Alas! It still concerns and questions the integrity of a ML engineer.

## A moderator?

Many of the questions I posed above are subjective. What might seem right to one person will seem wrong to another. But these problems make use think about what we are willing to do to bring about a good change. I think, what we need is a set of bylaws, a code of conduct if you will, that an engineer should adhere to while designing a ML system. A violation of this code should entail the consequence of the ML system to never be put to use.


And why does all of these matter? It matters because there is such a thing as right and wrong and we must ensure that we always pick the right path to improve the world.
