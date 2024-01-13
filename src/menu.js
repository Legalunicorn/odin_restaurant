function createMenu(){
    const menu = document.createElement('div')
    menu.setAttribute('id','menu')
    menu.setAttribute('id','menu')

    menu.appendChild(createItem(
        'images/bacon_carbonara.jpg',
        'Creamy Carbonara',
        'Bacon, Cheese, Eggs, Pasta. What more could you ask for.',
        '$14.99'))

    menu.appendChild(createItem(
        'images/chicken_alfredo.jpg',
        'Chicken Alfredo',
        'Creamy mix of chicken breast, brocilli and Passion.',
        '$17.99'))

    menu.appendChild(createItem(
        'images/bolognese.jpg',
        'Pasta Bolognese',
        'Sphegatti with thick flavourful bolognese sauce.',
        '$13.99'))

    return menu
}


function createItem(source,name,desc,price){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu_item')

    const itemPic = document.createElement('img');
    itemPic.classList.add('menu_pic')
    itemPic.src = source;
    itemPic.alt = name;

    const title = document.createElement('p');
    title.classList.add('item_title');
    title.textContent = name;


    const des = document.createElement('p');
    des.classList.add('item_desc');
    des.textContent = desc;

    const pricing = document.createElement('p');
    pricing.classList.add('pricing');
    pricing.textContent = price;

    menuItem.appendChild(itemPic);
    menuItem.appendChild(title);
    menuItem.appendChild(des);
    menuItem.appendChild(pricing);

    return  menuItem;
}

function loadMenu(){
    const main = document.getElementById('main');
    main.textContent='';
    main.appendChild(createMenu());

}

export default loadMenu;