// document.getElementById('generate-pin').addEventListener('click',function generate(){
//     const random = Math.random()*10000;
//     const round = Math.round(random);
//     document.getElementById('input-field').value = round;



// })
function getRandom() {
    const random = Math.round(Math.random() * 10000);
    const string = random + '';
    if (string.length === 4) {
        document.getElementById('input-field').value = string;
    }
    else {
        return getRandom();
    }
}
document.getElementById('event-bubble').addEventListener('click',function(event){
    const digit = event.target.innerText;
    if (isNaN(digit)){
        if(digit === 'C'){
            document.getElementById('digit-input').value = '';
        }
    }
    else {
       let input= document.getElementById('digit-input').value;
       input = input + digit;
       document.getElementById('digit-input').value = input;
    }
})
function verifyPin(){
    const gen =document.getElementById('input-field').value;
    const pen = document.getElementById('digit-input').value;
    if (gen === pen){
        document.getElementById('wrong').style.display= 'none'
        document.getElementById('right').style.display= 'block'
    }
    else {
        document.getElementById('wrong').style.display= 'block'
        document.getElementById('right').style.display= 'none'
    }
}