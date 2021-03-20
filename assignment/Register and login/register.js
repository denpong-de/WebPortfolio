window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var pass = document.forms["myForm"]["password"];
    var rePass = document.forms["myForm"]["rePassword"];

    if(pass.value != rePass.value){
        return false;
    }
}