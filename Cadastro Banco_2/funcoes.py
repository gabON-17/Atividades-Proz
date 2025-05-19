def linha(tam=20):
    print('-'*tam)


def error(msg):
    msg = str(msg).upper()
    linha()
    print(msg)
    linha()


def mensagemSaida():
    linha()
    print('Obrigado por Utilizar o programa!')
    linha()


def menu_opc3():
    print('Digite uma das opções abaixo: ')
    linha(40)
    print('[1] Para ver Usuários cadastrados')
    print('[2] Para ver Bancos cadastrados')
    linha(40)


def menu_principal():
    print()
    print('CADASTRO DE BANCO')
    linha()
    print('[1] Cadastrar Banco')
    print('[2] Cadastrar cliente')
    print('[3] Ver informações')
    print('[4] Sair')
    linha()
    print()


def pegar_opc(opcs=[]):

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
            elif opc not in opcs:
                error(f'ERROR. Digite somente um valor entre {opcs[0]} a {opcs[-1]}')
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


def verUsuarios(array=[]):
    linha()
    print(f'Total de usuários: {len(array)}')

    for item in array:
        linha()
        print(f'Nome: {item[0]}')
        print(f'Tipo de conta: {item[1]}')
        linha()


def verBancos(array=[]):
    linha()
    print(f'Total de {len(array)} Bancos registrados')
    linha()

    print('Bancos Registrados: ')
    for item in array:
        print(item)
    linha()
