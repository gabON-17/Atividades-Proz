from classes.book import Book
from views.terminal import *
from utils.validate import validateOption
from time import sleep

books = list()
totality = newBooks = 0
oldestBook = {
   "name": "",
   "yearRelease": 0,
   "status": ""
}

while True:
   book = Book()
   book = book.newBook()

   books.append(book)
   totality += 1

   option = str(input('Deseja continuar? [S] para SAIR e [ENTER] para CONTINUAR: ')).upper()
   while not validateOption(option, ['S', '']):
      error('Opção inválida')
      option = str(input('Deseja continuar? [S] para SAIR e [ENTER] para CONTINUAR: '))

   if option == 'S':
      break


for book in books:
   if oldestBook["yearRelease"] == 0:
      oldestBook = book

   elif book["yearRelease"] < oldestBook["yearRelease"]:
      oldestBook = book

   if book["status"] == 'Novo':
      newBooks += 1


clear()
dash(40)

print(f'Total de livros cadastrados: {len(books)}')
print(f'Total de livros novos: {newBooks}')
print(f'Livro mais antigo cadastrado: {oldestBook["name"]}, feito em {oldestBook["yearRelease"]}')
