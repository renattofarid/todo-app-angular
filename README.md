# TODO APP - DESAFÍO TÉCNICO

¡Bienvenido a la TODO APP - DESAFÍO TÉCNICO! Este proyecto es una aplicación de gestión de tareas construida utilizando Angular v17. A continuación, encontrarás toda la información necesaria para comprender, configurar y ejecutar este proyecto.

## Tabla de Contenidos
1. [Descripción del Proyecto](#descripción-del-proyecto)
2. [Características Principales](#características-principales)
3. [Requisitos Previos](#requisitos-previos)
4. [Tecnologías Utilizadas](#tecnologías-utilizadas)
5. [Estructura del Proyecto](#estructura-del-proyecto)
6. [Instalación](#instalación)
7. [Ejecución de la Aplicación](#ejecución-de-la-aplicación)
8. [Uso de la Aplicación](#uso-de-la-aplicación)
9. [Visiten nuestra DEMO](#visiten-nuestra-demo)

## Descripción del Proyecto

La TODO APP es una aplicación web que permite a los usuarios gestionar sus tareas diarias de manera eficiente. Este proyecto fue desarrollado como parte de un desafío técnico y está diseñado para ser escalable y reutilizable.

## Características Principales

- **Gestión de Tareas:** Agregar, eliminar y marcar tareas como completadas.
- **Interfaz de Usuario Receptiva:** Diseño agradable gracias a Tailwind CSS.
- **Control de Estado Avanzado:** Utiliza NGRX para manejar el estado de la aplicación de manera eficiente.
- **Componentes Reutilizables:** Basado en una estructura modular de componentes.
- **Generación de ID Dinámicos:** Utiliza UUID para generar identificadores únicos para las tareas.

## Requisitos Previos

Asegúrate de tener instaladas las siguientes herramientas en tu entorno de desarrollo:

- **Node.js:** Versión 18 o superior. Puedes descargar la última versión de Node.js desde [aquí](https://nodejs.org/).
- **Angular CLI:** Instalado globalmente en tu sistema. Puedes instalarlo usando el siguiente comando:
```bash
  npm install -g @angular/cli
```

## Tecnologías Utilizadas
- **Angular v17:** Framework de desarrollo web.
- **Framework CSS**: Tailwind CSS
- **Íconos:** FontAwesome
- **Controlador de Estados:** NGRX (Store, Effects, Devtools)
- **Generador de UUID:** Utilizado para generar IDs dinámicos


## Estructura del Proyecto
El proyecto sigue la metodología de Atomic Design, organizando los componentes en:

- **Átomos:** Componentes básicos e indivisibles (e.g., botones, inputs).
- **Moléculas:** Combinaciones de átomos (e.g., formularios, tarjetas).
- **Organismos:** Uniones de moléculas que forman secciones completas de la UI (e.g., header, sidebar).
- **Templates:** Esqueletos de páginas que combinan organismos.
```bash
src/
├── app/
    ├── components/
        │   ├── atoms/
        │   ├── molecules/
        │   ├── organisms/
        │   ├── templates/
│   └── ... (otros directorios y archivos de Angular)
├── assets/
├── styles/
└── ... (otros archivos de configuración)
```

## Instalación
Sigue estos pasos para clonar e instalar el proyecto en tu máquina local:
**-** 1. Clona el repositorio utilizando Git:
```bash
  git clone https://github.com/renattofarid/todo-app-angular.git
```

**-** 2. Navega al directorio del proyecto:
```bash
  cd todo-app-angular
```

**-** 3. Instala las dependencias del proyecto:
```bash
  npm install
```

## Ejecución de la Aplicación
Para ejecutar la aplicación en un entorno de desarrollo, utiliza el siguiente comando:

```bash
    ng serve
```

Luego, abre tu navegador y navega a http://localhost:4200/ para ver la aplicación en funcionamiento.

## Uso de la Aplicación
La TODO APP es una aplicación simple y fácil de usar. Primero tendrás que iniciar sesión con cualquier de estos usuarios:

```javascript
    {
        user: renattofarid,
        password: password
    }

    {
        user: karlnavarro,
        password: password
    }
```

Luego podrás agregar nuevas tareas, marcarlas como completadas y eliminarlas de la lista. La aplicación tiene persistencia de datos, por lo que tus tareas se guardarán incluso después de cerrar la aplicación, recargar la página o haciendo logout.

## Visiten nuestra DEMO
Puedes probar la aplicación en vivo visitando nuestra DEMO en el siguiente enlace: [TODO APP - DEMO](https://todo-app-entelgy.vercel.app/)