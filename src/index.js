function displayChekList(event){
    event.preventDefault();

new Typewriter("#travel-cheklist",{
    strings:"wallet, passport, swimsuit",
    autoStart:true,
    delay:1,
    cursor:"",
});
}

let travelFormElement=document.querySelector("#travel-form");
travelFormElement.addEventListener("submit",displayChekList);
