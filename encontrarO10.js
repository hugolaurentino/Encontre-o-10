const numeros = [54, 10, 22, 14, 87, 284];

let existe = false;
for (let índice = 0; índice < numeros.length; índice++) {
    if (numeros[índice] === 10) {
        existe = true;
        console.log(índice);
    }
}
if (!existe) {
    console.log('-1');
}