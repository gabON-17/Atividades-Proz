def linha(tam=20):
    print('-'*20)


def cadastrarAluno():

    linha()
    print('PREENCHA AS INFORMAÇÕES ABAIXO.')
    linha()
    dados = {}
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
            dados = {
                'nome': name,
                'avaliacao_1': nota1,
                'avaliacao_2': nota2,
                'media': media

            }

            return dados


def mostrarDados(array = 0):
        cont = 1
        
        for aluno in array:
            linha()
            print(f'{cont}° Aluno: ')

        print(f'''
Nome: {aluno['nome']}
Avaliação 1: {aluno['avaliacao_1']}
Avaliação 2: {aluno['avaliacao_2']}
Média: {aluno['media']:.2f}
        ''')

        cont += 1

def main():
    dados = list()
    cont = 1

    for c in range(0, 5):
        aluno = cadastrarAluno()
        dados.append(aluno)

    mostrarDados(dados)
main()