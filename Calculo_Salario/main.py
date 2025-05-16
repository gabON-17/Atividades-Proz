import function


def main():
    data = function.get_data()
    payment = function.calculate_payment(data[0], data[1], data[2])

    print(f'O pagamento total é igual a: R${payment:.2f}')
main()