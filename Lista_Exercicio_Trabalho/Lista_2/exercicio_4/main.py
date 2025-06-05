from classes.client import *
from views.terminal import *

clients = list()
totalAmountValue = 0
clientGreateValue = {
   "name": "",
   "valueTotal": 0
}

while True:
   client = Client()

   newClient = client.newClient()

   clients.append(newClient)
   
   clear()
   dash()
   print('[X]     PARA SAIR')
   print('[ENTER] PARA CONTINUAR')

   opc = str(input()).upper()
   while not validateOption(opc, ['X', '']):
      clear()
      error('Opção inválida')
      dash()
      
      print('[X]     PARA SAIR')
      print('[ENTER] PARA CONTINUAR')
      opc = str(input())

   if opc == 'X':
      break

   else: continue

for item in clients:
   if item["valueTotal"] > clientGreateValue["valueTotal"]:
      clientGreateValue = item

   totalAmountValue += float(item["valueTotal"])

clear()
dash(40)
print(f'Valor gasto por todos os cliente: R${totalAmountValue:.2f}')
print(f'Cliente {clientGreateValue["name"]} foi o que mais gastou, com um total de R${clientGreateValue["valueTotal"]:.2f} gastos')
