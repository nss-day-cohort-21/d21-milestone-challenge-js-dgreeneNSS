console.log('Hello World');

let NR = document.getElementById('number');
let char = document.getElementById('character');

function growTree(NR, char) {
    if (NR == ""){
        alert("Both fields must have input!")
    }else if(char == ""){
        alert("Both fields must have input!")
    }else{
        for(let i = 0; i <= NR; i++){
        let tree = "";
            for(let o = 0; o <= NR - i; o++){
            tree += " ";
            }
        for (let c = 0; c < (i * 2) - 1; c++){
           tree += char;
            }
           console.log(tree);
      }
    }
}
   

let butt = document.getElementById('button');
butt.addEventListener("click", function(){
    growTree(NR.value, char.value);
});

document.addEventListener("keyup", function(event) {
    if(event.which === 13) {
       growTree(NR.value, char.value);
    }
});