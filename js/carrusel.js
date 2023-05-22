const carrusel = document.querySelector(".bg_imagenes");
const irIzq = document.querySelector(".fa-circle-chevron-left");
const irDer = document.querySelector(".fa-circle-chevron-right");
let posicion = 0;
var indice=0
const contenido=[
    ["Potencia y precisión en cada pulso de combustible","INYECCION ELECTRONICA"],
    ["Tienes un remis o un taxi?","PRECIOS ESPECIALES"],
    ["El corazón de tu vehículo, cuidado y reparado con experiencia","MECANICA"],
    ["Precision y eficiencia","DIAGNOSTICO COMPUTARIZADO"],
    ["La diferencia entre un motor común y uno afinado, la emoción en cada aceleración","AFINADOS"],
    ["Cambio de correa de distribucion de tu Amarok","PRECIO ESPECIAL"],
    ["Agarre, control y estabilidad en cada curva, gracias a un tren delantero impecable","Embrague y Tren Delantero"],
    ["KANGOO, SANDERO y MOTORES K4M. CAMBIO DE CORREA DENTADA","PRECIO PROMOCIONAL"],
    ["SIENA Y CORSA: 1.3, 1.4, 1.6","PRECIO PROMOCIONAL"]]
irDer.addEventListener("click", function() 
{
  if (posicion > -100 * (carrusel.children.length - 1)) {
    posicion -= 100;
    carrusel.style.transform = `translateX(${posicion}vw)`;
  }
  const sumar=1
  valorBg(8,sumar)
});

irIzq.addEventListener("click", function() 
{
  if (posicion < 0) {
    posicion += 100;
    carrusel.style.transform = `translateX(${posicion}vw)`;
  }
  const sumar=-1
  valorBg(0,sumar)
});
function indices()
{
  document.querySelector(".infoServicio h2").textContent=contenido[indice][1]
  document.querySelector(".infoServicio h3").textContent=contenido[indice][0]
}
function valorBg(limite,sumar)
{
  if(limite!=indice)
  {
    indice=indice+sumar
    indices()
  }
}