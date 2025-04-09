n1 = int(input('1º Valor: '))
n2 = int(input('2º Valor: '))

if n1 > n2:
   print(f'Os numeros pares entre o intervalo {n1} e {n2} sao: ')
   for c in range(n2, n1):
      if c % 2 == 0:
         print(c, end=' ')
else:
   print(f'Os numeros pares entre o intervalo {n1} e {n2} sao: ')
   for c in range(n1, n2):
      if c % 2 == 0:
         print(c, end=' ')