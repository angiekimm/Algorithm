# OX퀴즈
import sys

case = int(sys.stdin.readline())


def check(list, i):
    global score
    if list[i-1] == 'O':
        score += 1
        check(list, i-1)


for i in range(case):
    score = 0
    quiz = list(sys.stdin.readline())
    for i in range(len(quiz)):
        if quiz[i] == 'O':
            score += 1
            check(quiz, i)
    print(score)
