let valorAtual=0;
let total=0;
let visor ='';
let visor_2='';
let var_ope='';
let contador =1;
let var_apoio='';
let var_apoio2='';

function limpaVisor() {
    if (visor === 'Pronto para iniciar a operação!'){
        visor='';
    }
}
function zero() {
    limpaVisor();
    if (var_ope ===''){
        console.log(var_ope);
        visor=visor + '0';
        visor_2=visor;
        document.getElementById("visor2").value=visor;
     } else {
         visor= '0';
         visor_2=visor_2 +' '+ var_ope +' '+visor;
         calcula();
     }
}

function um() {
   limpaVisor();
   if (var_ope ===''){
       console.log(var_ope);
       visor=visor + '1';
       visor_2=visor;
       console.log('esta no var_ope= limpo');
       console.log(visor);
       console.log(visor_2);
       document.getElementById("visor2").value=visor;
    } else {
        console.log(var_ope);
        console.log(visor);
        console.log(visor_2);
        visor= '1';
        visor_2=visor_2 +' '+ var_ope +' '+visor;
        calcula();
    }
}

function dois() {
    limpaVisor();
    if (var_ope ===''){
        console.log(var_ope);
        visor=visor + '2';
        visor_2=visor;
        document.getElementById("visor2").value=visor;
     } else {
         visor= '2';
         visor_2=visor_2 +' '+ var_ope +' '+visor;
         calcula();
     }
 }
function tres() {
    limpaVisor();
    if (var_ope ===''){
        console.log(var_ope);
        visor=visor + '3';
        visor_2=visor;
        document.getElementById("visor2").value=visor;
     } else {
         visor= '3';
         visor_2=visor_2 +' '+ var_ope +' '+visor;
         calcula();
     }
}
function quatro() {
    limpaVisor();
    if (var_ope ===''){
        console.log(var_ope);
        visor=visor + '4';
        visor_2=visor;
        document.getElementById("visor2").value=visor;
     } else {
         visor= '4';
         visor_2=visor_2 +' '+ var_ope +' '+visor;
         calcula();
     }
}
function cinco() {
    limpaVisor();
    if (var_ope ===''){
        console.log(var_ope);
        visor=visor + '5';
        visor_2=visor;
        document.getElementById("visor2").value=visor;
     } else {
         visor= '5';
         visor_2=visor_2 +' '+ var_ope +' '+visor;
         calcula();
     }
}
function seis() {
    limpaVisor();
    if (var_ope ===''){
        console.log(var_ope);
        visor=visor + '6';
        visor_2=visor;
        document.getElementById("visor2").value=visor;
     } else {
         visor= '6';
         visor_2=visor_2 +' '+ var_ope +' '+visor;
         calcula();
     }
}
function sete() {
    limpaVisor();
    if (var_ope ===''){
        console.log(var_ope);
        visor=visor + '7';
        visor_2=visor;
        document.getElementById("visor2").value=visor;
     } else {
         visor= '7';
         visor_2=visor_2 +' '+ var_ope +' '+visor;
         calcula();
     }
}
function oito() {
    limpaVisor();
    if (var_ope ===''){
        console.log(var_ope);
        visor=visor + '8';
        visor_2=visor;
        document.getElementById("visor2").value=visor;
     } else {
         visor= '8';
         visor_2=visor_2 +' '+ var_ope +' '+visor;
         calcula();
     }
}
function nove() {
    limpaVisor();
    if (var_ope ===''){
        console.log(var_ope);
        visor=visor + '9';
        visor_2=visor;
        document.getElementById("visor2").value=visor;
     } else {
         visor= '9';
         visor_2=visor_2 +' '+ var_ope +' '+visor;
         calcula();
     }
}

function virgula() {
    limpaVisor();
    if (var_ope ===''){
        console.log(var_ope);
        visor=visor + '.';
        visor_2=visor;
        document.getElementById("visor2").value=visor;
     } else {
         visor= '.';
         visor_2=visor_2 +' '+ var_ope +' '+visor;
    }
}


function soma(){
   if (var_ope===''){ 
        visor_2=visor ;
    }
    var_ope='+';
    calcula();
    visor='';
    var_ope='';
    contador=0;
}

function subtrai(){
    console.log('entrou no botao menos ');
    console.log(var_ope);
    if (var_ope===''){ 
       visor_2=visor ;
    }
     console.log(visor_2);
     var_ope='-';
     calcula();
     visor='';
     var_ope='';
     contador=0;
    
}
 
 
function multiplica(){
    console.log('entrou no botao multiplica ');
    console.log(var_ope);
    if (var_ope===''){ 
         visor_2=visor ;
     }
     console.log(visor_2);
     var_ope='X';
     calcula();
     visor='';
     var_ope='';
     contador=0;
     console.log(var_ope);
 }
function divide(){
    console.log('entrou no botao divide ');
    console.log(var_ope);
    if (var_ope===''){ 
         visor_2=visor ;
     }
     console.log(visor_2);
     var_ope='/';
     calcula();
     visor='';
     var_ope='';
     contador=0;
}

function apaga() {
    console.log(contador);
    if (visor!=='' ){
        console.log(valorAtual);
        visor =  document.getElementById('visor2').value.slice(0,-1);
        console.log(visor );
        document.getElementById('visor2').value= visor;
  
    }
}
function resultado(){
    document.getElementById("visor2").value='';
    document.getElementById("visor1").textContent =  'Resultado : ' + valorAtual;
    valorAtual=0;
    total=0;
    visor ='';
    visor_2='';
    var_ope='';
    contador =1;
    var_apoio='';
    var_apoio2='';
    visor_2='';
}

function limpa2() {
    valorAtual=0;
    total=0;
    visor ='';
    visor_2='';
    var_ope='';
    contador =1;
    var_apoio='';
    var_apoio2='';
    visor_2='';
    atualizaVisor()
}
function sair() {
    window.close();
}

function calcula() {
    limpaVisor();
    if (visor !== '+' || visor !== '-' || visor !== 'x' || visor !== '/') {
       if (visor !=='') {   
           if (var_ope ==='+') {
                    visor_2=String(valorAtual);
                    if (valorAtual==0) { 
                        valorAtual=parseFloat(visor);
                    } else {
                       valorAtual=valorAtual + parseFloat(visor);
                    }
                    var_apoio=var_ope+' ' +visor;
                    visor=valorAtual.toString();
                    if (contador==1) {
                        var_apoio2=visor;
                        visor_2=visor;
                        contador=0;
                        var_apoio2=visor_2;
                    } else {
                        visor_2= var_apoio2 + ' '+ var_apoio;
                        var_apoio2= visor_2 ;
                        contador=0;
                    }
            } else if (var_ope ==='-') {
                visor_2=String(valorAtual);
                if (valorAtual==0) { 
                    valorAtual=parseFloat(visor);
                } else {
                   valorAtual=valorAtual - parseFloat(visor);
                }
                var_apoio=var_ope+' ' +visor;
                visor=valorAtual.toString();
                if (contador==1) {
                    var_apoio2=visor;
                    visor_2=visor;
                    contador=0;
                    var_apoio2=visor_2;
                } else {
                    visor_2= var_apoio2 + ' '+ var_apoio;
                    var_apoio2= visor_2 ;
                    contador=0;
                }

            } else if (var_ope ==='X') {
                visor_2=String(valorAtual);
                if (valorAtual==0) { 
                    valorAtual=parseFloat(visor);
                } else {
                   valorAtual=valorAtual * parseFloat(visor);
                }
                var_apoio=var_ope+' ' +visor;
                visor=valorAtual.toString();
                if (contador==1) {
                    var_apoio2=visor;
                    visor_2=visor;
                    contador=0;
                    var_apoio2=visor_2;
                } else {
                    visor_2= var_apoio2 + ' '+ var_apoio;
                    var_apoio2= visor_2 ;
                    contador=0;
                }
            } else if (var_ope ==='/') {
                visor_2=String(valorAtual);
                if (valorAtual==0) { 
                    valorAtual=parseFloat(visor);
                } else {
                   valorAtual=valorAtual / parseFloat(visor);
                }
                var_apoio=var_ope+' ' +visor;
                visor=valorAtual.toString();
                if (contador==1) {
                    var_apoio2=visor;
                    visor_2=visor;
                    contador=0;
                    var_apoio2=visor_2;
                } else {
                    visor_2= var_apoio2 + ' '+ var_apoio;
                    var_apoio2= visor_2 ;
                    contador=0;
                }
            }
            atualizaVisor();
        }   
    } else {
        console.log(visor_2);
        alert('Atenção selecione um número antes do operador matemático!!');

    } 
 
}

function atualizaVisor(){ 
    document.getElementById("visor2").value=visor_2;
    document.getElementById("visor1").textContent =  valorAtual;
    
}   