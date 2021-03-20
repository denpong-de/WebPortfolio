window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);
const regisUsername = urlParams.get('username')
const regisPassword = urlParams.get('password')

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	var username = document.forms["myLogin"]["username"];
	var password = document.forms["myLogin"]["password"];

	if(username.value != regisUsername || password.value != regisPassword){
		alert("Invalid Username or Password");
		return false;
	}
	else{
		alert("login successfully");
	}
}

			