document.addEventListener("DOMContentLoaded", function(event) {
    //Le jeu

    class Jeu{
        constructor(_idSvg, _idPointage){
            console.log("Creation du Jeu");
            this.s = Snap(_idSvg);
            this.sortiPointage = document.querySelector(_idPointage);
            this.grandeurCarre = 20;
            this.grandeurGrille = 15;

        }

        nouvellePartie(){
            this.affichagePointage(1);
            this.pomme = new Pomme ();
            this.serpent = new Serpent();

        }

        finPartie(){

        }

        affichagePointage(_lePointage){
            this.sortiPointage.innerHTML = _lePointage;

        }
    }
    //Le serpent

    class Serpent{
        constructor(){
            console.log("Creation du serpent");
        }
    }

    //La pomme
    class Pomme{
        constructor(){
            console.log("Creation de la pomme");
        }
    }

    var unePartie= new Jeu("#jeu", "#pointage");

    var btnJouer = document.querySelector("#btnJouer");
    btnJouer.addEventListener("click", nouvellePartie);

    function nouvellePartie(){
        unePartie.nouvellePartie();
    }

});