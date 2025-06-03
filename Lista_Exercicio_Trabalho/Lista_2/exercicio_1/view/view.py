import os
from time import sleep

def clear():
    os.system('cls')


def title(title = '<none>'):
    tam = len(title) + 2
    clear()
    print('-'*tam)
    print(title)
    print('-'*tam)


def  error(msg = '<error>'):
    clear()
    tam = len(msg) + 4
    print('='*tam)
    print(msg)
    sleep(3)


def menuOpc():
    clear()
    print('--------------------')
    print('[X] Para sair (Se deseja continuar deixe em branco)')


def finaly(notes = 0, media = 0,  student = {}):
    clear()
    print('-'*30)
    print(f'Total de notas: {notes}')
    print(f'Média de notas: {media:.2f}')
    print(f'Melhor aluno: {student["name"]} com a nota igual a {student["note"]}')
