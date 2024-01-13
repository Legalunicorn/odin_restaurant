import loadMenu from "./menu";
import loadAbout from "./about";
console.log('das');

function createHeader(){
    const header = document.createElement('div');
    header.setAttribute('id','header');

    const headerh1 = document.createElement('h1');
    headerh1.textContent = 'PAPA PASTA';
    headerh1.setAttribute('id','top')
    header.appendChild(headerh1);

    const headerh4 = document.createElement('h4');
    headerh4.textContent ='Fresh pasta, all day, everyday.';
    header.appendChild(headerh4);

    return header;

}

function createNav(){
    const navs = document.createElement('nav');
    navs.classList.add('navs');

    const menu = document.createElement('p');
    menu.textContent='Menu';
    menu.addEventListener('click',()=>{
        console.log('testmeu')
        loadMenu();
    })

    const about = document.createElement('p');
    about.textContent='About';
    about.addEventListener('click',()=>{
        loadAbout();
    })

    navs.appendChild(menu);
    navs.appendChild(about);

    return navs;
}

function createMain(){
    const main = document.createElement('main');
    main.setAttribute('id','main');
    console.log('main made')
    return main;

}

function createWeb(){
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createNav());
    content.appendChild(createMain());
    loadMenu();
}
createWeb()