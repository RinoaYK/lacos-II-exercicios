// # Exercício 2

// Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

// **Utilize o for...in para resolver**

// Exemplo com entrada **`7`**:
// ```jsx
// 7
// 14
// 21
// 28
// 35
// 42
// 49
// 56
// 63
// 70
// ```

const num = +(prompt("Qual número vc quer visualizar a tabuada?"));
console.log("Tabuada do número", `${num}:`);
const tabuada = []

for(let i = 1; i <= 10; i++){
    tabuada.push(i)
    }
for (let count in tabuada){
    console.log(num+" x "+tabuada[count]+" = " + (num*tabuada[count]))
}

// const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let count in num2){
//     console.log(num+" x "+num2[count]+" = " + (num*num2[count]))
// }

