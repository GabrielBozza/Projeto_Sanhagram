function modo_noturno() {
    if(document.getElementById('modo_noturno').innerHTML=='<i class="fa fa-fw fa-moon-o"></i> Modo noturno'){//ESTA NO MODO CLARO-->VAI P NOTURNO
        document.getElementById('modo_noturno').innerHTML='<i class="fa fa-fw fa-sun-o"></i> Modo claro';
        document.getElementById('card_PagInic').style["background-color"]="rgba(0, 0, 0, 0.2)";
        document.getElementById('cards_internas1').style["background-color"]="rgba(0, 0, 0, 0.35)";//vale p amigos e escrever 
        document.getElementById('cards_internas2').style["background-color"]="rgba(0, 0, 0, 0.35)";//vale p conversa e textarea
    }
    else{//JA ESTA NO MODO NOTURNO-->VOLTA PARA O MODO CLARO
        document.getElementById('modo_noturno').innerHTML='<i class="fa fa-fw fa-moon-o"></i> Modo noturno';
        document.getElementById('card_PagInic').style["background-color"]="rgba(255, 255, 255, 0.2)";
        document.getElementById('cards_internas1').style["background-color"]="rgba(255, 255, 255, 0.35)";//vale p amigos e escrever 
        document.getElementById('cards_internas2').style["background-color"]="rgba(255, 255, 255, 0.35)";//vale p conversa e textarea
    }
}

function verifica_modo_noturno() {
    if(document.getElementById('modo_noturno').innerHTML=='<i class="fa fa-fw fa-moon-o"></i> Modo noturno'){//JAH ESTA NO MODO ESCURO
        document.getElementById('card_PagInic').style["background-color"]="rgba(0, 0, 0, 0.2)";
        document.getElementById('cards_internas1').style["background-color"]="rgba(0, 0, 0, 0.35)";//vale p amigos e escrever 
        document.getElementById('cards_internas2').style["background-color"]="rgba(0, 0, 0, 0.35)";//vale p conversa e textarea
    }
}