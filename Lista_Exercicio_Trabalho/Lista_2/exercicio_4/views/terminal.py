from asyncio import sleep
from os import system


def dash(tam: int = 30):
   print('-'*tam)


def clear():
   system('cls')

def error(msg = '<none>'):
   clear()
   dash()
   print(f'Error. {msg}. Tente novamente')
   sleep(2)