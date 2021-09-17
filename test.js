window.onload=function(){
}


function save(){
    alert(document.getElementById("myInput").value);
}

var test=document.getElementById("test123");
test.onClick = function(){
    alert("button pressed!");
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




