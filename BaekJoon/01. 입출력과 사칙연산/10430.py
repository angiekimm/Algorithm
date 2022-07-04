#나머지

def abc():
    N = list(map(int,input().split()))
    A = N[0]
    B = N[1]
    C = N[2]

#, 둘째 줄에 , 셋째 줄에 , 넷째 줄에 
    print((A+B)%C)
    print(((A%C) + (B%C))%C)
    print((A*B)%C)
    print(((A%C) * (B%C))%C)

abc()