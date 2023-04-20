// Entrega 3
// Alumna: Lorena Muñoz


//Libreria HysModal, puede revisarse en: https://addmorescripts.github.io/hystModal/index.html
const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
	//settings (optional). see API
});

//Constructor de criaturas
class Criatura {
    constructor(nombre, especie, edad, sexo, habitat, descEspecie, imagen) {
        this.nombre = nombre
        this.especie = especie
        this.edad = edad
        this.sexo = sexo
        this.habitat = habitat
        this.descEspecie = descEspecie
        this.imagen = imagen
    }
}


let criaturas = []
let criaturasDisponibles = []

// Storage + criaturas disponibles
const storage = localStorage.getItem("storage");
if (storage === null) {
    //Criaturas iniciales
    const acromantula = new Criatura ("Aragog", "Acromantula", "53 años", "Macho", "Bosque", "Es una especie mágica de monstruosas y gigantes arañas que tienen ocho patas y ocho ojos y la capacidad de hablar. Son nativos principalmente de la Isla de Borneo o del sureste asiático. Es venenosa y carnívora, prefiere las presas grandes. Viven en las selvas y áreas boscosas y su telaraña tiene forma de cúpula.", "acromantula.png")
    const demiguise = new Criatura ("Dougal", "Demiguise", "21 años", "Macho", "Bosque", "Es una bestia mágica herbívora y pacífica que puede hacerse invisible y predecir el futuro, lo que hace que sea muy difícil de atrapar.", "demiguise.png")
    const occamy = new Criatura ("Silver", "Occamy", "2 meses", "Hembra", "Urbano", "Es una criatura emplumada, de dos patas y cuerpo de serpiente con alas que pueden alcanzar hasta cuatro metros y medio de altura. El occamy es agresivo con todos los que se le acercan y se alimenta de insectos, ratas, pájaros y ocasionalmente monos. Es extremadamente protector con sus huevos, cuya cáscara está hecha de la más suave y pura plata. Se encuentra en el Lejano Oriente y la India.", "occamy.png")
    //Criaturas por crear
    const basilisco = new Criatura("", "Basilisco", "", "", "", "Es una serpiente gigante, también conocida como el Rey de las Serpientes, es una criatura criada por magos tenebrosos. El primer basilisco del que hay constancia fue criado por Herpo el Loco, un mago tenebroso de Grecia que hablaba pársel. Después de muchos experimentos, Herpo descubrió que de un huevo de gallina incubado por un sapo salía una serpiente gigantesca dotada de poderes extraordinariamente peligrosos.", "basilisco.png")
    const bowtruckle = new Criatura("", "Bowtruckle", "", "", "", "Es un guardián de árboles inmensamente difícil de detectar. Se puede encontrar en el oeste de Inglaterra, el sur de Alemania, y en algunos bosques escandinavos. Un Bowtruckle sirve como guardián de su árbol, que suele ser uno cuya madera sirve para fabricar varitas mágicas. Los dedos en forma de rama le sirven para arrancarle los ojos a un enemigo. Por lo general es una criatura pacífica, pero se vuelven violentos si alguien amenaza a su árbol, o incluso a sí mismo", "bowtruckle.png")
    const escarbato = new Criatura("", "Escarbato", "", "", "", "Es una criatura con un hocico largo y delgado que busca tesoros. Con una bolsa en su estómago. Se sienten muy atraídos hacia las cosas brillantes, lo que los hace adecuados para localizar objetos metálicos o con brillo, pero en el proceso pueden llegar a destrozar habitaciones en busca de tesoros, o morder, si una persona está usando cualquier joya.", "escarbato.png")
    const phoenix = new Criatura("", "Phoenix", "", "", "", "El Fénix es un magnifico pájaro mágico de color escarlata del tamaño de un cisne con plumaje rojo y dorado, junto con un pico y garras dorados, ojos negros y una cola tan larga como la de un pavo real. Sus plumas escarlatas brillaban débilmente en la oscuridad, mientras que las doradas plumas de su cola estaban calientes al tacto.", "phoenix.png")
    const quimera = new Criatura("", "Quimera", "", "", "", "La quimera es una criatura cruel y sanguinaria con cabeza de león, cuerpo de cabra y cola de dragón", "quimera.png")
    const unicorn = new Criatura("", "Unicorn", "", "", "", "Los potros unicornio son de color oro, y cambian a color plata cuando tienen cerca de dos años de edad. Crece su cuerno en torno a los cuatro años. Cuando tienen siete años de edad, se han desarrollado completamente y adquieren un tono blanco que es tan brillante que hace que la nieve sea de color gris a la mirada en la comparación. Sus cascos son de oro, y su sangre es de color plata azulada y brilla bajo la luna.", "unicorn.png")
    const thestral = new Criatura("", "Thestral", "", "", "", "Los thestrals tienen una apariencia bastante inquietante y los magos que son capaces de verlos a menudo solo describían a estas criaturas como siniestras y espeluznantes. Esto se debe a que se les ve con figuras grandes y huesudas y caras de dragón que mostraban ojos blancos y brillantes que carecían tanto de expresión como de pupilas. Además, son atraídos por el olor a sangre.", "thestral.png")
    //Arrays
    criaturas = [acromantula, demiguise, occamy]
    criaturasDisponibles = [basilisco, bowtruckle, escarbato, phoenix, quimera, unicorn, thestral]
} else {
    const data = JSON.parse(storage);
    criaturas = data.criaturas;
    criaturasDisponibles = data.criaturasDisponibles;
}

// Modal para los detalles
function modalDetalleCriatura (especieDetalle) {
   let datosCriatura = criaturas.find(criatura => criatura.especie === especieDetalle)
   document.getElementById("imagenDetalle").src = "Assets/IMG/" + datosCriatura.imagen;
   document.getElementById("nombreDetalle").innerHTML = datosCriatura.nombre;
   document.getElementById("especieDetalle").innerHTML = datosCriatura.especie;
   document.getElementById("edadDetalle").innerHTML = datosCriatura.edad;
   document.getElementById("sexoDetalle").innerHTML = datosCriatura.sexo;
   document.getElementById("habitatDetalle").innerHTML = datosCriatura.habitat;
   document.getElementById("descripcionDetalle").innerHTML = datosCriatura.descEspecie;
   myModal.open("#modalDetalle")
}

// Alerta de que no se puede continuar creando criaturas
function abrirModalCreacion (){
    if (criaturasDisponibles.length === 0) {
        alert("No hay más espacio en la maleta")
        return;
    }
    document.getElementById("nombre").value = "";
    document.getElementById("especie").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("sexo").value = "";
    document.getElementById("habitat").value = "";
    const select = document.getElementById("especie");
    select.innerHTML = "";
    criaturasDisponibles.map(criatura => {
        let x = document.createElement("OPTION");
        x.setAttribute("value", criatura.especie);
        let t = document.createTextNode(criatura.especie);
        x.appendChild(t);
        select.appendChild(x)   
    })
    myModal.open("#modalCreacionCriatura") 
}

// Filtro de habitats
function mostrarCriaturas (habitat) {
    ocultarCriaturas();
    if (habitat === "") {
        for (const criatura of criaturas) {
            let criaturaInicio = document.getElementById(criatura.especie)
            criaturaInicio.classList.remove("criatura-inact");
        }
    } else {
        for (const criatura of criaturas) {
            if (criatura.habitat === habitat) {
                let criaturaInicio = document.getElementById(criatura.especie);
                criaturaInicio.classList.remove("criatura-inact");
            } 
        }
    }
}

// Ocultar las criaturas y mostrar criaturas
function ocultarCriaturas () {
    for (const criatura of criaturas) {
        let criaturaInicio = document.getElementById(criatura.especie)
       criaturaInicio.classList.remove("criatura-inact");
       criaturaInicio.classList.add("criatura-inact");
    }
    for (const criatura of criaturasDisponibles) {
        let criaturaInicio = document.getElementById(criatura.especie)
       criaturaInicio.classList.remove("criatura-inact");
       criaturaInicio.classList.add("criatura-inact");
    }
}

// Crear criaturas desde modal
const crearCriatura = () => {
    const nombre = document.getElementById("nombre").value;
    const especie = document.getElementById("especie").value;
    const edad = document.getElementById("edad").value;
    const sexo = document.getElementById("sexo").value;
    const habitat = document.getElementById("habitat").value;

    const criaturaNueva = criaturasDisponibles.find(criatura => criatura.especie === especie)
    criaturasDisponibles = criaturasDisponibles.filter(criatura => criatura.especie != especie)

    criaturaNueva.nombre = nombre;
    criaturaNueva.edad = edad;
    criaturaNueva.sexo = sexo;
    criaturaNueva.habitat = habitat;

    criaturas.push(criaturaNueva);

    myModal.close("#modalCreacionCriatura") 
    mostrarCriaturas("");

    const guardar = {
        "criaturas": criaturas,
        "criaturasDisponibles": criaturasDisponibles 
    }
    localStorage.setItem("storage", JSON.stringify(guardar));
}

mostrarCriaturas("")