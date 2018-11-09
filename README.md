# Problema da Mochila

### Resolução do Problema da Mochila com Algoritmo Guloso e Programação Dinâmica

#### UniEvangélica - Professor: Alexandre Moraes Tannus

**Alunos** Leonardo de Deus - Rafaela Andrade

## Algoritmo Guloso

Nessa resolução o algoritmo escolhe o item com maior valor e colca na mochila. Em seguida ele escolhe o segundo item de maior valor e testa se "cabe" na mochila, inclui se couber. Segue fazendo isso até que a mochila fique cheia ou não caiba mais nenhum item entre os disponíveis.

## Programação Dinâmica

Nessa resolução o algoritmo faz a matriz conforme vimos em sala de aula. Ignora a primeira linha e primeira coluna. Daí seleciona o item se seu peso for menor que a capacidade; caso contrário, o peso total será maior que a capacidade, o que não é permitido. Caso ocorra ele ignora o valor e usa o valor anterior. Quando descobre que um item pode fazer parte da soluçao, escolhemos aquele que tem valor maximo. O valor total que a mochila poderá carregar ficará no canto inferior da matriz. Depois selecionamos os itens que fazem parte fazendo o caminho inverso.
