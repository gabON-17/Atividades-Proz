const readLine = require('prompt-sync')();

const getData = () => {
    let data = []

    for(let i= 2; i > 1;) {
        try {
                console.log('-----------------------------------')
                let hours = Number(readLine('Horas trabalhadas: ')) // Horas trabalhadas
                
                while(isNaN(hours) || hours == '' || hours > 24 || hours < 0) {
                    if (isNaN(hours) || hours > 24 || hours < 0) {
                        console.log(`ERROR. valor ${hours} inválido`)
                        console.log('--------------------------')
                    } else {
                        console.log('ERROR. Campo não pode ficar vazio')
                        console.log('--------------------------')
                    }
                    console.log('-----------------------------------')
                    hours = Number(readLine('Horas trabalhadas: '))
                }

                console.log('-----------------------------------')
                let valueHour = Number(readLine('Valor da hora: ')) // Valor da hora
                
                while(isNaN(valueHour) || valueHour == '') {
                    if (isNaN(valueHour)) {
                        console.log(`ERROR. valor ${valueHour} inválido`)
                        console.log('--------------------------')
                    } else {
                        console.log('ERROR. Campo não pode ficar vazio')
                        console.log('--------------------------')
                    }
                    console.log('-----------------------------------')
                    valueHour = Number(readLine('Horas trabalhadas: '))
                }

                console.log('-----------------------------------')
                let days = Number(readLine('Dias trabalhados: ')) // Dias trabalhados

                while(isNaN(days) || days == '' || days > 31 || days < 0) {
                    if (isNaN(days)) {
                        console.log(`ERROR. valor ${days} inválido`)
                       console.log('--------------------------')
                    } else {
                        console.log('ERROR. Campo não pode ficar vazio')
                       console.log('--------------------------')
                    }
                    console.log('-----------------------------------')
                    days = Number(readLine('Horas trabalhadas: '))
                }

                data.push(hours, valueHour, days)

            } catch(error) {
                console.error(error.message)
                continue

            } finally {
                return(data)
            }
    }
}
    

const payment = (hour=0, valuHour=0, day=0) => {
    return parseFloat((hour * valuHour) * day)
}

const helpPayment = () => {
    console.log('--------------------------------------')
    console.log('\n Esse cálculo foi feito da seguinte forma: ')
    console.log('\n As horas são multiplicadas pelo valor da hora trabalhada.\n Após isso ele multiplica esse valor pela quantidade de dias trabalhados')
    console.log('--------------------------------------')
}


// Código
for(let i= 2; i >1;){
    console.log('\n [1] Calcular Pagamento \n [2] Ajuda \n [3] Sair')
    console.log('--------------------------------------------------')

    let option = Number(readLine('Digite a opção desejada: '))

    if(option == 1) {
        let array = getData() 
        const pay = payment(array[0], array[1], array[2])

        console.log('---------')
        console.log('PAGAMENTO')
        console.log('---------')

        console.log(`R$${pay}`)

    } else if(option == 2) {
        helpPayment()

    } else if(option == 3) {
        console.log('------------------------------')
        console.log('Obrigado por utilizar o programa!')
        break

    } else {
        console.log('Valor digitado inválido. Tente novamente')
        console.log('--------------------------------------')
        continue
    }
}
