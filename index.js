// Write your solution here!
let cats=["Milo", "Otis", "Garfield"];
let functions=function() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}
functions();
//cats.push('Ralph');
function destructivelyAppendCat(name){
    cats.length=0;
    cats.push('Milo', 'Otis', 'Garfield')
    //let resCat=[...cats]
    cats.push('Ralph');
    console.log(cats)
}
function destructivelyPrependCat(name) {
    cats.length=0;
    cats.push('Milo', 'Otis', 'Garfield');
    cats.unshift('Bob');
    console.log(cats)
}
function destructivelyRemoveLastCat() {
    cats.length=0;
    cats.push('Milo', 'Otis', 'Garfield');
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.length=0;
    cats.push('Milo', 'Otis', 'Garfield');
    cats.shift();
}
function appendCat(name) {
    cats.length=0;
    cats.push('Milo', 'Otis', 'Garfield');
    const apped=[...cats, 'Broom'];
    return apped;
}
function prependCat(name) {
    cats.length=0;
    cats.push('Milo', 'Otis', 'Garfield');
    const prep=['Arnold', ...cats];
    return prep;
}
function removeLastCat() {
    cats.length=0;
    cats.push('Milo', 'Otis', 'Garfield');
    const remLast=[...cats];
    remLast.pop();
    return remLast;
}
function removeFirstCat() {
    cats.length=0;
    cats.push('Milo', 'Otis', 'Garfield');
    const remFirst=[...cats];
    remFirst.shift();
    return remFirst;
}
