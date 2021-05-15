// milestone 1:
// definire un array di oggetti; ogni oggetto
// rappresenta un'icona, che è caratterizzata da:
// nome, prefisso, tipo e famiglia.
// Utilizzando la funzione forEach e il template
// literal, visualizzare in pagina tutte le icone con il
// proprio nome.

/* <i class="fas fa-pizza-slice"></i> */


// VARIABILI
const icone = [
    {
        nome: "pizza-slice",
        prefisso: "fa-",
        tipo: "food",
        famiglia: "fas"
    },
    {
        nome: "hamburger",
        prefisso: "fa-",
        tipo: "food",
        famiglia: "fas"
    },
    {
        nome: "hotdog",
        prefisso: "fa-",
        tipo: "food",
        famiglia: "fas"
    },
    {
        nome: "cookie",
        prefisso: "fa-",
        tipo: "food",
        famiglia: "fas"
    },
    {
        nome: "apple-alt",
        prefisso: "fa-",
        tipo: "food",
        famiglia: "fas"
    },
    {
        nome: "sun",
        prefisso: "fa-",
        tipo: "weather",
        famiglia: "fas"
    },
    {
        nome: "wind",
        prefisso: "fa-",
        tipo: "weather",
        famiglia: "fas"
    },
    {
        nome: "snowflake",
        prefisso: "fa-",
        tipo: "weather",
        famiglia: "fas"
    },
    {
        nome: "cloud-showers-heavy",
        prefisso: "fa-",
        tipo: "weather",
        famiglia: "fas"
    },
    {
        nome: "cloud",
        prefisso: "fa-",
        tipo: "weather",
        famiglia: "fas"
    },
    {
        nome: "cat",
        prefisso: "fa-",
        tipo: "animal",
        famiglia: "fas"
    },
    {
        nome: "crow",
        prefisso: "fa-",
        tipo: "animal",
        famiglia: "fas"
    },
    {
        nome: "frog",
        prefisso: "fa-",
        tipo: "animal",
        famiglia: "fas"
    },
    {
        nome: "spider",
        prefisso: "fa-",
        tipo: "animal",
        famiglia: "fas"
    },
    {
        nome: "kiwi-bird",
        prefisso: "fa-",
        tipo: "animal",
        famiglia: "fas"
    },
    {
        nome: "dove",
        prefisso: "fa-",
        tipo: "animal",
        famiglia: "fas"
    },
]
// rosso, azzurro, verde
const colori = [
    "#D32F2F",
    "#26C6DA",
    "#4CAF50"
]
const iconeTipi = getType(icone);
// console.log(iconeTipi);

// nuovo array di icone con il colore 
const iconeColorate = aggiungiColore (icone, colori, iconeTipi);


// mi serve il container di riferimento dove stampare le icone. poichè non ho un id, userò classname.
// metto [0] per indicare quale elemento della html collection voglio prendere
// a questa nuova variabile aggiungerò innerhtml quando richiamo la funzione
const iconeContainer = document.getElementsByClassName("icons")[0];
const select = document.getElementById("tipo");


// prima era print(icons, iconeContainer): milestone 1. Dopo gli passo il nuovo array che contiene pure i colori
print (iconeColorate, iconeContainer);

printSelect (iconeTipi, select);


// FUNZIONI
// 1) funzione per stampare a schermo elementi di un array col proprio nome (con forEach)
function print (array, container) {
    // inizializzo il container a vuoto, così quando richiamo la funzione dentro il codice non ripeto la stampa su schermo (si sommerebbero gli elementi)
    container.innerHTML = "";
    array.forEach (
        (element) => {
            /* <i class="fas fa-pizza-slice"></i> */

            //     nome: "pizza-slice",
            //     prefisso: "fa-",
            //     tipo: "food",
            //     famiglia: "fas"

            // container += `<div><i class= "${element.famiglia} ${element.prefisso,element.nome}</i>
            // </div>`

            // posso scriverlo in modo più contratto destrutturando l'oggetto
            const {famiglia, prefisso, nome, colore} = element;
            container.innerHTML += `<div style="color:${colore}">
            <i class= "${famiglia} ${prefisso}${nome}"></i>
            <div class="title">${nome.toUpperCase()}</div>
            </div>`
        }
    );
}
// 2) funzione per prendere un singolo elemento da un array di oggetti
function getType (array) {
    // creo una variabile dove salvo il singolo elemento che mi interessa
    const tipi = [];
    array.forEach (
        (element) => {
            // dobbiamo evitare di stampare i doppioni, perchè ci serve solo un tipo, quindi aggiungiamo una condizione if: se l'array di destinazione non contiene già quell'elemento, pushalo, altrimenti non lo farà.
            if (!tipi.includes(element.tipo)) {
            tipi.push(element.tipo);
            }
        }
    );
    return tipi;
    
}
// // 3) funzione che aggiunge il colore ad ogni icona, con due array della stessa lunghezza (icone e colori) assegna prima un valore ad ogni elemento.
// 1 step: array dove inserire il colore, associazione fra i due array (mapping)
function aggiungiColore (array, arrayColori, arrayTipi) {
    const newArray = array.map (
        (element) => {
            // creo una variabile che conserva la posizione del tipo di ogni icona all'interno dell'array dei tipi (0,1,2)
            let indiceTipi = arrayTipi.indexOf(element.tipo);
            console.log(indiceTipi);
            // creo un nuovo elemento (il colore) che aggiungo ad ogni oggetto del ciclo
            const newElement = {
                // con l'operatore spread aggiungo tutti gli element, dopo con la virgola aggiungo anche l'elemento colore, che sarà l'elemento dell'array dei colori con posizione [indicetipi] (che ovviamente è un numero)
                ...element,                
                colore: arrayColori[indiceTipi]
            } 
            return newElement;
        }
    );
    return newArray;
}
// 4) funzione che mi fa visualizzare dentro la select le opzioni in base ai tipi, con un for each ciclo su tutti i tipi e li restituisco
function printSelect (arrayTipi, select) {
    arrayTipi.forEach (
        (element) => {
            select.innerHTML += `<option value="${element}">${element}</option>
            `
        }
    )
}

// 5) funzione che mi filtra gli oggetti in base al tipo selezionato, fa il return del risultato, il tipo è quello selezionato, per cui verrà stampato solo se corrisponde alla scelta
function filtraArray (array, tipo) {
 if (tipo == "") {
    return array;
 } else {
     const filteredArray = array.filter (
         (element) => {
             return element.tipo == tipo
         }
     );
      return filteredArray;
 }
}

// FUNZIONI

// milestone 3:
// aggiungere una select per filtrare le icone in
// base al tipo.
// Popolare le options della select dinamicamente
// e, ogni volta che cambia il valore selezionato,
// visualizzare le icone corrispondenti.

// mi serve usare l'event listener, perchè alla selezione del tipo devo cambiare il contenuto della pagina

select.addEventListener ("change", function () {
    // navigo elemento del DOM che mi serve, in particolare il valore.
    // this usato con una funzione anonima si riferisce all'elemento del dom che ha scatenato l'evento (su arrow intera window). il ".value" mi intercetta il valore della scelta su cui ho cliccato
    // console.log(this.value)
    let tipoSelezionato = this.value;
    // richiamo l'array che filtra gli elementi e lo stampo
    const iconeFiltrate = filtraArray (iconeColorate, tipoSelezionato);
    print (iconeFiltrate, iconeContainer)
})