const rootProducts = document.querySelector('.row');
const filterBtns = document.getElementsByClassName('filterBtn');
const cartModal = document.querySelector('.cartModal');
const cartBtn  = document.querySelector('.cartOpenBtn');
const cartCloseBtn = document.querySelector('.cartCloseBtn');
const cartModalBody = document.querySelector('.cartModal-body');

const MAIN_URL = 'http://localhost:8080';

const getLaptops = async () => {
    try {
        const { data } = await axios.get(`${MAIN_URL}/laptops`);
        renderProducts(data, rootProducts);
    } catch (error) {
        console.error(error.message);
        alert('Что пошло не так...');
    }
};

const renderProducts = (data, root) => {
    root.innerHTML = "";
    data.forEach((laptop) => {
        const { id, image, name, price } = laptop;
        
        const div = document.createElement('div');
        const cartBtn = document.createElement('button');
        cartBtn.innerHTML = 'Add to cart';
        div.classList.add('card');

        div.innerHTML = `
            <h1>${name}</h1>
            <p>${price}</p>
            <img src="${image}">
        `;

        div.append(cartBtn);
        cartBtn.onclick = () => {
            const { id, ...remainingItems} = laptop;
            addToCart(remainingItems);
        };
        
        root.append(div);
    });
};

const addToCart = async (laptop) => {
    try {
        await axios.post(`${MAIN_URL}/cart`, laptop);
    } catch (error) {
        alert(error.message);
        console.log(error);
    }
};

const filterByBrand = async (brand) => {
    try {
        const { data } = await axios.get(`${MAIN_URL}/laptops?brand=${brand}`);
        renderProducts(data, rootProducts);
    } catch (error) {
        console.log(error.message);
    }
};

[...filterBtns].forEach((filterBtn) => {
    filterBtn.onclick = () => {
        if (filterBtn.dataset.brand === "ALL") {
            getLaptops();
        } else {
            filterByBrand(filterBtn.dataset.brand);
        }
    };
});

const getCartItems = async () => {
    try {
        const { data } = await axios.get(`${MAIN_URL}/cart`);
        return data;
    } catch (error) {
        alert(error.message);
        console.error(error);
    }
};

const renderCart = async () => {
    const cartItems = await getCartItems();

    renderProducts(cartItems, cartModalBody);
};

const openCart = () => {
    cartModal.classList.remove('cartModalHidden');
    renderCart();
};

const closeCart = () => {
    cartModal.classList.add('cartModalHidden');
};

cartBtn.onclick = openCart;
cartCloseBtn.onclick= closeCart;

getLaptops();




