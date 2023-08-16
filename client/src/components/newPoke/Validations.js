

export default function Validations(input){
    const error = {};
    const regex = /^[A-Za-z]+$/;

    if( !input.name ){
        error.name = '! Ingrese un nombre'
    }
    if( input.name.length < 3 || input.name.length > 15 ){
        error.name = '! Ingrese un nombre entre 3 y 15 caracteres - cant. de car. ' + input.name.length;
    }
    if( !regex.test(input.name) ){
        error.name = '! El nombre debe tener solo letras sin espacios en blanco';
    }

    if( !input.image ) error.image = 'Falta imagen'

    if( input.hp > 120 ) error.hp = 'Valor maximo 120'
    if( input.attack > 120 ) error.attack = 'Valor maximo 120'
    if( input.deffense > 120  ) error.deffense = 'Valor maximo 120'
    if( input.speed > 150 ) error.speed = 'Valor maximo 150'
    if( input.height > 120 ) error.height = 'Valor maximo 120'
    if( input.weight > 999 ) error.weight = 'Valor maximo 999'
        
    if( input.hp < 1 ) error.hp = 'Valor minimo 1'
    if( input.attack < 1 ) error.attack = 'Valor minimo 1'
    if( input.deffense < 1 ) error.deffense = 'Valor minimo 1'
    if( input.speed < 10  ) error.speed = 'Valor minimo 10'
    if( input.height < 1 ) error.height = 'Valor minimo 1'
    if( input.weight  < 1 ) error.weight = 'Valor minimo 1'

    if( input.types.length < 1 ) {error.types = 'Eliga almenos 1 tipo'}
    
    return error
}

