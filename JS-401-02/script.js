function hello(){
    let boxes = document.getElementsByClassName("box");
    let n = boxes.length;
    for(let i = 0; i < n; i++){
        if(i % 2 == 1){
            boxes[i].style.backgroundColor='lime';
            boxes[i].style.color = "white";
        }
    }
        boxes[0].setAttribute('style','background-color:blue');
        boxes[0].style.color = "white"
        boxes[n - 1].setAttribute('style','background-color:palevioletred');
        boxes[n - 1].style.color = "white"
        boxes[8].setAttribute('style','background-color:green')
        boxes[8].style.color = "white"

}