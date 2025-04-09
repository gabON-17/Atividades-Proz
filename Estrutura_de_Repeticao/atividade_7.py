num = int(input('Digite o numero que deseja calcular o fatorial: '))
fatorial = num

for c in range(num-1, 0, -1):
   fatorial *= c
   
print('-'*30)
print(f'Fatorial de {num} = {fatorial}')