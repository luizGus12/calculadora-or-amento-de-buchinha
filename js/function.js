
function clicarEvent(){

    var clicar = document.querySelector("#clicar-fa");
    var menuMobile = document.querySelector(".menu-mobile");
    var exitmenu = document.querySelector("#exitBtn");
    var exitPop = document.querySelector("#exitBtn-pop");
    var popup = document.querySelector(".popUp");
    var imprimir = document.querySelector("#imprimir");
    
    



    clicar.addEventListener("click" , () =>{

        menuMobile.classList.toggle("is-active");
    });

    /**
     * exitmenu.addEventListener("click" , () =>{

        
            menuMobile.classList.toggle("is-active");
        
        
    });
     */
    


   if(imprimir){
//animação no pop up
     imprimir.addEventListener("click" , () =>{
      

       setTimeout(() =>{
            popup.style.display = "block";
        },1000);
        
     });

    exitPop.addEventListener("click" , () =>{

        setTimeout(() =>{
            popup.style.display = "none";
        },180);
        
     });
   }
 
}

//vamos criar a logica da calculadora de orçamento

function calcVal(e) {
  
  // Impede a página de recarregar
  if (e) e.preventDefault();

  const qtdBuchaG = parseFloat(document.getElementById('qntBuchaG').value) || 0;
  const valBuchaG = parseFloat(document.getElementById('valBuchaG').value) || 0;
  const qtdBuchaP = parseFloat(document.getElementById('qntBuchaP').value) || 0;
  const valBuchaP = parseFloat(document.getElementById('valBuchaP').value) || 0;
  const qtdBuchaV = parseFloat(document.getElementById('qntBuchaV').value) || 0;
  const valBuchaV = parseFloat(document.getElementById('valBuchaV').value) || 0;


  const valFinal = (qtdBuchaG * valBuchaG) + (qtdBuchaP * valBuchaP) + (qtdBuchaV * valBuchaV);

  
const mensagem = `
quantidade da bucha grande : ${(qtdBuchaG)} duzias.
quantidade da bucha pequena : ${(qtdBuchaP)} duzias.
quantidade da variada : ${(qtdBuchaV)}

Total: R$ ${valFinal.toFixed(2)}`;

const mensagemWapp = `
total:

quantidade da bucha grande : ${parseFloat(qtdBuchaG)} duzias.
quantidade da bucha pequena : ${parseFloat(qtdBuchaP)} duzias.
quantidade da variada : ${parseFloat(qtdBuchaV)}

Total: R$ ${valFinal.toFixed(2)}

chave pix : 31997776546
luiz Gustavo madeira dos Reis Amaral`;




document.querySelector('.message').innerText = mensagem;

const numero = "5531997776546";

    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagemWapp)}`;

    document.querySelector('.send-orcamento').href = link;
      


  
  
  

}



function salvarFernanda() {
    localStorage.setItem('qntbuchaEnvGfer', document.getElementById('qntbuchaEnvGfer').value);
    localStorage.setItem('qntbuchaEnvPfer', document.getElementById('qntbuchaEnvPfer').value);
    localStorage.setItem('qntbuchaEnvVfer', document.getElementById('qntbuchaEnvVfer').value);
}


function salvarJorge() {
    localStorage.setItem('qntbuchaEnvGjor', document.getElementById('qntbuchaEnvGjor').value);
    localStorage.setItem('qntbuchaEnvPjor', document.getElementById('qntbuchaEnvPjor').value);
    localStorage.setItem('qntbuchaEnvVjor', document.getElementById('qntbuchaEnvVjor').value);
}
function salvarGustavo() {
    // Captura os valores atuais dos inputs
    localStorage.setItem('qntbuchaOverGgus', document.getElementById('qntbuchaOverGgus').value);
    localStorage.setItem('qntbuchaOverPgus', document.getElementById('qntbuchaOverPgus').value);
    localStorage.setItem('qntbuchaOverVgus', document.getElementById('qntbuchaOverVgus').value);
    localStorage.setItem('qntbuchaEnvGgus', document.getElementById('qntbuchaEnvGgus').value);
    localStorage.setItem('qntbuchaEnvPgus', document.getElementById('qntbuchaEnvPgus').value);
    localStorage.setItem('qntbuchaEnvVgus', document.getElementById('qntbuchaEnvVgus').value);
    
    console.log("Dados do Gustavo salvos no navegador!");
}

function calcReceber(e){

    if (e) e.preventDefault();

    const pegarValor = (id) => {
        const elemento = document.getElementById(id);
        if (elemento) {
            
            localStorage.setItem(id, elemento.value);
            return parseFloat(elemento.value) || 0;
        } else {
            
            return parseFloat(localStorage.getItem(id)) || 0;
        }
    };
// Dados do Gustavo
   const qntbuchaOverGgus = pegarValor('qntbuchaOverGgus');
   const qntbuchaOverPgus = pegarValor('qntbuchaOverPgus');
   const qntbuchaOverVgus = pegarValor('qntbuchaOverVgus');
   const qntbuchaEnvGgus = pegarValor('qntbuchaEnvGgus');
   const qntbuchaEnvPgus = pegarValor('qntbuchaEnvPgus');
   const qntbuchaEnvVgus = pegarValor('qntbuchaEnvVgus');

// Dados do Jorge
   const qntbuchaEnvGjor = pegarValor('qntbuchaEnvGjor');
   const qntbuchaEnvPjor = pegarValor('qntbuchaEnvPjor');
   const qntbuchaEnvVjor = pegarValor('qntbuchaEnvVjor');

// Dados da Fernanda
   const qntbuchaEnvGfer = pegarValor('qntbuchaEnvGfer');
   const qntbuchaEnvPfer = pegarValor('qntbuchaEnvPfer');
   const qntbuchaEnvVfer = pegarValor('qntbuchaEnvVfer');

    
    const receberGus = (qntbuchaOverGgus * 1.35) + (qntbuchaOverPgus * 1.25) +  (qntbuchaOverVgus * 1.25) + (qntbuchaEnvGgus *2.8) + (qntbuchaEnvPgus * 2.6) + (qntbuchaEnvVgus * 2.6);
    const receberJor = (qntbuchaEnvGjor * 1.45) + (qntbuchaEnvPjor * 1.35) + (qntbuchaEnvVjor * 1.35);
    const receberFer = (qntbuchaEnvGfer * 1.45) + (qntbuchaEnvPfer * 1.35) + (qntbuchaEnvVfer * 1.35);

    const sumTotal = receberGus + receberJor + receberFer;

   
    
    var mensagem1 = `total a receber :
    
    gustavo : ${receberGus} reais,
    jorge : ${receberJor} reais,
    fernanada : ${receberFer} reais,

    total : 
    ${sumTotal} reais
    `

    document.getElementById('message').innerText = mensagem1;

    const numero = "5531997776546";

    const link1 = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem1)}`;

    document.querySelector('.send-orcamento').href = link1;
    
    


}


clicarEvent();