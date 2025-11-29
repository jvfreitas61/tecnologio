const enviarMensagem = document.getElementById("btSubmit")

enviarMensagem.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Mensagem enviada!")
  
})

function clickMenu() {
    if (itens.style.display == 'flex') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'flex'
    }
}

function fecharMenu(){
  if (itens.style.display == 'flex'){
    itens.style.display = 'none'
  }
}

/*window.onresize = function() {
        location.reload();
};*/

