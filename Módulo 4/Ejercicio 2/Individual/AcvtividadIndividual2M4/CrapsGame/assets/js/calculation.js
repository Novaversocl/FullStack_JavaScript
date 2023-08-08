
export default function calculation(craps, moneyBase) {


    while (moneyBase > 0 && moneyBase < 1000) {
        console.log(`Tienes ${moneyBase} de dinero.`);

        let bet = parseInt(prompt(`¿Cuánto dinero quieres apostar? posees ${moneyBase} `));
        while (bet > moneyBase) {
            bet = parseInt(prompt(`No puedes apostar más dinero del que tienes. Inténtalo de nuevo tienes ${moneyBase}`));
        }

        let opcion = parseInt(prompt("Elige un número del 1 al 6:"));
        while (opcion < 1 || opcion > 6) {
            opcion = parseInt(prompt("Elige un número válido del 1 al 6:"));
        }

        let result = craps.launch();
        console.log(`Salió el número ${result}.`);

        result === opcion ? (moneyBase += bet, console.log(`¡Ganaste ${bet}!`)) : (moneyBase -= bet, console.log(`Perdiste ${bet}.`));

    }

    if (moneyBase === 0) {
        console.log("Perdiste el juego.");
    } else if (moneyBase === 1000) {
        console.log("Ganaste el juego.");
    }
}