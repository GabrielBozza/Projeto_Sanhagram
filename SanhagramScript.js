function modo_noturno() {
    if(document.getElementById('modo_noturno').innerHTML=='<i class="fa fa-fw fa-moon-o"></i> Modo noturno'){//ESTA NO MODO CLARO-->VAI P NOTURNO
        document.getElementById('modo_noturno').innerHTML='<i class="fa fa-fw fa-sun-o"></i> Modo claro';
        document.getElementById('card_PagInic').style["background-color"]="rgba(0, 0, 0, 0.2)";
        document.getElementById('cards_internas1').style["background-color"]="rgba(0, 0, 0, 0.35)";//vale p amigos e escrever 
        document.getElementById('cards_internas2').style["background-color"]="rgba(0, 0, 0, 0.35)";//vale p conversa e textarea
        localStorage.setItem("modo","modo_noturno");//ELEMENTO ACESSIVEL POR TODOS
    }
    else{//JA ESTA NO MODO NOTURNO-->VOLTA PARA O MODO CLARO
        document.getElementById('modo_noturno').innerHTML='<i class="fa fa-fw fa-moon-o"></i> Modo noturno';
        document.getElementById('card_PagInic').style["background-color"]="rgba(255, 255, 255, 0.2)";
        document.getElementById('cards_internas1').style["background-color"]="rgba(255, 255, 255, 0.35)";//vale p amigos e escrever 
        document.getElementById('cards_internas2').style["background-color"]="rgba(255, 255, 255, 0.35)";
        localStorage.setItem("modo","modo_claro");//ELEMENTO ACESSIVEL POR TODOS
    }
}

window.onload = verifica_modo_noturno();

function verifica_modo_noturno() {
    if(localStorage.getItem("modo")=="modo_noturno"){//JAH ESTA NO MODO ESCURO
        document.getElementById('modo_noturno').innerHTML='<i class="fa fa-fw fa-sun-o"></i> Modo claro';
        document.getElementById('card_PagInic').style["background-color"]="rgba(0, 0, 0, 0.2)";
        document.getElementById('cards_internas1').style["background-color"]="rgba(0, 0, 0, 0.35)";//vale p amigos e escrever 
        document.getElementById('cards_internas2').style["background-color"]="rgba(0, 0, 0, 0.35)";//vale p conversa e textarea
    }
}

var myInput = document.getElementById("senha");

/*****************************************VALIDA A SENHA INSERIDA QUANDO O USUARIO COMECA A DIGITAR***********************/
myInput.onkeyup = function() {
  // Valida letras minusculas
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Valida letras maiusculas
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Valida numeros
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Valida comprimento
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

function adicionar_mensagem() { 

    if(typeof(localStorage.getItem("num")) == 'undefined'){/* SE EH O PRIMEIRO */
      localStorage.setItem("num","0");
    }

    var tag = document.createElement("contato_mensagem");
    tag.setAttribute('id','contato_mensagem'+localStorage.getItem("num"));
    tag.setAttribute('onclick','recuperar_info("Mensagem "+id)');
    var tag2 = document.createElement("i");
    tag2.setAttribute('class','fa fa-fw fa-envelope');
    tag.appendChild(tag2);
    var text = document.createTextNode(" Mensagem "+ localStorage.getItem("num"));
    var y = parseInt(localStorage.getItem("num"));
    y=y+1;
    localStorage.setItem("num",y.toString());
    tag.appendChild(text);
    var element = document.getElementById("cards_internas1");
    element.appendChild(tag);
}

function recuperar_info(param) {

  remover_mensagem_atual();

  var tag = document.createElement("texto_mensagem");
  tag.setAttribute('id','texto_mensagem');
  var text = document.createTextNode(" Texto da mensagem "+param);
  tag.appendChild(text);

  var botao_enviar = document.createElement("input");
  botao_enviar.setAttribute('type','submit');
  botao_enviar.setAttribute('id','botao_enviar_para');
  botao_enviar.setAttribute('value','ENVIAR PARA');

  var element = document.getElementById("texto");
  element.appendChild(tag);
  document.getElementById("form").appendChild(botao_enviar);
}

function remover_mensagem_atual() {

  var element = document.getElementById('texto_mensagem');

  if(typeof(element) != 'undefined' && element != null) {
    var parent = document.getElementById("texto");

    var child = document.getElementById('texto_mensagem');
    parent.removeChild(child);

    var parent2 = document.getElementById("form");
    var child2 = document.getElementById('botao_enviar_para');
    parent2.removeChild(child2);
  }
}

function adicionar_destinatarios() { 

  for(var i=0;i<24;i++){

    if(typeof(localStorage.getItem("num")) == 'undefined'){/* SE EH O PRIMEIRO */
      localStorage.setItem("num","0");
    }

    var label = document.createElement("label");
    label.setAttribute('class','container');
    
    var tag2 = document.createElement("i");
    tag2.setAttribute('class','fa fa-fw fa-user');
    label.appendChild(tag2);
    
    var text = document.createTextNode(" Amigo "+ localStorage.getItem("num"));
    var y = parseInt(localStorage.getItem("num"));
    y=y+1;
    localStorage.setItem("num",y.toString());
    label.appendChild(text);

    var input = document.createElement("input");
    input.setAttribute('type','checkbox');
    label.appendChild(input);

    var span = document.createElement("span");
    span.setAttribute('class','checkmark');
    label.appendChild(span);

    var element = document.getElementById("cards_internas2");
    element.appendChild(label);
  }
}