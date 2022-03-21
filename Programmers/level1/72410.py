import re
# 14/ 신규 아이디 추천_Create
# https://programmers.co.kr/learn/courses/30/lessons/72410?language=python3

def solution(new_id):
    # 1단계
    new_id = new_id.lower()
    # 2단계
    new_id = re.sub("[^-_.a-z0-9]", "" "", new_id)
    # 3단계
    new_id = re.sub("[.]{2,}", ".", new_id)
    # 4단계
    new_id = re.sub("^[.]|[.]$", "", new_id)
    # 5단계
    if(len(new_id)==0):
        new_id = "a"
    # 6단계
    if(len(new_id) >= 16):
        new_id = new_id[:15]
        new_id = re.sub("[.]$", "", new_id)
    # 7단계
    if(len(new_id) <= 2):
        while(len(new_id) < 3):
            new_id += new_id[-1]
    print(new_id)
    return new_id