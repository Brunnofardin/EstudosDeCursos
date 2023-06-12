import datetime
import time

saldo = 50
c1 = 0
print('\033[01;34m=\033[m' * 40)
print('{:^40}'.format('CAIXA ELETRÔNICO'))

print('\033[01;34m=\033[m' * 40)
print('1. Saldo \n2. Saque\n3. Extrato ')
print('\033[01;34m=\033[m' * 40)
op = int(input('Digite o n° da op desejada: '))
saque = 0
valores = 0
c = 'c'
while c == 'c':
    if op == 1:
        print('\033[01;34m=\033[m' * 40)
        print(f'Seu saldo é \033[01;32m$\033[m{saldo}')
        print('\033[01;34m=\033[m' * 40)
        x = input('Digite X para voltar ao menu inicial: ')
        if x.upper() == 'X':
            print('\033[01;34m=\033[m' * 40)
            print('1. Saldo \n2. Saque\n3. Extrato ')
            print('\033[01;34m=\033[m' * 40)

            op = int(input('Digite o n° da op desejada: '))
    if op == 2:
        print('\033[01;34m=\033[m' * 40)
        print(f'Seu saldo é \033[31;32m$\033[m{saldo}')
        saque = float(input('Quanto deseja sacar \033[01;32m$\033[m'))
        while saque > saldo:
            print('\033[01;31mVoce não possui essa quantia !!\033[m')
            saque = float(input('Quanto deseja sacar \033[01;32m$\033[m'))
        print('\033[01;34m=\033[m' * 40)
        print(f'Saque efetuado com sucesso. Valor \033[01;32m$\033[m{saque}')
        valores = list()
        valores.append(saque)
        saldo = saldo - saque
        c1 += 1
        print('\033[01;34m=\033[m' * 40)
        x = input('Digite X para voltar ao menu inicial: ')
        if x.upper() == 'X':
            print('\033[01;34m=\033[m' * 40)
            print('1. Saldo \n2. Saque\n3. Extrato ')
            print('\033[01;34m=\033[m' * 40)
            op = int(input('Digite o n° da op desejada: '))
    if op == 3:
        print('\033[01;34m=\033[m' * 40)
        nome = input('Digite seu nome: ')
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
            f'Olá {nome.capitalize()}\nVocê efetuou {c1} saques.\nUltimo valor sacado foi de ${valores}.\n'
            f'Data {datetime.datetime.now().day}/{datetime.datetime.now().month}/{datetime.datetime.now().year}\n'
            f'Horário: {datetime.datetime.now().hour}:{datetime.datetime.now().minute}\nInstituição: BFS')
        print('\033[01;34m=\033[m' * 40)
        x = input('Digite X para voltar ao menu inicial: ')
        if x.upper() == 'X':
            print('\033[01;34m=\033[m' * 40)
            print('1. Saldo \n2. Saque\n3. Extrato ')
            print('\033[01;34m=\033[m' * 40)

            op = int(input('Digite o n° da op desejada: '))
