function displayChekList(response){
    new Typewriter("#travel-cheklist",{
        strings:response.data.answer,
        autoStart:true,
        delay:1,
        cursor:"",
    });

}
function displayList(event){
    event.preventDefault();


}


let instructionsInput=document.querySelector("#user-instructions");
 let context=`User instructions:You are well traveld expert,what is the 5  clothes items you need to pack  , when traveling to  user instructions destination.Make sure to use user instructions.Make the sentence short.Every point should start from a new line.Be very spesific about the place the user is visiting `;
 let prompt=`Generate 5 travel items  for traveling for the first time to ${instructionsInput.value}`;
 let apiKey="fd0f7619afd34b6f4ebdft43802e1ofb";
 let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
axios.get(apiUrl).then(displayChekList);

let travelFormElement=document.querySelector("#travel-form");
travelFormElement.addEventListener("submit",displayList);