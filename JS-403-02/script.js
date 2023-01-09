var dum=document.getElementsByClassName("drum")
        for(let i=0;i<dum.length;i++){
            dum[i].addEventListener('click',(event)=>{
                // console.log(dum[i].innerText);
                playsound(dum[i].innerText)
            })
        }
        function playsound(params) {
            if(params=='w'){
                const audio=new Audio("sounds/crash.mp3")
                audio.play()

            }else if(params=='a'){
                const audio=new Audio('sounds/buzz.mp3')
                audio.play()
            }else if(params=='s'){
                const audio=new Audio('sounds/buzzer.mp3')
                audio.play()

            }else if(params=='d'){
                const audio=new Audio('sounds/crock.mp3')
                audio.play()

            }else if(params=='j'){
                const audio=new Audio('sounds/snare.mp3')
                audio.play()

            }else if(params=='k'){
                const audio=new Audio('sounds/pin.mp3')
                audio.play()

            }else if(params=='l'){
                const audio=new Audio('sounds/kick-bass.mp3')
                audio.play()

            }
        }