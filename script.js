// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      const offset = 100; // Ajuste opcional para el desplazamiento
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

var chatVisible = false;

function collapseChat() {
  var chat = document.getElementById("assistant-chat");
  chat.style.display = "none";
  chatVisible = false;
}

function keepChatVisible() {
  chatVisible = true;
}

function sendMessage() {
  var userInput = document.getElementById("user-input").value;
  displayMessage("user", userInput);
  document.getElementById("user-input").value = "";

  var response = findFAQResponse(userInput);

  if (!response) {
    response = "Lo siento, no entendí tu pregunta. ¿Puedes ser más específico?";
  }

  displayMessage("bot", response);
}

function displayMessage(sender, message) {
  var chatMessages = document.getElementById("chat-messages");
  var messageElement = document.createElement("div");
  messageElement.classList.add(
    sender === "user" ? "user-message" : "bot-message"
  );
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);
}

const faq = [
  // Horario de atención
  {
    question: "Cual es el horario de atencion",
    answer:
      "Nuestro horario de atención es de lunes a viernes de 9:00 a 17:00 horas.",
  },
  {
    question: "Cuales son sus horas de apertura",
    answer:
      "Nuestro horario de atención es de lunes a viernes de 9:00 a 17:00 horas.",
  },
  {
    question: "A que hora abren",
    answer:
      "Nuestro horario de atención es de lunes a viernes de 9:00 a 17:00 horas.",
  },
  {
    question: "A que hora cierran",
    answer:
      "Nuestro horario de atención es de lunes a viernes de 9:00 a 17:00 horas.",
  },
  {
    question: "Cuales son sus horas de disponibilidad",
    answer:
      "Nuestro horario de atención es de lunes a viernes de 9:00 a 17:00 horas.",
  },
  {
    question: "Horario de atencion",
    answer:
      "Nuestro horario de atención es de lunes a viernes de 9:00 a 17:00 horas.",
  },
  {
    question: "Horas de operacion",
    answer:
      "Nuestro horario de atención es de lunes a viernes de 9:00 a 17:00 horas.",
  },
  {
    question: "Cuando estan abiertos",
    answer:
      "Nuestro horario de atención es de lunes a viernes de 9:00 a 17:00 horas.",
  },
  // Saludos
  {
    question: "Hola",
    answer: "Hola Margarita Lover, ¿cómo estás el día de hoy? 😊",
  },
  {
    question: "Saludos",
    answer: "Hola Margarita Lover, ¿cómo estás el día de hoy? 😊",
  },
  {
    question: "Buenos dias",
    answer: "Hola Margarita Lover, ¿cómo estás el día de hoy? 😊",
  },
  {
    question: "Buenas tardes",
    answer: "Hola Margarita Lover, ¿cómo estás el día de hoy? 😊",
  },
  {
    question: "Buenas noches",
    answer: "Hola Margarita Lover, ¿cómo estás el día de hoy? 😊",
  },
  {
    question: "Que tal",
    answer: "Hola Margarita Lover, ¿cómo estás el día de hoy? 😊",
  },
  {
    question: "Hola",
    answer: "Hola Margarita Lover, ¿cómo estás el día de hoy? 😊",
  },
  // Contacto
  {
    question: "Como puedo contactarlos",
    answer:
      "Cuentas con el correo electrónico Margarita@saieh.com y nuestro número telefónico +57 111251626. ¿Algo más en lo que te pueda ayudar? 😊",
  },
  {
    question: "Cual es su correo electronico",
    answer:
      "Cuentas con el correo electrónico Margarita@saieh.com y nuestro número telefónico +57 111251626. ¿Algo más en lo que te pueda ayudar? 😊",
  },
  {
    question: "Cual es su numero de telefono",
    answer:
      "Cuentas con el correo electrónico Margarita@saieh.com y nuestro número telefónico +57 111251626. ¿Algo más en lo que te pueda ayudar? 😊",
  },
  {
    question: "Necesito contactarlos",
    answer:
      "Cuentas con el correo electrónico Margarita@saieh.com y nuestro número telefónico +57 111251626. ¿Algo más en lo que te pueda ayudar? 😊",
  },
  {
    question: "Como me comunico con ustedes",
    answer:
      "Cuentas con el correo electrónico Margarita@saieh.com y nuestro número telefónico +57 111251626. ¿Algo más en lo que te pueda ayudar? 😊",
  },
  {
    question: "Informacion de contacto",
    answer:
      "Cuentas con el correo electrónico Margarita@saieh.com y nuestro número telefónico +57 111251626. ¿Algo más en lo que te pueda ayudar? 😊",
  },
  {
    question: "Detalles de contacto",
    answer:
      "Cuentas con el correo electrónico Margarita@saieh.com y nuestro número telefónico +57 111251626. ¿Algo más en lo que te pueda ayudar? 😊",
  },
  {
    question: "Puedo llamarlos",
    answer:
      "Cuentas con el correo electrónico Margarita@saieh.com y nuestro número telefónico +57 111251626. ¿Algo más en lo que te pueda ayudar? 😊",
  },
  // Ubicación
  {
    question: "Donde estan ubicados",
    answer:
      "Puedes descubrir la sede que este mas cerca de ti en este link: https://www.facebook.com/margaritasaieh/posts/901281466749377/",
  },
  {
    question: "Cual es su direccion",
    answer:
      "Puedes descubrir la sede que este mas cerca de ti en este link: https://www.facebook.com/margaritasaieh/posts/901281466749377/",
  },
  {
    question: "Donde se encuentran",
    answer:
      "Puedes descubrir la sede que este mas cerca de ti en este link: https://www.facebook.com/margaritasaieh/posts/901281466749377/",
  },
  {
    question: "Ubicacion de su oficina",
    answer:
      "Puedes descubrir la sede que este mas cerca de ti en este link: https://www.facebook.com/margaritasaieh/posts/901281466749377/.",
  },
  {
    question: "Direccion de la oficina",
    answer:
      "Puedes descubrir la sede que este mas cerca de ti en este link: https://www.facebook.com/margaritasaieh/posts/901281466749377/",
  },
  {
    question: "Donde puedo encontrarlos",
    answer:
      "Puedes descubrir la sede que este mas cerca de ti en este link: https://www.facebook.com/margaritasaieh/posts/901281466749377/",
  },
  {
    question: "Cual es su localizacion",
    answer:
      "Puedes descubrir la sede que este mas cerca de ti en este link: https://www.facebook.com/margaritasaieh/posts/901281466749377/",
  },
  {
    question: "Donde estan sus oficinas",
    answer:
      "Puedes descubrir la sede que este mas cerca de ti en este link: https://www.facebook.com/margaritasaieh/posts/901281466749377/",
  },
  // Envíos
  {
    question: "Ofrecen servicios de envio",
    answer:
      "Sí, ofrecemos servicios de envio por toda la costa. Los costos y tiempos de entrega varían según la ubicación, consulta en nuestras redes de Rappi.",
  },
  {
    question: "Hacen entregas",
    answer:
      "Sí, ofrecemos servicios de envio por toda la costa. Los costos y tiempos de entrega varían según la ubicación, consulta en nuestras redes de Rappi.",
  },
  {
    question: "Realizan envios",
    answer:
      "Sí, ofrecemos servicios de envio por toda la costa. Los costos y tiempos de entrega varían según la ubicación, consulta en nuestras redes de Rappi.",
  },
  {
    question: "hacen envios",
    answer:
      "Sí, ofrecemos servicios de envio por toda la costa. Los costos y tiempos de entrega varían según la ubicación, consulta en nuestras redes de Rappi.",
  },
  {
    question: "Pueden enviar mi pedido",
    answer:
      "Sí, ofrecemos servicios de envio por toda la costa. Los costos y tiempos de entrega varían según la ubicación, consulta en nuestras redes de Rappi.",
  },
  {
    question: "Informacion sobre el envio",
    answer:
      "Sí, ofrecemos servicios de envio por toda la costa. Los costos y tiempos de entrega varían según la ubicación, consulta en nuestras redes de Rappi.",
  },
  {
    question: "Como funcionan los envios",
    answer:
      "Sí, ofrecemos servicios de envio por toda la costa. Los costos y tiempos de entrega varían según la ubicación, consulta en nuestras redes de Rappi.",
  },
  {
    question: "Costos de envio",
    answer:
      "Sí, ofrecemos servicios de envio por toda la costa. Los costos y tiempos de entrega varían según la ubicación, consulta en nuestras redes de Rappi.",
  },
  {
    question: "Tiempos de entrega",
    answer:
      "Sí, ofrecemos servicios de envio por toda la costa. Los costos y tiempos de entrega varían según la ubicación, consulta en nuestras redes de Rappi.",
  },
  {
    question: "Opciones de envio",
    answer:
      "Sí, ofrecemos servicios de envio por toda la costa. Los costos y tiempos de entrega varían según la ubicación, consulta en nuestras redes de Rappi.",
  },
  // Formas de pago
  {
    question: "Cuales son las formas de pago disponibles",
    answer:
      "Aceptamos varias formas de pago, incluyendo tarjetas de crédito (Visa, MasterCard), transferencias bancarias y pagos en efectivo a través de puntos autorizados.",
  },
  {
    question: "Metodos de pago",
    answer:
      "Aceptamos varias formas de pago, incluyendo tarjetas de crédito (Visa, MasterCard), transferencias bancarias y pagos en efectivo a través de puntos autorizados.",
  },
  {
    question: "Opciones de pago",
    answer:
      "Aceptamos varias formas de pago, incluyendo tarjetas de crédito (Visa, MasterCard), transferencias bancarias y pagos en efectivo a través de puntos autorizados.",
  },
  {
    question: "Aceptan tarjetas de credito",
    answer:
      "Aceptamos varias formas de pago, incluyendo tarjetas de crédito (Visa, MasterCard), transferencias bancarias y pagos en efectivo a través de puntos autorizados.",
  },
  {
    question: "Puedo pagar con transferencia bancaria",
    answer:
      "Aceptamos varias formas de pago, incluyendo tarjetas de crédito (Visa, MasterCard), transferencias bancarias y pagos en efectivo a través de puntos autorizados.",
  },
  {
    question: "Aceptan pagos en efectivo",
    answer:
      "Aceptamos varias formas de pago, incluyendo tarjetas de crédito (Visa, MasterCard), transferencias bancarias y pagos en efectivo a través de puntos autorizados.",
  },
  {
    question: "Formas de pago",
    answer:
      "Aceptamos varias formas de pago, incluyendo tarjetas de crédito (Visa, MasterCard), transferencias bancarias y pagos en efectivo a través de puntos autorizados.",
  },
  {
    question: "Como puedo pagar",
    answer:
      "Aceptamos varias formas de pago, incluyendo tarjetas de crédito (Visa, MasterCard), transferencias bancarias y pagos en efectivo a través de puntos autorizados.",
  },
  {
    question: "Que productos ofrecen",
    answer:
      "🍰 Ofrecemos una variedad de deliciosos pudines, desde los clasicos de chocolate y vainilla hasta opciones mas creativas como pudines de frutas 🍓🍍 y nueces 🥜. Tambien tenemos una seleccion de desayunos 🥐, como croissants recien horneados, muffins 🧁, y opciones saludables como avena 🥣 y yogur con frutas frescas 🍇.",
  },
  {
    question: "Cuales son sus especialidades",
    answer:
      "🌟 Nuestras especialidades incluyen pudines gourmet con ingredientes de alta calidad, como pudin de crema de pistacho o pudin de caramelo con nueces. Ademas, destacamos por nuestros desayunos artesanales, desde croissants recien horneados hasta opciones mas saludables como avena con frutas frescas.",
  },
  {
    question: "Que tipos de pudines tienen",
    answer:
      "🍮 Contamos con una amplia variedad de pudines, desde los clasicos de chocolate y vainilla hasta opciones mas sofisticadas como pudines de frutas tropicales 🍍, pudines de limon con merengue 🍋 y pudines de caramelo con nueces.",
  },
  {
    question: "Que tipos de pudines tienes",
    answer:
      "🍮 Contamos con una amplia variedad de pudines, desde los clasicos de chocolate y vainilla hasta opciones mas sofisticadas como pudines de frutas tropicales 🍍, pudines de limon con merengue 🍋 y pudines de caramelo con nueces.",
  },
  {
    question: "Tienen opciones sin gluten",
    answer:
      "🌾 Si, ofrecemos opciones sin gluten en nuestra pasteleria, incluyendo pudines sin gluten y desayunos como muffins 🧁 y panes especiales libres de gluten.",
  },
  {
    question: "tienes opciones veganas",
    answer:
      "🌱 ¡Claro que si! Tenemos opciones veganas en nuestra pasteleria, como pudines veganos elaborados con ingredientes vegetales y deliciosos desayunos veganos como batidos de frutas 🍹 y granola casera.",
  },
  {
    question: "Cuales son los productos mas populares",
    answer:
      "🌟 Nuestros pudines mas populares incluyen el clasico pudin de chocolate, el pudin de vainilla con fresas frescas 🍓 y el exquisito pudin de caramelo con nueces 🥜. Tambien son muy demandados nuestros croissants recien horneados y muffins variados.",
  },
  {
    question: "Tienen opciones para ocasiones especiales",
    answer:
      "🎉 ¡Por supuesto! Ofrecemos opciones especiales para ocasiones como cumpleanos, aniversarios y eventos corporativos. Desde pudines decorados con tematicas especificas hasta bandejas de desayuno para grupos, nos aseguramos de hacer de tu evento algo inolvidable.",
  },
  // Otras preguntas
  {
    question: "Que novedades tienen en la pasteleria",
    answer:
      "🎉 En nuestra pasteleria siempre estamos innovando. Pregunta por nuestras nuevas creaciones y sorprendete con nuestros ultimos lanzamientos!",
  },
  {
    question: "Cual es el pudin mas recomendado",
    answer:
      "🌟 Nuestro pudin mas recomendado es el de chocolate con trozos de frutas frescas. Una combinacion irresistible que te encantara!",
  },
  {
    question: "Tienen opciones para alergias alimentarias",
    answer:
      "🚫 Si, tenemos opciones para personas con alergias alimentarias. Consulta con nuestro personal para conocer las opciones disponibles segun tus necesidades especificas.",
  },
  {
    question: "Cuantos tipos de pudines tienen",
    answer:
      "🍮 Contamos con una amplia variedad de pudines, desde los clasicos de chocolate y vainilla hasta opciones mas sofisticadas como pudines de frutas tropicales 🍍, pudines de limon con merengue 🍋 y pudines de caramelo con nueces.",
  },
  {
    question: "Pueden personalizar un pudin para mi",
    answer:
      "🎨 ¡Claro que si! Estamos encantados de personalizar un pudin segun tus preferencias. Cuentanos que te gustaria y haremos realidad tu pudin personalizado!",
  },
  {
    question: "Que desayunos ofrecen",
    answer:
      "🥐 Nuestra selección de desayunos incluye croissants recién horneados, muffins variados, avena con frutas frescas 🍓, yogur con granola casera y batidos naturales 🍌. ¡Una forma deliciosa de comenzar tu día!",
  },
  {
    question: "Cuales son las opciones de desayuno",
    answer:
      "🍳 Tenemos una amplia variedad de opciones para el desayuno, desde croissants y muffins hasta opciones más saludables como avena y yogur con frutas frescas. ¡Seguro que encuentras algo que te encante para empezar bien tu día!",
  },
  {
    question: "Disponen de opciones de desayuno para llevar",
    answer:
      "🚗 Sí, ofrecemos opciones de desayuno para llevar. Puedes pasar y recoger tu pedido o incluso solicitar la entrega a domicilio en determinadas zonas.",
  },
  {
    question: "Tienen desayunos para personas veganas",
    answer:
      "🌱 ¡Absolutamente! Tenemos opciones de desayuno veganas, como batidos de frutas 🍹, avena con leche vegetal 🥣 y muffins sin ingredientes de origen animal.",
  },
  {
    question: "Ofrecen opciones de desayuno sin gluten",
    answer:
      "🌾 Sí, ofrecemos opciones de desayuno sin gluten para personas con intolerancia. Desde muffins sin gluten hasta opciones más tradicionales como frutas y yogur, tenemos algo para todos los gustos.",
  },
  // Eventos en la pastelería
  {
    question: "Puedo organizar eventos en su pastelería",
    answer:
      "🎉 ¡Por supuesto! Estamos encantados de organizar eventos en nuestra pastelería. Ya sea un cumpleaños, un baby shower o una reunión corporativa, ¡podemos adaptarnos a tus necesidades!",
  },
  {
    question: "Hacen reservas para eventos privados",
    answer:
      "📅 Sí, aceptamos reservas para eventos privados. Ponte en contacto con nosotros con anticipación para discutir los detalles y hacer los arreglos necesarios.",
  },
  {
    question: "Pueden proporcionar catering para eventos",
    answer:
      "🍽️ ¡Por supuesto! Ofrecemos servicios de catering para eventos en nuestra pastelería. Desde bandejas de desayuno hasta mesas de postres, podemos crear un menú delicioso para tu ocasión especial.",
  },
  {
    question: "Tienen opciones de menú para eventos",
    answer:
      "📋 Sí, tenemos opciones de menú para eventos que se pueden adaptar según tus preferencias y el tamaño de tu grupo. ¡Ponte en contacto con nosotros para obtener más información!",
  },
  {
    question: "Es posible reservar la pastelería para eventos privados",
    answer:
      "🎉 Sí, puedes reservar nuestra pastelería para eventos privados. Ya sea un pequeño encuentro o una gran celebración, estaremos encantados de ayudarte a hacer de tu evento algo especial.",
  },
  {
    question: "Bien y tu",
    answer: "🎉 Muy bien, encantada de atenderte ¿En que puedo ayudarte?",
  },
  {
    question: "Que precio tiene",
    answer:
      "🎉 Contactanos por nuestros correo Margarita@saieh.com y nuestro número telefónico +57 111251626 o da clic en nuestros productos destacados y llegaras a el menu de Rappi, ahi esta toda la informacion",
  },
  {
    question: "Cuanto cuesta",
    answer:
      "🎉 Contactanos por nuestros correo Margarita@saieh.com y nuestro número telefónico +57 111251626 o da clic en nuestros productos destacados y llegaras a el menu de Rappi, ahi esta toda la informacion",
  },
  {
    question: "Que precio tienen sus productos",
    answer:
      "🎉 Contactanos por nuestros correo Margarita@saieh.com y nuestro número telefónico +57 111251626 o da clic en nuestros productos destacados y llegaras a el menu de Rappi, ahi esta toda la informacion",
  },
  {
    question: "Que promociones tienen",
    answer: 
      "Tenemos combos de pudin, gaseosa y picada por 193.500 pesos, ademas de que si llevas dos tortas el mismo dia tienes el 50% de descuento en cualquier otro producto. Verifica conmigo, para que veas demas promociones activas.",
  },
  {
    question: "Hay algo en promocion",
    answer:
      "Tenemos combos de pudin, gaseosa y picada por 193.500 pesos, ademas de que si llevas dos tortas el mismo dia tienes el 50% de descuento en cualquier otro producto. Verifica conmigo, para que veas demas promociones activas.",
  },
];

// Función para quitar tildes
function removeAccents(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function findFAQResponse(userInput) {
  userInput = removeAccents(userInput.toLowerCase()); // Convertir la entrada del usuario a minúsculas y quitar tildes

  let bestMatch = { matches: 0, answer: null }; // Inicializar el mejor resultado encontrado

  // Iterar sobre cada pregunta en la lista de FAQ
  for (var i = 0; i < faq.length; i++) {
    var question = removeAccents(faq[i].question.toLowerCase());
    var answer = faq[i].answer;

    // Contar cuántas palabras clave de la pregunta del usuario coinciden con la pregunta del FAQ
    let matches = userInput
      .split(" ")
      .filter((word) => question.includes(word)).length;

    // Verificar si es la mejor coincidencia hasta ahora
    if (matches > bestMatch.matches) {
      bestMatch.matches = matches;
      bestMatch.answer = answer;
    }
  }

  // Devolver la mejor respuesta encontrada
  if (bestMatch.matches > 0) {
    return bestMatch.answer;
  } else {
    return "Lo siento, no encontré una respuesta para tu pregunta. ¿Puedes intentar ser más específico?";
  }
}

function minimizeChat() {
  var chat = document.getElementById("assistant-chat");
  var bubble = document.getElementById("assistant-bubble");
  chat.style.display = "none";
  bubble.classList.remove("hidden");
}

function expandChat() {
  chatVisible = true;
  var chat = document.getElementById("assistant-chat");
  var bubble = document.getElementById("assistant-bubble");
  chat.style.display = "block";
  bubble.classList.add("hidden");
}

// Obtener el campo de entrada de mensajes
var userInput = document.getElementById("user-input");

// Agregar un event listener para la tecla "Enter"
userInput.addEventListener("keypress", function (event) {
  // Verificar si la tecla presionada es "Enter"
  if (event.key === "Enter") {
    // Evitar el comportamiento predeterminado de la tecla "Enter" (submit del formulario)
    event.preventDefault();
    // Enviar el mensaje
    sendMessage();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const cartItemsElement = document.getElementById("cart-items");
  const productsElement = document
    .getElementById("products")
    .querySelector("ul");

  productsElement.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      const name = event.target.getAttribute("data-name");
      const price = event.target.getAttribute("data-price");

      const cartItem = document.createElement("li");
      cartItem.textContent = `${name} - $${price}`;
      cartItemsElement.appendChild(cartItem);
    }
  });

  const checkoutBtn = document.getElementById("checkout-btn");
  checkoutBtn.addEventListener("click", function () {
    alert("¡Gracias por su compra!");
    cartItemsElement.innerHTML = "";
  });
});
