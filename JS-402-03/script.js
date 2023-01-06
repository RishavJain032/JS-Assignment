var main= document.getElementById("main")
function additem(){
    var item= document.getElementById("item").value

    if(item ===""){
   alert("Please Enter Valid Input")

    }
    else{
    alert.innerHTML=""
    var div= document.createElement("div")
    div.classList.add("cartlist")
    var ul= document.createElement("ul")
    var li= document.createElement("li")
    ul.appendChild(li)
    div.appendChild(ul)
    var item= document.getElementById("item").value
    li.innerText=item
    var button= document.createElement("button")
     button.innerText="Remove"
     button.style.marginLeft= "3rem"
     button.addEventListener("click",(event)=>{
        div.remove();
     })
     li.appendChild(button)
    main.appendChild(div)
    document.body.appendChild(main)
    document.getElementById("item").value=""
    }


}