import re, sys

class Aspirador:
    # Construtor da classe.
    def __init__(self, move, dimensions, current_position, currentDirection):
        self.move = move
        self.dimensions = dimensions
        self.current_position = current_position
        self.currentDirection = currentDirection
    
    # Desconstrutor da classe.
    def __destroy__(self):
        self = None

    # Validação da sequencia de movimentos.
    def MoveValidation(self):
        verify = self.move.upper()
        result = bool(re.match(r"^[FDET]+$", verify))
        return result
    
    # Validação das dimensões do ambiente.
    def DimensionsValidation(self):
        result = bool(re.match(r"^[0-9]+ [0-9]+$", self.dimensions))
        return result
        
    # Método para setar a posição atual do aspirador.
    def SetCurrentPosition(self, current_position):
        self.current_position = current_position
        
    # Método para setar a direção atual do aspirador.
    def SetCurrentDirection(self, currentDirection):
        self.currentDirection = currentDirection

    # Método para pegar a posição atual no formato de string.
    def GetCurrentPosition(self):
        return self.current_position[1].__str__() +" "+ self.current_position[0].__str__()

    # Método para pegar a direção atual.
    def GetCurrentDirection(self):
        return self.currentDirection

    # Método para executar a sequencia de movimentos.
    def ExecuteMove(self):
        # Verifica se as dimenções são válida.
        if (self.DimensionsValidation() != True):
            print("Verifique as dimensões do ambiente, elas devem conter apenas números, separados por um espaço.")
            sys.exit()
            
        # Verifica se a sequencia de movimentos é válida.
        if (self.MoveValidation() != True):
            print("Verifique a sequencia de movimentos, ela deve conter apenas os caracteres F, D, E e T.")
            sys.exit()
        # Converte as dimensões para um array.
        self.ConvertDimensions(self.dimensions)

        # Percorre a sequencia de movimentos.
        for i in self.move:
            self.ExecuteAction(i)
    # Método para executar a ação de cada movimento.
    def ExecuteAction(self, direction):
        if (direction == "F"):
            self.MoveDirection(dir="F")
        elif (direction == "T"):
            self.MoveDirection(dir="T")
        elif (direction == "E"):
            self.ChangeDirection(direction="E")
        elif (direction == "D"):
            self.ChangeDirection(direction="D")
    # Método para mover o aspirador.
    def MoveDirection(self, dir):
        if (dir == "F"):
            if (self.currentDirection == "N" and self.current_position[0] < (int(self.dimensions[0]) + 1)):
                self.current_position[0] += 1
            elif (self.currentDirection == "S" and self.current_position[0] > 0):
                self.current_position[0] -= 1
            elif (self.currentDirection == "L" and self.current_position[1] < (int(self.dimensions[1]) + 1)):
                self.current_position[1] += 1
            elif (self.currentDirection == "O" and self.current_position[1] > 0):
                self.current_position[1] -= 1
        elif (dir == "T"):
            if (self.currentDirection == "N" and self.current_position[0] > 0):
                self.current_position[0] -= 1
            elif (self.currentDirection == "S" and self.current_position[0] < (int(self.dimensions[0]) + 1)):
                self.current_position[0] += 1
            elif (self.currentDirection == "L" and self.current_position[1] > 0):
                self.current_position[1] -= 1
            elif (self.currentDirection == "O" and self.current_position[1] < (int(self.dimensions[1]) + 1)):
                self.current_position[1] += 1
                
    # Método para mudar a direção do aspirador.
    def ChangeDirection(self, direction):
        if (direction == "D"):
            if (self.currentDirection == "N"):
                self.SetCurrentDirection("L")
            elif (self.currentDirection == "L"):
                self.SetCurrentDirection("S")
            elif (self.currentDirection == "S"):
                self.SetCurrentDirection("O")
            elif (self.currentDirection == "O"):
                self.SetCurrentDirection("N")
        elif (direction == "E"):
            if (self.currentDirection == "N"):
                self.SetCurrentDirection("O")
            elif (self.currentDirection == "O"):
                self.SetCurrentDirection("S")
            elif (self.currentDirection == "S"):
                self.SetCurrentDirection("L")
            elif (self.currentDirection == "L"):
                self.SetCurrentDirection("N")
                
    # Método para converter as dimensões para um array.
    def ConvertDimensions(self, dimensions):
        self.dimensions = dimensions.split(" ")

    # Método para imprimir a posição atual do aspirador.
    def Result(self):
        return self.currentDirection +" "+self.GetCurrentPosition()
