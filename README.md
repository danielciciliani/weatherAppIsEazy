# Weather App

Proyecto desplegado en Vercel: 

Weather app es un prototipo de Aplicación Climatológica, según los requerimientos de la prueba técnica. Es una Single Page Application (SPA) creada en React.

Los usuarios pueden seleccionar entre 3 cuidades, y ver los datos que se obtienen desde la API de [text](https://openweathermap.org/)

## Requisitos

- Dos idiomas, Inglés por defecto
- Selección de 3 ciudades
- Obtención de datos desde la API
- Mostrar resultados: icono asociado, la descripción, la temperatura actual, mínima y máxima.

## Instalación
Pasos para instalar el proyecto localmente:

1. Clonar el repositorio

```bash
git clone https://github.com/danielciciliani/weatherAppIsEazy
```

2. Instalar dependecias de frontend
```bash
npm install
```
3. Modificar el fichero `.env.example` colocando una API_KEY real para la conexión a la API, y quitando *".example"* del nombre del fichero.

- Key de ejemplo:
```bash
VITE_WEATHER_API_KEY=abcdef12345678910
```
- Nombre del fichero corregido: `.env`.

4. Iniciar el fronted en modo **develop**
```bash
npm run dev
```

La aplicacion estará disponible en [http://localhost:5173/](http://localhost:5173/)

## Estructura del proyecto - frontend

```bash
client/
├── dist/                   
root/
├── public/
├── src/
│ ├── assets/
│ ├── components/         ## componentes
│ │ ├── CitySelector/
│ │ ├── LanguageSelector/
│ │ ├── UI/
│ │ └── WeatherInfo/
│ ├── data/               ## data
│ │ └── Cities.ts
│ ├── services/           ## API call
│ │ └── WeatherApiCall.ts
│ ├── App.css
│ ├── App.tsx
│ ├── i18n.ts             ## translations
│ ├── index.css
│ ├── main.tsx
│ └── vite-env.d.ts
├── .env
├── .gitignore
├── .prettierignore
├── .prettierrc
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```

## Arquitectura y flujo
1. **SPA:** Cuando el usuario selecciona una ciudad, se muestra el detalle del clima de la misma, puede cambiar la selección en cualquier momento, y cambiar el idioma de la página. En ambos casos, se actualizarán los datos que se muestran. 

## Desafío opcional - Test unitario 
No se realizan test para la prueba.

## Tecnologías utilizadas
- **React**: para construir la UI.
- **Vite**: para construccion rápida y *dev server*.
- **Tailwind**: para los estilos de la aplicación.
- **Motion**: para animaciones

## License

[MIT](https://choosealicense.com/licenses/mit/)