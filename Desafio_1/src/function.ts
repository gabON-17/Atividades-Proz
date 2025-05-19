import readLine from "prompt-sync";
const request = readLine();

export const getData = (): Array<number> => {
  let data: Array<number> = [];
  for (let i = 1; i > 0; ) {
    try {
      console.log("-----------------------");
      let hours: number = Number(request("Horas trabalhadas: "));

      while (isNaN(hours) || hours > 24 || hours <= 0) {
        if (isNaN(hours)) {
          console.log("-----------------------------");
          console.log("ERROR. Digite um valor válido");
        } else if (hours > 24) {
          console.log("------------------------------------");
          console.log("ERROR. Digite uma valor abaixo de 24");
        } else if (hours <= 0) {
          console.log(
            "----------------------------------------------------------"
          );
          console.log(
            "ERROR. O valor não pode ser 0 ou negativo, tente novamente"
          );
        }
        hours = Number(request("Horas trabalhadas: "));
      }

      console.log("-----------------------");
      let valueHour: number = Number(request("Valor da hora: R$"));

      while (isNaN(valueHour) || valueHour <= 0) {
        if (isNaN(valueHour)) {
          console.log("-----------------------------");
          console.log("ERROR. Digite um valor válido");
        } else if (valueHour <= 0) {
          console.log(
            "----------------------------------------------------------"
          );
          console.log(
            "ERROR. O valor não pode ser 0 ou negativo, tente novamente"
          );
        }
        valueHour = Number(request("Valor da hora: R$"));
      }

      console.log("-----------------------");
      let days: number = Number(request("Dias trabalhados: "));

      while (isNaN(days) || days > 31 || days <= 0) {
        if (isNaN(days)) {
          console.log("-----------------------------");
          console.log("ERROR. Digite um valor válido");
        } else if (days > 31) {
          console.log("------------------------------------");
          console.log("ERROR. Digite uma valor abaixo de 31");
        } else if (days <= 0) {
          console.log(
            "----------------------------------------------------------"
          );
          console.log(
            "ERROR. O valor não pode ser 0 ou negativo, tente novamente"
          );
        }
        days = Number(request("Dias trabalhados: "));
      }

      data.push(hours, valueHour, days);
    } catch (erro) {
      console.log(erro);
    } finally {
      break;
    }
  }
  return data;
};

export const payment = (
  hour: number = 0,
  valurHour: number = 0,
  days: number = 0
): number => {
  return hour * valurHour * days;
};

export const help = (): void => {
  console.log("--------------------------------------");
  console.log("\n Esse cálculo foi feito da seguinte forma: ");
  console.log(
    "\n As horas são multiplicadas pelo valor da hora trabalhada.\n Após isso ele multiplica esse valor pela quantidade de dias trabalhados"
  );
  console.log("--------------------------------------");
};

export const menu = (): void => {
  console.log("-------------------------");
  console.log("\n [1] Calcular Pagamento \n [2] Ajuda \n [3] Sair");
  console.log("-------------------------");
};

export const getOption = (
  message: string = "<none>",
  numbers: Array<number>
): number => {
  let option: number = Number(request(message));

  while (option! in numbers) {
    console.log("------------------------");
    if (option < 0 || option == 0) {
      console.log(
        "ERROR. Número não pode ser menor ou igual a 0. Tente novamente"
      );
    } else {
        break
    }
    console.log(numbers[-1])
    option = Number(request(message));
  }

  return option;
};
