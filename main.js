const form = document.getElementById('validacao');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroCampoA = document.getElementById('campo-a');
    const numeroCampoB = document.getElementById('campo-b');

    const campoA = Number(numeroCampoA.value);
    const campoB = Number(numeroCampoB.value);

    const validado = `Parabens!!! Formulário validado!!!`;
    const naoValidado = `Sinto muito!!! Formulário não aceito!!!`;

    if (campoA >= campoB){
        const contFalso = document.querySelector('.naoValido');
        contFalso.innerHTML = naoValidado;
        contFalso.style.display = 'block';
        Document.querySelector('.valido').style.display = 'none';
    }
    else {
        const contVerdade = document.querySelector('.valido');
        contVerdade.innerHTML = validado;
        contVerdade.style.display = 'block';
        document.querySelector('.naoValido').style.display = 'none';
    }
});