import datetime
# \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ Valores ///////////////////////////////////////////////////////
saldo = 50000

# \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ PRINT MENU OP ////////////////////////////////////////////////////////
print('\033[01;34m=\033[m'*45)
print('{:^45}'.format('BANCO BFS'))
print('\033[01;34m=\033[m'*45)
print('1 Saldo')
print('2 Saque')
print('3 Extrato')
print('\033[01;34m=\033[m'*45)
op = int(input('Digite o n° da op desejada: '))
c = 0
saque = 0
contagem = 0
zero = 0
# \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ CONDIÇÕES////////////////////////////////////////////////
while c == 0:
    if op == 1:
        print('\033[01;34m=\033[m' * 45)
        print(f'seu saldo é ${saldo - saque}:')
        print('\033[01;34m=\033[m' * 45)
        x = input('Digite X para voltar ao menu inicial: ')
        if x.upper() == 'X':
            print('\033[01;34m=\033[m' * 45)
            print('1 Saldo')
            print('2 Saque')
            print('3 Extrato')
            print('\033[01;34m=\033[m' * 45)
            op = int(input('Digite o n° da op desejada: '))
            print('\033[01;34m=\033[m' * 45)
    if op == 2:
        saque = float(input('Quanto deseja sacar \033[01;32m$'))
        while saque > saldo:
            print('\033[01;31mVocê não possui essa quantia!!')
            saque = float(input('\033[mQuanto deseja sacar \033[01;32m$\033[m'))
        print(f'Saque efetuado com sucesso. ${saque}')
        print('\033[01;34m=\033[m' * 45)
        x = input('Digite X para voltar ao menu inicial: ')
        if x.upper() == 'X':
            print('\033[01;34m=\033[m' * 45)
            print('1 Saldo')
            print('2 Saque')
            print('3 Extrato')
            print('\033[01;34m=\033[m' * 45)
            op = int(input('Digite o n° da op desejada: '))
    if op == 3:
        print('\033[01;34m=\033[m' * 45)
        print('{:^45}'.format('EXTRATO'))
        print(f'Hoje dia 19/03/23 foram efetuados {contagem} saques\nIstituição: BFS\n')
        print('\033[01;34m=\033[m' * 45)
        x = input('Digite X para voltar ao menu inicial: ')
        if x.upper() == 'X':
            print('\033[01;34m=\033[m' * 45)
            print('1 Saldo')
            print('2 Saque')
            print('3 Extrato')
            print('\033[01;34m=\033[m' * 45)
            op = int(input('Digite o n° da op desejada: '))


