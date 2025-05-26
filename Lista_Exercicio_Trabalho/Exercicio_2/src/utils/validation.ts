import readLine from "prompt-sync";
export const request = readLine();


export function getOption(options: Array<number>): number {
  for (let i = 0; i == 0;) {
    try {
      const option: number = Number(request("Digite sua opção: "));

      if (options.includes(option)) {
        return option;
      } else {
        console.log("-------------------------------------------------------");
        console.log("Valor indisponível, favor digite entre as opções certas");
      }
    } catch (erro) {
      if (erro instanceof TypeError) {
        console.log("-----------------");
        throw new Error("Valor inválido");
      }

      if (erro instanceof KeyboardEvent) {
        throw new Error("Campo não pode ficar vazio");
      }
    }
  }
  return -1;
}