# 셀프 넘버

def d(n):
    ans = n
    toString = list(str(n))
    for i in toString:
        ans += int(i)
    try:
        number.remove(ans)
    except:
        pass

number = [i for i in range(1, 10001)]

# 생성자 있는 숫자 찾아서 없애기
for i in range(1, 10001):
    d(i)

for i in number:
    print(i)
