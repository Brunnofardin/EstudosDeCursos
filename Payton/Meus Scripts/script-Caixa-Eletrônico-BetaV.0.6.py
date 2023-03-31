import datetime
import time
# ////////////////////////////////////// INICIO \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
c1 = 0
print('\033[01;34m=\033[m' * 40)
print('{:^40}'.format('CAIXA ELETRÔNICO'))

print('\033[01;34m=\033[m' * 40)
print('1. Saldo \n2. Saque\n3. Extrato\n4. Registro\n5. Login ')
print('\033[01;34m=\033[m' * 40)
op = int(input('Digite o n° da op desejada: '))

# /////////////////////////////////////////  VARIAVEIS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
saldo = 0
saque = 0
valores = 0
valor = 0
c = 'c'
d = 0
lista2 = 0
nome = ''
saldo2 = 0
# \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ CONDIÇOES ////////////////////////////////////////////////////////

while c == 'c':

    if op == 1:
        print('\033[01;34m=\033[m' * 40)
        print(f'Seu saldo é \033[01;32m$\033[m{saldo}')
        print('\033[01;34m=\033[m' * 40)
        x = input('Digite X para voltar ao menu inicial: ')
        if x.upper() == 'X':
            print('\033[01;34m=\033[m' * 40)
            print('1. Saldo \n2. Saque\n3. Extrato\n4. Registro\n5. Login ')
            print('\033[01;34m=\033[m' * 40)

            op = int(input('Digite o n° da op desejada: '))
    if op == 2:
        print('\033[01;34m=\033[m' * 40)
        print(f'Seu saldo é \033[31;32m$\033[m{saldo}')
        saque = float(input('Quanto deseja sacar \033[01;32m$\033[m'))
        ced = 50
        total = saque
        totalced = 0
        while saque > saldo:
            print('\033[01;31mVoce não possui essa quantia !!\033[m')
            saque = float(input('Quanto deseja sacar \033[01;32m$\033[m'))
        print('\033[01;34m=\033[m' * 40)
        print(f'Saque efetuado com sucesso. Valor \033[01;32m$\033[m{saque}')
        valores = list()
        valores.append(saque)
        saldo = saldo - saque
        for valor in valores:
            valor = valor
        c1 += 1
        print('\033[01;34m=\033[m' * 40)
        x = input('Digite X para voltar ao menu inicial: ')
        if x.upper() == 'X':
            print('\033[01;34m=\033[m' * 40)
            print('1. Saldo \n2. Saque\n3. Extrato\n4. Registro\n5. Login ')
            print('\033[01;34m=\033[m' * 40)
            op = int(input('Digite o n° da op desejada: '))
    if op == 3:
        print('\033[01;34m=\033[m' * 40)
        #nome = input('Digite seu nome: ')
        print('Estamos analizando suas ações.')
        print('\033[01;34m=\033[m' * 40)
        time.sleep(1)
        print('Aguarde.',end='')
        time.sleep(0.5)
        print('.',end='')
        time.sleep(0.5)
        print('.')
        time.sleep(0.5)
        print('\033[01;34m=\033[m' * 40)
        time.sleep(0.5)
        print(
            f'Olá {nome.capitalize()}\nVocê efetuou {c1} saques.\nUltimo valor sacado foi de ${valor}\n'
            f'Data {datetime.datetime.now().day}/{datetime.datetime.now().month}/{datetime.datetime.now().year}\n'
            f'Horário: {datetime.datetime.now().hour}:{datetime.datetime.now().minute}\nInstituição: BFS')
        print('\033[01;34m=\033[m' * 40)
        x = input('Digite X para voltar ao menu inicial: ')
        if x.upper() == 'X':
            print('\033[01;34m=\033[m' * 40)
            print('1. Saldo \n2. Saque\n3. Extrato\n4. Registro\n5. Login ')
            print('\033[01;34m=\033[m' * 40)
            op = int(input('Digite o n° da op desejada: '))
            print('\033[01;34m=\033[m' * 40)
    if op == 4:
        nome = input('Digite seu nome: ').strip()
        saldo2 = input('Digite seu saldo atual $')
        lista1 = list()
        lista1.append(nome.upper())
        lista2 = list()
        lista2.append(saldo2)
        usuarios = open('nomes.txt','a')
        usuarios.write(f'\n{lista1}')
        saldos = open('saldos.txt', 'a')
        saldos.write(f'\n{lista2}')
        usuarios.close()
        saldos.close()
        print('\033[01;34m=\033[m' * 40)
        print('Seu registro foi efetuado com sucesso.')
        print('\033[01;34m=\033[m' * 40)
        x = input('Digite X para voltar ao menu inicial: ')
        if x.upper() == 'X':
            print('\033[01;34m=\033[m' * 40)
            print('1. Saldo \n2. Saque\n3. Extrato\n4. Registro\n5. Login ')
            print('\033[01;34m=\033[m' * 40)
            op = int(input('Digite o n° da op desejada: '))
    if op == 5:
        print('\033[01;34m=\033[m' * 40)
        nome = input('Digite seu nome: ')
        nomeler = open('nomes.txt','r')
        if nome.upper() in nomeler.read():
            print(f'Olá {nome} é um prazer\nrevê-lo novamente')
            print('Login efetuado com sucesso.')
            if nome.upper() == 'BRUNNO':
                saldo = 100000000000000000000
            if nome.upper() == 'BRENNO':
                saldo = 60000
            if nome.upper() == 'BRENNO RODRIGUES':
                saldo = 60000
            if nome.upper() == 'JOAO':
                saldo = 50000
            if nome.upper() == 'JOÃO':
                saldo = 50000
            if nome.upper() == 'JOÃO GABRIEL':
                saldo = 50000
            if nome.upper() == 'SOUZA':
                saldo = 10000000000000000000000
            if nome.upper() == 'BRUNNO FARDIN DE SOUZA':
                saldo = 10000000000000000000000
        else:
            print('Usuário não identificado.\nRegistre-se e tente novamente')
        print('\033[01;34m=\033[m' * 40)
        x = input('Digite X para voltar ao menu inicial: ')
        if x.upper() == 'X':
            print('\033[01;34m=\033[m' * 40)
            print('1. Saldo \n2. Saque\n3. Extrato\n4. Registro\n5. Login ')
            print('\033[01;34m=\033[m' * 40)
            op = int(input('Digite o n° da op desejada: '))

# //////////////////////////////////////// FINAL \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
