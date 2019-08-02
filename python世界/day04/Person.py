# class : 类
class Person:

    # 初始化  self:类的对象(不需要创建对象)
    def __init__(self, entity):
        """对象初始化的方法"""
        # 属性
        self.name = entity["name"]  # 李四  self.name 李四
        self.age = entity["age"]
        self.height = entity["height"]

        # 私有属性 :
        self.__shouru = entity["shouru"]

        # print("我是初始化对象的内置方法")
        pass

    def __del__(self):
        """对象被销毁的方法"""
        print("我是销毁方法")

    # 方法  自身的对象
    # 每一个方法 都有一个自带self 不用传过来
    def run(self):
        # print("张三爱跑步")
        # print(self.name)
        pass

    def eat(self):
        # print("%s爱吃小鱼" % self.name)

        pass

    def __shang_ce_suo(self):
        print("%s每天上9次厕所" % self.name)

    # __str__  字符串
    def __str__(self):
        return self.name + ":" + self.age + ":" + self.height


if __name__ == '__main__':
    # person 对象 类的代表  创建对象  自动调用__init__

    entity = {"name": "张三", "age": 20, "height": 180, "shouru": 7000}
    person = Person(entity)
    # 对象.属性/方法  调用
    # print(person.name)
    person.run()
    # ============================================================
    entity1 = {"name": "李四", "age": "21", "height": "182", "shouru": 8000}
    # 创建对象
    person1 = Person(entity1)
    # print(person1.age)
    person1.eat()

    # 0x0000027FFCC9EEB8  16进制  地址  计算机 开辟一块内存空间
    # print(person1)
    # print(person1.__shouru)
    # person1.__shang_ce_suo()


# 对象: 可以创建多次
