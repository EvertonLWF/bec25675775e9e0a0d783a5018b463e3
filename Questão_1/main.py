import sys
import functions

#Aspirador Inteligente.
print("Bem vindo ao aspirador inteligente.")

# Entrada de dados das dimensões do ambiente largura e comprimento.
dimensions = input("\nInforme as dimensões do ambiente: (ex: 3 3)\n")

# Posição inicial do aspirador.
currentDirection = "N"

# Entrada de dados da sequencia de movimentos.
move = input("\nInforme a sequencia de movimentos: (ex: FDFEFDF)\n")

# Entrada de dados da posição inicial do aspirador.
initial_position = [0, 0]

# Verifica se a sequencia de movimentos é valida.
if(functions.MoveValidation(move) == False):
    print("Verifique a sequencia de movimentos, ela deve conter apenas os caracteres F, D, E e T.")
    sys.exit()
else:
    print("Os Movimentos são: ", move)
    
# Verifica se as dimensões do ambiente são validas.
if(functions.DimensionsValidation(dimensions) == False):
    print("Verifique as dimensões do ambiente, elas devem conter apenas números, separados por um espaço.")
    sys.exit()
else:
    print("As dimensões do ambiente são: ", dimensions)
    
# Executa a sequencia de movimentos e retorna o resultado.
result = functions.Move(move, dimensions, initial_position, currentDirection)

print("A posição final do aspirador é: ", result)
