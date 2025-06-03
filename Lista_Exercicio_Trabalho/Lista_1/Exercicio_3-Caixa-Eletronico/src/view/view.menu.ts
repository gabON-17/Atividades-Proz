export const title = (text: string): void => {
    console.log('-----------------');
    console.log(text);
    console.log('-----------------')
}


export const menu = (): any => {
    title(' CAIXA ELETRONICO')
    console.log('-----------------')
    console.log('[1] Criar conta')
    console.log('[2] Fazer login')
    console.log('[3] Sair')
    console.log('-----------------')
}


export const clear = (): void => {
    console.clear()
}