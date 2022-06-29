function verTS(){
    recibirTS()
    var tabla_sym = document.getElementById('TablaTS')
    var tabla_err = document.getElementById('TablaErrores')
    
    tabla_sym.style.visibility = "visible";
    tabla_err.style.visibility = "hidden"; 
    
    
}


function recibirTS(){
    fetch("http://localhost:3000/enviarTS",{
          method: "GET"
      })
      .then((res) => res.json())
      .then((respuesta) => {
          //console.log(respuesta.respuesta);
          //consola.setValue(respuesta.respuesta)
          var tab = document.getElementById('tbody');
          for (i = 0; i < respuesta.respuesta.length; i++){
                //console.log(respuesta.respuesta[i].id);

                let row_1 = document.createElement('tr');
                let heading_0 = document.createElement('th');
                heading_0.innerHTML = i;
                let heading_1 = document.createElement('th');
                heading_1.innerHTML = respuesta.respuesta[i].id;
                let heading_2 = document.createElement('th');
                heading_2.innerHTML = respuesta.respuesta[i].value;
                let heading_3 = document.createElement('th');
                var tipoDato = tipo(respuesta.respuesta[i].type)
                heading_3.innerHTML = tipoDato;
                row_1.appendChild(heading_0);
                row_1.appendChild(heading_1);
                row_1.appendChild(heading_2);
                row_1.appendChild(heading_3);
                tab.appendChild(row_1);
            }
      });
  }


function verAST(){
    fetch("http://localhost:3000/enviarAst",{
        method: "GET"
    })
    .then((res) => res.json())
    .then((respuesta) => {
        console.log(respuesta);
    });
}

function tipo(tipo){
    if(tipo == 0){
        return "int"
    }else if(tipo == 1){
        return "string"
    }else if(tipo == 2){
        return "double"
    }else if(tipo == 3){
        return "char"
    }else if(tipo == 4){
        return "boolean"
    }
 
    
}