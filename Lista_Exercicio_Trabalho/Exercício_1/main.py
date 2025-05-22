from defs import clear, primo, sleep, title, valiteInt, row, resultCousins

cousins = list()
title('CALCULADOR DE NÚMEROS PRIMOS')
clear()
row(30)
option = number = valiteInt('Digite a quantidade de primo que deseja saber: ')

for i in range(1, (number + 1)):
    status = primo(i)
    if status:
        cousins.append(i)

resultCousins(cousins)