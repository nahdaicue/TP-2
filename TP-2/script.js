const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");

boton1.addEventListener("click", ()=>{
    if (input1.style.display == "block"){
        input1.style.display = "none";
    }else {
        input1.style.display = "block";
    }
});

boton2.addEventListener("click", ()=>{
    if (input2.style.display == "block"){
        input2.style.display = "none";
    }else {
        input2.style.display = "block";
    }
});

//la "e" es por que no todos los navegadores funciona bien el evento. Use textContent e vez de innerHTML para que no puedan meter etiquetas.
input1.addEventListener("keyup", (e)=>{
    if(e.key === "Enter"){
    const text = input1.value;
    text1.textContent = text;
    input1.style.display = "none";
    input1.value = "";
    }
})

input2.addEventListener("keyup", (e)=>{
    if(e.key === "Enter"){
    const text = input2.value;
    text2.textContent = text;
    input2.style.display = "none";
    input2.value = "";
    }
})