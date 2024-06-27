<h1>EJERCICIO PRÁCTICO FRONT-END:<strong>ANGULAR</strong><p></h1>

\_Desarrollar una aplicación web utilizando Angular que muestre la información de personajes de Marvel utilizando la API pública (https://developer.marvel.com/). Es crear una cuenta gratuita para obtener las credenciales necesarias de consumo.\_

## Requisitos funcionales:

### 1. Página de inicio:

- La página debe mostrar una lista de personajes de Marvel obtenidos desde la API.

- Cada personaje debe mostrar su nombre y una imagen en miniatura.

- Al hacer clic en un personaje de la lista, la aplicación debe navegar a la página del Detalle del personaje.

### 2. Detalle del personaje:

- Se debe mostrar la siguiente información del personaje:

  - Nombre
  - Descripción
  - Imagen
  - Lista de comics

### 3. Interfaz de usuario atractiva:

- Diseñar una interfaz de usuario limpia y atractiva utilizando: CSS o Bootstrap.

## Requisitos técnicos:

- `Angular`:

  - Utilizar Angular en la versión más reciente para desarrollar la aplicación.

- `Git y GiLab`:

  - Se requiere la entrega del código de la aplicación mediante repositorios Git.
  - Realizar una confirmación (`commit`) por cada uno de los puntos del ejercicio.
  - Publicar el proyecto de forma privada.
  - Conceder acceso en al usuario `@devops-solemti`

- `API de Marvel`:

- Utilizar herramientas como `HttpClient` para realizar solicitudes HTTP a la API de Marvel.

- `CleanCode y buenas practicas`: Seguir los principios de desarrollo limpio y escribir código bien estructurado y modular.

- `Menejo de errores`: Implementar manejo de errores adecuado, por ejemplo, mostrar un mensaje de error si la API no responde correctamente.

- `Responsive Design`: Hacer que la aplicación sea responsive para que se vea bien en dispositivos móviles y tablets.

- (_Opcional_) `Hosting Web App`: De preferencia montar en un servidor de prueba gratuito y compartir la liga.

---

# Plan de desarrollo:

_.Mensaje de confirmacion al documento de especificaciones, seguido de las tareas que se deben agreagar a ese commit._
_.{X:'TASK-COMPLETE' O:'EN-PROCESO' -:'EN-ESPERA'}._

- > Initial setup of Angular project with Angular CLI.
  - [x] Crear una nueva aplicación Angular utilizando Angular CLI.
  - [x] Configurar el entorno de desarrollo (instalación de dependencias necesarias).

- > Integrate Marvel API: Add environment configuration and MarvelService for HTTP requests
  - [x] Crear una cuenta gratuita en el sitio de Marvel Developer para obtner las cuales (API Key y Secret Key).
  - [x] Configurar el servicio HttpClient para realizar solicitudes a la API de .

- > Develop Home page: Create HomeComponent and display list of Marvel characters
  - [x] Crear components: 
    - > `HomePageComponente`: Home page, display list of Marvel characters
    - > `HeroListComponent`: Manager list, fecth, painate, ... Item<HeroCardComponent> 
    - > `HeroCardComponent`: Card Hero, Img and name, descp.
  - [x] Crear servicio:
    - > `CharactersMarvelApiService`: Marxvel Api: Characters.
  - [x] <Route>('character:id') Añadir navegación al hacer clic en un personaje para redirigir al Detalle del personaje.

- > Develop Character Detail page: Create CharacterDetailComponent and display character detailsE
  - [ ] Crear un componentes:
    - > `CharacterDetailPageComponent`: Para mostrar la información detallada del personaje y los comics.
    - > `CharacterDetailCardComponent`: para mostrar la información detallada del personaje.`
    - > `ComicsListComponent`: Listar comics.`
  <!-- - [ ] (REPETIDO)Implementar el servicio para obtener los detalles del personaje seleccionado la API de Marvel. -->
  - [ ] Mostrar la información del personaje (Nombre, Descripción, Imagen, Lista de ).

- > Design UI: Apply CSS and Bootstrap for a clean and responsive interface
  - [ ] Utilizar CSS o Bootstrap para diseñar una interfaz limpia y atractiva.
  - [ ] Asegurarse de que la aplicación sea responsive para dispositivos móviles y s.

- > Impleme`nt error handling: Add error handling for HTTP requests in services and components
  - [ ] Implementar manejo de errores en las solicitudes HTTP para mostrar mensajes adecuados si la API no responde correctamente.

- > Con`figure Git and GiLab: Initialize repository, add remote, and push initial commit=
  - [ ] Configurar Git y GiLab para la gestión del código fuente.
  - [ ] Realizar commits para cada uno de los puntos del ejercicio.
  - [ ] Publicar el proyecto en un repositorio privado en GiLab.
  - [ ] Conceder acceso al usuario @devops-solemti.

- > Deploy application: Build for production and deploy to hosting servic
  - [ ] Montar la aplicación en un servidor de prueba gratuito (como GitHub Pages, y, Vercel, etc.).
  - [ ] Compartir la URL del servidor de prueba.
