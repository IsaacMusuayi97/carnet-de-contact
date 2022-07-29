let form = document.getElementById("form");
let prenom = document.getElementById('premon');
let nom = document.getElementById('names');
let groupe = document.getElementById('groupes');
let bio = document.getElementById('bio');
let button_creer = document.getElementById('creerId');
let buttonReinit = document.getElementById('reinitId');
let section_liste = document.getElementById('section');
let image = document.getElementById('image_choisie');
const button_image = document.getElementById('buton_choisir');
let link;
let link1 = "Red_X.svg";

let selected = null;

function addEvent() {


    const id = 'id-' + new Date().getTime();


    let recipient = document.createElement('div');
    let div_input = document.createElement('div');
    let div = document.createElement('div');
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div')
    let img = document.createElement('img');
    let image_croix = document.createElement('img');
    let container_nomPremon = document.createElement('div');
    let container_imag_comment = document.createElement('div');


    div.textContent = prenom.value;
    div1.textContent = nom.value;
    div2.textContent = groupe.value;
    div3.textContent = bio.value;
    img.src = image.src;
    image_croix.src = link1;

    recipient.id = id;
    img.classList.add('image');
    prenom.classList.add('prenoms');
    recipient.classList.add('div_container');
    nom.classList.add('prenoms');
    div1.classList.add('prenoms');
    div2.classList.add('groupe');
    div_input.classList.add('containerComment');
    container_nomPremon.classList.add('container_nomPremon');
    container_imag_comment.classList.add('container_imag_comment');
    image_croix.classList.add('image_croix');


    container_nomPremon.appendChild(div);
    container_nomPremon.appendChild(div1);

    div_input.appendChild(container_nomPremon);
    div_input.appendChild(container_nomPremon);
    div_input.appendChild(div2);
    div_input.appendChild(div3);

    container_imag_comment.appendChild(img);
    container_imag_comment.appendChild(div_input);

    recipient.appendChild(container_imag_comment);
    recipient.appendChild(container_imag_comment);
    recipient.appendChild(image_croix);


    section_liste.appendChild(recipient);


    image_croix.addEventListener("click", function (event) {



        recipient.remove();
    })


    recipient.addEventListener("click", function (event) {

        if (event.target.tagName === 'DIV') {



            selected = id;



            button_creer.innerText = 'Modifier';

            prenom.value = div.textContent;
            nom.value = div1.textContent;
            groupe.value = div2.textContent;
            bio.value = div3.textContent;
            image.src = img.src;
            image_croix.src = link1;
        }



    })
}


function reset() {

    prenom.value = "";
    nom.value = "";
    groupe.value = "";
    bio.value = "";
    image.src = "";
}


button_image.onchange = evt => {
    const [file] = button_image.files;
    if (file) {
        image.src = URL.createObjectURL(file);
        link = URL.createObjectURL(file)
        image.style.display = "block"

    }
}


form.addEventListener('submit', function (event) {

    event.preventDefault();

    if (selected == null) {
        addEvent();
    } else {
        // modifier
        const recipient = document.getElementById(selected);
        recipient.querySelector('.container_nomPremon').innerText = "kdmflkmdl"
    }

    selected = null;
})


buttonReinit.addEventListener('click', function (event) {

    reset();

    button_creer.innerText = 'Créer';

    selected = null;
})

