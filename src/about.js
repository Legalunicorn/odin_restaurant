function createAbout(){

    const about = document.createElement('div');
    about.setAttribute('id','about');

    const aboutHead = document.createElement('p');
    aboutHead.textContent='About';
    aboutHead.classList.add('abouthead');

    const founder = document.createElement('img')
    founder.src = 'images/founder.jpeg';
    founder.alt ='founder';
    founder.classList.add('imgabout')

    about.appendChild(aboutHead);
    about.appendChild(founder);
    about.appendChild(createPara(
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat\
        nde soluta eius, accusamus libero deserunt fugiat, ut facere ullam illo \
        adipisci ipsum neque atque accusantium quae eveniet doloribus laboriosam!'))
    about.appendChild(createPara(
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat\
        nde soluta eius, accusamus libero deserunt fugiat, ut facere ullam illo \
        adipisci ipsum neque atque accusantium quae eveniet doloribus laboriosam!'))

    return about
}

function createPara(text){
    const para = document.createElement('p');
    para.classList.add('textabout');
    para.textContent = text

    return para
}


function loadAbout(){
    const main = document.getElementById('main')
    main.textContent='';
    main.appendChild(createAbout());
}
export default loadAbout;