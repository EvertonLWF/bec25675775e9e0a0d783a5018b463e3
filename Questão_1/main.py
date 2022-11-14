import sys
import functions

# Aspirador Inteligente.
print("Bem vindo ao aspirador inteligente.")

#data = input("\nInforme os dados de entrada: dimensões do ambiente largura e comprimento e sequência de movimentos:\nexemplo:\n  5 5\n  FDFEFDF\n")
lines = []

# Lê os dados de entrada.
data = functions.getData()

for item in data:
    # Entrada de dados da posição inicial do aspirador.
    initial_position = [0, 0]

    # Posição inicial do aspirador.
    currentDirection = "N"
        
    # Verifica se a sequencia de movimentos é valida.
    if (functions.MoveValidation(item['move']) == False):
        print("Verifique a sequencia de movimentos, ela deve conter apenas os caracteres F, D, E e T.")
        sys.exit()
        
    # Verifica se as dimensões do ambiente são validas.
    if (functions.DimensionsValidation(item['dimensions']) == False):
        print("Verifique as dimensões do ambiente, elas devem conter apenas números, separados por um espaço.")
        sys.exit()
        
    # Executa a sequencia de movimentos e retorna o resultado.
    result = functions.Move(item['move'], item['dimensions'], initial_position, currentDirection)

    # Exibe o resultado.
    print("A posição final do aspirador é: ", result)
