import functions

#Aspirador Inteligente.

input("Bem vindo ao aspirador inteligente, pressione enter para continuar")

# Entrada de dados das dimensões do ambiente largura e comprimento.
#dimensions = input("\nInforme as dimensões do ambiente: (ex: 3 3)\n").split(" ")
dimensions = "3 3"
currentDirection = "N"

# Entrada de dados da sequencia de movimentos.
#move = input("\nInforme a sequencia de movimentos: (ex: FDFEFDF)\n")
move = "FDFEFDFEFDFEFDF"

# Entrada de dados da posição inicial do aspirador.
initial_position = [0, 0]

# Verifica se a sequencia de movimentos é valida.
if(functions.MoveValidation(move) == False):
    print("Verifique a sequencia de movimentos, ela deve conter apenas os caracteres F, D, E e T.")
else:
    print("Os Movimentos são: ", move)
    
# Verifica se as dimensões do ambiente são validas.
if(functions.DimensionsValidation(dimensions) == False):
    print("Verifique as dimensões do ambiente, elas devem conter apenas números, separados por um espaço.")
else:
    print("As dimensões do ambiente são: ", dimensions)

