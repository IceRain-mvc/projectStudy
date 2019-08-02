import xlwt
import xlrd
from docx import Document

sn_item = "Manu. Serial Number"
sn_sj_item = "40GE"
cs = "Vendor Name"
tt = "Transceiver Type"

# 初始化列表 装载相应的字段
list_sn = []
list_sn_sj = []
list_cs = []
list_tt = []

# 创建一个新的excel
workbook = xlwt.Workbook(encoding="ascii")
worksheet = workbook.add_sheet("sheet0")


def set_content_into_list():
    """
    设置数据到相应列表中
    :return:
    """
    path = "D:\\test\\test.docx"
    document = Document(path)
    i = 0
    for paragraph in document.paragraphs:
        # 每行所有的文本
        line = paragraph.text
        # 字段中包含sn
        index_sn = line.find(sn_item)
        index_sn_sj = line.find(sn_sj_item)
        index_cs = line.find(cs)
        index_tt = line.find(tt)
        if index_sn != -1:
            # 去空格
            new_line = line.strip()
            # 截取
            find_sn = line.strip()[len(sn_item):len(new_line)]
            # 去除冒号
            new_find_sn = find_sn.strip()[1:len(find_sn)]
            # 添加到列表中
            list_sn.append(new_find_sn)
        if index_sn_sj != -1:
            # 去除左右空格 按照空格分割 取出第0个元素
            new_line_item = line.strip().split(" ")[0]
            list_sn_sj.append(new_line_item)
        if index_cs != -1:
            # 去左右空格
            new_line = line.strip()
            # 截取
            find_cs = new_line[len(sn_item):len(new_line)]
            # 去除冒号
            new_find_sn = find_cs.strip()[1:len(find_cs)]
            # 添加到列表中
            if i % 2 == 0:
                list_cs.append(new_find_sn)
            i += 1
        if index_tt != -1:
            # 去左右空格
            new_line = line.strip()
            # 截取
            find_tt = new_line[len(sn_item):len(new_line)]
            # 去除冒号
            new_find_sn = find_tt.strip()[1:len(find_tt)]
            print(new_find_sn)
            # 添加到列表中
            list_tt.append(new_find_sn)


def set_excel_line_name():
    """
    读取原有内容 向excel插入标题
    :return:
    """
    worksheet.row(0).set_style(xlwt.easyxf('font:height 250;'))

    i = 0
    # 从文件中读取原有的行数据
    list_line_name = xlrd.open_workbook("network_import_template.xlsx").sheets()[0].row_values(0)
    for item in list_line_name:
        worksheet.col(i).width = 256 * 20
        worksheet.write(0, i, item)
        i += 1


def insert_and_save(col, list_content):
    """

    :param col: 插入的行数
    :param list_content:插入的列表
    :return:
    """
    i = 1
    for item in list_content:
        worksheet.write(i, col, item)
        i += 1


def save_file():
    try:
        workbook.save("my excel01.xls")
    except PermissionError as result:
        print(result)
        print("请关闭文件在做操作")
        pass


if __name__ == '__main__':
    # 设置首行名字
    set_excel_line_name()
    # 遍历内容存到列表中
    set_content_into_list()
    # 插入数据到excel中
    insert_and_save(1, list_sn)
    insert_and_save(2, list_sn_sj)
    insert_and_save(5, list_cs)
    insert_and_save(6, list_tt)
    # 保存
    save_file()
