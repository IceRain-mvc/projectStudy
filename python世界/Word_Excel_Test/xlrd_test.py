import xlrd
data = xlrd.open_workbook("network_import_template.xlsx")
table = data.sheets()[0]

list = table.row_values(0)

print(list)



