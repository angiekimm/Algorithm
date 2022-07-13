# 평균은 넘겠지
from operator import index, indexOf
import sys

case = int(sys.stdin.readline())

for i in range(case):
    test = list(map(int, sys.stdin.readline().split()))
    studentNum = test[0]
    score = test[1:]
    avg = sum(score) / studentNum
    
    # 평균 넘는 학생 수 구하기
    score.sort()
    aboveAvgIndex = 0
    for k in score:
        if k > avg:
            aboveAvgIndex = studentNum - score.index(k)
            break
    
    print('%.3f%%' %(round(aboveAvgIndex/studentNum*100, 3)))