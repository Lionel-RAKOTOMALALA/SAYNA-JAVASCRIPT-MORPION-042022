(function() {
    var joueur = {
        nom: "joueur",
        symbole : "X",
        score: 0 


    };

    var CPU = {
        nom : "CPU",
        symbole : "O",
        score : 0
    };

    var liste_joueur = [joueur,CPU];
    var endGame = false;
    var alt_turn = Math.floor(Math.random() * 2);
    var alt_turn_joueur = alt_turn;
    var joueurActuel = alt_turn_joueur;
    //affichage dynaqmique
    choose1=function(elmt){
        joueur.symbole=elmt.textContent;
        CPU.symbole="o"
        elmt.parentNode.parentNode.style.display="none";
        onload();
    }
    choose2=function(elmt){
        joueur.symbole=elmt.textContent;
        CPU.symbole="X";
        elmt.parentNode.parentNode.style.display="none";
        onload();
    }
    // Récupération des cases à clicker
    const items = document.getElementsByClassName('grid-item');

    choiseCase = function(id) {
        if(endGame==false && liste_joueur[joueurActuel].nom == "joueur" && document.getElementById(id).classList.contains("coché")==false)
        {
            document.getElementById(id).textContent = joueur.symbole;
            document.getElementById(id).classList.add("coché");
            quiGagne(joueur);
            joueurActuel++;
             
        if(joueurActuel % 2 == 0)
        {   
            joueurActuel = 0;
        }
            var count=0;
            for (let i = 0; i< items.length; i++) {
               if(items[i].classList.contains("coché"))count++;
            }
            if(count==9){

            }else{
                bot();
            }
        }
         
         console.log(liste_joueur[joueurActuel])
    }
      function onload(){console.log(liste_joueur[joueurActuel])
        if(liste_joueur[joueurActuel].nom=="CPU"){
            var count=0;
            for (let i = 0; i< items.length; i++) {
               if(items[i].classList.contains("coché"))count++;
            }
            if(count==9){

            }else{
                bot();
            }
        }
        }   
    bot = function() {
        if(endGame==false && liste_joueur[joueurActuel].nom == "CPU" )
        {
            var bot_choose = Math.floor(Math.random() * 9);
            while(items[bot_choose].classList.contains("coché") ){
                bot_choose = Math.floor(Math.random() * 9);
            }    
            items[bot_choose].textContent = CPU.symbole;
            items[bot_choose].classList.add("coché");
            quiGagne(CPU);
            joueurActuel++;
            if(joueurActuel % 2 == 0)
            {
                joueurActuel = 0;
            }
    
        }

    }
    
function quiGagne(player){
    var val1 = items[0].textContent==player.symbole && items[1].textContent==player.symbole && items[2].textContent==player.symbole
    var val2 = items[3].textContent==player.symbole && items[4].textContent==player.symbole && items[5].textContent==player.symbole
    var val3 = items[6].textContent==player.symbole && items[7].textContent==player.symbole && items[8].textContent==player.symbole
    var val4 = items[0].textContent==player.symbole && items[3].textContent==player.symbole && items[6].textContent==player.symbole
    var val5 = items[1].textContent==player.symbole && items[4].textContent==player.symbole && items[7].textContent==player.symbole
    var val6 = items[2].textContent==player.symbole && items[5].textContent==player.symbole && items[8].textContent==player.symbole
    var val7 = items[0].textContent==player.symbole && items[4].textContent==player.symbole && items[8].textContent==player.symbole
    var val8 = items[2].textContent==player.symbole && items[4].textContent==player.symbole && items[6].textContent==player.symbole
        if (val1){
            console.log(player.nom+" a gagnée");  
            endGame=true;
            player.score++;
            items[0].style.color="green"
            items[1].style.color="green"
            items[2].style.color="green"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (val2){
            console.log(player.nom+" a gagnée");  
            endGame=true;
            player.score++;
            items[3].style.color="green"
            items[4].style.color="green"
            items[5].style.color="green"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (val3){
            console.log(player.nom+" a gagnée");  
            endGame=true;
            player.score++;
            items[6].style.color="green"
            items[7].style.color="green"
            items[8].style.color="green"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (val4){
            console.log(player.nom+" a gagnée");  
            endGame=true;
            player.score++;
            items[0].style.color="green"
            items[3].style.color="green"
            items[6].style.color="green"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }   
        else if (val5){
            console.log(player.nom+" a gagnée");  
            endGame=true;
            player.score++;
            items[1].style.color="green"
            items[4].style.color="green"
            items[7].style.color="green"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (val6){
            console.log(player.nom+" a gagnée");  
            endGame=true;
            player.score++;
            items[2].style.color="green"
            items[5].style.color="green"
            items[8].style.color="green"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (val7){
            console.log(player.nom+" a gagnée");  
            endGame=true;
            player.score++;
            items[0].style.color="green"
            items[4].style.color="green"
            items[8].style.color="green"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (val8){
            console.log(player.nom+" a gagnée");  
            endGame=true;
            player.score++;
            items[2].style.color="green"
            items[4].style.color="green"
            items[6].style.color="green"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        
}
    // Vide le contenu de toute les cases
    rest = function() {
        endGame = false;
        for (var i = 0; i < items.length; i++) {
            console.log(items[i]);
            items[i].textContent = ''
            items[i].classList.remove("coché");
            items[i].style.color = 'black'
        }
        CPU.score = 0;
        joueur.score = 0;

        alt_turn_joueur++;
        alert(liste_joueur[joueurActuel].nom)
        bot();
        document.querySelector(".you-score").textContent= 0;
        document.querySelector(".cpu-score").textContent = 0;            
    }
})();
