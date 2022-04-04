#주사위 세개
from collections import Counter

def abc():
    N = list(map(int, input().split()))
    result = Counter(N)
    print(result)

    for key, value in result.items():
        print(key)
        print(value)
        # if value == 3:
        #     award = 10000 + key * 1000
        #     break
        # elif value == 2:
        #     award = 1000 + key * 100
        #     break
        # else:
        #     award = max(N) * 100
        #     break

    # print(award)

abc()