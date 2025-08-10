const baseInput = document.getElementById('base');
const alturaInput = document.getElementById('altura');
const resultadoInput = document.getElementById('resultado');
const btnCalcular = document.getElementById('btnCalcular');
const btnLimpiar = document.getElementById('btnLimpiar');

function validarCampos(base, altura) {
    if (base === '' || altura === '') {
        Swal.fire({
            icon: 'error',
            title: 'Campos vacíos',
            text: 'Por favor, ingrese la base y la altura.'
        });
        return false;
    }

    if (isNaN(base) || isNaN(altura)) {
        Swal.fire({
            icon: 'error',
            title: 'Valor inválido',
            text: 'Los valores deben ser números.'
        });
        return false;
    }

    if (base <= 0 || altura <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Valor inválido',
            text: 'Los valores deben ser positivos.'
        });
        return false;
    }

    return true;
}

btnCalcular.addEventListener('click', () => {
    const base = baseInput.value.trim();
    const altura = alturaInput.value.trim();

    if (!validarCampos(base, altura)) return;

    const area = parseFloat(base) * parseFloat(altura);
    resultadoInput.value = area.toFixed(2);

    Swal.fire({
        icon: 'success',
        title: 'Cálculo realizado',
        text: `El área del rectángulo es ${area.toFixed(2)} cm²`
    });
});

btnLimpiar.addEventListener('click', () => {
    baseInput.value = '';
    alturaInput.value = '';
    resultadoInput.value = '';
});
