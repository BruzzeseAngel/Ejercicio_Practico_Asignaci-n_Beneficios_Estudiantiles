class Postulante {
    #porcentajeRSH; // Se utiliza el # para dejar privada una propiedad
    nombre;

    constructor(nombre,porcentajeRSH) {
        this.nombre = nombre;
        this.#porcentajeRSH = porcentajeRSH; //recuerda declarar con # las propiedades privadas :D
    }

    evaluarBeneficio(){
        // Se evalua el porcentaje (propiedad privada) y devuelve un string con el estado.
        if(this.#porcentajeRSH <= 60){
            return "Gratuidad";
        } else if(this.#porcentajeRSH > 60 && this.#porcentajeRSH <= 70){
            return "Beca Bicentenario";
        } else {
            return "Crédito CAE"
        }
    }
}

//Base de dato obtenida del enunciado.
const catalogoCarreras = [
    { nombre: "Ingeniería en TI", arancel: 3500000, admiteGratuidad: true },
    { nombre: "Medicina", arancel: 6000000, admiteGratuidad: true },
    { nombre: "Diseño Gráfico", arancel: 2500000, admiteGratuidad: false },
    { nombre: "Derecho", arancel: 4000000, admiteGratuidad: true }
];

// Variables utilizadas para crear al postulante.
let nombre = prompt('Ingrese el nombre: ');
let porcentaje = parseInt(prompt('Ingrese el porcentaje: '));

//Creación del postulante 1
const postulante1 = new Postulante(nombre, porcentaje);

//Se filtra con el metodo filter() las carreras que admiten gratuidad :D RECUERDA QUE EL METODO filter() GENERA UN NUEVO ARREGLO EL CUAL PUEDE TENER DIFERENTE TAMAÑO YA QUE PUEDE ELIMINAR ELEMENTOS DE UN ARREGLO.
const carreraGratuidad = catalogoCarreras.filter((carrera) => {
    return carrera.admiteGratuidad === true;
});

//Se "filtra" con .map() los nombres de las carreras que aceptan gratuidad. EL METODO MAP() GENERA UN NUEVO ARREGLO PERO NO CAMBIA LAS DIMENSIONES DEL MISMO SINO QUE TRANSFORMA LOS ELEMENTOS.
const nombreCarrerasGratuidad = carreraGratuidad.map((carrera) => {
    return ' ' + carrera.nombre;
})

//Lo mismo que arriba pero con todas las carreras de la base de datos sin filtrar.
const nombreCarreras = catalogoCarreras.map((carrera) => {
    return ' ' + carrera.nombre;
})

// Se utiliza el metodo .reduce() para sumar el valor de todos los aranceles de la carrera. EL METODO reduce() TAMBIEN CREA UN NUEVO ARREGLO PERO COMBINA LA INFORMACION SELECCIONADA, SE DEBE COLOCAR DOS "PARAMETROS" UNO QUE ES EL ACUMULADOR O TOTAL EN ESTE CASO Y EL OTRO EL ELEMENTO A UTILIZAR. RECORDAR QUE AL FINAL DEL USO DEL METODO SE DEBE ASIGNAR UN VALOR DE INICIO, EN ESTE CASO ES 0.
const costoTotalArancel = catalogoCarreras.reduce((total, carrera) => {
    return total + parseInt(carrera.arancel);
},0);

//EXTRACCION POR DESESTRUCTURACION, con este quede loco no se como explicarlo pero es como hacer las cosas al reves. En este caso pienso que es declarar el objeto creado desde sus propiedades.
const { nombre1, porcentajeRSH1} = postulante1;

//SALIDA AL USUARIO. Decidí usar un if else para separar el beneficio de gratuidad con los demás ya que cambian la totalidad de las carreras a optar.
if(postulante1.evaluarBeneficio() === "Gratuidad"){
    window.alert(`
Buenas noches estimado ${nombre1}, el beneficio al cual usted puede optar es ${postulante1.evaluarBeneficio()}.
Las carreras a las que puede ingresar con este beneficio son: ${nombreCarrerasGratuidad}.
`)
} else {
    window.alert(`
Buenas noches estimado ${nombre1}, el beneficio al cual usted puede optar es ${postulante1.evaluarBeneficio()}.
Las carreras a las que puede ingresar son: ${nombreCarreras}.
`);
}

//SALIDAS DE PRUEBA UTILIZADAS EN EL DESARROLLO
/*
console.log(carreraGratuidad);
console.log(nombreCarrerasGratuidad);
console.log(costoTotalArancel);
console.log("Postulantes registrados:", postulante1);
*/


