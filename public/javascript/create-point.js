
function populateUFs (){
    const ufSelect =document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json() )
    .then( states =>{

        for(state of states){
            ufSelect.innerHTML +=`<option value="${state.id}">${state.nome}</option>`
        } 
    })
}

populateUFs()

function getCities(event){
    const citySelect =document.querySelector("[name=city]")
    const stateInput =document.querySelector("[name=state]")

     const ufValue = event.target.value

     const indexOfSelectedState = event.target.selectedIndex
     stateInput.value =event.target.options[indexOfSelectedState].text

     const url=`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML= "<option value> Selecione a Cidade </option>"
    citySelect.disabled = true

     fetch(url)
     .then(res => res.json() )
     .then( cities =>{
 
         for(const city of cities){
             citySelect.innerHTML +=`<option value="${city.nome}">${city.nome}</option>`
         } 
         citySelect.disabled = false
     })
}

document.querySelector("select[name=uf]")
.addEventListener("change",getCities)


//itens coleta

const itemsToCollect=document.querySelectorAll(".items-grid li")

for (items of itemsToCollect){
    items.addEventListener("click",handleSelectedItem)

    }
const colllectedItems =document.querySelector("input[name=items]")
let selectedItems = []

    function handleSelectedItem(event){

        const itemLi =event.target

        //adicionar ou remover classe com js
        itemLi.classList.toggle("selected")

        const itemId =itemLi.dataset.id

        console.log('ITEM ID:', itemId)

        //verificar se exitem itens seecionados, se sim pegar os itens selecionacionados

        const alreadySelected = selectedItems.findIndex(item =>{
            const itemFound = item == itemId //retorna true or false
            return itemFound
        
        })

        //se ja estiver selecionado tirar da seleção
        if(alreadySelected >=0) {
            const filteredItems = selectedItems.filter(item => {
                const itemIsDifferente =item != itemId
                return itemIsDifferente
            })
            selectedItems =filteredItems
        }else{
            selectedItems.push(itemId)
        }
        console.log(selectedItems)
        //se nao estiver selecionado adicionar a seleção
        console.log('selectedItems:  ', selectedItems)
        //atualizar o campo escondido com os itens slecionados
        colllectedItems.value =selectedItems
    }

    