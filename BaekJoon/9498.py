#시험 성적
def abc():
    A = int(input())
    
    if(A >= 90):
        result = "A"
    elif(A >= 80):
        result = "B"
    elif(A >= 70):
        result = "C"
    elif(A >= 60):
        result = "D"
    else:
        result = "F"

    print(result)

abc()
