const inputs= document.querySelectorAll(".constrols input");

function handleUpdate(){
const suffix= this.dataset.sizing || "";
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

//listen to the change events in inputs
inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
