print('='*300)
print('                                                             CAIXA ELETRONICO')
print('='*300)
dado1=print('Olá Brunno Fardin De Souza')
dado2=print('18/03/2000')
dado3=print("CPF:444.***.987-07")
dado4=print('Bradesco')
print('='*300)

saldo= 100000
print("Seu saldo é",saldo)
saque=int(input("Quanto você deseja sacar :"))
valorfinal=saldo-saque
if saque>saldo:
    print("Seu saldo é insuficiente. Você possui atualmente:",saldo,"em sua conta bancária")
else:
    print("Saque efetuado com sucesso no valor de: {}. O valor que sobrou  é de :{}".format(saque,valorfinal))

print()

if saque>saldo:
    print("="*300)
else:
    print('='*300)
    print('                                                      EXTRATO')
    print('='*300)
    dado1=print('Nome: Brunno Fardin De Souza')
    dado2=print('18/03/2000')
    dado3=print("CPF:444.***.987-07")
    dado4=print('Bradesco')

   

    print("Seu saldo antigo era de :",saldo)
    print("Valor do saque foi de:",saque)
    print('Seu Saldo atual é de:',valorfinal)

    print("="*300)
