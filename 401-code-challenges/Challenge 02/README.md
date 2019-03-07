![CF](https://i.imgur.com/60omTQF.png)

# code-challenges

**Author: Sarkis Aghazarian**

**Links and Resources**


![repo](https://github.com/sarkis74/code-challenges/tree/master/401-code-challenges)

![travis](https://travis-ci.org/sarkis74/code-challenges)

![back-end](https://code-challenges-401.herokuapp.com/)

# Linked List Insertions
<!-- Short summary or background information -->

Creating a program that counts k node and returns it value.

## Challenge
<!-- Description of the challenge -->

Count nodes starting from the end of a linked list and stop at k to return node value.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

I reversed the linked list with a loop and runner technique. But I couldn't capture the reversed list value because it doesn't reverse until the loop ends. So I created and array and pushed node values into it and returned array length - k;.

## Solution
<!-- Embedded whiteboard image -->
![](https://github.com/sarkis74/code-challenges/blob/master/401-code-challenges/assets/CodeChallenge2.JPG)
