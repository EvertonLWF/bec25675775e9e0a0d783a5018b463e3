import re

# Função que recebe uma string e retorna verdadeiro os movimentos forem validos.
def MoveValidation(move):
    verify = move.upper()
    result = bool(re.match(r'^[FDET]+$', verify))
    return result
    
# Função que recebe uma string e retorna verdadeiro se as dimensões são validas.
def DimensionsValidation(dimensions):
    result = bool(re.match(r'^[0-9]+ [0-9]+$', dimensions))
    return result

# Função que recebe uma string das dimensões do ambiente (dimensions) e os movimentos(move) separados por uma linha e retorna a um array de objetos.
def getData ():
    # Variável que armazena as linhas do input.
    lines = []
    # Variável que armazena as os objetos com as dimensões do ambiente e os movimentos.
    dataArray = []

    # Lê as linhas do input.
    while True:
        user_input = input()

        if user_input == '':
            break
        else:
            lines.append(user_input)
    # Variáveis temporarias dos movimentos.
    moveTemp = ''
    # Variáveis temporarias das dimensões do ambiente.
    dimensionsTemp = ''
    
    # Percorre as linhas do input.
    for index, i in enumerate(lines) :
        if(MoveValidation(i)):
            moveTemp += i
        elif(DimensionsValidation(i)):
            if(index > 0):
                dataArray.append({'dimensions': dimensionsTemp, 'move': moveTemp})
            moveTemp = ''
            dimensionsTemp = i
    dataArray.append({'dimensions': dimensionsTemp, 'move': moveTemp})   
    
    return dataArray