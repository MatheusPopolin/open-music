let filteredProducts = [...products];
renderCards(filteredProducts);

let maxPrice = 150
let price = 150
document.getElementById("maxPrice").innerText = `Até ${maxPrice.toLocaleString("pt-br",{style: "currency", currency: "BRL"})}`;
document.getElementById("priceBar").value = maxPrice

const priceBar = document.getElementById("priceBar");
priceBar.max = maxPrice;
priceBar.valueAsNumber = maxPrice;
priceBar.addEventListener("mousemove",event=>{
    document.getElementById("products").innerHTML = ``;
    price = parseInt(event.target.value);
    document.getElementById("maxPrice").innerText = `Até ${price.toLocaleString("pt-br",{style: "currency", currency: "BRL"})}`;
    renderCards(filteredProducts.filter((product) => product.price <= price));
});

function createCategoryButtons(category, index){
    let categoryButton = document.createElement("button");
    let li = document.createElement("li");
    categoryButton.innerText = category;
    categoryButton.classList.add("button_default");
    categoryButton.id = index;
    
    categoryButton.addEventListener("click",function(event){
        let id = event.target.id;
        document.getElementById("products").innerHTML = ``;
        if(id==0){
            filteredProducts = [...products];
            
        } else {
            filteredProducts = products.filter(product=> product.category==id);
        }
        renderCards(filteredProducts.filter(product=> product.price<=price));              
    });
    li.appendChild(categoryButton); 
    return li;         
}

function renderCategoryButtons(categories){
    categories.forEach((category,index)=>{
        let button = createCategoryButtons(category,index);
        document.getElementById("menuCategories").appendChild(button);
    })
}
renderCategoryButtons(categories);

function createCards(product){
    let card = document.createElement("li");
    card.classList.add("card");
    let img = document.createElement("img");
    img.src = product.img;
    let divCard = document.createElement("div");
    let divInformations = document.createElement("div");
    divInformations.classList.add("information_container");
    let band = document.createElement("p");
    band.classList.add("text_2")
    band.innerText = product.band;
    let year = document.createElement("p");
    year.classList.add("text_2")
    year.innerText = product.year;
    let title = document.createElement("h3");
    title.classList.add("title_2")
    title.innerText = product.title;
    let divBuy = document.createElement("div");
    divBuy.classList.add("buy_container");
    let price = document.createElement("p");
    price.classList.add("text_1")
    price.innerText = product.price.toLocaleString("pt-br",{style: "currency", currency: "BRL"});
    let buyBotton = document.createElement("button");
    buyBotton.innerText = "Comprar";
    buyBotton.classList.add("button_buy");
    divBuy.append(price,buyBotton);
    divInformations.append(band,year);
    divCard.append(divInformations, title, divBuy);
    card.append(img,divCard);
    return card;
}

function renderCards(products){
    products.forEach(product=>{
        let card = createCards(product);
        document.getElementById("products").appendChild(card);        
    })
}






