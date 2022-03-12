// 체육복
def solution(n, lost, reserve):
    answer = 0
    count = 0
    for i in lost:
        if i in reserve:
            reserve.remove(i)
        elif i-1 in reserve:
            reserve.remove(i-1)
        elif i+1 in reserve:
            reserve.remove(i+1)
        else:
            count = count + 1
    
    answer = n - count
        
    return answer