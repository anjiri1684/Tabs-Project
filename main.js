const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button")
const article = document.querySelectorAll(".content")

tabs.addEventListener("click", (event) =>{
  const id = event.target.dataset.id;

  if(id){
    btns.forEach((btns) =>{
      btns.classList.remove("live")
    })
    event.target.classList.add("live")
    article.forEach((article)=>{
      article.classList.remove("live")
    });
    const element = document.getElementById(id);
    element.classList.add("live")
  }
})