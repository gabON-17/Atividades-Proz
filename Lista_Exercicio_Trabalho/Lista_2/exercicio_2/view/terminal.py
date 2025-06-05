from time import sleep
from os import system

def dash(tam: int = 0):
   print('-' * tam)

def title(title: str = ''):
   dash(len(title) + 4)
   print(f'  {title}  ')
   dash(len(title) + 4)

def clear():

   system('cls')

def error(message: str = ''):
   clear()
   dash(30)
   print(f'Erro. {message}. Tente novamente.')
   sleep(3)
