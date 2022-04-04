#팩토리얼

def factorial(N):
    if N == 0:
        return 0
    if N == 1:
        return 1
    result = N * factorial(N-1)
    return result

N = int(input())
result = factorial(N)
print(result)

