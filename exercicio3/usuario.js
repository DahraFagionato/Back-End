function validar(){
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    var userCorreto = "dahraFagionato";
    var passCorreto = "291414";

    if(userCorreto == user && passCorreto == pass){
        alert("Login realizado com sucesso");
        window.location.href = "usuario.html" 
    }else{
        alert("Usuário ou senha inválidos!!");
    }
}