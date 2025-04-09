cont = resul = 0
nums = list()
while cont < 5:
   num = int(input('Digite um número: '))

   resul += num
   cont += 1
   nums.append(num)
   if cont == 5:
      nums.append(resul)

print('-'*30)
print(f'{nums[0]} + {nums[1]} + {nums[2]} + {nums[3]} + {nums[4]} = {nums[5]}')
print('-'*30)
