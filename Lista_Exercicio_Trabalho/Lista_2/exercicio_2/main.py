from classes.car import Car
from utils.validate import getOption
from view.terminal import clear, dash

garage = list()
addDays = 0
moreDays = {
   'model': '',
   'plate': '',
   'numberDays': 0
}

while True:
   car = Car()

   newCar = car.newCar()

   garage.append(newCar)

   option = getOption(['S', ''])

   if option == 'S':
      break
   elif option == '':
      continue

for car in garage:
   addDays += car['numberDays']
   if car['numberDays'] > moreDays['numberDays']:
      moreDays = car

clear()
dash(50)
print(f'O carro mais alugado foi o {moreDays["model"].upper()} com a placa {moreDays["plate"].upper()} e foi alugado por {moreDays["numberDays"]} dias')
print(f'O total de dias alugados foi de {addDays} dias')
print(f'O total de carros alugados foi de {len(garage)}')
