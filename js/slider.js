const botonMenu=document.querySelector(".sliderButton")
const menu=document.querySelector(".sliderPanel")
botonMenu.addEventListener("click", function()
{
    botonMenu.classList.toggle("change")
    validar ()
})
function validar ()
{
    if(botonMenu.classList.contains("change"))
    {
        menu.style="right: 0%;" 
    }
    else
    {
        menu.style="right: 100%;"
    }
}
validar ()