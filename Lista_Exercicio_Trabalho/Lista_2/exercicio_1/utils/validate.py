from view.view import *

def getNote(msg = '<none>'):
    while True:
        try:
            num = str(input(msg))
            
            if(not num.isdigit()):
                error('Valor digitado inválido. Tente novamente')
                continue

            else:
                num = int(num)
                if (num <= 0):
                    error('Digite um valor acima de 0')
                    continue


        except(ValueError, TypeError):
            error('Valor digitado inválido. Tente novamente')
            continue

        except(KeyboardInterrupt):
            error('Campo não pode ficar vazio')
            continue

        else:
            return int(num)
        

def getName(msg = '<none>'):
    while True:
        try:
            name = str(input(msg)).strip()

            if not name.isalpha():
                error('So é válido letras. Tente novamente')
                continue

            elif name == '':
                error('Campo não pode ficar vazio. Tente novamente')
                continue

        except:
            error('Error inesperado. Tente novamente')
            continue

        else:
            return name


def validateOut(opc = None):
    '''
    Retorna FALSE se vai continuar e TRUE se for parar
    '''
    while True:
        menuOpc()

        opc = str(input()).upper()

        if opc =='X':
            return True
        
        elif opc == '':
            return False

        else:
            error('Opção inválida. Tente novamente')
            
        
