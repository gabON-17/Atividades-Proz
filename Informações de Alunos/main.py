def linha(tam=20):
    print('-'*20)


def cadastrarAluno():

    linha()
    print('PREENCHA AS INFORMAÇÕES ABAIXO.')
    linha()
    dados = []
    while True:
        try:
            name = str(input('Nome: '))

            nota1 = float(input('Avaliação 1: '))
            nota2 = float(input('Avaliação 2: '))

        except(ValueError, TypeError):
            linha()
            print('valor inválido, favor digite um valor válido')
            linha()
            continue

        except KeyboardInterrupt:
            linha()
            print('Campo não pode ficar vazio')
            linha()
            continue
        
        else:

            media = (nota1 + nota2) / 2

            if media < 6:
                status = False
            else:
                status = True
            dados.append(name, nota1, nota2, media, status)

            return dados


def mostrarDados(array = 0):
        cont = 1
        
        for aluno in array:
            linha()
            print(f'{cont}° Aluno: ')

            print(f'''
 Nome: {aluno[0]}
 Avaliação 1: {aluno[1]}
 Avaliação 2: {aluno[2]}
 Média: {aluno[3]:.2f}
            ''')

            if not aluno[4]:
                print('Situação: Reprovado')

            else:
                print('Situação: Aprovado')

        cont += 1

def main():
    dados = list()
    cont = 1

    for c in range(0, 5):
        aluno = cadastrarAluno()
        dados.append(aluno)

    mostrarDados(dados)
main()