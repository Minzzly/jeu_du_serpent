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
            this.finPartie();

            this.affichagePointage(1);
            this.pomme = new Pomme (this);
            this.serpent = new Serpent(this);
        }

        finPartie(){
            if(this.pomme !== undefined){
                this.pomme.supprimePomme();
                this.pomme = undefined;
            }
        }

        affichagePointage(_lePointage){
            this.sortiPointage.innerHTML = _lePointage;

        }
    }
    //Le serpent

    class Serpent{
        constructor(_leJeu){
            console.log("Creation du serpent");
            this.leJeu = _leJeu;

        }

        verifTouche(evt){

        }

        deplacement(dirCode){

        }

        controleSerpent(){

        }

        dessineCarre(x,y){

        }

        supprimeSerpent(){

        }

    }

    //La pomme
    class Pomme{
        constructor(_leJeu){
            console.log("Creation de la pomme");
            this.leJeu = _leJeu;
            this.pomme = [];
            this.ajoutePomme();

        }

        ajoutePomme(){
            var posX = Math.floor(Math.random() * this.leJeu.grandeurGrille);
            var posY = Math.floor(Math.random() * this.leJeu.grandeurGrille);

            this.pomme = [this.leJeu.s.rect(posX * this.leJeu.grandeurCarre, posY * this.leJeu.grandeurCarre, this.leJeu.grandeurCarre, this.leJeu.grandeurCarre).attr({fill:"red"}), posX, posY];

        }

        supprimePomme(){
            this.pomme[0].remove();
        }
    }

    var unePartie= new Jeu("#jeu", "#pointage");

    var btnJouer = document.querySelector("#btnJouer");
    btnJouer.addEventListener("click", nouvellePartie);

    function nouvellePartie(){
        unePartie.nouvellePartie();
    }

});