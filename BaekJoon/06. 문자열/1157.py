# 단어 공부
"""
import sys

word = list(sys.stdin.readline().strip().upper())
counter = {}

# 한글자일 경우 바로 출력
if len(word) == 1:
    print(word[0])
else:
    # 중복갯수 구하기(dict)
    for value in word:
        try:
            counter[value] += 1
        except:
            counter[value] = 1

    # value 내림차순으로 정렬
    sorted_counter = sorted(
        counter.items(), key=lambda item: item[1], reverse=True)

    # 가장 많이 사용된 알파벳이 여러개일 경우 ?를 출력
    if sorted_counter[0][1] == sorted_counter[1][1]:
        print('?')
    else:
        print(sorted_counter[0][0])
"""
import sys
word = sys.stdin.readline().strip().upper()
set_word = list(set(word))

cnt_list = []
for i in set_word:
    cnt = word.count(i)
    cnt_list.append(cnt)

if cnt_list.count(max(cnt_list)) > 1:
    print('?')
else:
    max_index = cnt_list.index(max(cnt_list))
    print(set_word[max_index])