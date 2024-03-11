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

 // photo de profile 
 function selectImage() {
  const fileInput = document.querySelector('#avatar');
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = (event) => {
      const imgSrc = event.target.result;
      const avatar = document.querySelector('.user-avatar');
      avatar.style.backgroundImage = `url(${imgSrc})`;
    };

    reader.readAsDataURL(file);
  }
}
const commentHeaderDiv = document.createElement("div");
commentHeaderDiv.classList.add("comment-header");

const userAvatarDiv = document.createElement("div");
userAvatarDiv.classList.add("user-avatar");

const img = document.createElement("img");
img.src = "https://via.placeholder.com/50";
img.alt = "User Avatar";

userAvatarDiv.appendChild(img);
commentHeaderDiv.appendChild(userAvatarDiv);

// Tableau pour stocker les commentaires
let commentaires = [];
// Récupération du formulaire de commentaires
const commentForm = document.querySelector("#comment-form");


// Définition de la fonction pour ajouter un commentaire
function ajouterCommentaire() {
// récupérer les valeurs du formulaire
const username = document.getElementById("username").value;
const comment = document.getElementById("comment").value;

// ajouter le nouveau commentaire au tableau
commentaires.push({ username: username, comment: comment, date: new Date() });
  // Vérification que tous les champs sont remplis
  if (username.trim() === '' || comment.trim() === '') {
    alert('Veuillez remplir tous les champs!');
    return;
  }
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
titreCommentaires.textContent = ' Les commentaires de notre clients: ';
zoneCommentaires.appendChild(titreCommentaires);

// Parcourir le tableau de commentaires et afficher chaque commentaire
commentaires.forEach(function(comment) {
// Création d'un élément pour le commentaire
const divCommentaire = document.createElement('div');
divCommentaire.classList.add('comment-list');

   // créer un élément pour le nom d'utilisateur
const divUsername = document.createElement('div');
divUsername.classList.add('username');
divUsername.textContent = comment.username;

// créer un élément pour le texte du commentaire
const divTexte = document.createElement('div');
divTexte.classList.add('comment');
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
commentaires = [  {   username: 'Yassine Benali', comment: 'Le tajine que jai commandé dans ce restaurant marocain était probablement le meilleur que jai jamais goûté. La viande était tendre et savoureuse, et les épices étaient parfaitement dosées. Je recommande vivement ce restaurant!' , date: Date.now() - 3600000},
  {username: 'Laura Hernandez', comment: 'Je suis tombé amoureux de la cuisine marocaine grâce à ce restaurant. Les plats étaient magnifiquement présentés et les saveurs étaient absolument incroyables. Je ne peux pas attendre pour y retourner!' , date: Date.now() - 1800000},
    {username: 'Amira Lee', comment: 'Ce restaurant est une véritable découverte. La décoration est magnifique et les plats sont délicieux. Le service était également excellent. Je suis déjà impatient d y retourner!', date: Date.now() - 90000},
     {username: 'Aymane Lahlou', comment: 'C est l un des meilleurs restaurants que j ai visités. La nourriture est absolument délicieuse et le personnel est très accueillant. Je recommande vivement ce restaurant à tous ceux qui cherchent une expérience culinaire authentique.', date: Date.now() - 90000},
      {username: 'Mehdi El Amrani', comment: 'J ai été absolument enchanté par l expérience culinaire que j ai eue dans ce restaurant marocain. Les saveurs étaient incroyables et les plats étaient parfaitement préparés.', date: Date.now() - 90000}];

// afficher les commentaires
afficherCommentaires();

//stars
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
      result.innerHTML = `avis moyen: ${average.toFixed(2)}`;
      result.style.color = "white";
      result.style.display = 'flex';
      result.style.justifyContent = "center";
      result.style.alignItems = "center";
      console.log(average);
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
