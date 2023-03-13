let langs = document.querySelector(".langs"),
     link = document.querySelectorAll("a"),
     item1 = document.querySelector(".item1"),
     item2 = document.querySelector(".item2"),
     item3 = document.querySelector(".item3"),
     descr = document.querySelector(".description");

link.forEach(el=>{
     el.addEventListener("click", ()=>{
          langs.querySelector(".active").classList.remove("active");
          el.classList.add("active");

          let attr = el.getAttribute("language")

          item1.textContent = data[attr].item1
          item2.textContent = data[attr].item2
          item3.textContent = data[attr].item3
          descr.textContent = data[attr].description
     })
})

let data = {
     english: {
        item1: "ABOUT",
        item2: "PROYECTS",
        item3: "CONTACT",
        description: "Software Engineer, Back-End & Cloud Developer."
     },
     spanish: {
        item1: "YO",
        item2: "PROYECTOS",
        item3: "CONTACTO",
        description: 'Desarrolladora de Software, Back-End & Cloud Developer.'
     }
}