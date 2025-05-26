export function moneyNote(num: number): Array<number> {
   let value: number = num
   let ced_100: number = Math.floor(value / 100)
   value %= 100
   let ced_50: number = Math.floor(value / 50)
   value %= 50
   let ced_20: number = Math.floor(value / 20)
   value %= 20
   let ced_10: number = Math.floor(value / 10)
   value %= 10
   let ced_2: number = Math.floor(value / 2)
   value %= 2
   
   return [ced_100, ced_50, ced_20, ced_10, ced_2]
}