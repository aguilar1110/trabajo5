function index (){
    let nombre=document.getElementById("nombre").value;
    let contacto1=document.getElementById("contacto1").value; 
    let email=document.getElementById("email").value;



    if(nombre==""){
        alert("El nombre es obligatorio", nombre);
        //return false;
    }
    else{
        return true;
    }


    if(contacto1==""){
        alert("El motivo es obligatorio", contacto1);
        //return false;
    }
    else{
        return true;
    }


    if(email==""){
        alert("El email es obligatorio", email);
        //return false;
    }
    else{
        return true;
    }

}