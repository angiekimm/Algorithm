# 두 개 뽑아서 더하기

def solution(numbers):
    answer = []
    numbers.sort()
    
    # 배열 다 돌기
    for i in range(len(numbers)-1):
        # numbers에 중복값이 있다면 더하기 스킵하기
        if(i>=1 and numbers[i] == numbers[i-1]):
            continue
        # 뒤에 있는 요소와 더하기
        for j in range(i+1, len(numbers)):
            # 정답에 추가하기
            answer.append(numbers[i]+numbers[j])
    
    # 정답에서 중복값을 제거하고 리스트로 변환한 다음, 정렬하기
    answer = list(set(answer))
    answer.sort()
    return answer