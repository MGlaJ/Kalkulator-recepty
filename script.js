document.getElementById('calculateBtn').addEventListener('click', function() {
    let dawk = parseFloat(document.getElementById('dawk').value);
    let real_1 = document.getElementById('real_1').value;

    
    if (isNaN(dawk) || dawk < 0.1 || dawk > 50) {
        alert("Proszę wprowadzić poprawne dawkowanie w zakresie od 0.1 do 50.");
        return;
    }

    
    if (!real_1) {
        real_1 = new Date().toISOString().split('T')[0];
    }

    let ile_na_120 = Math.floor(120 * dawk);
    let ile_na_360 = Math.floor(360 * dawk);

    let komunikat = `W sumie można wydać maksymalnie ${ile_na_360} szt.<br>`;
    komunikat += `Dzisiaj można wydać maksymalnie ${ile_na_120} szt.<br>`;

    
    let realDate = new Date(real_1);
    realDate.setTime(realDate.getTime() + (91 * 24 * 60 * 60 * 1000)); 
    let nextRealization = `Następna realizacja: <span class="bold-date">${realDate.toISOString().split('T')[0]}</span>`;

    document.getElementById('komunikat').innerHTML = komunikat;
    document.getElementById('nextRealization').innerHTML = nextRealization;

    let komunikat2 = `Można wpisać datę pierwszej realizacji w dowolnym okresie i ponownie nacisnąć przycisk „Oblicz” w celu wyznaczenia daty następnej realizacji.`;
    document.getElementById('komunikat2').innerHTML = komunikat2;

    document.getElementById('result').style.display = 'block';
    document.getElementById('tips').style.display = 'block';
});
