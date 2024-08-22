const form = document.getElementById("form");
const numplayers = document.getElementById("numPlayers");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    window.alert(numplayers.value);
});