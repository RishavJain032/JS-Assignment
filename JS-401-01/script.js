let inputdata = document.getElementById('Rishav').addEventListener('input',hello);
            function hello(e){
                greeting = e.target.value
                var output = document.getElementById('datainput');
            output.innerHTML=`
            <p>${greeting}</p>`

            }