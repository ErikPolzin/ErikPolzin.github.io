---
layout: post
title:  "Euler's Identity"
date:   "12 Dec 2016"
tags: math euler
math: true
---

Taylor Series
=============

Let's look at an arbitrary function, and be very original and call it \\( f(x) \\). We know what this function is - and how to evaluate and differentiate it - but sadly it happens not to be a polynomial. But we want it to be a polynomial (because that's the type of thing that people interested in mathematics want).  
One way to do this would be to approximate it as a Taylor Series. Essentially, Taylor series look at only *one* point on the original function, and make sure the approximation has the same derivatives. The more the derivatives match up at that point, the more the rest of the function matches up.  
<!--more-->
In this article, I take a look at a type of Taylor Series called the Maclaurin Series. This is a Taylor Series that focusses only on the point \\( x = 0 \\).

I'm going to eat my dessert before my dinner here and claim that the approximation \\( P(x) \\) for \\( f(x) \\), written as a Maclaurin Series, can is described by the formula:

$$P(x)= \sum_{n=0}^{\infty}\frac{f^{(n)}(0) \cdot x^{n}}{n!}$$

But this actually makes a lot of sense. One can get a feel for why it is by looking at the two functions as the approximation gets more and more accurate:

$$ \begin{align*}
P(0) &= f(0)\\
P(0) &= f(0) + f^{(1)}(0) \cdot x\\
P(0) &= f(0) + f^{(1)}(0) \cdot x + \frac{f^{(2)}(0) \cdot x^2}{2}\\
\end{align*} $$

Let's try calculating the second derivative on both sides of that second equation:

$$ \begin{align*}
P(0) &= f(0) + f^{(1)}(0) \cdot x\\
P^{(1)}(0) &= f^{(1)}(0)\cdot x\\
P^{(2)}(0) &= f^{(2)}(0)\\
\end{align*} $$

As you can see, the goal is for each new derivative to cancel out one more term, until only \\( P^{(n)}(0) = f^{(n)}(0) \\) remains. We've accomplished the goal of every derivative being the same, as long as we keep adding on new terms.

----------------------------------------------------

## Euler's Number

This method can be applied to many different functions, one of the most interesting is \\(e^x\\).
All of \\( e \\)'s derivatives at 0 are equal to 1. So, by definition, \\(f^{(n)}(0)\\) can be replaced by 1.
Let's substitute that into our formula from earlier:

$$ e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} $$

For fun, let's see what happens if we evaluate this series at \\(x = 1\\)

$$ e = 1 + 1 + \frac{1}{2} + \frac{1}{6} + \frac{1}{24} + \frac{1}{24} + \frac{1}{120}... = 2.71828... $$

Hey! Just, like that, we have a definition of \\(e\\)!

$$ e = \sum_{n=0}^{\infty} \frac{1}{n!} $$

----------------------------------------------------------------

## Trigonometric Functions

Maclaurin series can also be used to approximate the \\(cos x\\) function.

$$ \begin{align*}
f(x) &= cos x \\
f^{I}(x) &= -sin x \\
f^{I}(x) &= -cos x \\
f^{III}(x) &= sin x \\
f^{IV}(x) &= cos x \\
\end{align*} $$

This pattern repeats. At \\(x=0\\), we get the repeating series \\(1, 0, -1, 0\\), so the Maclaurin series would look like this:

$$ cos x = 1 + 0 - \frac{x^2}{2!} + 0 + \frac{x^4}{4!} + 0 - \frac{x^6}{6!} $$

Because every second derivative of \\(cos x\\) is zero, every second term in the series is zero, giving us the optimisation:

$$ \frac{x^{2n}}{(2n)!} $$

The formula is not complete, as the series alternates between positive and negative values. We add \\((-1)^n\\) to get:

$$ cos x = \sum_{n=0}^{\infty} (-1)^n \cdot \frac{x^{2n}}{(2n)!} $$

The formula for \\(sin x\\) is identical but for the fact that its derivatives and signs are shifted by one, giving us:

$$ sin x = \sum_{n=0}^{\infty} (-1)^n \cdot \frac{x^{2n+1}}{(2n+1)!} $$

------------------------------------------------------------

## Euler's Identity

Let's recap on what we have so far, and keep an open mind when looking at these series:

$$ \begin{align*}
e^x &= 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \frac{x^5}{5!}...\\
cos x &= 1 - \frac{x^2}{2!} + \frac{x^4}{4}...\\
sin x &= x - \frac{x^3}{3}  + \frac{x^5}{5}...\\
\end{align*} $$

Looking at these formulas closely, and disregarding positives or negatives, we can see that every term in \\(e^x\\) comes up in either \\(cos x\\) or \\(sin x\\). So, adding  \\(cos x\\) and  \\(sin x\\) and arranging the terms cleverly, we get:

$$ \begin{align*}
cos x + sin x &= +1 + x - \frac{x^2}{2!} - \frac{x^3}{3} + \frac{x^4}{4} + \frac{x^5}{5}...\\
e^x &= 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \frac{x^5}{5!}...\\
\end{align*} $$

Hmmm, very similar indeed. Except for those signs; the plusses and minusses must go!  
Their sequence is +, +, -, -, +, +, -, -. The only other construct in mathematics to have this sequence is \\(i^n\\). Think about it:
$$ \sum_{n=0}^{\infty} i^n = +1 +i -1 -i +1 +i -1 -i... $$

So instead of \\(e^x\\), we express \\(e^ix\\) as a Maclaurin Sum:

$$ \begin{align*}
e^{ix} &=  \sum_{n=0}^{\infty}\frac{x^n}{n!} \\
&= 1 + ix + \frac{i^2x^2}{2!} + \frac{i^3x^3}{3!} + \frac{i^4x^4}{4!} + \frac{i^5x^5}{5!} ...\\
\end{align*} $$

All even powers of \\(i\\) become real numbers, so we can, in this way, simplify the equation. Then we compare it to
\\(cos x + sin x\\)

$$ \begin{align*}
e^{ix} =& +1 + ix - \frac{x^2}{2!} -\frac{x^3}{3!} +\frac{x^4}{4!} + \frac{x^5}{5!} ... \\
cos x + sin x =& +1 + x - \frac{x^2}{2!} - \frac{x^3}{3} + \frac{x^4}{4} + \frac{x^5}{5}...
\end{align*} $$

If we separate the imaginary terms in \\(e^{ix}\\) from the real ones, we finally get:

$$ e^{ix} = (1- \frac{x^2}{2!} + \frac{x^4}{4!} ... ) + i(x-  \frac{x^3}{3!} + \frac{x^3}{3!} ... ) $$

These two parentheses correspond to $cos x$ and $sin x$, respectively. Therefore:

$$ e^{ix} = cos x + i sin x $$

Perhaps even more interesting, is is we evaluate this function at \\(x = \pi\\).

$$ e^{i\pi} = cos \pi + i sin \pi = -1 + 0 = -1 $$

And there we have it - perhaps the most elegant equation in mathematics. Euler's Formula, jumping out of a strange mix of infinite series, trigonometry, circle geometry and compound interest:

$$ e^{i\pi} = -1 $$
