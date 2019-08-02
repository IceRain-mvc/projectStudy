import xlwt

workbook = xlwt.Workbook(encoding="ascii")
worksheet = workbook.add_sheet("My Worksheet")
worksheet.write(0, 0, "Row 0 , Column 0 Value")
workbook.save("my excel.xls")


