# 단어의 개수
import sys
# split() - 공백의 갯수와 상관없이 split
# split(" ") - 공백 하나를 기준으로 split, 공백이 두 개면 공백 하나가 리스트에 들어옴
words = sys.stdin.readline().strip().split(" ")
print(len(words))