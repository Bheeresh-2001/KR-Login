function sub(){
    // let error
    let Name= document.getElementById("uName").value
    let pw = document.getElementById("pass").value
    let cp = document.getElementById("con").value
    if(Name == "" || Name == null){
        // alert("Enter user Name")
        // error = ("Enter Name")
        if(true){
        document.getElementById("na").innerHTML = `Enter a Name`;
        na.style.color='red'
        return false
        }
        else{
            document.getElementById("text").classList.add("newStyle")
        }
    }
    else if(pw == "" || pw == null){
        // alert("Enter password")
        document.getElementById("pa").innerHTML = `Enter password`
        pa.style.color='red'
        pa.style.margin=`0 0 0 100px`;
        return false

    }
    else if(pw.length <=6){
        // error = ("password must be have 6 character")
        document.getElementById("pa").innerHTML = `password must be have 6 character`;
        pa.style.color='red'
        return false
    }


    else if(cp == "" || cp == null){
        // alert("Enter password")
        document.getElementById("ca").innerHTML = `Enter Confirm password`;
        ca.style.color='red'
        return false
    }
    else if(cp!==pw){
        // alert("Password not matched")
        document.getElementById("ca").innerHTML = `password not matched`;
        ca.style.color='red'
        return false
    }
    else{
        // alert("Successfull")
        document.getElementById("su").innerHTML = `Subit Successfull`;
        su.style.color='green'

        return true

    }   
}
function show(){
    let hide=document.getElementById("pass")
    if(hide.type=="password"){
        pass.type="text"
    }
    else{
        pass.type=("password")
    }
}


function cnshow(){
    let hide=document.getElementById("con")
    if(hide.type=="password"){
        con.type="text"
    }
    else{
        con.type=("password")
    }
}

//Reload page when clicking reset//

let reset = document.getElementById("clr");
reset.addEventListener('click', function (){
    location.reload();
})

