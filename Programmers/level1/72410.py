import re
# 14/ 신규 아이디 추천
# https://programmers.co.kr/learn/courses/30/lessons/72410?language=python3
def solution(new_id):
    answer = ''
    answer = new_id.lower()
    test = re.sub('[~!@#$%^&*()=+[{]}:?,<>/]+', '', answer)
    print(test)
    return answer