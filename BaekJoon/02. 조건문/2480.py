#주사위 세개
def abc():
    N = list(map(int, input().split()))
    result = {}
    # 중복값 찾기
    for i in N:
        try:
            result[i] += 1
        except:
            result[i] = 1

    # 중복횟수가 많은 순으로 정렬하기
    result = sorted(result.items(), key = lambda item: item[1], reverse = True)
    # sorted 결과가 tuple이므로 dictionay 자료형으로 바꾸기
    result = {k: v for k, v in result}

    # 제일 큰 value에 따라 award
    sameNum = list(result)[0]
    highestNum = list(result.values())[0]

    if highestNum == 3:
        award = 10000 + sameNum * 1000
    elif highestNum == 2:
        award = 1000 + sameNum * 100
    else:
        award = max(N) * 100

abc()