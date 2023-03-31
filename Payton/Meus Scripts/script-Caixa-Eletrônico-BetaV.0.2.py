#/////////////////////////////////////// DADOS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
saldo = int(100000)
nome = 'Brunno Fardin de Souza'
idade = '16/06/2007'
instituicao = 'Bradesco'
cpf = '678.***.908-35'
dados='Brunno Fardin De souza\nIstituição: Bradesco\nnascimento: 16/06/2007\nCPF: 678.***.908-35'

#////////////////////////////////////////// PRINTS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
print('\033[01;34m='*60)
print('\033[m               CAIXA ELETRÔNICO')
print('\033[01;34m='*60)
print('   \033[m              MENU-OPERAÇÕES')
print('\033[01;34m='*60)
#/////////////////////////////////////////////// OPERAÇÕES \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
opcao1=print('\033[01;34m1. Consulta saldo')
opcao2=print('2. Consulta dados')
opcao3=print('3. Realizar transferência')
opcao4=print('4. Saque\033[m ')
print('\033[01;34m='*60)
opcaodesejada=int(input('\033[mDigite o número da opção desejada: '))
print('\033[01;34m='*60)

#///////////////////////////////////////////// config operaçoes \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
if opcaodesejada == 1:
    print('Seu saldo atual é {}R$'.format(saldo))
    for c in range(0, 99999999999999999):
        x = str(input('Digite X para voltar ao menu inicial:'))
        print('\033[01;34m=' * 60)
        print('\033[m               MENU-OPERAÇÕES')
        print('\033[01;34m=' * 60)
        if x == x:
            opcao1 = print('\033[01;34m1. Consulta saldo')
            opcao2 = print('2. Consulta dados')
            opcao3 = print('3. Realizar transferência')
            opcao4 = print('4. Saque\033[m ')
            print('\033[01;34m=' * 60)
            opcaodesejada = int(input('\033[mDigite o número da opção desejada: '))
            print('\033[01;34m=' * 60)
            if opcaodesejada == 1:
                print('Seu saldo atuel é de ${}'.format(saldopossaque))
            if opcaodesejada == 2:
                print(dados)
            if opcaodesejada == 3:
                quem = str(input('Para quem deseja transferir: '))
            if opcaodesejada == 4:
                print('Seu saldo atual é ${}'.format(saldo))
                saque = float(input('Quanto você deseja sacar $: '))
                saldo = 100000
                saque = saldo - saque
                saldopossaque = saque
                print('Seu saldo atual é ${}'.format(saldopossaque))
                if saque > saldo:
                    print('Você não possui essa quantia')
                else:
                    print('Saque efetuado com sucesso.Valor anterior era de ${} e o valor atual é de ${}'.format(saldo,saldopossaque))
if opcaodesejada == 2:
    print(dados)
    for c in range(0, 99999999999999999):
        x = str(input('Digite X para voltar ao menu inicial:'))
        print('\033[01;34m=' * 60)
        print(' \033[m              MENU-OPERAÇÕES')
        print('\033[01;34m=' * 60)
        if x == x:
            opcao1 = print('\033[01;34m1. Consulta saldo')
            opcao2 = print('2. Consulta dados')
            opcao3 = print('3. Realizar transferência')
            opcao4 = print('4. Saque\033[m ')
            print('\033[01;34m=' * 60)
            opcaodesejada = int(input('\033[mDigite o número da opção desejada: '))
            print('\033[01;34m=' * 60)
            if opcaodesejada == 1:
                print('\033[mSeu saldo atual é de ${}'.format(saldopossaque))
            if opcaodesejada == 2:
                print(dados)
            if opcaodesejada == 3:
                quem = str(input('Para quem deseja transferir: '))
            if opcaodesejada == 4:
                print('Seu saldo atual é ${}'.format(saldo))
                saque = float(input('Quanto você deseja sacar $: '))
                saldo = 100000
                saque = saldo - saque
                saldopossaque = saque
                print('Seu saldo atual é ${}'.format(saldopossaque))
                if saque > saldo:
                    print('Você não possui essa quantia')
                else:
                    print('Saque efetuado com sucesso.Valor anterior era de ${} e o valor atual é de ${}'.format(saldo,
                                                                                                                 saldopossaque))

if opcaodesejada == 3:
    quem = str(input('Para quem deseja transferir: '))
    for c in range(0, 99999999999999999):
        x = str(input('Digite X para voltar ao menu inicial:'))
        print('=' * 60)
        print('               MENU-OPERAÇÕES')
        print('=' * 60)
        if x == x:
            opcao1 = print('\033[01;34m1. Consulta saldo')
            opcao2 = print('2. Consulta dados')
            opcao3 = print('3. Realizar transferência')
            opcao4 = print('4. Saque\033m ')
            print('\033[01;34m=' * 60)
            opcaodesejada = int(input('\033[mDigite o número da opção desejada: '))
            print('\033[01;34m=' * 60)
            if opcaodesejada == 1:
                print('\033[mSeu saldo atual é de ${}'.format(saldopossaque))
            if opcaodesejada == 2:
                print(dados)
            if opcaodesejada == 3:
                quem = str(input('Para quem deseja transferir: '))
            if opcaodesejada == 4:
                print('Seu saldo atual é ${}'.format(saldo))
                saque = float(input('Quanto você deseja sacar $: '))
                saldo = 100000
                saque = saldo - saque
                saldopossaque = saque
                print('Seu saldo atual é ${}'.format(saldopossaque))
                if saque > saldo:
                    print('Você não possui essa quantia')
                else:
                    print('Saque efetuado com sucesso.Valor anterior era de ${} e o valor atual é de ${}'.format(saldo, saldopossaque))

if opcaodesejada == 4:
    print('Seu saldo atual é ${}'.format(saldo))
    saque = float(input('Quanto você deseja sacar $: '))
    saldo = 100000
    saque = saldo - saque
    saldopossaque = saque
    print('Seu saldo atual é ${}'.format(saldopossaque))
    if saque>saldo:
        print('Você não possui essa quantia')
    else:
        print('Saque efetuado com sucesso.Valor anterior era de ${} e o valor atual é de ${}'.format(saldo,saldopossaque))
    for c in range(0, 99999999999999999):
        x = str(input('Digite X para voltar ao menu inicial:'))
        print('\033[01;34m=' * 60)
        print(' \033[m              MENU-OPERAÇÕES')
        print('\033[01;34m=' * 60)
        if x == x:
            opcao1 = print('\033[01;34m1. Consulta saldo')
            opcao2 = print('2. Consulta dados')
            opcao3 = print('3. Realizar transferência')
            opcao4 = print('4. Saque\033m')
            print('=' * 60)
            opcaodesejada = int(input('Digite o número da opção desejada: '))
            print('\033[01;34m=' * 60)
            if opcaodesejada == 1:
                print(saldopossaque)
            if opcaodesejada == 2:
                print(dados)
            if opcaodesejada == 3:
                quem = str(input('\033[mPara quem deseja transferir: '))
            if opcaodesejada == 4:
                print('Seu saldo atual é ${}'.format(saldo))
                saque = float(input('Quanto você deseja sacar $: '))
                saldo = 100000
                saque = saldo - saque
                saldopossaque = saque
                print('Seu saldo atual é ${}'.format(saldopossaque))
                if saque > saldo:
                    print('Você não possui essa quantia')
                else:
                    print('Saque efetuado com sucesso.Valor anterior era de ${} e o valor atual é de ${}'.format(saldo,saldopossaque))
