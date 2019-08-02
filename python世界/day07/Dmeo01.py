# 尝试
# 要知道异常的类型 :1:定位问题的原因  2:代码更加清晰  3:定位问题

class YunSuan:
    def chu(self):
        # 捕获异常
        # try:
        num = int(input("请输入被除数"))
        shuchu = int(input("请输入除数"))
        result = num / shuchu
        print(result)

        exception = Exception("有异常了!!!!")

        # 抛出异常
        raise exception


        # except ValueError:
        #     print("请输入数字")
        #     print("num")
        # except ZeroDivisionError:
        #     print("除数不能是0")
        # except AttributeError:
        #     pass
        # except Exception as result:
        #     print("未知错误 %s" % result)
        #     # try  catch
        # else:
        #     print("正常运行")

        # 抛出异常

yunsu = YunSuan()
try:
    yunsu.chu()
except Exception as result:
    print(result)



