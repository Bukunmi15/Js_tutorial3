function ageinFigures (){
    const birthYear = prompt('What Year were you born....Good Friend');
    const ageinFiguress = (2023 - birthYear) ;
    const h1 = document.createElement('h1') ;
    const textAnswer = document.createTextNode('YOUR age is ' + ageinFiguress +  ' year old');
    h1.setAttribute('Id','Yourage');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1)
}


function reset (){
    document.getElementById('Yourage').remove();
}




