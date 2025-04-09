num = int(input('Digite um numero: '))
primo = False

for c in range (2, num):
   if num % c == 0:
      primo = False
      break

   else:
      primo = True
      

if primo == True or num == 2:
   print('E primo')
elif num == 0:
   print('Numero 0')
else:
   print('Nao e primo')
