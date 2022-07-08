# 숫자의 개수
import sys

a = int(sys.stdin.readline())
b = int(sys.stdin.readline())
c = int(sys.stdin.readline())

result = a*b*c
number = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

while True:
    # 곱셈 결과를 숫자 하나씩 분리해서 배열에 저장하기
    remainder = int(result % 10)
    result = int(result/10)

    # 나머지 숫자에 해당하는 인덱스에 횟수 저장하기
    number[remainder] += 1

    if result == 0:
        break

for i in number:
    print(i)
