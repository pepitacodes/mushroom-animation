const fs = require('fs');
const puppeteer = require('puppeteer');

const framesDirectory = 'C:/Users/fecam/Desktop/mushroom-animation/frames';

(async () => {
  // Crear el directorio si no existe
  if (!fs.existsSync(framesDirectory)) {
    fs.mkdirSync(framesDirectory, { recursive: true });
  }

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Reemplaza con la ruta real de tu archivo HTML
  await page.goto('file:///C:/Users/fecam/Desktop/mushroom-animation/index.html');

  // Capturar una captura de pantalla cada fotograma durante 5 segundos
  for (let i = 0; i < 100; i++) { // Ajusta el número de fotogramas según sea necesario
    await page.screenshot({ path: `${framesDirectory}/frame${i}.png` });
   ; // Ajusta el tiempo de espera entre fotogramas según sea necesario
  }

  await browser.close();

  console.log('Frames capturados exitosamente.');
})();

