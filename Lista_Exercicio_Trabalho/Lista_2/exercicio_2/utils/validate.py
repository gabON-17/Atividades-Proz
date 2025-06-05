from view.terminal import error, dash, clear, sleep


def validateModel(model: str):
   if model.isdigit():
      return False
   
   if model == '':
      return False

   return True

def validatePlate(plate: str):
   
   if len(plate) != 7:
      return False
      
   if plate == '':
      return False
   
   if plate in r"[^a-zA-Z0-9\s]":
      return False
      
   return True


def validateNumberDays(numberDays: int = 0):
   try:
      numberDays = int(numberDays)
   except:
      return False
   else:
      if numberDays <= 0:
         return False

      return True
   

def getOption(options: list = []):
   while True:
      try:
         clear()
         dash(40)
         option = str(input("Digite a opção [S para sair] e [ENTER] para continuar: ")).strip()
      except:
         clear()
         dash(30)
         error('Opção inválida')
         sleep(2)
         continue
      else:
         if option.upper() in options:
            return option.upper()
         elif option.upper() == 'S':
            return 'S'
         else:
            clear()
            dash(30)
            error('Opção inválida')
            sleep(2)
            continue