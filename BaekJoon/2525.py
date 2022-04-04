#오븐 시계

def abc():
    currentTime = list(map(int, input().split()))
    cookTime = int(input())

    hour = currentTime[0]
    minute = currentTime[1]

    minute += cookTime
    if(minute//60 != 0):
        hour += minute//60
        minute -= 60 * (minute//60)
    if(hour >= 24):
        hour -= 24
    
    print(str(hour) + " " + str(minute))

abc()