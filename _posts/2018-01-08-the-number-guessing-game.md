---
layout: post
title: The Number Guessing Game
description: I think of 5 numbers from 1 to 100. A friend, who has no idea what my 5 numbers are, then tells that you can pick a number from 31-60. What are the odds that the number you picked is one of the 5 numbers I thought of?
subtitle:
published: true
comments: true
---

Let's play a game. I think of 5 numbers from 1 to 100. A friend, who has no idea what my 5 numbers are, then tells that you can pick a number from 31 to 60. You win the game if the number you picked is one of the 5 numbers I thought of. Assume that I had no idea that you were going to be restricted to guessing only a number from 31 to 60 (otherwise it wouldn't fair!). What are the odds of you winning the game?
<!--excerpt_ends-->

## Why is this interesting?
Well, apart from the fact that a mathematician never shys away from a problem, this problem is interesting because, there is a seemingly complicated twist to [the original problem](#the-original-problem). It turns out that it actually isn't that complicated at all.

But, the problem is most interesting because of the answer to the question. So, you will have to stick until the end to know why this is intersting and worth thinking about. Now that we have established the conundrum of the *Hermeneutic Circle*, let's dive into the solution. If you are very impatient, jump to the [results](#results) to know the answer.

## The Original Problem
The question I posed is a spin-off of a very simple problem in probability. Let's solve that before introducing the intricacies and restrictions. The problem goes like this:
> I think of 5 numbers from 1 to 100. What are the odds that you guess exactly one of those numbers in a single attempt?

The solution is straightforward. There are 5 right answers. And you have a pool of 100 numbers to guess from.
\\[Probability = \frac{5}{100} = 0.05 \\]
It will do well to remember the number 0.05. Now, let's look at the problem at hand.

## The Solution
For the sake of simplicity, let's call the person who thinks of the number as Player 1 (or **P1**) and the person who guesses as Player 2 (or **P2**). And for completeness, let's call the person who imposes restrictions, making life harder for **P2**, as Referee (or **R**).

Back to the original problem, let us study the situation before we answer the actual question. First of, notice that there are 6 different possibilites for the 5 numbers and range.
1. None of the 5 numbers lie in the range
2. Exactly 1 of the 5 numbers lie in the range
3. Exactly 2 of the 5 numbers lie in the range
4. Exactly 3 of the 5 numbers lie in the range
5. Exactly 4 of the 5 numbers lie in the range
6. All of the 5 numbers lie in the range

For succinctness, let us call the event that exactly \\(i\\) numbers lie in the range as \\(R\_i\\). So, the above mentioned possibilities are events \\(R\_0\\), \\(R\_1\\), \\(R\_2\\), \\(R\_3\\), \\(R\_4\\), and \\(R\_5\\). Notice that these events are mutually exclusive and exhaustive.

Let us call the event that **P2** wins the game i.e., guesses a correct number as \\(C\\). It is actually easier for us to calculate the probability of \\(C\\) occurring conditioned on the events \\(R\_i\\). It is also straightforward to calculate the probability of \\(R\_i\\). So, with the help of law of total probability, we can answer the question posed as follows:

\\[P(C) = \sum\limits\_{i = 0}^5{P(C\|R\_i) \* P(R\_i)} \\]
\\[P(C\|R\_i) = \frac{i}{30}\\]
\\[P(R\_i) = \frac{(^{30}C\_i) \* (^{70}C\_{5-i})}{^{100}C\_5} \\]
\\[P(C) = \sum\limits_{i = 0}^5{\frac{i}{30}\*\frac{(^{30}C\_i) \* (^{70}C\_{5-i})}{^{100}C\_5}} = 0.05 \\]

Surprisingly we get the same answer got from the [original problem](#the-original-problem) i.e., 0.05. Could this just be a coincidence?

## Generalization
Let us generalize our formula for arbitrary values. Let \\(S\\) be the set of all elements from which **P1** can think of. And let \\(k\\) be the number of elements that **P1** thinks of. Now, **R** imposes a restriction on **P2**. Let \\(A\\) be that restriction i.e., the set of all elements from which **P2** can guess the answer. Let \\(\|S\| = n\\), \\(\|A\| = m\\), and \\(A \subseteq S\\). Therefore \\(m \leq n\\). Let the set of elements that **P1** thinks of be \\(X\\). Clearly \\(\|X\| = k\\).

Our events are defined as before. \\(R\_i\\) is the event that exactly \\(i\\) elements of \\(X\\) lie in \\(A\\) i.e., \\(\|X \cap A\| = i\\) where \\(0 \leq i \leq k\\). \\(C\\) is the event that **P2** wins the game. Again, applying the law of total probability, we have:

\\[P(C) = \sum\limits\_{i = 0}^k{P(C\|R\_i) \* P(R\_i)} \\]

Consider the event \\(C\\) conditioned on \\(R\_i\\). **P2** can guess from a total of \\(m\\) elements. But, only \\(i\\) of them can make **P2** win. Therefore, the probability of \\(C\\) conditioned on \\(R\_i\\) can be written as:

\\[P(C\|R\_i) = \frac{i}{m}\\]

The number of ways event \\(R\_i\\) can occur is the number of ways we can choose \\(i\\) elements from \\(A\\) and the number of ways we can choose the rest i.e., \\((k - i)\\) elements from \\(S-A\\). Note that because \\(A \subseteq S\\), \\(\|S - A\| = n - m\\). So, we can write the probability of \\(R\_i\\) as:

\\[P(R\_i) = \frac{(^{m}C\_i) \* (^{n-m}C\_{k-i})}{^{n}C\_k} \\]

Now, we can answer the generalized question:

\\[P(C) = \sum\limits_{i = 0}^k{\frac{i}{m}\*\frac{(^{m}C\_i) \* (^{n-m}C\_{k-i})}{^{n}C\_k}} \\]

## Results
I have written a quick [python script](https://gist.github.com/AparaV/f5d9278e250331b5ca31a63db2a2d749){:target="_blank"} to evaluate this for different values of \\(n\\), \\(m\\), and \\(k\\). Turns out that if we set \\(n = 100\\) and \\(k = 5\\), then for all \\(m\\) such that \\(0 < m \leq n\\) \\(P(C) = 0.05\\). This is far too interesting to be just a coincidence...

Well, in fact for arbitrary \\(n > 0\\) and \\(0 < k \leq n\\), as long as \\(0 < m \leq n\\),

\\[P(C) = \frac{k}{n} \\]

This means that the restriction the referee **R** imposes on **P2** has no effect on the odds that they will win the game.

## Discussion
Our intuition says that if **R** gives a smaller range for **P2** to guess from, then it reduces the probability that **P2** wins thus increasing the probability of **P1** winning. But we have just shown that our inherent human intuition is wrong just like the [Monty Hall Problem](https://en.wikipedia.org/wiki/Monty_Hall_problem){:target="_blank"} and lots of [other times](https://www.scientificamerican.com/article/why-our-brains-do-not-intuitively-grasp-probabilities/){:target="_blank"}.

But how can we undersand the result we just derived intuitively? Keep in mind the way we solved the [original problem](#the-original-problem). Now, if the numbers are truly random, then the odds will be the same irrespective of the restriction imposed on **P2**. This is due to three facts:

1. **P1**, the person thinking the numbers, doesn't know the restriction that will be imposed.
2. **R**, who sets the restriction, does not know what numbers **P1** has thought of.
3. **P2**, the person guessing, also doesn't know the numbers **P1** has thought of.

Since we have eliminated bias in all three people playing the game, we need to account for all the different possibilites the situation creates. In doing so, the net effect of the restriction becomes nil. Thus, we end up with the [original problem](#the-original-problem) again. We went to great lengths trying to complicate a simple problem only to go back to sqaure one!

## Acknowledgements
Shout out to my professor Chris Ketelsen and my classmate Michael Dresser for encouraging, and helping, me to think about this problem. Another shout out to my friend Aravindh Shankar for proof reading my solution.