#사분면 고르기

def abc():
    x = int(input())
    y = int(input())

    if(x > 0):
        if(y > 0):
            print(1)
        else:
            print(4)
    if(x < 0):
        if(y > 0):
            print(2)
        else:
            print(3)

abc()