def linha(tam=20):
    print('-'*tam)


def error(msg):
    msg = str(msg).upper()
    linha()
    print(msg)
    linha()


def menu():
    print()
    print('CADASTRO DE BANCO')
    linha()
    print('[1] Cadastrar Banco')
    print('[2] Cadastrar cliente')
    print('[3] Ver informações')
    print('[4] Sair')
    linha()
    print()


def pegar_opc():
    menu()
    while True:
        try:
            opc = int(input('Digite sua opção: '))

        except(ValueError, TypeError):
            error('ERROR. So é válido números, tente novamente')
            continue
        
        except KeyboardInterrupt:
            error('Campo não pode ficar vazio')
            continue

        else:
            if opc == '':
                error('ERROR. O valor não pode ser inválido')
                continue
            elif opc not in [1, 2, 3, 4]:
                error('ERROR. Digite somente um valor entre 1 a 4')
                continue
            else:
                return opc


def cadastro_banco():
    linha(40)
    print('Digite o nome do seu banco no campo abaixo:')
    
    while True:
        name_banco = str(input('Banco: '))

        if name_banco == '':
            error('campo não pode ficar vazio')
            continue

        elif name_banco.isnumeric():
            error('campo não aceita números, tente novamente')
            continue
        else:
            linha()
            print(f'Banco {name_banco} cadastrado com sucesso!')
            break

    return name_banco


def cadastro_cliente():
    dados = list()
    cliente = ''
    conta = ''

    print()
    linha()
    print('Preencha as seguintes informações')

    while True:

        cliente = str(input('Nome: '))

        if cliente == '':
            error('valor não pode ficar vazio. Tente novamente')
            continue
        conta = str(input('Tipo de conta: ')).lower()
        linha()

        
        
        if conta not in ['poupança', 'corrente']:
            error('ERROR. Digite uma opção válida (Corrente ou poupança).')
            continue
        
        else:
            dados.append(cliente)
            dados.append(conta)

            print(f'Conta do tipo {dados[1]} no nome de {dados[0]} cadastrado com sucesso!')
            return dados


def main():
    banco = ''
    usuario = ''
    opc = ''

    opc = pegar_opc()
    if opc == 1:
        banco = cadastro_banco()
    
    elif opc == 2:
        usuario = cadastro_cliente()


main()