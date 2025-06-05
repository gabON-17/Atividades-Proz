from utils.validate import *
from view.terminal import *

class Car:
   def __init__(self):
      self.model = '';
      self.plate = '';
      self.numberDays = 0;

   def newCar(self):
      clear()
      title('Cadastro de Carro')

      self.model = str(input("Digite o modelo do carro: ")).strip()
      while not validateModel(self.model):
         error('Modelo inválido')
         dash(30)
         self.model = input("Digite o modelo do carro: ")

      self.plate = str(input("Digite a placa do carro: ")).strip()
      while not validatePlate(self.plate):
         error('Placa inválida')
         self.plate = input("Digite a placa do carro: ")

      self.numberDays = str(input("Digite o numero de dias de aluguel: ")).strip()
      while not validateNumberDays(self.numberDays):
         error('Numero de dias inválido')
         self.numberDays = input("Digite o numero de dias de aluguel: ")

      self.numberDays = int(self.numberDays)
      car = {
         'model': self.model,
         'plate': self.plate,
         'numberDays': self.numberDays
      }

      clear()
      dash(30)
      print(f'Carro cadastrado com sucesso!')
      sleep(3)
      return car
   