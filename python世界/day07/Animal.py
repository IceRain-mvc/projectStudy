# 基类 : 父类
class Animal:
    def eat(self):
        print("吃")
        pass

    def run(self):
        print("跑")
        pass

    def sleep(self):
        print("睡觉")
        pass

    def drink(self):
        print("喝水")
        pass


class Dog(Animal):
    # self : Dog的self
    def bark(self):
        print("汪汪叫")
    def __shenghaizi__(self):
        print("父类狗的生孩子方法")
    def __init__(self):
        print("父类狗的内置方法")


# Dog的对象
xiaobai = Dog()
xiaobai.eat()
xiaobai.run()
xiaobai.sleep()
xiaobai.drink()
xiaobai.bark()


class Cat(Animal):
    # self : Dog的self
    def catch(self):
        print("抓老鼠")


class XiaoTIanQuan(Dog):
    def bark(self):
        # 子类 bark()方法 父类中也存在 才可以使用super() : 父类的对象
        super().bark()
        print("惊天动地的叫")
        pass


xiaotianquan = XiaoTIanQuan()
# 类的传递性
# 重写父类的方法

# 覆盖
# 扩展
xiaotianquan.bark()
xiaotianquan = XiaoTIanQuan()
# 类的传递性
# 重写父类的方法

# 覆盖
# 扩展
xiaotianquan.bark()




class BiTeQuan(Dog):
    def bark(self):
        super().bark()
        print("惊天动地的叫")
        # py2需要 这样写 调用父类的私有方法和内置方法
        Dog.__shenghaizi__(self)
        pass


bite = BiTeQuan()
# py3直接这样写
bite.__shenghaizi__()
bite.__init__()


