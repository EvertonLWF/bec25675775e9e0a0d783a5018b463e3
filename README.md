# **Avaliação Técnica - Programa de Desenvolvedores Trainees**

## **Questão 1**

**Aspirador Inteligente**

Uma empresa está construindo um robô aspirador, porém acabou
economizando demais em peças importantes e o robô terminou sem nenhum sensor
para localizar onde está posicionado ao concluir uma limpeza. O robô possui
conhecimento das dimensões do ambiente em que está, e registra a direção em que
está se deslocando. O motor do robô o permite girar 90 graus para a esquerda ou
direita, e andar uma unidade de distância para frente ou para trás, permitindo
calcular sua posição final com o histórico de movimentos.
Seu trabalho é implementar um algoritmo que determine a posição final do robô
quando ele terminar a limpeza, para que ele consiga calcular o caminho de volta
para a base.

Considere a posição inicial do robô como as coordenadas 0,0 de um plano
cartesiano, e que ele inicialmente está olhando para o norte. O robô não pode
atravessar paredes, então as coordenadas do robô devem ser sempre maiores ou
iguais a zero, e a posição X do robô deve ser sempre menor que a largura da sala, e a posição Y sempre menor que o comprimento.

Entrada: A entrada contém vários casos de teste, sendo cada um especificado por
um par de linhas. A primeira linha é composta por dois números separados por um
espaço, indicando a largura e comprimento do ambiente, e a segunda contém uma
sequência composta pelos caracteres F (indicando um passo para a frente), T
(indicando um passo para trás), E (indicando uma rotação 90° à esquerda sem se
deslocar) e D (indicando uma rotação de 90° para a direita sem se deslocar).

| Exemplo de entrada                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Exemplo de saída  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| 10 10<br>FFFFFFFFFDFFFFFFFFFDFFFFFFFFFDFFFFFFFFF                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | O 0 0             |
| 55<br>FDFEFDFEFDFEFDF                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | L 4 4             |
| 1232 1232<br>TTTTTTTTTTTTT                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | N 0 0             |
| 15 36<br>FFFFFFFFFFFFFFFFDFETTTTTTTTTTTTTTTT                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | N 1 0             |
| 50 50 <br>TTFFDTTETDEDTTDDFFDEFDTEFTTDDEDEFFTEETEDTTEEDDEFFFTEDFDFTTDDDTTTTTFDEFDFFTE<br>DTEDEFTDTETETFDFTDTFEFDTFTTEEFEEFEDDTFTEDFFTTDTTTFDETETDDTEDDTFEDFDEFDDTTDE<br>FEFTDTTDFFEDDTDFDETTDDFFTEEDFFTTTDETFTFDTETTTTDEFFETFTDFDTEEDFTEFTEFFFTDEED<br>DTTEFDFETDFEEETTDFTTTEEEEEDTETFETTETDEEFTTDDDFFTFDDEFDEFTTTEDFFFTEEDTDDTTDF<br>DEETTDETETDDETTTDEFEETTETDEDTEFTTDDEEFDFDTEEEDEDTDDTEEEEEDTFEDEDDDTTTFFDETF<br>FDDTFDTEFFFDDFEEFEFDDFDTTETTDTDTTTDEDFTTDDDTTTTTDTEDFEFDTFFETEEEFFFEFDTTDET<br>TFFETTDEETFEDTEFFDEEFEEDTTFFTEEETDTEEEFTFFEFEFDFFEFTFEDEEDFDDDFDFEFEDDDTEET<br>TETFTTFDTDEFTFEEDEFTEFETFEEEFDETEDFFTFDFFTFDTFEFDEDTTTFEDEFTTDDEEFDTFTEEDTE<br>TEFEFFEEEFFTFEETEDDFFFTFDETFDEFETDTFDDFFTFDTFTTFTTFDFDDEDEFFFETTTTFFFFTDEEE<br>FTDFDDFTFETDDEDFFFEFFDDDTTDEFETFDEFDEDETDFEETEDTFETTTFEEEFTETFFTDFDFEDFTDDT<br>EFTFFEFEEFTTTFEEFTDDDEEDTFTFDTTDFDEETFFTDFDEDEEFFDTFETEDEETTEFFFDETTTFTEETF<br>DTEFFEEFFDEDFFDTTEFDETDDETDDDTDFETTTETEEEFDFTEETDTEDETTEDETFEEEFTFFEEDTFFFT<br>EDDFDDFDDTTEDEETETEEFDDDTTTTTEEFEFFFTEFEDEFEFEFEDDFFEEEFEETTFDFEEDDTTTTETDT<br>EDEFFDFTTFFTDTEDEDEDDFEFT<br>1000 1000 <br>EDFFEDFTTEDFTETEFDTFDTDTDTFDFTDEDTFFTFTDDDETFTFEFETEFEEEDFTTEFEEDFTFFTFTDTT<br>DFDDDTFTTTDDEETDDFTDFFETTDTTTFEEFFTDTFETDEFEDEFDFDTTEFDEEDTTDDETTDEDTTEEEFF<br>EEDDDETDFDTEDEDFTFFEEDEDDFEDEDFDDFEDEETTFTETFTTTEETTFDDTTEFDDEDTDEDEDDFTFEF<br>TDFEFFDTETFFFTDTFTEFFFEDETFETTFETDFFFDEETETFEFFTFETFEFFTEETDETDEFEFTFDEEFDE<br>EDTEDEFEFTEETTTTFEEFTDTDDFDEDFEDDDDTEDDDTFDDDEEEEDTTDFEDTDETFTFTFDFTFTDFEDE<br>FDEEEDDETEEEDDTEFEFFFDTEFTFFEETETEDDDDEFTEEDDEDDTTDTTEDFEFETFTDTFTFEEDEFEDT<br>EFDEEDEDEFDTEDEETEDEDEDDEDTDTDDFFEFDEETTEDDEFFTFDEFEFFDFDDTFEFTTDDDTDTDDFDE<br>EDETDDDFEFTEDEFEEFDETEFTDFTFDDFTFEEDEEEEEDDDTEDDFTDFDFFFDTETTTDETTEDETEDDET<br>ETDEEFTTFTDDFDEEEFFDEDTEDFTEETTEFDDFTFEFEEEETFTEFTEDFTFFEEEDFDETTEFDTFFDDDF<br>FDTEEFETDTETFDFTDEDTFFFFEETTFDFDDFTDTTDFFTFDDDTDTDDFDDEETETTFETTEFDTTFEDDFD<br>TEDETTTEDTDEFFEFFFTDTEDTTTEFFTTTTDFTDFTETDDFDEEFEFTEFTTDDDTEFEFETDDDDTETTTE<br>TEEDEETTDDFTDTETTFTFFTEFFEEDEEEFTTDEEEEFEDTEEEDEEDDDTETEFEFDDDEDEFEFTTDFDTT<br>DEDFTFDDTDTFDDDDEFEEEDEDDTTTDDTEDTEDDTDTDDTFETDTDTDFDDDTTEEEFEDTEFFDEEDTTEF<br>TDEDTDDETEFEFEFFTTTEEFDEF | S 11 13<br> L25 5 |

## **Questão 2**

A L2 está entrando no ramo de NFTs, para isso você foi chamado para ajudar
a desenvolver uma Landing Page responsiva que possibilite o acesso de pessoas
de dentro e fora da L2 para divulgação das NFTs. A equipe de design criou um
layout para a página no Figma e você deverá deixar o mais parecido possível. Para a criação do site poderá ser utilizada qualquer tecnologia web.

Link [Figma](https://www.figma.com/file/vaL4TLFS6xJVwDnZVauHN8/NFT-Market?node-id=3%3A3)

## **Questão 3**

O Banco Central de Financiamentos perdeu muitos cadastros após uma falha de
servidor que aconteceu em setembro, no aniversário da empresa. Alguns dados do
ano passado foram encontrados e você foi escolhido para:

- Selecionar o nome, dia do mês e valor da parcela para clientes que estão
  inadimplentes.
- Selecionar o nome e valor total pago de clientes com pagamento completo.

**Tabela PESSOAS**

| ID  | NOME                  | CONTRATO_ID | INADIMPLENT | DT_COMPLETO |
| --- | --------------------- | ----------- | ----------- | ----------- |
| 1   | Cristian<br>Ghyprievy | 2           | S           | NULL        |
| 2   | Joana Cabel           | 1           | S           | NULL        |
| 3   | John Serial           | 3           | S           | NULL        |
| 4   | Michael Seven         | 2           | N           | 2021-09-25  |

**Tabela CONTRATOS**

| ID  | VALOR_PARCELA | PARCELAS |
| --- | ------------- | -------- |
| 1   | 150           | 100      |
| 2   | 300           | 48       |
| 3   | 550           | 24       |
| 4   | 1000          | 12       |

**Tabela PAGAMENTOS**

| ID  | PESSOA_ID | DT_PAGAMENTO |
| --- | --------- | ------------ |
| 1   | 4         | 2021-09-01   |
| 2   | 4         | 2021-09-05   |
| 3   | 1         | 2021-09-19   |
| 4   | 2         | 2021-09-25   |

**Resultado Esperado -** Inadimplentes

| NOME | DIA_MES | VALOR_PARCELA |
| ---- | ------- | ------------- |
| 1    | 19      | 300           |
| 2    | 25      | 150           |
| 3    | 05      | 550           |

**Resultado Esperado -** Pagamento completo

| NOME          | VALOR_TOTAL |
| ------------- | ----------- |
| Michael Seven | 14400       |



### **Detalhes de cada atividade estão separados nos README's de cada pasta.**