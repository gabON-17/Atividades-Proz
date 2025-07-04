def getValues(arrayValues: list):
    values = list()
    for value in arrayValues:
        temp = {
            'name': value[0],
            'email': value[1],
            'course': value[2],
            'date_register': value[4],
            'hours_course': value[3],
            'status': value[5]
        }

        values.append(temp)
    return values


def showTable(object):
    row(40)
    print(f'''
Nome Aluno:  {object['name']}
Email Aluno: {object['email']}
Curso: {object['course']}
Data de Início: {object['date_register']}
Carga Horária: {object['hours_course']}
Status: {object['status']}
''')
    row(40)


def row(tam):
    print('-'*tam)


def title(title = ''):
    tam = len(title) + 2
    row(tam)
    print(title.center(tam))
    row(tam)
