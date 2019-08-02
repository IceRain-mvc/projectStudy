class XiaoMing:

    # 姓名 体重 传过来
    def __init__(self, name, weight):
        self.liang = 0
        self.name = name
        self.weight = weight
        self.__is_lian_ai__ = False

    # liang 形参
    def drink(self, liang):
        self.liang = liang
        print("喝水的量是%d" % liang)

    def run(self):
        if self.liang > 60:
            print("可以跑步")
        else:
            print("先喝点水吧")

    def __get_lian_ai__(self):
        print(self.__is_lian_ai__)


if __name__ == '__main__':
    # 创建对象
    xiaoming = XiaoMing("小明", 180)
    xiaoming.drink(70)
    xiaoming.run()
    print(xiaoming.__is_lian_ai__)
    xiaoming.__get_lian_ai__()
