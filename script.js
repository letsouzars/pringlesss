function logar() {
    var usuario = document.getElementById('inputUsuario').value 
    var senha = document.getElementById('inputSenha').value

    if((usuario == "admin" || usuario == "admin@admin.com") && senha == "1234"){
        window.location.href = "home.html"
    } else {
        alert("Usuário/Senha incorretos! Tente novamente")
    }

}