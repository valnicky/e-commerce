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

    let sec = document.querySelector('.section');

    items.forEach((item, i) => {
        sec.innerHTML += `<article class ="item"><img src="${item.img}"/>
        <p>${item.name}</p>
        <small>$${String(item.price)}.00</small>
        </article>`;
    });




}