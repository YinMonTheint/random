function onClickBtnHandler(){
    let inputText = document.getElementById('text').value;
   
    randomCharacter(inputText);
}
function randomCharacter(str)
    {
        let randomIndex = Math.floor(Math.random() * str.length);
        let output = str.charAt(randomIndex);
        document.getElementById("result").innerText = output;
       
    } 