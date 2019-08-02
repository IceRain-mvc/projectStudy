# 程序员  老师  学生


class Person:
    # 类属性  不可以改变
    person_list = [{"name": "zhangsan", "type": 2}, {"name": "lisi", "type": 3}, {"name": "wangwu", "type": 1}]

    def work(self):
        pass

    def eat(self):
        pass

    def search(self, name):
        # 讲传过来的形参 赋值给对象属性
        self.name = name
        for item in Person.person_list:
            if item["name"] == self.name:
                # 返回当前人的所有信息
                return item
        return None

    def __init__(self):
        self.name = ""


class ChengXuYuan(Person):
    def zhai(self):
        pass


class Teacher(Person):
    def yan_su(self):
        pass


class Student(Person):
    def tiao_pi(self):
        pass


# 搜索  1: 程序员 2: 老师  3:学生
# 搜索的结果 1:输出人的信息  2:特有的动作

def input_info():
    # 输入
    xu_hao = 0
    try:
        xu_hao = int(input("请输入想要查找的人:1: 程序员 2: 老师  3:学生"))
    except:
        print("请输入数字")

    if (xu_hao > 3) | (xu_hao < 0):
        exception = Exception("输入数字有误")
        # 抛出异常
        raise exception

    # 判断类型 1 :CHengXuYuan 2: LaoShi

    # 查询: 方法  search()
    person = Person()
    name = input("请输入想要查找的名字:")
    item = person.search(name)
    # 搜索的结果
    if item == None:
        print("无此结果")
    else:
        print(item["name"])
        print(item["type"])

    if xu_hao == 1:
        chengxuyuan = ChengXuYuan()
        chengxuyuan.eat()
        chengxuyuan.work()
        chengxuyuan.zhai()
    elif xu_hao == 2:
        teacher = Teacher()
        teacher.eat()
        teacher.work()
        teacher.yan_su()
    else:
        student = Student()
        student.eat()
        student.work()
        student.tiao_pi()


if __name__ == '__main__':
    try:
        input_info()
    except Exception as result:
        print(result)

    # 数据源
    # person_list = [{"name": "zhangsan", "type": 2}, {"name": "lisi", "type": 3}, {"name": "wangwu", "type": 1}]
