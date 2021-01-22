const botonVerificar = document.querySelector('input[type=text]+button');

botonVerificar.addEventListener('click', function ( event ){
    const text = document.querySelector('#vocal').value || '';
    if(text.length == 0) {
        alert('No se admiten campos vacios');
        return;
    }
    const v = text.split('')
                  .filter(value => value == 'a' || 
                                   value == 'e' ||
                                   value == 'i' ||
                                   value == 'o' ||
                                   value == 'u');
    
    const result = document.querySelector('h1+h1');
    result.innerText = `${v.length} VOCALES`;
});