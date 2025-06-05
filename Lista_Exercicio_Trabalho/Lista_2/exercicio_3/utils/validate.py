from views.terminal import *

def validateName(name: str = ''):
   if name == '':
      return False
   
   if name.isdigit():
      return False
   
   return True


def validateYear(year: str = ''):
   try:
      if not year.isnumeric():
         return False

   except(ValueError, TypeError):
      return False
   
   else:
      if int(year) <= 0:
         return False
      
      if not len(year) == 4:
         return False
      
      return True


def validateOption(option, arrayOptions: list = []):
   try:
      if option.isnumeric():
         option = int(option)

   except:
      return False
   
   else:
      if option not in arrayOptions:
         return False
      
      return True