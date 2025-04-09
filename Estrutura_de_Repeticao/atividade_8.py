num = int(input('Numero: '))
seq_2 = num + num
seq_3 = seq_2 + num
print(f'{num} + {num} + {seq_2} + {seq_3}',end=' ')

for c in range(0, 5):
   seq_4 = seq_2 + seq_3
   seq_2 = seq_3
   seq_3 = seq_4

   print(f'+ {seq_4}',end=' ')