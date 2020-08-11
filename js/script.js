(function () {
    init();
})();


function init() {
    let price = document.querySelector('#total-price');
    price.innerHTML = 10.00;

    const items = [{
            name: 'apples',
            price: 1.85,
            img: 'img/apples.png'
        },
        {
            name: 'bakedgoods',
            price: 2.50,
            img: 'img/bakedgoods.png'
        },
        {
            name: 'berries cake',
            price: 18,
            img: 'img/berriesCake.png'
        }
    ]

    let cart = [];

    function inputChange(i, name, price) {
        const article = document.querySelectorAll('.item')[i];
        const btn = article.querySelector('.add ');
        const input = article.querySelector('.quantity');
        console.log('btn', input.value);

        btn.onclick = () => {
            cart.push({
                quantity: input.value,
                name,
                price
            });
            printCartItems();
        }
    }


    function printCartItems() {
        const list = document.querySelector('.aside ul');
        list.innerHTML =  '';
        cart.forEach(item => 
            list.innerHTML += `<li>${item.name} / ${item.quantity} / ${item.price}</li>`
        )}

    let selectSection = document.querySelector('.section');

    items.forEach((item, i) => {
        selectSection.innerHTML += `<article class ="item">
        <img src="${item.img}"/>
        <p>${item.name}</p>
        <small>$${String(item.price)}</small>
        <div class="littleform">
             <input class="quantity" type="number" placeholder="quantity" onchange = 'inputChange(
                 ${i}, 
                  "${item.name}",  
                  "${item.price}" ) '/>
            <button class="add">Add to cart</button>
        </div>
        </article>`;
    });

}