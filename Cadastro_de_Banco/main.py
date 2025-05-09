import funcoes
from time import sleep

funcoes.titulo('  BANCO  ')

usuarios = list()
bancos = list()

while True:
    funcoes.linha()
    print()
    print('OPÇÕES: ')
    print('''
 [1] Cadastrar Banco
 [2] Cadastrar Usuário
 [3] Sair do sistema
    ''')

    opc = funcoes.validaInt('Digite sua opção: ')
    funcoes.linha()

    
    if opc == 1:
        banco = funcoes.validaStr('Digite seu banco: ')
        
        bancos.append(banco)
        print(f'Banco {banco} cadastrado com sucesso!')

        sleep(1)
        continue

    elif opc == 2:
        usuario = funcoes.validaStr('Digite seu nome: ')

        bancos.append(usuario)
        print(f'Usuário {usuario} cadastrado com sucesso!')
        
        sleep(1)
        continue

    elif opc == 3:
        print('Saindo... Obrigado por utilizar!')
        break

    else:
        print('ERROR. Digite uma opção entre 1 e 3')
        funcoes.linha()
        continue
