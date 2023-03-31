print('\033[03;34m=\033[m'*40)
print('1 Registro\n2 Login')
print('\033[03;34m=\033[m'*40)
opcao = int(input('Digite o n° da op desejada: '))
print('\033[03;34m=\033[m'*40)
d = 0
login = ' '
saldo = 0
while d == 0:
    print('\033[03;34m=\033[m' * 40)
    print('1 Registro\n2 Login')
    print('\033[03;34m=\033[m' * 40)
    opcaos = int(input('Digite o n° da op desejada: '))
    print('\033[03;34m=\033[m' * 40)
    d = 0
    login = ' '
    if opcaos == 1:
        nome = input('Digite seu primeiro nome: ')
        nomes = open('nomes.txt', 'a')
        nomes.write(f'\n {nome.upper()}')
        print('\033[03;34m=\033[m' * 40)
        x = input('Digite X para voltar ao menu inicial: ')
        if x.upper() == 'X':
            nomes.close()
            print('\033[03;34m=\033[m' * 40)
            print('1 Registro\n2 Login')
            print('\033[03;34m=\033[m' * 40)
            opcao = int(input('Digite o n° da op desejada: '))
            print('\033[03;34m=\033[m' * 40)
    if opcaos == 2:
        nomeler = open('nomes.txt', 'r')
        login = input('Digite seu nome: ')
        if login.upper() in nomeler.read():
            print('\033[03;34m=\033[m' * 40)
            print(f'Olá {login} é um prazer reve-lo')
            print(f'Seu saldo é {saldo} ')
            print('\033[03;34m=\033[m' * 40)
        if login.upper() == 'BRENNO':
            saldo = 50000
        if login.upper() == 'BRUNNO':
            saldo = 1000000
        if login.upper() == 'JOÃO':
            saldo = 10000
        nomeler.close()
        x = input('Digite X para voltar ao menu inicial: ')
        print('\033[03;34m=\033[m' * 40)
        if x.upper() == 'X':
            print('1 Registro\n2 Login')
            opcaos = int(input('Digite o n° da op desejada: '))
            print('\033[03;34m=\033[m' * 40)
    if opcaos == 1:
        nome = input('Digite seu primeiro nome: ')
        nomes = open('nomes.txt', 'a')
        nomes.write(f'\n {nome.upper()}')
        print('\033[03;34m=\033[m' * 40)
        x = input('Digite X para voltar ao menu inicial: ')
        if x.upper() == 'X':
            nomes.close()
            print('\033[03;34m=\033[m' * 40)
            print('1 Registro\n2 Login')
            print('\033[03;34m=\033[m' * 40)
            opcao = int(input('Digite o n° da op desejada: '))
            print('\033[03;34m=\033[m' * 40)

    if opcao == 2:
        nomeler = open('nomes.txt', 'r')
        login = input('Digite seu nome: ')
        if login.upper() in nomeler.read():
            print('\033[03;34m=\033[m' * 40)
            print(f'Olá {login} é um prazer reve-lo')
            print(f'Seu saldo é {saldo} ')
            print('\033[03;34m=\033[m' * 40)
            if login.upper() == 'BRENNO':
                saldo = 50000
            if login.upper() == 'BRUNNO':
                saldo = 1000000
            if login.upper() == 'JOÃO':
                saldo = 10000
            nomeler.close()
            x = input('Digite X para voltar ao menu inicial: ')
            print('\033[03;34m=\033[m' * 40)
            if x.upper() == 'X':
                print('1 Registro\n2 Login')
                opcao = int(input('Digite o n° da op desejada: '))
                print('\033[03;34m=\033[m' * 40)

