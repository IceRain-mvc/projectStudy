class Person:
    # 属性和方法  类属性  内存的分配 静态空间
    # 网址 不改变
    name = ""
    age = ""

    def __new__(cls, *args, **kwargs):
        """
        :param args:
        :param kwargs:
        :return:
        """
        print("__new__创建对象了1!!!")
        pass

    def __init__(self):
        """
             初始化的时候调用 __new__ 之后就会调用
             初始值 : 声明一些东西 list= []
             """
        print("初始化")
        # 如果在这个方法里面声明属性 就是 对象属性
        self.address = "北京市 朝阳区"

    def __del__(self):
        print("销毁")
        # 类里面的操作执行完了 自动调用
        pass

    def __str__(self):
        # 不写这个方法 打印的是地址 重写了 能看得见的值
        pass

    def get_name(self, name):
        # self  Person 对象
        self.name = name
        print(self.address)
        pass
