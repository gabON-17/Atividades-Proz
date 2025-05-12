import funcoes

def main():
    bancos = list()
    usuarios = list()
    opc = ''
    while True:
        funcoes.menu_principal()
        opc = funcoes.pegar_opc([1, 2, 3, 4])
        if opc == 1:
            banco = funcoes.cadastro_banco()
            bancos.append(banco)
        
        elif opc == 2:
            usuario = funcoes.cadastro_cliente()
            usuarios.append(usuario)

        elif opc == 3:
            funcoes.menu_opc3()
            opc2 = funcoes.pegar_opc([1, 2])

            if opc2 == 1:
                funcoes.verUsuarios(usuarios)

            if opc2 == 2:
                funcoes.verBancos(bancos)
                
        else:
            funcoes.mensagemSaida()
            break       

main()