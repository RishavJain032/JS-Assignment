const temp=document.getElementById("head1")
        const temp2=document.getElementById("head2")
        const dis=document.getElementsByClassName("downdiv")[0]

        var h=document.createElement("h1")
        document.addEventListener("keypress",(event)=>{
            console.log(event);
            dis.style.display="flex"
            temp.innerHTML=`You Have Pressed <div class="name" > ${event.key}</div>`

            temp2.innerText=`${event.keyCode}`
        })
