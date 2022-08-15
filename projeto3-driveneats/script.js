let nomePrato;
let precoPrato;
let nomeBebida;
let precoBebida;
let nomeSobremesa;
let precoSobremesa;


function mudarNum (precoString) {

    let preco = precoString.replace("R$ ","");
    preco = preco.replace(",", ".");
    preco = Number(preco) * 100;

    return preco;
}


function borda (){

}


















/*

var pedidos = {}

function addProduto(produto, tipo) {
    let el = document.getElementById(produto);
    if (el.classList.contains('selecionado')) {
        el.classList.remove('selecionado');
        delete pedidos[tipo]
    } else {
        let campo = document.getElementById(tipo);
        Object.entries(campo.children).forEach((e)=>{
            e[1].classList.remove('selecionado');
        });
        pedidos[tipo] = {
            nome: el.children[1].attributes.value.nodeValue,
            valor: el.children[3].attributes.value.nodeValue,
        }
        el.classList.add('selecionado');
    }
    acionarBotao(verificarMarcacoes());
}


function verificarMarcacoes() {
    campos = ['campo1', 'campo2', 'campo3'];
    let result = true;
    campos.forEach((e)=>{
        let campo = document.getElementById(e);
        let verify = Object.entries(campo.children).map((e) => (
            e[1].classList.contains('selected')
        ));
        if (!verify.includes(true)) result = false;
    });
    return result;
}


function acionarBotao(value) {
    let botao = document.getElementById('botaoFechar');
    if (value) {
        botao.classList.add('ok');
        botao.innerHTML = 'Fechar Pedido';
    } else {
        botao.classList.remove('ok');
        botao.innerHTML = 'Selecione os 3 itens <br> para fechar o pedido';
    }
}

function fecharPedido(act) {
    let botao = document.getElementById('botaoFechar');
    if (act){
        if (botao.classList.contains('ok')) {

            let total = (
                parseFloat(pedidos.campo1.valor) +
                parseFloat(pedidos.campo2.valor) +
                parseFloat(pedidos.campo3.valor)
            ).toFixed(2)

            document.getElementById('compras').innerHTML = `
                <div class="compras">
                    <div class="lista">${pedidos.campo1.nome}</div>
                    <div class="listaValor">${pedidos.campo1.valor}</div>
                </div>
                <div class="compras">
                    <div class="lista">${pedidos.campo2.nome}</div>
                    <div class="listaValor">${pedidos.campo2.valor}</div>
                </div>
                <div class="compras">
                    <div class="lista">${pedidos.campo3.nome}</div>
                    <div class="listaValor">${pedidos.campo3.valor}</div>
                </div>
                <div class="compras">
                    <div class="lista total">Total</div>
                    <div class="listaValor total">R$ ${total}</div>
                </div>
            `;
            document.getElementById('modbg').classList.add('appears');
            document.getElementById('modcontent').classList.add('appears');
        }
    } else {
        document.getElementById('modbg').classList.remove('appears');
        document.getElementById('modcontent').classList.remove('appears');
    }
}

function pedir() {
    document.getElementById('modbg').classList.remove('appears');
    document.getElementById('modcontent').classList.remove('appears');

    campos = ['campo1', 'campo2', 'campo3'];
    campos.forEach((e)=>{
        let campo = document.getElementById(e);
        let verify = Object.entries(campo.children).map((e) => (
            e[1].classList.remove('selected')
        ));
    });
}