

function save() {
    
    // document.getElementById("titulo").innetText = "Tu nombre es ?";
    document.getElementById("titulo").innerHTML = "<em>Gracias</em>";
    

    let nombre = document.getElementById("nombre").value;

    window.alert(`Tu nombre es "${nombre}"`);

}

