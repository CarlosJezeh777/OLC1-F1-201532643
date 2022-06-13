const boton = document.getElementById('abrir');
const fileselector = document.getElementById('file-selector');
fileselector.style.display = "none";
boton.addEventListener("click",(e)=>{
    fileselector.click(function(){
        var file = new FileReader();
        file.onload = () =>{
            document.getElementById('editor').innerHTML = file.result;
        }
        file.readAsText(this.files[0])
    });
})

