let menu = document.querySelector ('#menu');
let bar = document.querySelector('.bar');
menu.onclick = () =>{
menu.classList.toggle('fa-times');
bar.classList.toggle('active');}
// Récupération du formulaire d'inscription
const form = document.querySelector('#inscription-form');

// Écouteur d'événement pour la soumission du formulaire
form.addEventListener('submit', (event) => {
  // Récupération des champs du formulaire
  const username = document.querySelector('#username');
  const password = document.querySelector('#password');
  const confirmPassword = document.querySelector('#confirm-password');
  const email = document.querySelector('#email');

  // Vérification que tous les champs sont remplis
  if (username.value.trim() === '' || password.value.trim() === '' || confirmPassword.value.trim() === '' || email.value.trim() === '') {
    alert('Veuillez remplir tous les champs!');
    event.preventDefault(); // Empêcher la soumission du formulaire
    return;
  }

  // Vérification que le mot de passe et la confirmation de mot de passe sont les mêmes
  if (password.value !== confirmPassword.value) {
    alert('Le mot de passe et la confirmation du mot de passe ne sont pas identiques!');
    event.preventDefault(); // Empêcher la soumission du formulaire
    return;
  }

  // Vérification que le mot de passe a au moins 8 caractères
  if (password.value.length < 8) {
    alert('Le mot de passe doit contenir au moins 8 caractères!');
    event.preventDefault(); // Empêcher la soumission du formulaire
    return;
  }

  // Si toutes les vérifications sont passées, le formulaire est prêt à être soumis
  alert('Formulaire soumis avec succès!');
});


// Tableau pour stocker les commentaires
let commentaires = [];

// Récupération du formulaire de commentaires
const commentForm = document.querySelector("#comment-form");

// Écouteur d'événement pour la soumission du formulaire de commentaires
commentForm.addEventListener("submit", function(event) {
event.preventDefault();
ajouterCommentaire();
});

// Définition de la fonction pour ajouter un commentaire
function ajouterCommentaire() {
// récupérer les valeurs du formulaire
const username = document.getElementById("username").value;
const comment = document.getElementById("comment").value;

// ajouter le nouveau commentaire au tableau
commentaires.push({ username: username, comment: comment, date: new Date() });

// ré-afficher les commentaires
afficherCommentaires();
}

// Définition de la fonction pour afficher les commentaires
function afficherCommentaires() {
// récupérer la zone où les commentaires doivent être affichés
const zoneCommentaires = document.getElementById("zone-commentaires");

// vider la zone des commentaires existants
zoneCommentaires.innerHTML = "";

// afficher le titre "Commentaires"
const titreCommentaires = document.createElement('h2');
titreCommentaires.textContent = 'Commentaires :';
zoneCommentaires.appendChild(titreCommentaires);

// Parcourir le tableau de commentaires et afficher chaque commentaire
commentaires.forEach(function(comment) {
// Création d'un élément pour le commentaire
const divCommentaire = document.createElement('div');
divCommentaire.classList.add('comment');

   // créer un élément pour le nom d'utilisateur
const divUsername = document.createElement('div');
divUsername.classList.add('username');
divUsername.textContent = comment.username;

// créer un élément pour le texte du commentaire
const divTexte = document.createElement('div');
divTexte.classList.add('texte');
divTexte.textContent = comment.comment;

// ajouter le nom d'utilisateur et le texte du commentaire à l'élément du commentaire
divCommentaire.appendChild(divUsername);
divCommentaire.appendChild(divTexte);

// afficher la date et l'heure du commentaire
const divDate = document.createElement('div');
divDate.classList.add('date');
const tempsEcoule = Math.round((new Date() - comment.date) / (1000 * 60)); // temps écoulé en minutes
divDate.textContent = tempsEcoule + ' minutes ago';
divCommentaire.appendChild(divDate);

// créer un bouton pour supprimer le commentaire
const boutonSupprimer = document.createElement("button");
boutonSupprimer.textContent = "Supprimer";
boutonSupprimer.addEventListener("click", function() {
  
      // supprimer le commentaire du tableau
      commentaires.splice(commentaires.indexOf(comment), 1);
      // ré-afficher les commentaires
      afficherCommentaires();
    });

     // ajouter le bouton de suppression à l'élément du commentaire
divCommentaire.appendChild(boutonSupprimer);

    // ajouter l'élément du commentaire à l'élément où les commentaires doivent être affichés
    zoneCommentaires.appendChild(divCommentaire);
  });
}

// Écouteur d'événement pour la soumission du formulaire
const formm = document.querySelector("#comment-form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  ajouterCommentaire();
});


// initialiser le tableau de commentaires
commentaires = [  {username: 'Othmane ', comment: 'ni7aam raqum m3rudin l3rsna ana w dijti f sef yallah rbi yeawn' , date: Date.now() - 3600000},  {username: 'Ismaeil', comment: 'shi hed ywri l zahira kifesh dir quitter f pubg' , date: Date.now() - 1800000},  {username: 'Hacan', comment: 'jihane w kiza eamart dari', date: Date.now() - 90000}];

// afficher les commentaires
afficherCommentaires();


window.onload = () => {
    const stars = document.querySelectorAll(".la-star");
    const note = document.querySelector("#note");
    const submitButton = document.querySelector("#submit");
    const result = document.querySelector("#result");
  
    let totalStars = 0;
    let numberOfVotes = 0;
  
    for (const star of stars) {
      star.addEventListener("mouseover", function () {
        resetStars();
        this.style.color = "yellow";
        this.classList.add("las");
        this.classList.remove("lar");
  
        let previousStar = this.previousElementSibling;
  
        while (previousStar) {
          previousStar.style.color = "yellow";
          previousStar.classList.add("las");
          previousStar.classList.remove("lar");
  
          previousStar = previousStar.previousElementSibling;
        }
      });
  
      star.addEventListener("click", function () {
        note.value = this.dataset.value;
      });
  
      star.addEventListener("mouseout", function () {
        resetStars(note.value);
      });
    }
  
    submitButton.addEventListener("click", function () {
      totalStars += parseInt(note.value);
      numberOfVotes++;
  
      const average = totalStars / numberOfVotes;
      result.innerHTML = `NOTE IMDB: ${average.toFixed(2)}`;
      result.style.color = "white";
    result.style.display = 'flex';
    result.style.justifyContent = "center";
    result.style.alignItems = "center";
      
    });
  
    function resetStars(note = 0) {
      for (const star of stars) {
        if (star.dataset.value > note) {
          star.style.color = "white";
          star.classList.add("lar");
          star.classList.remove("las");
        } else {
          star.style.color = "yellow";
          star.classList.add("las");
          star.classList.remove("lar");
        }
      }
    }
  };
