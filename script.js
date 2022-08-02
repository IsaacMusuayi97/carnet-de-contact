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


// expressions regulières

form.fisrtname.addEventListener('change', function () {

    validPrenom(this);
});


form.nom.addEventListener('change', function () {

    validNom(this);
});


form.bio.addEventListener('change', function () {

    validBio(this);
})


//     let premonRegExp = new RegExp('^[A-Z]{1}[a-z]{2,9}$', 'g'
//     );

//     let testPrenom = premonRegExp.test(inputPrenom.value);
//     let small = inputPrenom.nextElementSibling;

//    if (testPrenom == false) {

//     small.innerHTML = "Inserrez un prenom correct";
//     small.classList.add('text-fail');
//    } else {

//     small.classList.remove('text-fail');
//     small.classList.add('text-success');
//    }
// }





const validPrenom = function (inputPrenom) {



    let msg;
    let valid = false;

    // Au moins 4 caracteres
    if (inputPrenom.value.length < 4) {

        msg = 'Le prénom doit contenir au moins 4 caracteres';
    }

    // Majuscule au debut 

    else if (!/^[A-Z]/.test(inputPrenom.value)) {

        msg = 'Le prénom doit commencer avec une majuscule';

    }

    else {
        valid = true;
    }

    // Affichage
    // Recuperation de la balise small



    let small = inputPrenom.nextElementSibling;

    if (valid) {

        small.classList.remove('text-fail');
        small.classList.add('text-success');
        return true;

    } else {

        small.innerHTML = msg;
        small.classList.add('text-fail');
        return false;
    }
}


const validNom = function (inputNom) {

    let msg;
    let valid = false;

    // Au moins 4 caracteres
    if (inputNom.value.length < 4) {

        msg = 'Le nom doit contenir au moins 4 caracteres';
    }

    // Majuscule au debut 

    else if (!/^[A-Z]/.test(inputNom.value)) {

        msg = 'Le nom doit commencer avec une majuscule';

    }

    else {
        valid = true;
    }

    // Affichage
    // Recuperation de la balise small



    let small = inputNom.nextElementSibling;

    if (valid) {

        small.classList.remove('text-fail');
        small.classList.add('text-success');
        return true;

    } else {

        small.innerHTML = msg;
        small.classList.add('text-fail');
        return false;
    }
}



const validBio = function (textareaBio) {


    let msg;
    let valid = false;

    // Au moins 4 caracteres
    if (textareaBio.value.length < 100) {

        msg = 'La biographie doit contenir au moins 100 caracteres';
    }

    else {
        valid = true;
    }

    // Affichage
    // Recuperation de la balise small



    let small = textareaBio.nextElementSibling;

    if (valid) {

        small.classList.remove('text-fail');
        small.classList.add('text-success');

        return true;
    } else {

        small.innerHTML = msg;
        small.classList.add('text-fail');

        return false;
    }
}




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
    div.classList.add('firstName')
    recipient.classList.add('div_container');
    nom.classList.add('prenoms');
    div1.classList.add('prenoms');
    div2.classList.add('groupe');
    div3.classList.add('bio_class');
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

    if (validPrenom(form.fisrtname) && validNom(form.nom) && validBio(form.bio)) {


        if (selected == null) {
            addEvent();
        } else {
            // modifier
            const recipient = document.getElementById(selected);
            recipient.querySelector('.firstName').textContent = prenom.value;
            recipient.querySelector('.prenoms').textContent = nom.value;
            recipient.querySelector('.groupe').textContent = groupe.value;
            recipient.querySelector('.bio_class').textContent = bio.value;
            recipient.querySelector('.image').src = image.src;

            reset();

            button_creer.innerText = 'Créer';

        }

        selected = null;
    }




})


buttonReinit.addEventListener('click', function (event) {

    reset();

    button_creer.innerText = 'Créer';

    selected = null;
})

