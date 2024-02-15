var shown=false;
function showHideEmail(){
	if(shown){
		document.getElementById('email').innerHTML="show my email";
	shown=false;
	}
	else{
		var myEmail="<a href='mailto:vempatna"+"@"+
		"mail.uc.edu'>vempatna"+"@"+"mail.uc.edu</a>";
		document.getElementById('email').innerHTML=myEmail;
		shown=true
	}
}