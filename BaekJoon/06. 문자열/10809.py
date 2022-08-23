# 알파벳 찾기

# 첫 번째 글자부터 위치에 해당하는 숫자를 알파벳 리스트에 넣는다.
# 리스트에 넣을 때, -1이 아닌 곳은 스킵한다.
# 알파벳 리스트를 한 칸씩 띄워 출력한다.

# a = 0, b = 1, c = 2, ...
# 아스키 코드로 위치 잡기
import sys

word = sys.stdin.readline().strip()
alphabet = [-1 for i in range(26)]

# 입력한 단어를 훑는다.
for i in range(len(word)):
    # 알파벳의 아스키코드를 이용해 리스트 인덱스를 지정한다.
    ascii = ord(word[i])-97
    # 알파벳이 중복되지 않은 경우만 알파벳의 인덱스를 출력리스트에 저장한다.
    if alphabet[ascii] == -1:
        alphabet[ascii] = i

for i in alphabet:
    print(i, end=' ')
