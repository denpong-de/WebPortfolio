var postIndex = 1;
var input;
var postButton;

function postFunction(){

    input = document.getElementById("text1").value;

    if(input != ""){
        if(postIndex == 1){
            document.getElementById("topic1").innerHTML = input;
        }
        else if(postIndex == 2){
            document.getElementById("comment1").innerHTML = input;
        }
        else{
            document.getElementById("comment2").innerHTML = input;
            document.getElementById("postButton").disabled = true;
        }
    
        document.getElementById("text1").value = "";
        postIndex++;
    }
}

function clearFunction(){
    postIndex = 1;
    document.getElementById("topic1").innerHTML = "";
    document.getElementById("comment1").innerHTML = "";
    document.getElementById("comment2").innerHTML = "";
    document.getElementById("postButton").disabled = false;
}
