# Requisitos e Instruções para Rodar o Código
___- SIGA ESSE PROCESSO EM CADA EXERCÍCIO INDIVIDUALMENTE___
- É necessário já ter o ___NODE.JS v20.19.0___ e o ___NPM v10.8.2___ ou instalador de preferência
### Bibliotecas necesárias
- Instale:  
```NPM
npm i prompt-sync
npm i typescript
```
### Após instalação
`tsc --init`   Isso vai iniciar um arquivo de configuração do TypeScript chamado tsconfig.json

### Configurações
 - Procure a opção ___outDir___ no arquivo ___tsconfig.json___
 - Faça:
```TS
{
  outDir: "./dist"
}
```
### Rodando o código
- Apos isso, rode no terminal:  


`tsc`

Isso gerará uma pasta _/dist_ com os arquivos de typescript convertidos em javascript


- Agora é só rodar com o seguinte comando no terminal:
  `node dist/main.js`
