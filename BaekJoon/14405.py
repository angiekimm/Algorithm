# 피카츄

def pikachu():
    S = str(input())
    letter = ['pi', 'ka', 'chu']

    for i in letter:
        S = S.replace(i, "***")

    flag = True

    for i in S:
        if i != '*': 
            print('NO')
            flag = False
            return

    if flag: print('YES')

pikachu()