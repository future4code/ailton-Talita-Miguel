function adicionarVendaDoProduto() {
    console.log('enviou!!!!')
    let input = document.querySelector("#produto");
    let texto = input.value;
    console. log(texto);

    // adicionar ação ao clique no checkbox
    let checkboxes = document.querySelectorAll('[name=pagamento]');
    let valorCheckbox = ''

    for (let i = 0; i < checkboxes.length; i++){
        if ( checkboxes[i].checked ) {
            if(checkboxes[i].value == "Dinheiro"){
                valorCheckbox = 'Dinheiro'
            }else if (checkboxes[i].value == "Cartão") {
                valorCheckbox = 'Cartão'
            }
        }
    }



    let table = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')

    table.appendChild(td1)
    table.appendChild(td2)

    
    
    // Adding the entire table to the body tag
    document.getElementById('linha').appendChild(table);

    td1.innerHTML = texto
    td2.innerHTML = valorCheckbox

}
