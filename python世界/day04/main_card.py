import tools_card

while True:
    tools_card.show_menu()
    num = input("请选择想要进行的操作:")
    if num == "1":
        tools_card.create_card()
    elif num == "2":
        print("你选择的是 查询全部")
        tools_card.show_card()
