document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nom").value;

 
    document.getElementById("resultadoNombre").innerText = `Bienvenido ${nombre}, vamos a calcular su viaje`;
    document.getElementById("formularioDestino").hidden = false;

});

document.getElementById("formularioDestino").addEventListener("submit", function(event){
    event.preventDefault();

    const destino = document.getElementById("pais").value;
    
    document.getElementById("resultadoDestino").innerText =  `¿Cuantos dias desea estar en ${destino}?`;
    document.getElementById("formularioDias").hidden = false;

});



document.getElementById("formularioDias").addEventListener("submit", function(event){
    event.preventDefault();
    const destino = document.getElementById("pais").value.trim().toLowerCase();
    const dias = parseInt(document.getElementById("dias").value);
    const precios = {
        "cuzco": 800,
        "miami": 1500,
        "berlin": 1300,
        "rio": 1000,
        "barcelona": 1500,
        "tokyo": 1050,
        "sofia": 700,
        "bsas": 950
    };
    const precioDia = precios[destino];
    const totalPrecio = precioDia * dias;
    document.getElementById("resultadoDias").innerText = `Para estar ${dias} dias en ${destino} se necesitan ${totalPrecio}$`


}); 