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
        document.getElementById('cards_internas2').style["background-color"]="rgba(255, 255, 255, 0.35)";//vale p conversa e textarea
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