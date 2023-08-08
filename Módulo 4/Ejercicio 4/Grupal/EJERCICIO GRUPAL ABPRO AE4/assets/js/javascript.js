// Obtener los elementos del DOM
const form = document.querySelector('#weather-form'); // Obtener el formulario
const cityInput = document.querySelector('#city-input'); // Obtener el input de la ciudad
const countryInput = document.querySelector('#country-input'); // Obtener el input del país
const resultContainer = document.querySelector('#result-container'); // Obtener el contenedor de resultados

// Función para convertir grados Kelvin a Celsius
const kelvinToCelsius = kelvin => {
  return Math.round(kelvin - 273.15); // Convertir Kelvin a Celsius y redondear el resultado
};

// Función asincrónica para obtener los datos de la API
const getWeatherData = async (city, country) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=8fcbeb6de3cae2821ae5ff9c76ce5461`); // Obtener los datos del clima desde la API
    const data = await response.json(); // Convertir la respuesta a formato JSON

    // Extraer información necesaria de la respuesta
    const temperature = data.main.temp; // Obtener la temperatura

    // Mostrar la información en la tarjeta del clima
    const card = document.createElement('div'); // Crear un elemento div para la tarjeta del clima
    card.classList.add('weather-card'); // Agregar la clase 'weather-card' al elemento div

    const icon = document.createElement('i'); // Crear un elemento i para el icono
    const weatherIcon = getWeatherIcon(data.weather[0].id); // Obtener el nombre del icono del clima
    icon.classList.add('wi', 'weather-icon', weatherIcon); // Agregar las clases al elemento i

    const temperatureElement = document.createElement('p'); // Crear un elemento p para la temperatura
    temperatureElement.classList.add('temperature'); // Agregar la clase 'temperature' al elemento p
    temperatureElement.textContent = `${kelvinToCelsius(temperature)}°C`; // Mostrar la temperatura convertida en el elemento p

    card.appendChild(icon); // Agregar el icono a la tarjeta del clima
    card.appendChild(temperatureElement); // Agregar la temperatura a la tarjeta del clima

    resultContainer.innerHTML = ''; // Limpiar el contenedor de resultados
    resultContainer.appendChild(card); // Agregar la tarjeta del clima al contenedor de resultados
  } catch (error) {
    resultContainer.innerHTML = 'Error al obtener los datos del clima.'; // Mostrar mensaje de error si no se pueden obtener los datos
  }
};

// Función para obtener el icono del clima basado en el código de clima
const getWeatherIcon = weatherCode => {
  // Asignar el nombre del icono de acuerdo al código de clima
  // Puedes ajustar esta función para asignar los nombres de icono según tus necesidades
  // Aquí se muestra un ejemplo con algunos códigos de clima comunes
  if (weatherCode >= 200 && weatherCode < 300) {
    return 'wi-thunderstorm'; // Tormenta
  } else if (weatherCode >= 300 && weatherCode < 400) {
    return 'wi-sprinkle'; // Llovizna
  } else if (weatherCode >= 500 && weatherCode < 600) {
    return 'wi-rain'; // Lluvia
  } else if (weatherCode >= 600 && weatherCode < 700) {
    return 'wi-snow'; // Nieve
  } else if (weatherCode >= 700 && weatherCode < 800) {
    return 'wi-fog'; // Niebla
  } else if (weatherCode === 800) {
    return 'wi-day-sunny'; // Soleado
  } else {
    return 'wi-cloudy'; // Nublado
  }
};

// Manejar el evento de envío del formulario
form.addEventListener('submit', async event => {
  event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

  const city = cityInput.value; // Obtener el valor ingresado en el input de la ciudad
  const country = countryInput.value; // Obtener el valor ingresado en el input del país

  resultContainer.innerHTML = 'Cargando...'; // Mostrar mensaje de carga en el contenedor de resultados

  try {
    await getWeatherData(city, country); // Obtener los datos del clima y mostrarlos en la tarjeta correspondiente
  } catch (error) {
    resultContainer.innerHTML = 'Error en la aplicación.'; // Mostrar mensaje de error si ocurre algún problema
  }
});
