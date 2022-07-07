# 빠른 A+B
import sys

case = int(sys.stdin.readline())

for i in range(0, case):
    a,b = map(int, sys.stdin.readline().split())
    print(a+b)