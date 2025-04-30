
function selectItem(item) {
    let price = 0
    switch(item) {
        case 'coffee':
            price = 2
            break  
        case 'Sandwich':
            price = 5
            break  
        case 'Salad':
            price = 4
            break
        case 'Lemon Cake':
            price = 3
            break
    }
    return `You selected ${item}. That will be $${price}`
}

console.log(selectItem('biscuits'))