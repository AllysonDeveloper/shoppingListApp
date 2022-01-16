var btn = document.getElementById("btn");
class Item{
    descricao;
    preco;
    qtd;
    total;
}

var erroVazio = document.getElementById("erro-campo-vazio");
var erroNum = document.getElementById("erro-num");
var inputItem =  document.getElementById("item");
var inputPreco = document.getElementById("preco")
var inputQtd = document.getElementById("quantidade");
btn.addEventListener("click", function(){
    if(inputItem.value == '' || inputPreco.value == '' || inputQtd.value == ''){
        erroVazio.style.display = "block";
        erroNum.style.display = "none";
    }else if(isNaN(parseFloat(inputPreco.value)) || isNaN(parseInt(inputQtd.value))){
        erroVazio.style.display = "none";
        erroNum.style.display = "block";
    }else{
        erroVazio.style.display = "none";
        erroNum.style.display = "none";
        var item = new Item();  
        item.descricao = inputItem.value;
        item.preco = parseFloat(inputPreco.value.replace(',','.'));
        item.qtd = parseFloat(inputQtd.value.replace(',','.'));
        parseFloat(item.total = item.qtd * item.preco);
        var list = document.querySelector(".list");
        var listcontent = document.createElement("div");
        listcontent.setAttribute('class','list-content');
        listcontent.innerHTML = `
        <span class="item">`+item.descricao+`</span>
        <span class="preco">`+item.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})+`</span>
        <span class="quantidade">`+item['qtd']+`</span>
        <span class="total">`+item.total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})+`</span>
        <span class="remover">X</span>
        `;

        list.appendChild(listcontent);

        var rmv = document.querySelectorAll('.list-content .remover');
        var listcontens = document.querySelectorAll('.list-content');
        for(let i = 0; i < rmv.length; i++){
            rmv[i].addEventListener('click',function(){
                listcontens[i].remove();
            })
        }
    }
})




