const phrases = ['Salud Mental', 'Bienestar Emocional', 'Equilibrio Personal', 'Armonía Interior'];
let i = 0;
let j = 0;
let direction = 1;
let delay = 200;

function loop() {
  document.getElementById('animated-text').innerHTML = phrases[i].substr(0, j);

  if (j == phrases[i].length) {
    delay = 2000; // Tiempo para leer
    direction = -1; // Comienza a borrar
  } else if (j == 0) {
    delay = 500; // Tiempo antes de escribir la siguiente frase
    direction = 1; // Comienza a escribir
    i = (i + 1) % phrases.length; // Siguiente frase
  } else {
    delay = direction == 1 ? 100 : 50; // Velocidad de escritura y borrado
  }

  j = j + direction;
  setTimeout(loop, delay);
}

loop();

// Cursor animation
const cursor = document.querySelector('#cursor');
setInterval(() => {
  cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
}, 500);


//*
// Codigo para la funcionalidad del carrousel en dispositivo movil 

window.addEventListener('resize', function () {
  var width = window.innerWidth;
  var carouselInner = document.querySelector('.carousel-inner');
  var cards = Array.from(document.querySelectorAll('.card'));

  carouselInner.innerHTML = '';

  if (width < 768) {
    // Para dispositivos móviles, agrupa las tarjetas de dos en dos
    for (var i = 0; i < cards.length; i += 2) {
      var carouselItem = document.createElement('div');
      carouselItem.className = 'carousel-item';
      if (i === 0) carouselItem.className += ' active';

      var container = document.createElement('div');
      container.className = 'container';

      var row = document.createElement('div');
      row.className = 'row';

      var col1 = document.createElement('div');
      col1.className = 'col-6 col-md-4';
      col1.appendChild(cards[i]);

      var col2 = document.createElement('div');
      col2.className = 'col-6 col-md-4';
      if (cards[i + 1]) col2.appendChild(cards[i + 1]);

      row.appendChild(col1);
      row.appendChild(col2);
      container.appendChild(row);
      carouselItem.appendChild(container);
      carouselInner.appendChild(carouselItem);
    }
  } else {
    // Para pantallas grandes, agrupa las tarjetas de tres en tres
    for (var i = 0; i < cards.length; i += 3) {
      var carouselItem = document.createElement('div');
      carouselItem.className = 'carousel-item';
      if (i === 0) carouselItem.className += ' active';

      var container = document.createElement('div');
      container.className = 'container';

      var row = document.createElement('div');
      row.className = 'row';

      var col1 = document.createElement('div');
      col1.className = 'col-12 col-md-4';
      col1.appendChild(cards[i]);

      var col2 = document.createElement('div');
      col2.className = 'col-12 col-md-4';
      if (cards[i + 1]) col2.appendChild(cards[i + 1]);

      var col3 = document.createElement('div');
      col3.className = 'col-12 col-md-4';
      if (cards[i + 2]) col3.appendChild(cards[i + 2]);

      row.appendChild(col1);
      row.appendChild(col2);
      row.appendChild(col3);
      container.appendChild(row);
      carouselItem.appendChild(container);
      carouselInner.appendChild(carouselItem);
    }
  }
});

// Ejecuta la función de redimensionamiento al cargar la página
window.dispatchEvent(new Event('resize'));


// Este archivo main.js contiene el código JavaScript para el proyecto TranquiApp.

// // Aquí puedes implementar la lógica para la aplicación de monitoreo de salud mental y estrés.

// // Código para el registro de usuarios
// // Puedes utilizar eventos de click o submit para capturar los datos del formulario de registro y enviarlos al servidor para su procesamiento.

// // Ejemplo de código para capturar los datos del formulario de registro
// const registrationForm = document.getElementById('registration-form');

// registrationForm.addEventListener('submit', (event) => {
//   event.preventDefault();

//   // Obtener los valores de los campos del formulario
//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;

//   // Validar los campos del formulario
//   if (name === '' || email === '' || password === '') {
//     alert('Por favor, complete todos los campos del formulario.');
//     return;
//   }

//   // Enviar los datos del formulario al servidor para su procesamiento
//   // Aquí puedes realizar una solicitud HTTP utilizando fetch() u otra librería de tu elección
//   // Por ejemplo:
//   fetch('/api/register', {
//     method: 'POST',
//     body: JSON.stringify({ name, email, password }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//     .then(response => response.json())
//     .then(data => {
//       // Procesar la respuesta del servidor
//       console.log(data);
//       alert('Registro exitoso. ¡Bienvenido a TranquiApp!');
//     })
//     .catch(error => {
//       console.error(error);
//       alert('Ocurrió un error durante el registro. Por favor, inténtelo nuevamente.');
//     });
// });

// // Código para el inicio de sesión de usuarios
// // Puedes utilizar eventos de click o submit para capturar los datos del formulario de inicio de sesión y enviarlos al servidor para su autenticación.

// // Ejemplo de código para capturar los datos del formulario de inicio de sesión
// const loginForm = document.getElementById('login-form');

// loginForm.addEventListener('submit', (event) => {
//   event.preventDefault();

//   // Obtener los valores de los campos del formulario
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;

//   // Validar los campos del formulario
//   if (email === '' || password === '') {
//     alert('Por favor, complete todos los campos del formulario.');
//     return;
//   }

//   // Enviar los datos del formulario al servidor para su autenticación
//   // Aquí puedes realizar una solicitud HTTP utilizando fetch() u otra librería de tu elección
//   // Por ejemplo:
//   fetch('/api/login', {
//     method: 'POST',
//     body: JSON.stringify({ email, password }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//     .then(response => response.json())
//     .then(data => {
//       // Procesar la respuesta del servidor
//       console.log(data);
//       alert('Inicio de sesión exitoso. ¡Bienvenido de vuelta!');
//     })
//     .catch(error => {
//       console.error(error);
//       alert('Ocurrió un error durante el inicio de sesión. Por favor, inténtelo nuevamente.');
//     });
// });

// // Código para el cuestionario psicológico
// // Puedes utilizar eventos de click o submit para capturar las respuestas del cuestionario y enviarlas al servidor para su procesamiento y generación de recomendaciones basadas en IA.

// // Ejemplo de código para capturar las respuestas del cuestionario
// const questionnaireForm = document.getElementById('questionnaire-form');

// questionnaireForm.addEventListener('submit', (event) => {
//   event.preventDefault();

//   // Obtener los valores de las respuestas del cuestionario
//   const answer1 = document.getElementById('answer1').value;
//   const answer2 = document.getElementById('answer2').value;
//   const answer3 = document.getElementById('answer3').value;

//   // Validar las respuestas del cuestionario
//   if (answer1 === '' || answer2 === '' || answer3 === '') {
//     alert('Por favor, responda todas las preguntas del cuestionario.');
//     return;
//   }

//   // Enviar las respuestas del cuestionario al servidor para su procesamiento y generación de recomendaciones basadas en IA
//   // Aquí puedes realizar una solicitud HTTP utilizando fetch() u otra librería de tu elección
//   // Por ejemplo:
//   fetch('/api/questionnaire', {
//     method: 'POST',
//     body: JSON.stringify({ answer1, answer2, answer3 }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//     .then(response => response.json())
//     .then(data => {
//       // Procesar la respuesta del servidor
//       console.log(data);
//       alert('Cuestionario completado. Se generarán recomendaciones basadas en sus respuestas.');
//     })
//     .catch(error => {
//       console.error(error);
//       alert('Ocurrió un error durante el procesamiento del cuestionario. Por favor, inténtelo nuevamente.');
//     });
// });

