console.log('Cargando...');

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);

    const product = {
        title: document.getElementById('title').value,
        price: parseInt(document.getElementById('price').value),
        thumbnail: document.getElementById('thumbnail').value
    }

    fetch('/api/products', {
        method: 'POST',
        body: JSON.stringify(product), 
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
})