$(document).ready(function(){
/**
  * gestion du popup rgpd je recupere ma popup mon bouton rgpd et celui de fermeture
  */
 var popupRgpd = $('#popup');
 var btnsRgpd = $('.btnRgpdClose');
 var btnClose = popupRgpd.children('a');
 var rgpdCheck = $("#rgpdCheck");


// j'ecoute le click du bouton
 btnsRgpd.on('click',function(event){
   event.preventDefault();
   popupRgpd.css({display:"block"});
 })
 btnClose.on('click',function(event){
   // j'attend
   event.preventDefault();
   // j'affiche ma popup
   popupRgpd.css({display:"none"});

 })

// formulaire de validation
    // Attendez que le DOM soit prêt
    $(function() {
            // Initialise la validation du formulaire sur le formulaire d'inscription.
         // Il a l'attribut de nom "registration"
        $("form[name='contact-form']").validate({
          
           // Spécifiez les règles de validation
          rules: {
         // Le nom de la clé sur le côté gauche est l'attribut name
         // d'un champ de saisie. Des règles de validation sont définies
         // sur le côté droit
            nom: "required",
            prenom: "required",
            email: {
              required: true,
           // Spécifiez que l'e-mail doit être validé
          // par la règle "e-mail" intégrée
              email: true
            },
            message: "required",
            rgpd:"required",
          },
       // Spécifiez les messages d'erreur de validation
          messages: {
            nom: "Champs obligatoire",
            prenom: "Champs obligatoire",
            email: "Entrez une adresse e-mail valide",
            message: "Champs obligatoire",
            rgpd: "Champs obligatoire",
          },
            // Assurez-vous que le formulaire est soumis à la destination définie
            // dans l'attribut "action" du formulaire lorsqu'il est valide
          submitHandler: function(form) {
            form.submit();
          }
        });
      });
})