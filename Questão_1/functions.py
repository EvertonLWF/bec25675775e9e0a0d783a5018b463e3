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


# Função que recebe uma string (move) e  as dimensões do ambiente (dimensions) e retorna a posição final do aspirador.
def Move(move, dimensions, initial_position, currentDirection):
    direction = currentDirection
    position = initial_position
    dimensions = dimensions.split(" ")
    for i in move:
        if(i == "F"):
            if(direction == "N"):
                # se a direção for norte e a posição y for menor que a largura do ambiente, a posição é incrementada.
                if(position[1] < int(dimensions[1]) - 1):
                    position[1] += 1
            elif(direction == "S"):
                # se a direção for sul e a posição y for maior que 0, a posição é decrementada.
                if(position[1] > 0):
                    position[1] -= 1
            elif(direction == "L"):
                # se a direção for leste e a posição x for menor que o comprimento do ambiente, a posição é incrementada.
                if(position[0] < int(dimensions[0]) - 1):
                    position[0] += 1
            elif(direction == "O"):
                # se a direção for oeste e a posição x for maior que 0, a posição é decrementada.
                if(position[0] > 0):
                    position[0] -= 1
        elif(i == "T"):
            if(direction == "N"):
                # se a direção for norte e a posição y for maior que 0, a posição é decrementada.
                if(position[1] > 0):
                    position[1] -= 1
            elif(direction == "S"):
                # se a direção for sul e a posição y for menor que a largura do ambiente, a posição é incrementada.
                if(position[1] < int(dimensions[1]) - 1):
                    position[1] += 1
            elif(direction == "L"):
                # se a direção for leste e a posição x for maior que 0, a posição é decrementada.
                if(position[0] > 0):
                    position[0] -= 1
            elif(direction == "O"):
                # se a direção for oeste e a posição x for menor que o comprimento do ambiente, a posição é incrementada.
                if(position[0] < int(dimensions[0]) - 1):
                    position[0] += 1
        elif(i == "E"):
            # se a direção for norte, a direção é alterada para oeste.
            if(direction == "N"):
                direction = "O"
            # se a direção for oeste, a direção é alterada para sul.
            elif(direction == "O"):
                direction = "S"
            # se a direção for sul, a direção é alterada para leste.
            elif(direction == "S"):
                direction = "L"
            # se a direção for leste, a direção é alterada para norte.
            elif(direction == "L"):
                direction = "N"
        elif(i == "D"):
            # se a direção for norte, a direção é alterada para leste.
            if(direction == "N"):
                direction = "L"
            # se a direção for leste, a direção é alterada para sul.
            elif(direction == "L"):
                direction = "S"
            # se a direção for sul, a direção é alterada para oeste.
            elif(direction == "S"):
                direction = "O"
            # se a direção for oeste, a direção é alterada para norte.
            elif(direction == "O"):
                direction = "N"
                
    
    return direction + " " + str(position[0]) + " " + str(position[1])

# Função que recebe uma string das dimensões do ambiente (dimensions) e os movimentos(move) separados por uma linha e retorna a um array de objetos.
#
#   Objeto: [{posição, direção}, {posição, direção}, ...]
#

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