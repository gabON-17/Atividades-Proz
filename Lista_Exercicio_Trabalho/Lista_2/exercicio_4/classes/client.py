from utils.validate import *
from views.terminal import *

class Client:
   def __init__(self):
      self.name = ''
      self.valueTotal = ''

   def newClient(self):
      clear()
      dash()
      name = str(input('Digite seu nome: '))
      while not validateName(name):
         clear()
         error('Nome inválido')
         dash(30)
         name = str(input('Digite seu nome: '))

      value = str(input('Digite o valor total gasto: R$'))
      while not validateValue(value):
         clear()
         error('Valor inálido')
         dash(30)
         value = str(input('Digite o valor total gasto: R$'))
    
      self.name = name
      self.valueTotal = float(value)

      clear()
      dash(40)
      print(f'Cliente {self.name} cadastrado com sucesso!')

      return {
         "name": self.name,
         "valueTotal": self.valueTotal
      }
   