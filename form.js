const fs = require("fs");
const btnGuardar = document.getElementById("BTN-save");  
   const identi = document.getElementById("Identidad")
   const Nombre = document.getElementById("Name")
   const Apellido = document.getElementById("Correo")
   const telefono = document.getElementById("Number")
   const Fecha = document.getElementById("Date")

   btnGuardar.addEventListener("click", function(e){   
    e.preventDefault();
    fs.open("./personas.text", "w", function(err,archivo) { 
        if (err){
            console.log("Error al abrir el archivo");
            console.log(err);
            return;
        };
        const linea =`${identi.value}, ${Nombre.value}, ${Apellido.value}, ${telefono.value}, ${Fecha.value}`; 
        fs.write(archivo, linea,function(err, writen, string){
            if(err){
                console.log("Datos no Guardados");
                console.log(err);
                return;
            }
            console.log("Se escribieron los datos exitosamente");
            
        });
    });
    
});