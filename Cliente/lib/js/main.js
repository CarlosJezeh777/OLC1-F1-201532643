
var editor = CodeMirror.fromTextArea(document.getElementById('editor'),{
    theme:"rubyblue",
    lineNumbers: true,
});

var consola = CodeMirror.fromTextArea(document.getElementById('consola'),{
    theme:"dracula"
});

const input1 = document.querySelector('input[type=file]')

input1.addEventListener('change',function(e){
    //console.log(input1.files);
    const reader = new FileReader()
    reader.onload = function(){
        //  console.log(reader.result); 
        editor.setValue(reader.result)
    }
    reader.readAsText(input1.files[0])

    var overlay = document.getElementById("overlay")
    overlay.style.visibility = "hidden"
}, false)

Mostrar_Cerrar("btnabrir","overlay","btn-cerrar-pop");

function Mostrar_Cerrar(idAbrir,idOverlay,idCerrar){
    var abrir = document.getElementById(idAbrir),
    overlay = document.getElementById(idOverlay),
    cerrarx = document.getElementById(idCerrar);

    abrir.addEventListener("click", function(){
      overlay.style.visibility = "visible";
    });

    cerrarx.addEventListener("click", function(){
      //overlay.classList.remove("active");
      overlay.style.visibility = "hidden";
    });

  }

  


  function enviarData(){
    data = editor.getValue() 
    let envio ={
        edit: data 
      }
    fetch("http://localhost:3000/recibir",{
      method: 'POST',
      headers:{
          'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(envio) 
    }).then(res => res.json())
    .then(data => {
      console.log(data)
      consola.setValue(data.respuest)
      /*for ( i in data) {
          console.log(data[i]);
        // var inp = document.createElement('input');
        // inp.type = "radio"
        // inp.className = "form-check-input"
        // inp.value = data[i]
        // inp.id = data[i]
        // var lab = document.createElement("label")
        // lab.htmlFor = data[i]
        // lab.className = "form-check-label"
        // lab.innerHTML = data[i]+"<br/>"
        // document.getElementById("lista_desordenada").appendChild(inp)
        // document.getElementById("lista_desordenada").appendChild(lab)
        }*/
      alert("Datos enviados al servidor")
    });
  }



