
function irCompras() {
    document.getElementById('informe').style.visibility ='visible';
    document.getElementById('L_produto').style.visibility ='visible';
    document.getElementById('produto').style.visibility ='visible';
    document.getElementById('L_categoria').style.visibility ='visible';
    document.getElementById('congelados').style.visibility ='visible';
    document.getElementById('L_congelados').style.visibility ='visible';
    document.getElementById('frutas').style.visibility ='visible';
    document.getElementById('L_frutas').style.visibility ='visible';
    document.getElementById('laticinios').style.visibility ='visible';
    document.getElementById('L_laticinios').style.visibility ='visible';
    document.getElementById('Incluir').style.visibility ='visible';
    document.getElementById('remover').style.visibility ='visible';
    document.getElementById('finaliza').style.visibility ='visible';
    document.getElementById('iniciar').style.visibility ='hidden';
    document.getElementById('mensagemFinal').style.display ='none';
    document.getElementById('produto').focus();
    }
let listaProdutos = [];
function Incluir() {
    const produto = document.getElementById('produto').value.trim(); 
    const categoriaElement = document.querySelector('input[name="categoria"]:checked');
    const categoria = categoriaElement ? categoriaElement.value : '';
  
    if (produto === '' || categoria === '') {
        alert('Digite o nome do produto e selecione uma categoria.');
    } else {
       listaProdutos.push({ nome: produto, categoria: categoria });

       document.getElementById('produto').value='' ;
       const radios = document.querySelectorAll('input[name="categoria"]');
       radios.forEach(function(radio) {
        radio.checked = false;
        });
       console.log(listaProdutos);
       document.getElementById('produto').focus();
            
       }

}
function Remove() {
   if (listaProdutos.length === 0) {
      alert('Não contém itens na lista de compras.');
   } else {
     console.log('entrou')   ;
     const produto = document.getElementById('produto').value.trim(); 
     const categoriaElement = document.querySelector('input[name="categoria"]:checked');
     const categoria = categoriaElement ? categoriaElement.value : ''; 
   
     if (produto === '' || categoria === '') {
         alert('Digite o nome do produto e selecione uma categoria.');
     } else {
       const index = listaProdutos.findIndex(item => item.nome === produto && item.categoria === categoria);
       console.log(index);
       if (index !== -1) {
          listaProdutos.splice(index,1);
         alert(` O produto :  ${produto}  da  Categoria : ${categoria} ,  foi excluido!!!` );
         document.getElementById('produto').value='' ;
         const radios = document.querySelectorAll('input[name="categoria"]');
         radios.forEach(function(radio) {
         radio.checked = false;
        
        });
        } else {
           alert('Produto não encontrado no array.');
        } 
     } 
   
     document.getElementById('produto').focus();

    }
}

function Finaliza() {
    document.getElementById('informe').style.visibility ='hidden';
    document.getElementById('L_produto').style.visibility ='hidden';
    document.getElementById('produto').style.visibility ='hidden';
    document.getElementById('L_categoria').style.visibility ='hidden';
    document.getElementById('congelados').style.visibility ='hidden';
    document.getElementById('L_congelados').style.visibility ='hidden';
    document.getElementById('frutas').style.visibility ='hidden';
    document.getElementById('L_frutas').style.visibility ='hidden';
    
    document.getElementById('laticinios').style.visibility ='hidden';
    document.getElementById('L_laticinios').style.visibility ='hidden';
    document.getElementById('Incluir').style.visibility ='hidden';
    document.getElementById('remover').style.visibility ='hidden';
    document.getElementById('finaliza').style.visibility ='hidden';
    document.getElementById('iniciar').style.visibility ='visible';
 var categorias = {};
 listaProdutos.forEach(function(produto) {
     if (!categorias[produto.categoria]) {
         categorias[produto.categoria] = [];
     }
     categorias[produto.categoria].push(produto.nome);
 });

 var mensagem = "Lista de Produtos por Categoria:\n\n";
 for (var categoria in categorias) {
     mensagem += categoria + ":\n";
     categorias[categoria].forEach(function(nome, index) {
         mensagem += "  " + (index + 1) + ". " + nome + "\n";
     });
     mensagem += "\n";
 }

 var mensagemFinal = document.getElementById('mensagemFinal');
 if (mensagemFinal) {
     mensagemFinal.style.display = 'block'; 
     mensagemFinal.style.visibility = 'visible';
     mensagemFinal.innerHTML = mensagem.replace(/\n/g, "<br>");
 } else {
     console.error("Elemento com ID 'mensagemFinal' não encontrado.");
 }

 alert(mensagem);

 listaProdutos = [];
}



