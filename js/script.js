let stars = document.querySelectorAll('.stars');
let total_star = 0;

//Creamos las img de estrellas por cada stars que hay en el documento
// Y lo insertamos en el contenedor de estrellas (stars)
setInterval(() => {
  if (total_star === 5) {
    clearInterval();
  } else {
    let img = document.createElement('img');
    img.src = 'images/icon-star.svg';
    img.alt = 'Icon star';
    img.className = 'icon-star';
    stars[0].appendChild(img);
    stars[1].appendChild(img.cloneNode(true));
    stars[2].appendChild(img.cloneNode(true));
    total_star++;
  }
}, 150);

let testimonials = document.querySelectorAll('.testimonial');

//Mostramos el contenido de los testimonios letra por letra
testimonials.forEach((testimonial) => {
  let text = testimonial;
  let content = text.textContent;
  text.textContent = '';
  let letras = 0;
  let interval = setInterval(() => {
    if (letras === content.length) {
      clearInterval(interval);
    } else {
      text.textContent += content[letras];
      letras++;
    }
  }, 25);
});




