const carrusel = document.querySelector(".bg_imagenes");
const irIzq = document.querySelector(".fa-circle-chevron-left");
const irDer = document.querySelector(".fa-circle-chevron-right");
let posicion = 0;
var indice = 0
var jsonPROMOS = `[
  {
    "tituloDelgado": "Potencia y precisión en cada pulso de combustible",
    "tituloGrueso": "INYECCION ELECTRONICA",
    "nombrePromo": "PROMO INYECCION ELECTRONICA",
    "leyendaPromo": "¡Optimiza el rendimiento de tu motor!",
    "wa": "Me interesa la promo de Inyeccion Electronica",
    "parrafoPromo": "Aprovecha nuestra promo de inyección electrónica y experimenta una mayor eficiencia en el consumo de combustible y un mejor rendimiento en cada kilómetro. ¡Potencia y precisión en cada pulso de combustible!",
    "precioPromo": "DESCUENTO",
    "imagen":"url('img/bg1.jpg')"
  },
  {
    "tituloDelgado": "Tienes un remis o un taxi?",
    "tituloGrueso": "PRECIOS ESPECIALES",
    "nombrePromo": "PROMO TAXI / REMIS",
    "leyendaPromo": "¡Tarifas exclusivas para profesionales del volante!",
    "wa": "Tengo un taxi/remis y me interesa la promo",
    "parrafoPromo": "Sabemos lo importante que es mantener tu vehículo en excelentes condiciones para brindar un servicio de calidad. Aprovecha nuestros precios especiales para remises y taxis y mantén tu vehículo siempre en óptimas condiciones.",
    "precioPromo": "DESCUENTO",
    "imagen":"url('img/bg2.jpg')"
  },
  {
    "tituloDelgado": "El corazón de tu vehículo, cuidado y reparado con experiencia",
    "tituloGrueso": "MECANICA",
    "nombrePromo": "PROMO MECANICA",
    "leyendaPromo": "¡Confía en nuestros expertos mecánicos!",
    "wa": "Me interesa la mecanica",
    "parrafoPromo": "En nuestro taller, cuidamos y reparamos el corazón de tu vehículo con la experiencia y el conocimiento necesarios. No importa si necesitas una revisión, una reparación o un mantenimiento, nuestro equipo de mecánicos profesionales está listo para brindarte un servicio de calidad.",
    "precioPromo": "DESCUENTO",
    "imagen":"url('img/bg3.jpg')"
  },
  {
    "tituloDelgado": "Precision y eficiencia",
    "tituloGrueso": "DIAGNOSTICO COMPUTARIZADO",
    "nombrePromo": "DIAGNOSTICO COMPUTARIZADO",
    "leyendaPromo": "¡Descubre los secretos de tu vehículo!",
    "wa": "Me interesa el diagnostico computarizado",
    "parrafoPromo": "Nuestro servicio de diagnóstico computarizado te permite conocer a detalle el estado de tu vehículo. Mediante tecnología de vanguardia, identificamos cualquier anomalía y te brindamos soluciones precisas y eficientes. ¡Descubre los secretos de tu vehículo con nuestro diagnóstico computarizado!",
    "precioPromo": "$6.000.-",
    "imagen":"url('img/bg4.jpg')"
  },
  {
    "tituloDelgado": "La diferencia entre un motor común y uno afinado, la emoción en cada aceleración",
    "tituloGrueso": "AFINADOS",
    "nombrePromo": "PROMO AFINADOS",
    "leyendaPromo": "¡Potencia y rendimiento al máximo nivel!",
    "wa": "Me interesa la promo de Afinados",
    "parrafoPromo": "Si buscas una experiencia de conducción emocionante y un rendimiento óptimo de tu motor, nuestros servicios de afinado son ideales para ti. Ajustamos y optimizamos cada componente para que tu vehículo alcance su máximo potencial en cada aceleración. ¡Vive la emoción de un motor afinado!",
    "precioPromo": "DESCUENtO",
    "imagen":"url('img/bg5.jpg')"
  },
  {
    "tituloDelgado": "Cambio de correa de distribucion de tu Amarok",
    "tituloGrueso": "PRECIO ESPECIAL",
    "nombrePromo": "CAMBIA LA CORREA DE TU AMAROK",
    "leyendaPromo": "¡Mantén tu Amarok en perfecto estado!",
    "wa": "Me interesa la promo de cambio de correa dentada de la Amarok",
    "parrafoPromo": "La correa de distribución es una parte crucial del motor de tu Amarok, y su cambio regular es fundamental para evitar daños costosos. Aprovecha nuestro precio especial para el cambio de correa de distribución y mantén tu Amarok en perfecto estado de funcionamiento.",
    "precioPromo": "$50.000.-",
    "imagen":"url('img/bg6.jpg')"
  },
  {
    "tituloDelgado": "Agarre, control y estabilidad en cada curva, gracias a un tren delantero impecable",
    "tituloGrueso": "Embrague y Tren Delantero",
    "nombrePromo": "PROMO EMBRAGUE Y TREN DELANTERO",
    "leyendaPromo": "¡Maneja con seguridad y confianza!",
    "wa": "Me interesa la promo de el embrague y tren delantero",
    "parrafoPromo": "Un buen agarre, control y estabilidad son esenciales para una conducción segura. Nuestra promo de embrague y tren delantero te ofrece la posibilidad de mantener estas características en óptimas condiciones. Confía en nuestros expertos y maneja con seguridad y confianza.",
    "precioPromo": "DESCUENTO",
    "imagen":"url('img/bg7.jpg')"
  },
  {
    "tituloDelgado": "KANGOO, SANDERO y MOTORES K4M. CAMBIO DE CORREA DENTADA",
    "tituloGrueso": "PRECIO PROMOCIONAL",
    "nombrePromo": "PROMO CAMBIO CORREA DENTADA",
    "leyendaPromo": "¡Mantén tu motor en perfecto sincronismo!",
    "wa": "Me interesa la promo del cambio de correa dentada para kangoo, sandero y motores k4m",
    "parrafoPromo": "La correa dentada es un componente vital en el funcionamiento de motores como los de la Kangoo, Sandero y motores K4M. Aprovecha nuestro precio promocional para el cambio de correa dentada y mantén tu motor en perfecto sincronismo, evitando averías costosas.",
    "precioPromo": "$30.000.-",
    "imagen":"url('img/bg8.jpg')"
  },
  {
    "tituloDelgado": "SIENA Y CORSA: 1.3, 1.4, 1.6",
    "tituloGrueso": "PRECIO PROMOCIONAL",
    "nombrePromo": "PROMO SIENA / CORSA",
    "leyendaPromo": "¡Cuida tu Siena o Corsa a precios especiales!",
    "wa": "Me interesa la promo de los Siena y corsas",
    "parrafoPromo": "Si tienes un Siena o Corsa con motores 1.3, 1.4 o 1.6, aprovecha nuestra promo a precio promocional. Te ofrecemos servicios de calidad a precios especiales para que puedas cuidar y mantener tu vehículo en óptimas condiciones sin gastar de más.",
    "precioPromo": "$15.000.-",
    "imagen":"url('img/bg9.jpg')"
  }
]`;

const jsonDatos = JSON.parse(jsonPROMOS);

irDer.addEventListener("click", function () {
  if (posicion > -100 * (carrusel.children.length - 1)) {
    posicion -= 100;
    carrusel.style.transform = `translateX(${posicion}vw)`;
  }
  const sumar = 1
  valorBg(8, sumar)
});

irIzq.addEventListener("click", function () {
  if (posicion < 0) {
    posicion += 100;
    carrusel.style.transform = `translateX(${posicion}vw)`;
  }
  const sumar = -1
  valorBg(0, sumar)
});
function indices() {
  document.querySelector(".infoServicio h2").textContent = jsonDatos[indice].tituloGrueso
  document.querySelector(".infoServicio h3").textContent = jsonDatos[indice].tituloDelgado
}
function valorBg(limite, sumar) {
  if (limite != indice) {
    indice = indice + sumar
    indices()
  }
}
const boton = document.querySelector(".infoServicio button");
const botonCerrar = document.querySelector(".fa-square-xmark")

boton.addEventListener("click", function () {
  document.querySelector(".Promo_Template").style = "display:flex"
  document.querySelector(".promo_contenido h2").textContent = jsonDatos[indice].nombrePromo;
  document.querySelector(".promo_contenido legend").textContent = jsonDatos[indice].leyendaPromo;
  document.querySelector(".promo_contenido p").textContent = jsonDatos[indice].parrafoPromo;
  document.querySelector(".promo_contenido h3").textContent = jsonDatos[indice].precioPromo;
  document.querySelector(".promo_imagen").style.backgroundImage = jsonDatos[indice].imagen;
})
botonCerrar.addEventListener("click", function () {
  document.querySelector(".Promo_Template").style = "display:none"
})
document.querySelector(".promo_contenido button").addEventListener("click", function () {
  var mensaje = jsonDatos[indice].wa// Unir los valores con saltos de línea

  var numeroTelefono = "+5493516967197";
  var enlace = "https://api.whatsapp.com/send?phone=" + numeroTelefono + "&text=" + encodeURIComponent(mensaje);
  window.location.href = enlace;

})

const botonesCard = document.querySelectorAll(".card button");
for (let i = 0; i < botonesCard.length; i++) {
  const index = [1, 5, 8]
  botonesCard[i].addEventListener("click", function () {
    document.querySelector(".Promo_Template").style = "display:flex"
    document.querySelector(".promo_contenido h2").textContent = jsonDatos[index[i]].nombrePromo;
    document.querySelector(".promo_contenido legend").textContent = jsonDatos[index[i]].leyendaPromo;
    document.querySelector(".promo_contenido p").textContent = jsonDatos[index[i]].parrafoPromo;
    document.querySelector(".promo_contenido h3").textContent = jsonDatos[index[i]].precioPromo;
    document.querySelector(".promo_imagen").style.backgroundImage = jsonDatos[index[i]].imagen;
  })
}