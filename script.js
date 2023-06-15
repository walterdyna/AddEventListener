//-----------------------------AddEventListener no JavaScript-----------------------------


const input = document.querySelector("#main-input")
const select = document.querySelector("select") // seletor de opções
const button = document.querySelector(".main-button")

//-----------------------------AddEventListener no JavaScript-----------------------------
//-----------------------------------------Seleção----------------------------------------

select.addEventListener("change", function(event){
    console.log("troquei o valor - Select")
})
//      OU

function troqueiValorSelect(event){
    console.log("Tronquei de Valor - Select")
}

select.addEventListener("change", troqueiValorSelect)

//-----------------------------------------input----------------------------------------

function troqueiValorInput(event){
    console.log("Tronquei de Valor - input")
}

//      OU

input.addEventListener("keypress", troqueiValorInput)

//-----------------------------------------button----------------------------------------

function troqueiValorButton(event){
    console.log("Tronquei de Valor - Button")
}


//      OU


button.addEventListener("click", troqueiValorButton)
