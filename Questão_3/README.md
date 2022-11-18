# Questão 2

Esta atividade foi utilizado o [PostgreSQL](https://www.postgresql.org/).

### Versão

- psql (PostgreSQL) 14.6

## Criar o banco de dados

```sql
CREATE DATABASE L2;
```

## Criar a tabela CONTRATOS

```sql
CREATE TABLE CONTRATOS(
    ID SERIAL PRIMARY KEY,
    VALOR_PARCELA DECIMAL(10) NOT NULL,
    PARCELAS DECIMAL(10) NOT NULL
);
```

## Criar a tabela PESSOAS

```sql
CREATE TABLE PESSOAS (
    ID SERIAL PRIMARY KEY,
    NOME VARCHAR(255) NOT NULL,
    CONTRATO_ID INT NOT NULL,
    INADIPLENTE VARCHAR(1),
    DT_COMPLETO DATE,
    FOREIGN KEY (CONTRATO_ID) REFERENCES CONTRATOS(ID)
);
```

## Criar a tabela PAGAMENTOS

```sql
CREATE TABLE PAGAMENTOS (
    ID SERIAL PRIMARY KEY,
    PESSOA_ID INT NOT NULL,
    DATA_PAGAMENTO DATE NOT NULL,
    FOREIGN KEY (PESSOA_ID) REFERENCES PESSOAS(ID)
);
```
## Inserir registros na tabela CONTRATOS
```sql
INSERT INTO CONTRATOS (VALOR_PARCELA, PARCELAS) VALUES (150, 100);
INSERT INTO CONTRATOS (VALOR_PARCELA, PARCELAS) VALUES (300, 48);
INSERT INTO CONTRATOS (VALOR_PARCELA, PARCELAS) VALUES (550, 24);
INSERT INTO CONTRATOS (VALOR_PARCELA, PARCELAS) VALUES (1000, 12);
```
## Inserir registros na tabela PESSOAS
```sql
INSERT INTO PESSOAS (NOME, CONTRATO_ID, INADIPLENTE, DT_COMPLETO) VALUES ('Cristian Ghyprievy', 2, 'S', null);
INSERT INTO PESSOAS (NOME, CONTRATO_ID, INADIPLENTE, DT_COMPLETO) VALUES ('Joana Cabel', 1, 'S', null);
INSERT INTO PESSOAS (NOME, CONTRATO_ID, INADIPLENTE, DT_COMPLETO) VALUES ('John Serial', 3, 'S', null);
INSERT INTO PESSOAS (NOME, CONTRATO_ID, INADIPLENTE, DT_COMPLETO) VALUES ('Michael Seven', 2, 'N', '2021-09-25');
```
## Insere registros na tabela PAGAMENTOS
```sql
INSERT INTO PAGAMENTOS (PESSOA_ID, DATA_PAGAMENTO) VALUES ( 4, '2021-09-01');
INSERT INTO PAGAMENTOS (PESSOA_ID, DATA_PAGAMENTO) VALUES ( 3, '2021-09-05');
INSERT INTO PAGAMENTOS (PESSOA_ID, DATA_PAGAMENTO) VALUES ( 1, '2021-09-19');
INSERT INTO PAGAMENTOS (PESSOA_ID, DATA_PAGAMENTO) VALUES ( 2, '2021-09-25');
```

### Query para selecionar o nome, dia do mês e valor da parcela para clientes que estão inadimplentes.
```sql
SELECT
    PESSOAS.nome AS "NOME",
    to_char(PAGAMENTOS.data_pagamento, 'DD') AS "DIA_MES",
    CONTRATOS.valor_parcela AS "VALOR DA PARCELA"
FROM
    PESSOAS
    INNER JOIN CONTRATOS ON PESSOAS.CONTRATO_ID = CONTRATOS.ID
    INNER JOIN pagamentos ON PESSOAS.ID = pagamentos.pessoa_id
WHERE
    PESSOAS.dt_completo IS NULL
ORDER BY
    PESSOAS.nome,
    PAGAMENTOS.data_pagamento;
```
resultado:
```sh
3 rows returned
    NOME                    DIA_MES     VALOR DA PARCELA
1	Cristian Ghyprievy	    19	        300
2	Joana Cabel	            25	        150
3	John Serial	            05          550
```

### Query para selecionar o nome e valor total pago de clientes com pagamento completo.

```sql
SELECT
    PESSOAS.nome AS "NOME",
    (CONTRATOS.valor_parcela * CONTRATOS.parcelas) AS "VALOR TOTAL"
FROM
    PESSOAS
    INNER JOIN CONTRATOS ON PESSOAS.CONTRATO_ID = CONTRATOS.ID
WHERE
    PESSOAS.dt_completo IS NOT NULL
ORDER BY
    PESSOAS.nome
```
resultado:
```sh
3 rows returned
    NOME                DIA_MES     VALOR DA PARCELA
1	Cristian Ghyprievy	19	        300
2	Joana Cabel	        25	        150
3	John Serial	        05	        550
```