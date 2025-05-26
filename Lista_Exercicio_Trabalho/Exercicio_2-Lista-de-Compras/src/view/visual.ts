export function clear(): void {
  console.clear();
}

export function menu(): void {
  clear();
  console.log("--------------------------");
  console.log("[1] Lista de Itens");
  console.log("[2] Lista em ordem Alfabética");
}

export function viewItens(list: Array<string | number>[] = []): void {
  clear();
  for (let item of list) {
    console.log("--------------------------");
    console.log(`Item: ${item[0]}`);
    console.log(`Quant: ${item[1]}`);
    console.log("---------------------------");
  }
}
