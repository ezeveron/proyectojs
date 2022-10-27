class Persona{
    constructor (nombre,apellido,email,comentario){
        
        this.nombre=nombre;
        this.apellido=apellido;
        this.email=email;
        this.comentario=comentario;
    }
}

const personas=[];

const idFormulario = document.getElementById("formulario");

idFormulario.addEventListener("submit" , (e)=>{
    e.preventDefault();

    const nombre=document.getElementById("nombre").value ;
    const apellido=document.getElementById("apellido").value;
    const email=document.getElementById("email").value;
    const comentario=document.getElementById("comentario").value;

    const persona = new Persona (nombre,apellido,email,comentario);

    personas.push(persona);

    localStorage.setItem("Persona", JSON.stringify(personas));

    idFormulario.reset();

    mostrarComentarios(persona);
})

const resenias= document.getElementById("infoComentario");


const mostrarComentarios = ()=>{
  let aux="";
    const mostrarhtml = JSON.parse(localStorage.getItem(`nombre`));
    aux += `<p> ${persona.nombre} </p>
            <p> Dejo el Siguiente Comentario ${persona.comentario}</p>`

    resenias.innerHTML = aux;

}

