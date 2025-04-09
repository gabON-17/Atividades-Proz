soma_nota = quant_notas = 0

while True:
   nota = int(input('Nota: '))
   if nota < 0:
      break
   else:
      soma_nota += nota
      quant_notas += 1

media = soma_nota / quant_notas

print(f'Media igual a {media}')