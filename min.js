let container = document.getElementById('container');
let url = 'https://fakestoreapi.com/products';

async function fetchItems() {
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);

  data.forEach((element) => {
    let card = document.createElement('div');
    let img = document.createElement('img');
    let title = document.createElement('h5');
    let price = document.createElement('h3');

    price.classList.add('price');
    title.classList.add('title');
    img.classList.add('img');
    card.classList.add('card');

    img.src = element.image;
    title.innerText = `title: ${element.title}`;
    price.innerText = `price: ${element.price}$`;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    container.appendChild(card);
  });
}

fetchItems();