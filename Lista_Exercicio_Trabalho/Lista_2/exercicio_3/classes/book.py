from views.terminal import *
from utils.validate import *

class Book:
   def __init__(self):
      self.name = ''
      self.yearRelease = 0
      self.status = ''

   def newBook(self):
      clear()
      dash()
      self.name = str(input('Título do livro: ')).strip()
      while not validateName(self.name):
         error('Valor inválido')
         self.name = str(input('Título do livro: ')).strip()

      self.yearRelease = str(input('Ano de lançamento: ')).strip()
      while not validateYear(self.yearRelease):
         error('Valor inválido')
         self.yearRelease = str(input('Ano de lançamento: ')).strip()

      self.status = str(input('Status do livro [1] para novo e [2] para usado: ')).strip()
      while not validateOption(self.status, [1, 2]):
         error('Valor inválido')
         self.status = str(input('Status do livro [1] para novo e [2] para usado: ')).strip()

      if self.status == '1':
         self.status = 'Novo'
      else:
         self.status = 'Usado'

      self.yearRelease = int(self.yearRelease)

      return {
         "name": self.name,
         "yearRelease": self.yearRelease,
         "status": self.status
      }