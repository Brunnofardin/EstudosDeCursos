c = 's'
mil = 0
barato = 999
total = 0
nome1 = ''

while c.upper() == 'S':
    print('='*45)
    print('       EXTRABOM SUPERMECADOS')
    print('='*45)
    #//////////////////////////////////    Leitura de preços e nomes \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    nome = input('Digite o nome do produto: ')
    preço = float(input('Digite o preço do produto $'))
    print('='*45)
    # ///////////////////////////////   CONDIÇÕES \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    c = input('Quer continuar ? [S/N]')
    total = total + preço
    if preço >= 1000:
        mil = mil + 1

    if preço < barato:
        nome1 = nome
        barato = preço
    #////////////////////////////////// FINISH \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
print('='*45)
print(f'O total da compra foi ${total}\n{mil} produtos custam 1.000 ou mais\no produto mais barato é {nome1}')
print('='*45)
