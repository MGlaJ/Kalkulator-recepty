document.getElementById('calculateLostBtn').addEventListener('click', function() {
    
    let dawk = parseFloat(document.getElementById('dawk').value);
    let wyst = document.getElementById('wyst').value;
    let real_1 = document.getElementById('real_1').value;

    if (isNaN(dawk) || dawk < 0.1 || dawk > 50) {
        alert("Proszę wprowadzić poprawne dawkowanie w zakresie od 0.1 do 50.");
        return;
    }

    if (!wyst || !real_1) {
        alert("Proszę wprowadzić daty.");
        return;
    }

    let realDate = new Date(real_1);
    let wystDate = new Date(wyst);
    let minelo = (realDate - wystDate) / (1000 * 3600 * 24); 

    let komunikat4 = "";

    if (minelo > 30) {
        let przepadlo = Math.ceil(minelo * dawk);
        komunikat4 = `Od wystawienia recepty do jej pierwszej realizacji minęło ${minelo} dni.<br>`;
        komunikat4 += `W tym czasie pacjent zużyłby ${przepadlo} szt. leku.`;
    } else {
        komunikat4 = `Od wystawienia recepty do jej pierwszej realizacji minęło tylko ${minelo} dni.<br>`;
        komunikat4 += `Realizacja recepty zaczęta w terminie!`;
    }

    document.getElementById('komunikat4').innerHTML = komunikat4;
    document.getElementById('resultLost').style.display = 'block';
});
