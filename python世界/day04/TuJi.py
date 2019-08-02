class TuJi:
    def __init__(self, entity):
        self.name = entity["name"]
        self.qiang = entity["qiang"]
        self.zi_dan = entity["zi_dan"]

    def han_kou_hao(self, kou_hao):
        print(kou_hao)

    def da_qiang(self, fang):
        self.zi_dan -= fang
        print("子弹剩余%d" % self.zi_dan)


if __name__ == '__main__':
    # 实参
    entity = {"name": "许三多", "qiang": "M416", "zi_dan": 50}
    # 创建对象
    tuji = TuJi(entity)
    # 喊口号
    tuji.han_kou_hao("冲啊!!!!")

    # 打枪
    tuji.da_qiang(10)
