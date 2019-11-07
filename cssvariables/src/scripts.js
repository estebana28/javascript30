
var inputs = document.querySelectorAll('.colors input');

function rangesUpdate () {
    var lalala = this.dataset.sizing || '';
    document.documentElement.style.setProperty('--${this.name}', this.value + lalala);
}

inputs.forEach(input => input.addEventListener('change', rangesUpdate));
inputs.forEach(input => input.addEventListener('mousemove', rangesUpdate));