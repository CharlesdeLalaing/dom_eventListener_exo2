// # Exercice :
// >*En utilisant l'attribut style*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Au double clique du h1, son fond devient rouge et son texte devient blanc
// ### 2. Au hover du h3, son texte rétrécit d'un caractère 
// ### 3. Quand on clique sur le paragraphe le fond devient bleu et le texte gold, mais si le fond et déjà bleu et le texte déjà gold alors le fond redevient blanc et le texte noir

let h1 = document.querySelector('h1');

h1.addEventListener('dblclick', () => {
    h1.setAttribute('style' , 'background-color:red ; color:white');
})

let h3 = document.querySelector('h3');

h3.addEventListener('mouseover', () => {
    h3.innerText = h3.innerText.slice(0,-1);
});

let p = document.querySelector('p');

p.addEventListener('click', () => {
    if (p.style.cssText == 'color: gold; background-color: blue;') {
        p.setAttribute('style' , 'color: black; background-color:white');
    } else {
        p.setAttribute('style', 'color: gold; background-color: blue');
        console.log(p.style.cssText);
    } 
})


//correction

let exo1 = document.querySelector('h1');
exo1.addEventListener('dblclick' , () => {
    exo1.setAttribute('style' , 'background-color:red , color: white;');
});

let exo2 = document.querySelector('h3');

h3.addEventListener('mouseover' , () => {
    h3.innerText = h3.innerText.slice(0,-1);
});

let exo3 = document.querySelector('p');
//1
exo3.addEventListener('click' , () => {
    if (exo3.style.backgroundColor == "blue" && exo3.style.color == "gold") {
        exo3.setAttribute('style' , 'background-color:white ; color:black')
    } else {
        exo3.setAttribute('style' , 'background-color: blue ,; color:gold')
    }
})
//2