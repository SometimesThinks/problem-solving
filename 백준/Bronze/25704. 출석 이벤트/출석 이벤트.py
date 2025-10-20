import sys

input = sys.stdin.readline

n = int(input())
p = int(input())
discount = []

if n >= 5:
    discount.append(p - 500)
if n >= 10:
    discount.append(p * 0.9)
if n >= 15:
    discount.append(p - 2000)
if n >= 20:
    discount.append(p * 0.75)
if not len(discount):
    discount.append(p)
discount.sort()
print(int(discount[0]) if discount[0] > 0 else 0)
