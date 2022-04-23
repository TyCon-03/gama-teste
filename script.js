// first box 

const encodeInput = document.querySelector('#base64Input');
const decodeButton = document.querySelector('#decode');
const output = document.querySelector('#base64Output');

decodeButton.addEventListener('click' ,showDecodeResult);

function showDecodeResult() {
    const inputValue = encodeInput.value
    let decodedValue = atob(inputValue)
    output.innerHTML = decodedValue
}

// second box 

function go(){

    var str=document.getElementById("t1").value;
    var vowelList="aeiouáéíóúãõ";
    var consonantList="bcdfghjklmnpqrstvwxyzç";
    var vowelCounter=0;
    var consonantCounter=0;
    

    for(var x=0;x<str.length;x++){
        for(var y=0;y<vowelList.length;y++){
            if(str[x].toLowerCase() == vowelList[y])
            {
                vowelCounter++;
            }
        }
        for(var z=0;z<consonantList.length;z++){
            if(str[x].toLowerCase() == consonantList[z])
            {
                consonantCounter++;
            }
        }
    }
    document.getElementById("p1").innerHTML="O número de Vogais na área de texto é "+ vowelCounter;
    document.getElementById("p2").innerHTML="O número de Consoantes na área de texto é "+ consonantCounter;
}
