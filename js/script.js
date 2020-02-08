function adicionar() {
    var acoes = document.getElementById('acoes').value;
    var lista = document.getElementById('lista').innerHTML;

    document.getElementById('lista').innerHTML = lista + "<li>" + acoes + "</li>";
    document.getElementById('acoes').value = ""
}

function rolar() {
    window.scrollTo(0,document.querySelector(".scroll").scrollHeight);
}