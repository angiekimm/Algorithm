 #A+B -3

def abc():
    case = int(input())

    for i in range(0, case):
        number = list(map(int, input().split()))
        print(number[0] + number[1])
    
abc()