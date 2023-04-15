$(document).ready(function () {

   $("#form").submit(function () {
      // On stop l'envois du formulaire
      event.preventDefault();

      // On récupère les valeurs des champs
      let login = $("#username").val();
      let motDePasse = $("#password").val();

      // Envoi des données au serveur PHP via AJAX
      $.ajax({
         type: "POST",
         url: "form.php",
         data: {
            username: login,
            password: motDePasse
         },
         success: function (response) {
            let result = JSON.parse(response);
            addMessage(result.message, result.success);
         },
         error: function () {
            addMessage("Une erreur est survenue", false);
         }
      });

   });
});

$("#username").keyup(function () {
   if ($("#username").val() != "") {
      $("#username").css("border", "1px solid green");
   } else {
      $("#username").css("border", "1px solid red");
   }

   if ($("#username").val().length > 255) {
      $("#username").css("border", "1px solid red");
   }
});

$("#password").keyup(function () {
   if ($("#password").val() != "") {
      $("#password").css("border", "1px solid green");
   } else {
      $("#password").css("border", "1px solid red");
   }

   if ($("#password").val().length > 255) {
      $("#password").css("border", "1px solid red");
   }
});

function addMessage(message, etat) {
   let divMessage = document.getElementById("message");
   // On vérifie si il y a déjà un message d'erreur
   if (divMessage.children.length > 0) {
      divMessage.removeChild(divMessage.children[0]);
   }

   let p = document.createElement("p");
   p.setAttribute("class", "success");
   p.innerHTML = message;
   p.style.color = etat ? "green" : "red";
   divMessage.appendChild(p);
}