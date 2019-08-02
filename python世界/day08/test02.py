import person


# persons = person.Person()
# persons.get_name("zhanngsan")


class Cat:
    """这是一个猫类"""

    # def __new__(cls, *args, **kwargs):
    #     print("创建对象")
    #     # pass

    def __init__(self):
        print("初始化")
        self.name = "汤姆"

    def eat(self):
        print("小猫爱吃鱼")

    def drink(self):
        print("小猫在喝水")

    def __del__(self):
        print("销毁")

    def __str__(self):
        return "tom"


tom = Cat()
tom.drink()
tom.eat()
print(tom.name)
print(tom)  # 0x000002AB2676BDA0
