def linha(tamanho=20):
    print('-'*20)

def titulo(str='none'):
    tam = len(str)
    print('='*tam)
    print(str)
    print('='*tam)


def validaInt(msg='<none>'):
    while True:
        try:
            num = int(input(msg))

        except(ValueError, TypeError):
            print('ERROR. Digite um valor válido')
            linha(30)
            continue

        except KeyboardInterrupt:
            print('ERROR. Não deixe o campo vazio')
            linha(30)
            continue

        else:
            return num