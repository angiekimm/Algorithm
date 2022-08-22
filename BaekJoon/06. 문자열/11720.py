# 숫자의 합
import sys

digit = sys.stdin.readline()
number = sys.stdin.readline().strip()
number_list = list(number)

# while int(digit) == len(number_list):

sum = 0

for i in number_list:
    if i == 0:
        continue
    sum += int(i)

print(sum)
