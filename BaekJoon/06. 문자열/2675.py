# 문자열 반복

# 입력받은 문자열을 반복 횟수만큼 반복해서 출력한다.
import sys

case = int(sys.stdin.readline())

for i in range(case):
    input = sys.stdin.readline().strip().split(" ")
    times = int(input[0])
    eachLetter = list(input[1])
    answer = ''
    for i in eachLetter:
        answer += i * times
    print(answer)
