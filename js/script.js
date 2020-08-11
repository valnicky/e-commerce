(function () {
    init();
})();

function init() {
    let price = document.querySelector('#total-price');
    // price.innerHTML = 10.00;

    const items = [{
            name: 'Apples',
            price: 2,
            img: 'img/apples.png'
        },
        {
            name: 'Bakedgoods',
            price: 2,
            img: 'img/bakedgoods.png'
        },
        {
            name: 'Berries cake',
            price: 17,
            img: 'img/berriesCake.png'
        },
        {
            name: 'Cake',
            price: 16,
            img: 'img/cake.png'
        },
        {
            name: 'Cherries',
            price: 3,
            img: 'img/cherries.png'
        },
        {
            name: 'Coffee',
            price: 5,
            img: 'img/coffee.png'
        },
        {
            name: 'Cookies',
            price: 4,
            img: 'img/cookies.png'
        },
        {
            name: 'Cream cake',
            price: 19,
            img: 'img/creamCake.png'
        },
        {
            name: 'Donuts',
            price: 6,
            img: 'img/donut.png'
        },
        {
            name: 'Bread',
            price: 7,
            img: 'img/roundBread.png'
        },
        {
            name: 'Strawberries',
            price: 5,
            img: 'img/strawberries.png'
        },
        {
            name: 'Chocolate cake',
            price: 22,
            img: 'img/tart.png'
        }
    ]

    let cart = [];

    function inputChange(i, name, price) {
        const article = document.querySelectorAll('article')[i];
        const btn = article.querySelector('button');
        const input = article.querySelector('input');
        console.log('btn', input.value);

        btn.onclick = () => {
            cart.push({
                input: input.value,
                name,
                price
            });
            printCartItems();
        }
    }


    function printCartItems() {
        const list = document.querySelector('.aside ul');
        list.innerHTML = "";
        cart.forEach(item =>
            (list.innerHTML += `<li>${item.name} / ${item.input} / ${item.price}</li>`)
        );
        updateTotal();
    }

    function updateTotal() {
        const totalElement = document.querySelector('#total-price');
        const total = cart.reduce((acc, current) => acc + (current.price * curent.input), 0);
        totalElement.innerText = `$${total}`;
    }

    let selectSection = document.querySelector('.section');

    items.forEach((item, i) => {
        selectSection.innerHTML += `
        <article class ="item">
            <img src="${item.img}"/>
            <p>${item.name}</p>
            <small>$${String(item.price)}.00</small>
            <div class="littleform">
                 <input class = "quantity" type = "number" placeholder =  0  onchange  = "inputChange( 
                 ${i}, 
                 '${item.name}',
                 '${item.price}' )" />
                <button class="add">Add to cart</button>
            </div>
        </article> 
        `
    })

}