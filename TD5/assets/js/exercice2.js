$(document).ready(function () {
   const productsGenerated = new Set();

   for (let i = 1; i <= 3; i++) {
      productsGenerated.add(i);
      generateProduct(i);
   }

   function generateProduct(id) {
      $.ajax({
         url: `https://dummyjson.com/products/${id}`,
         type: 'GET',
         dataType: 'json',
         success: function (data) {
            // On clone l'element .product-template
            let product = $('.product-template').clone();
            product.removeClass('product-template');
            product.addClass(`product-${id}`);
            product.find('.img').attr('src', data.thumbnail);
            product.find('.img').attr('alt', data.title);
            product.find('.title').text(data.title);
            product.find('.brand').text(`(${data.brand})`);
            product.find('.price').text(`${data.price} €`);
            product.find('.old-price').text(`${data.price / (1 - data.discountPercentage / 100)} €`);
            product.find('.stock').text(data.stock);

            // On le rajouter à la fin du body
            $('body').append(product);
         },
      });
   }

   function generateRandomProduct() {
      // On vérifie qu'on a pas déjà généré 100 produits
      // Si oui, on désactive le bouton
      if (productsGenerated.size >= 100) {
         $('#product-generation').attr('disabled', 'disabled');
         return;
      }

      let randomId;
      // On génère un nombre aléatoire entre 1 et 100 qui n'a pas déjà été généré
      while (productsGenerated.has(randomId)) {
         randomId = Math.floor(Math.random() * 100) + 1;
      }
      productsGenerated.add(randomId);
      generateProduct(randomId);
   }


   $('#product-generation').on('click', generateRandomProduct);
});
