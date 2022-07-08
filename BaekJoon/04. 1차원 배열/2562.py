# 최댓값
import sys

numbers = []

for i in range(9):
    numbers.append(int(sys.stdin.readline()))
    if i == 0:
        highest = numbers[i]
    elif numbers[i] > highest:
        highest = numbers[i]

print(highest)
print(numbers.index(highest)+1)
