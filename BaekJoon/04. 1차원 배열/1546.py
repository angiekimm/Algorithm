# 평균
import sys

number = int(sys.stdin.readline())
score = list(map(int, sys.stdin.readline().split()))

score.sort()

highest = score[number-1]
sum = 0

for i in score:
    sum += i/highest*100

print(sum/number)
