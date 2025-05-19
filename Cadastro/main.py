import funcoes
from time import sleep

usuarios = list()

funcoes.titulo(' Cadastro de Usuários ')
print()

while True:
    print('''
Digite uma das opções para continuar: 
 [1] Cadastrar Usuário
 [2] Ver Usuários Cadastrados
 [3] Sair do Programa
    ''')
    opc = funcoes.validaInt('Digite sua opção: ')
    print()
    sleep(1)

    if opc == 1:
        funcoes.titulo(' CADASTRO DE USUÁRIOS ')
        pessoa = list()
        nome = str(input('Nome:'))
        idade = funcoes.validaInt('Idade: ')
        tel = funcoes.validaInt('Telefone: ')

        pessoa.append(nome)
        pessoa.append(idade)
        pessoa.append(tel)

        usuarios.append(pessoa)

        funcoes.linha()
        print(f'Usuário {nome} cadastrado com sucesso!')
        funcoes.linha()

    elif opc == 2:
        cont = 1
        funcoes.titulo(' USUÁRIOS ')
        for p in usuarios:

            print(f'Nome: {p[0]}')
            print(f'Idade: {p[1]}')
            print(f'Telefone: {p[2]}')
            funcoes.linha(30)

        print(f'Quantidade de Usuários: {len(usuarios)}')
        funcoes.linha()

    elif opc == 3:
        sleep(3)
        funcoes.titulo('Sistema encerrado com sucesso!')
        break

    else:
        print('ERROR. Valor digitado inválido. Favor digite entre 1 e 3')

    