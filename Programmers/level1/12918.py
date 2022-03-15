# 문자열 다루기 기본
def solution(s):
    answer = False
    if(s.isdigit()):
        if(len(s)==6 or len(s)==4):
            answer = True
    return answer