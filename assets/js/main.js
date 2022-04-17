function myfunction(){
    
    let x = confirm ('change background ?')

    if (x) {
        
        document.body.style.background = 'black'
    }
    else{
        alert('no change')
    }


}

let age = prompt('enter your age')

if (age < 18){
    alert ('no enterence')
}

else alert ('succesfull')


