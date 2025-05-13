const { ask } = require('../helpers/input.js');

async function main(){

    for (let i = 2; i <= 100; i++){
        if (i % 2 === 0){
            console.log(i, "Es un numero par");
        }
    }

}

main();
