const botones = document.querySelectorAll(".menu_item");
const sections = document.querySelectorAll(".sec");
console.log(sections)
for(let i=0;i<botones.length;i++)
{
    botones[i].addEventListener("click", function () {
        sections[i].scrollIntoView({
            behavior: 'smooth'
        });
    });
}
const botones2=document.querySelectorAll(".sliderItem")
for(let i=0;i<botones2.length;i++)
{
    botones2[i].addEventListener("click", function () {
        sections[i].scrollIntoView({
            behavior: 'smooth'
        });
    });
}