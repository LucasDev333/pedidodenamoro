function sim(){
    alert("você aceitou namorar comigo <3")
}
function desvia(t){
    var btn = t;
   btn.style.position = "absolute";
   btn.style.bottom = geraPosicao(10, 90);
   btn.style.left = geraPosicao(10, 90);
    console.log("opa, desviei kkk");
}

randomNumber (0, 100);
function geraPosicao(min, max) {
return Math.random() * (max - min) + min + "%";
}