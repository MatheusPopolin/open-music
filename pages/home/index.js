let filteredProducts = [...products];
renderCards(filteredProducts);

let maxPrice = products.reduce((total, currentValue) => {
    if(currentValue.price>total){
        return currentValue.price;
    } else{
        return total;
    }
},0);
document.getElementById("maxPrice").innerText = `Até R$ ${maxPrice}`;

function createCategoryButtons(category, index){
    let categoryButton = document.createElement("button");
    let li = document.createElement("li");
    categoryButton.innerText = category;
    categoryButton.classList.add("button_default");
    categoryButton.id = index;
    
    categoryButton.addEventListener("click",function(event){
        let id = event.path[0].id;
        document.getElementById("products").innerHTML = ``;
        if(id==0){
            filteredProducts = [...products];
            
        } else {
            filteredProducts = products.filter(product=> product.category==id);
        }
        maxPrice = filteredProducts.reduce((total, currentValue) => {
            if(currentValue.price>total){
                return currentValue.price;
            } else{
                return total;
            }
        },0);
        priceBar.max = maxPrice;
        price = priceBar.valueAsNumber;
        document.getElementById("maxPrice").innerText = `Até R$ ${maxPrice}`;
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
    price.innerText = `R$ ${product.price}`;
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

const priceBar = document.getElementById("priceBar");
priceBar.max = maxPrice;
priceBar.valueAsNumber = maxPrice;
priceBar.addEventListener("mousemove",event=>{
    document.getElementById("products").innerHTML = ``;
    let price = parseInt(event.path[0].value);
    document.getElementById("maxPrice").innerText = `Até R$ ${price}`;
    renderCards(filteredProducts.filter((product) => product.price <= price));
});






