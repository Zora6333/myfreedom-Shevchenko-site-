function Shop(name, address) {
    this.name = name,
    this.address = address
}
let ProStore =  new  Shop('Простор','Немига')
let Green =  new  Shop('Грин','Независимости43')
 
let shops = []
shops.push(ProStore,Green)
console.log(shops)


