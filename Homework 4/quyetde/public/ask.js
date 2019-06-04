const textInput = document.querySelector('textarea');
const remainElement = document.querySelector('remain');

textInput.addEventListener("input",() => {
    const inputLength = document.querySelector('textarea').value.length;
    const remain = 200 - inputLength;
    console.log(remain);
    if(remain <= 0){ 
        textInput.value = textInput.value.slice(0,200);
        document.getElementById('remain').innerText = 0 ;
    } else document.getElementById('remain').innerText = remain;
});