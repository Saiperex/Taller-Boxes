const whatsapp = document.querySelector(".fa-square-whatsapp")
const instagram = document.querySelector(".fa-square-instagram")
const contactos = document.querySelectorAll(".contacto_item")
const redes_slider=document.querySelectorAll(".sliderRedes i")
whatsapp.addEventListener("click", function () {
    window.location.href = "https://api.whatsapp.com/send?phone=5493516967197"
})
instagram.addEventListener("click", function () {
    window.location.href = "https://www.instagram.com/boxes.tallermecanico/"
})

for (let i = 0; i < contactos.length; i++) {
    const enlaces = ["https://api.whatsapp.com/send?phone=5493516967197", "tel:+5493516967197", "https://goo.gl/maps/fLRW1RzaRYu4ZHVQA"]
    contactos[i].addEventListener("click", function () 
    {
        window.location.href =enlaces[i]
    })
}
for(let i=0;i<redes_slider.length;i++)
{
    const enlaces = ["https://api.whatsapp.com/send?phone=5493516967197", "https://www.instagram.com/boxes.tallermecanico/", ""]
    redes_slider[i].addEventListener("click",function()
    {
        window.location.href =enlaces[i]
    })
}
document.querySelector(".servicio_izquierda button").addEventListener("click",function()
{
    window.location.href ="https://api.whatsapp.com/send?phone=5493516967197&text="+encodeURIComponent("[INGRESE SU CONSULTA]")
})