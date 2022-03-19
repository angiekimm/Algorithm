import re
# 14/ 신규 아이디 추천_Create
# https://programmers.co.kr/learn/courses/30/lessons/72410?language=python3

def solution(new_id):
    answer = ''
    # 1단계
    new_id = new_id.lower()
    # 3단계
    i=0
    while 1:
        if i == len(new_id)-1:
            break
        if new_id[i] == new_id[i+1]:
            str1 = new_id[0:i]
            str2 = new_id[i+1:]
            new_id = str1 + str2
            i=0
        else:
            i += 1

    # 4단계
    if(new_id[0]=='.'):
        new_id[1:]
    if(new_id[len(new_id)-1]=='.'):
        new_id[:len(new_id)-1]
    print(new_id)
    return answer