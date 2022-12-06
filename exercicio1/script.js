// # Exercício 1

// Um analista quer conseguir ver quantos gols cada um de seus 5 atacantes marcou nas últimas 5 temporadas, e quer que você construa um código que mostre isso.

// Crie um laco `for` que itere pelo array deixado no arquivo `script.js`, e em sequência itere pelo array que existe dentro do primeiro array. Você deve imprimir a temporada, e o número de gols, como no exemplo abaixo:

// ```bash
// Jogador 1: 13, 15, 25, 34, 35
// Jogador 2: 30, 48, 30, 12, 47
// ```


const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

for(let i in array){ 
    console.log(`\nJogador ${+(i)+1}:`)
    let soma = 0
    for (let temp in array[i]){
        console.log(`Temporada ${+(temp) +1}: ${array[i][temp]} gols`)
        soma += array[i][temp]
    }
    let media = soma / array[i].length
    console.log(`Total: ${soma} gols\nMédia por temporada: ${media} gols\n`)
}

//+, parseInt, parseFloat, Number

// for (let g = 0; g < array.length; g++){
//     console.log(`Jogador ${g+1}: ${array[g].join(", ")}`)
// }