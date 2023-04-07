$(document).ready(function () {
   
   $("#form").submit(function () {
      // On stop l'envois du formulaire
      event.preventDefault();

      // On récupère les valeurs des champs
      let login = $("#username").val();
      let motDePasse = $("#password").val();

      // Envois des données au serveur php via ajax
      $.ajax({
         type: "POST",
         data: {
            login: login,
            motDePasse: motDePasse
         },
         success: function (data) {
            console.log(data + " envoyer");
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
});

$("#password").keyup(function () {
   if ($("#password").val() != "") {
      $("#password").css("border", "1px solid green");
   } else {
      $("#password").css("border", "1px solid red");
   }
});