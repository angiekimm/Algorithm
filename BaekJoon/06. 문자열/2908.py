# 상수
import sys

# solution 1
numbers = sys.stdin.readline().strip().split()

def reverse_number(numbers):
    answer = ''
    for i in reversed(numbers):
        answer += i
    return int(answer)

reversed_number1 = reverse_number(numbers[0]) # 437
reversed_number2 = reverse_number(numbers[1]) # 398

print(reversed_number1) if reversed_number1 > reversed_number2 else print(
    reversed_number2)

# solution 2
a, b = sys.stdin.readline().strip().split()
new_a = int(a[2]+a[1]+a[0])
new_b = int(b[2]+b[1]+b[0])
print(max(new_a, new_b))
