def get_data():
    while True:
        try:
            hours = int(input("Digite a quantidade de horas trabalhadas por dia: "))
            if hours < 0 or hours > 24:
                print("O número de horas não pode ser negativo ou maior que 24.")
                continue

            valueHour = float(input("Digite o valor da hora trabalhada: "))
            if valueHour < 0 or valueHour == 0:
                print('O valor da hora trabalhada não pode ser negativo ou igual a 0.')
                continue

            days = int(input("Digite a quantidade de dias trabalhados: "))
            if days < 0 or days > 31:
                print('O número de dias não pode ser negativo ou maior que 31.')
                continue
            
        
        except(ValueError, TypeError):
            print("Por favor, digite um número inteiro válido.")

        except KeyboardInterrupt:
            print("Operação cancelada pelo usuário.")
            return None
        
        else:
           return [hours, valueHour, days]


def calculate_payment(hours, valueHour, days):
    calcule = (hours * valueHour) * days
    return calcule