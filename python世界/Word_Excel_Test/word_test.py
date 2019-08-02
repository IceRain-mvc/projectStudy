import docx
import xlwt
from docx import Document

path = "D:\\test\\test.docx"
document = Document(path)
sn = "Manu. Serial Number"

# 初始化列表 装载相应的字段
list_sn = []
# dict_sn = {}

for paragraph in document.paragraphs:
    # 每行所有的文本
    line = paragraph.text
    # 字段中包含sn
    index = line.find(sn)
    if index != -1:
        # 去空格
        new_line = line.strip()
        # 截取
        find_sn = new_line[len(sn):len(new_line)]
        # 去除冒号
        new_find_sn = find_sn.strip()[1:len(find_sn)]
        # 添加到列表中
        list_sn.append(new_find_sn)
        # 插入excel 的sn列中
        # 1,1 1,2 1,6 1,7
# dict_sn = {"list_sn": list_sn}
# 接下来是插入
# 首先是插入到sn
index = 1
for sn in list_sn:
    # 第一项 插入到 1,1
    # 第二项 插入到 2,1

    index += 1
    pass
