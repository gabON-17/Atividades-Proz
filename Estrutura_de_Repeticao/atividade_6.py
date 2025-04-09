from random import randint
cont = 1
sort = randint(1, 10)

print('-'*20)
print('Chute um numero de 1 a 10')

while True:
   tentativa = int(input('Chute: '))

   if tentativa > sort:
      print('O numero e menor!')
      print('-'*20)
      cont += 1

   elif tentativa < sort:
      print('O numero e maior!')
      print('-'*20)
      cont += 1

   else:
      print('-'*20)
      print(f'Tentativas = {cont}')
      print(f'Acertou! O numero era {sort}')
      break