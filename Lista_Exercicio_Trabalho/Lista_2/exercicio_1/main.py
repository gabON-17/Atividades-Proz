from classStudent.student import *

classe = list()
goodStudent = {
    "name": 'none',
    "note": 0
}
total = 0

while True:
    student = Student()
    newStudent = student.newStudent()

    classe.append(newStudent)
    
    opc = validateOut()

    if opc:
        break
    else:
        continue

for obj in classe:
    if obj["note"] > goodStudent["note"]:
        goodStudent = obj

    total += obj["note"]

media = total / (len(classe))

finaly(total, media, goodStudent)