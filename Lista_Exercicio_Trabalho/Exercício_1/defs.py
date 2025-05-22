import os
from time import sleep

def primo(num):
    for i in range(2, (num - 1)):
        if num % i == 0:
            return False
    return True


def clear():
    os.system('cls')


def row(tam):
    print('-'*tam)


def valiteInt(msg ='<none>'):
    while True:
        try:
            number = int(input(msg))

        except(ValueError, TypeError):
            os.system('cls')
            print('-'*20)
            print('ERROR. Digite um valor válido')
            sleep(2)
            continue
        except KeyboardInterrupt:
            os.system('cls')
            print('-'*20)
            print('Campo não pode ficar vazio. Tente novamente')
            sleep(2)
            continue
        else:
            return number
        

def title(string = ''):
    clear()
    tam = len(string) + 2
    print('-'*tam)
    print(string.center(tam))
    print('-'*tam)
    sleep(3)


def resultCousins(array = []):
    clear()
    print('Os números primos são: ', end='')
    for item in array:
        print(item, end=' ')

    print()
    row(30)
    sleep(2)
    print(f'Quantidade de primos: {len(array)}')