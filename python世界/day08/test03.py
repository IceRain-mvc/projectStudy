# 捕获异常
try:
    # 提示用户输入一个数字
    num = int(input("请输入数字："))
    print("hahhaah")
    # num = int(input("请输入数字："))
    # num = int(input("请输入数字："))
    # num = int(input("请输入数字："))
    # num = int(input("请输入数字："))
    # num = int(input("请输入数字："))
except ValueError as result:
    # invalid literal for int() with base 10: 'abc'
    print(result)
except TypeError:
    print("请输入正确的数字")
except AttributeError:
    print("请输入正确的数字")
finally:
    print("finally 不管处不出错 永远会执行")


def input_password():
    # 1. 提示用户输入密码
    pwd = input("请输入密码：")

    # 2. 判断密码长度，如果长度 >= 8，返回用户输入的密码
    if len(pwd) >= 8:
        return pwd

    # 3. 密码长度不够，需要抛出异常
    # 1> 创建异常对象 - 使用异常的错误信息字符串作为参数
    ex = Exception("密码长度不够")

    # 2> 抛出异常对象
    raise ex

try:
    user_pwd = input_password()
    print(user_pwd)
except Exception as result:
    print("发现错误：%s" % result)
