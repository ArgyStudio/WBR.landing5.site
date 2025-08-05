// testimonials-carousel.js

// Testimonios dinámicos y auto-scroll vertical
(function(){
  const data = [
      { name: "Alejandro P",   city: "La Plata",         time: "10:12 (am)", text: "El bono del 200% me permitió jugar más y mis retiros fueron inmediatos." },
  { name: "María G",       city: "Mar del Plata",    time: "9:45 (pm)",  text: "Cobré mi primer premio en minutos gracias a los cajeros de Wonbet." },
  { name: "Lucas R",       city: "Quilmes",          time: "2:30 (pm)",  text: "La atención fue excelente y el pago llegó al instante." },
  { name: "Valentina S",   city: "Bahía Blanca",     time: "8:20 (am)",  text: "Disfruté el bono del 200% y retiré mis ganancias sin demoras." },
  { name: "Federico M",    city: "Morón",            time: "7:55 (pm)",  text: "Jugando poker con el bono gané y me pagaron en minutos." },
  { name: "Camila L",      city: "Tigre",            time: "6:10 (pm)",  text: "Las ruletas fueron muy divertidas y el retiro fue instantáneo." },
  { name: "Diego F",       city: "Pilar",            time: "11:05 (am)", text: "El bono inicial fue clave para mi primera victoria y el pago llegó rápido." },
  { name: "Florencia T",   city: "San Isidro",       time: "4:40 (pm)",  text: "Los cajeros respondieron al instante y no hubo inconvenientes." },
  { name: "Ignacio V",     city: "Lomas de Zamora",  time: "9:15 (pm)",  text: "Gané en mi primera sesión y el retiro fue automático." },
  { name: "Martina P",     city: "Avellaneda",       time: "3:50 (pm)",  text: "Me sorprendió lo rápido que llega el dinero a mi cuenta." },
  { name: "Santiago C",    city: "La Matanza",       time: "8:00 (am)",  text: "El bono del 200% es muy generoso y los pagos son inmediatos." },
  { name: "Julieta N",     city: "Florencio Varela", time: "1:20 (pm)",  text: "Retiré sin problemas y el dinero llegó en cuestión de minutos." },
  { name: "Gonzalo R",     city: "Escobar",          time: "5:35 (pm)",  text: "La experiencia de juego fue excelente y los pagos fueron puntuales." },
  { name: "Lucía Á",       city: "Malvinas Argentinas", time: "10:50 (am)", text: "El bono del 200% me dio impulso y los retiros fueron ágiles." },
  { name: "Facundo D",     city: "Merlo",            time: "7:25 (pm)",  text: "Los cajeros cumplen siempre y mi dinero llegó al instante." },
  { name: "Camilo B",      city: "Lanús",            time: "11:55 (am)", text: "Ganando con el bono retiré al instante, muy recomendable." },
  { name: "Noelia S",      city: "Berazategui",      time: "6:15 (pm)",  text: "La plataforma es intuitiva y los pagos son inmediatos." },
  { name: "Ramiro T",      city: "San Miguel",       time: "2:05 (pm)",  text: "Usé el bono del 200% y retiré sin esperas." },
  { name: "Bianca Z",      city: "Moreno",           time: "9:40 (am)",  text: "Súper rápidos los pagos, todo perfecto." },
  { name: "Ezequiel D",    city: "Merchán",          time: "4:55 (pm)",  text: "Mi primer retiro fue inmediato gracias al bono." },
  { name: "Carolina J",    city: "San Fernando",     time: "7:59 (am)",  text: "Los cajeros responden al instante y no fallan." },
  { name: "Tomás G",       city: "Campana",          time: "3:30 (pm)",  text: "Aproveché el bono y mis retiros llegaron rápido." },
  { name: "Micaela A",     city: "Lomas de Zamora",  time: "6:45 (pm)",  text: "La mejor experiencia: rápido y seguro." },
  { name: "Nicolás E",     city: "José C. Paz",      time: "8:25 (am)",  text: "Cobré mis ganancias en minutos, excelente servicio." },
  { name: "Renata F",      city: "Zárate",           time: "5:10 (pm)",  text: "El bono del 200% me dio más oportunidades y pagaron al instante." },
  { name: "Lucas T",       city: "San Nicolás",      time: "12:00 (pm)", text: "Retiro sin demoras, muy confiable." },
  { name: "Vanesa R",      city: "Dolores",          time: "10:05 (am)", text: "Los cajeros cumplen siempre y el dinero llega en seguida." },
  { name: "Federico U",    city: "Junín",            time: "7:27 (pm)",  text: "Las bonificaciones semanales y el bono del 200% funcionan genial." },
  { name: "Victoria P",    city: "Pinamar",          time: "6:22 (pm)",  text: "Pagos instantáneos, estoy encantada." },
  { name: "Pablo S",       city: "Balcarce",         time: "9:18 (am)",  text: "Excelente velocidad en los retiros." },
  { name: "Mónica K",      city: "Villa Gesell",     time: "8:00 (pm)",  text: "Muy buenos los cajeros, todo fluido." },
  { name: "Hugo L",        city: "Trenque Lauquen",  time: "2:45 (pm)",  text: "Retiros en tiempo récord." },
  { name: "Ana B",         city: "Merlo",            time: "8:55 (am)",  text: "Impecable la atención y los pagos." },
  { name: "Germán N",      city: "Chivilcoy",        time: "11:20 (am)", text: "El bono me ayudó a empezar y retiré sin esperas." },
  { name: "Sofía C",       city: "Tandil",           time: "3:15 (pm)",  text: "Súper fácil retirar, muy recomendado." },
  { name: "Diego R",       city: "Quilmes",          time: "2:15 (pm)",  text: "Pagos inmediatos, ya recomendé a todos mis amigos." },
  { name: "Mariana S",     city: "La Plata",         time: "11:50 (am)", text: "Los cajeros son muy responsables y pagaron al instante." },
  { name: "Lucas G",       city: "Berisso",          time: "4:05 (pm)",  text: "Gané con el bono y el retiro fue inmediato." },
  { name: "Patricia M",    city: "Avellaneda",       time: "5:30 (pm)",  text: "El bono del 200% abrió muchas oportunidades para mí." },
  { name: "Esteban Y",     city: "La Matanza",       time: "11:12 (pm)", text: "Pago inmediato y cajeros impecables." },
  { name: "Natalia M",     city: "Escobar",          time: "8:18 (pm)",  text: "No confiaba al principio, pero pagaron al instante." },
  { name: "Bruno Q",       city: "Campana",          time: "10:25 (am)", text: "Muy rápido el proceso de retiro." },
  { name: "Daniela T",     city: "San Miguel",       time: "6:50 (pm)",  text: "El bono fue gran impulso y los pagos cumplieron." },
  { name: "Rodrigo L",     city: "Luján",            time: "9:35 (am)",  text: "Excelente plataforma, retiros sin contratiempos." },
  { name: "Inés P",        city: "Pinamar",          time: "7:10 (pm)",  text: "Todo fue instantáneo y sin errores." },
  { name: "Sebastián A",   city: "Olavarría",        time: "1:05 (pm)",  text: "Correo rápido y seguro de mis ganancias." },
  { name: "Carla V",       city: "Necochea",         time: "5:55 (pm)",  text: "Los retiros son inmediatos, muy confiable." },
  { name: "Mauro Z",       city: "San Pedro",        time: "3:40 (pm)",  text: "Rápido y sencillo, perfecto para mí." },
  { name: "Lorena R",      city: "San Fernando",     time: "7:59 (am)",  text: "El trato es profesional y los pagos inmediatos." },
];

  const container = document.getElementById('testimonialsCarousel');
  let idx = 0, timer;

  // Crear y anexar elementos al contenedor
  data.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'testimonial-item';
   div.innerHTML = `
  <p class="header">
    <img
      src="images/usuario.png"
      alt="Usuario"
      class="icon icon-user"
    />
    ${item.name.trim()}
    <span class="time">${item.time}</span>
  </p>
  <p class="message">
    "${item.text}"
  </p>
  <p class="meta">
    <img
      src="images/pin.png"
      alt="Ubicación"
      class="icon icon-pin"
    />
    ${item.city.trim()}
  </p>
`;

    container.appendChild(div);
  });

  const items = container.querySelectorAll('.testimonial-item');

  function show(index) {
    items.forEach((el, i) => {
      el.classList.toggle('active', i === index);
    });
  }

  function next() {
    idx = (idx + 1) % items.length;
    show(idx);
  }

  // Mostrar el primero y lanzar auto-scroll
  show(0);
  timer = setInterval(next, 4000);

  // Pausar al hacer hover o touch
  container.addEventListener('mouseenter', () => clearInterval(timer));
  container.addEventListener('mouseleave', () => timer = setInterval(next, 4000));
  container.addEventListener('touchstart', () => clearInterval(timer));
  container.addEventListener('touchend', () => timer = setInterval(next, 4000));
})();


document.querySelectorAll('.carousel-item img').forEach(img => {
  img.addEventListener('load', () => {
    const skeleton = img.parentElement.querySelector('.skeleton');
    if (skeleton) skeleton.remove();
  });
});