getElementById(id).value
createElement("li")
function agregarTarea()
{
    var tarea = document.getElementById("nueva-tarea").value;
    var nuevoitem = document.createElement("li");

    nuevoitem.textContent=tarea;

    document.getElementById("tarea-lista").appendChild(nuevoitem);

    document.getElementById("          ").value=" ";
}