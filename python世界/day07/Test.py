import Demo02

test = Demo02.Test()
# 成员变量   最外面(在哪都可以使用)
# 局部变量   方法(只能在方法中使用)
# 块级变量   for  while  if  try: 只能在块里面使用
score = 0
try:
    score = int(input("请输入分数:"))
except ValueError:
    print("输入错误")
finally:
    test.input_score(score)
