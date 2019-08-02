class GongChangFu:
    def __mainhua__(self):
        pass

    def mianbei(self):
        pass

    def tieqiao(self):
        pass

    def chengben(self, touru):
        # 100  150
        return touru * 3 / 2


class GongChangNongYe(GongChangFu):
    def mianbei(self):
        # 方法的重写
        print("生产棉被的")
        pass

    def dadou(self):
        print("生产大豆")
    # pass


class GongChangGongYe(GongChangFu):
    pass


if __name__ == '__main__':
    nongye = GongChangNongYe()
    nongye.mianbei()
    nongye.dadou()
    print("投入了 300")
    chanchu = nongye.chengben(300)

    print("产出了%d" % chanchu)

    # gongye = GongChangGongYe()
    # gongye.chengben()


# python面向对象
# 封装 : class 封装 对象.属性和方法
# 继承 : 单继承  多继承(父类1,父类2)
# 多态 : 