from utils.validate import *
from view.view import *

class Student:
    def __init__(self):
        self.name = ''
        self.note = 0

    def newStudent(self):
        clear()
        title('CADASTRO DE ALUNOS')
        print('-------------')
        name = getName('Name: ')
        note = getNote('Nota total: ')
            
        self.name = name
        self.note = note

        return {
            "name": self.name,
            "note": self.note
        }