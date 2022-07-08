# 나머지
import sys

result = []

for i in range(10):
    remainder = int(sys.stdin.readline())%42
    if remainder not in result:
        result.append(remainder)
    else:
        continue

print(len(result))