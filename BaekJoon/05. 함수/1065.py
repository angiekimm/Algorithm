# 한수
import sys
number = int(sys.stdin.readline())

def sub(n):
    global cnt
    toInt = list(map(int, str(n)))
    if toInt[0] - toInt[1] == toInt[1]-toInt[2]:
        cnt += 1

if int(number/100) == 0:
    print(number)
else:
    cnt = 99
    for i in range(100, number + 1):
        sub(i)
    print(cnt)
