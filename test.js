window.onload=function(){
}


function save(){
    alert(document.getElementById("myInput").value);
}



function ChangeView(clicked_id){
    if (clicked_id=="button1"){
        document.getElementById("page1").className ="view hide";
        document.getElementById("page2").className ="view";
    }
    else if(clicked_id=="button2"){
        document.getElementById("page2").className ="view hide";
        document.getElementById("page4").className ="view";
    }
    else if(clicked_id=="relation_operation"){
        document.getElementById("page4").className ="view hide";
        document.getElementById("page5").className ="view";
    }
    else if(clicked_id=="thanks_button"){
        document.getElementById("page2").className ="view hide";
        document.getElementById("page3").className ="view";
    }
}

function SaveName(){
    window.first_name = document.getElementById("first_name").value;
    window.second_name = document.getElementById("second_name").value;
}

function PrintName(){
    var name = window.first_name+" "+window.second_name;
    document.getElementById("login_name").innerHTML= name;
    document.getElementById("goodbye_name").innerHTML= name;
}



