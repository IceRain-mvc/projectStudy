def show_menu():
    ''' 显示 菜单'''

    print("*" * 50)
    print("欢迎使用【名片管理系统】V1.0")
    print("1. 新建名片")
    print("2. 显示全部")
    print("3. 查询名片")
    print("")
    print("0. 退出系统")
    print("*" * 50)


# if __name__ == '__main__':
#     show_menu()

# 全局变量
card_list = []


def create_card():
    # 局部变量
    num = 10
    name = input("请输入姓名:")
    age = input("请输入年龄:")
    card_entity = {"name": name, "age": age}
    card_list.append(card_entity)
    print(card_list)


def show_card():
    ''' 查询全部'''
    if len(card_list) == 0:
        print("列表中没有值")
        pass

    for word in ["姓名", "年龄"]:
        # \t 8个空格  end="" 不让换行
        print(word + "\t\t", end="")

    print("")
    print("=" * 50)

    for entity in card_list:
        # entity {}
        print("%s\t\t%s" % (entity["name"], entity["age"]))
    print("")

