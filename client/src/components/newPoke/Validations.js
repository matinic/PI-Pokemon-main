

export default function Validations(input){
    const {name,image,hp,attack,deffense,speed,height,weight,types} = input
    const sameValues = {hp,attack,deffense,speed,height}
    const error = {};
    const regex = /^[A-Za-z]+$/;
    
    if(name.length > 2 && name.length < 16){
        if( !regex.test(name) ){
            error.name = 'The name must have only letters without spaces';
        }
    }else{
        error.name = 'Enter a name between 3 and 15 characters';
    }

    if( !image ) error.image = 'Invalid image'

    for(let i in sameValues){
        if(!sameValues[i]){
            error[i] = 'Minimum value 1'
        } 
        if(sameValues[i] > 120){
            error[i] = 'Max value 120'
        } 
    }

    if( weight > 999 ) error.weight = 'Max value 999'
    
    if( types.length < 1 ) {
        error.types = 'Choose at least 1 type'
    }
    if(types.length > 2 ) error.types = 'Only 2 types are allowed'
    
    return error
}

