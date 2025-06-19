# 🧠 Eventos GOD del Chuy

Este proyecto está hecho con **Next.js** y **React**, y muestra de forma divertida y visual cómo funcionan distintos tipos de **eventos en el navegador**. Ideal para practicar y entender cómo manejar eventos como `onClick`, `onSubmit`, `onDoubleClick`, y `onChange`.

---

## 🚀 ¿Qué hace esta app?

La app presenta **cuatro eventos distintos**, cada uno con su propio botón o elemento interactivo. Puedes cambiar entre eventos usando los botones de la derecha. Cada evento tiene una reacción específica y, en algunos casos, muestra una imagen diferente.

---

## 📦 Estructura de los Eventos

### 🖱️ **Evento 1 – `onClick`**
- **Descripción**: Cuando haces clic en el botón, se muestra un mensaje y una imagen (`evento1.jpg`).
- **Uso del evento**: `onClick`
- **Objetivo**: Demostrar un evento básico de clic en un botón.

```jsx
onClick={() => setMensaje("has activao el evento uno chaval, BOO")}
```

**¿Qué pasa?** Al hacer clic, aparece el mensaje humorístico y se muestra una imagen. Es el evento más básico de React.

---

### 📁 **Evento 2 – `onChange` (Input File)**
- **Descripción**: Permite seleccionar un archivo y muestra el nombre del archivo subido.
- **Uso del evento**: `onChange` en un input de tipo `file`
- **Objetivo**: Demostrar cómo manejar la selección de archivos.

```jsx
onChange={(e) => {
  const file = e.target.files?.[0];
  if (file) {
    setMensaje(`Archivo subido: ${file.name}`);
  }
}}
```

**¿Qué pasa?** Cuando seleccionas un archivo, automáticamente se captura el evento y muestra el nombre del archivo seleccionado.

---

### 👆👆 **Evento 3 – `onDoubleClick`**
- **Descripción**: Se activa solo cuando haces **doble clic** en el botón, no con un clic simple.
- **Uso del evento**: `onDoubleClick`
- **Objetivo**: Mostrar la diferencia entre `onClick` y `onDoubleClick`.

```jsx
onDoubleClick={() => setMensaje("Bien, si le picaste 2 veces seguidas (no tuve más imagenes para humillar a mis compañeros XD)")}
```

**¿Qué pasa?** Solo responde al doble clic. Si haces un solo clic, no pasa nada. Al hacer doble clic, aparece el mensaje y una imagen (`yanosupequeponerdeimagen.jpg`).

---

### 🔘 **Evento 4 – `onChange` (Radio Buttons)**
- **Descripción**: Usa radio buttons para seleccionar entre 3 opciones, cada una muestra una imagen diferente.
- **Uso del evento**: `onChange` en inputs de tipo `radio`
- **Objetivo**: Demostrar cómo manejar selecciones múltiples con radio buttons.

```jsx
onChange={() => manejarSeleccion("opcion1")}
```

**¿Qué pasa?** Cada vez que seleccionas una opción diferente:
- **Opción 1**: Muestra `chava.jpg`
- **Opción 2**: Muestra `sifuentes.jpg` 
- **Opción 3**: Muestra `manuel.jpg`

El estado se maneja con `opcionActiva` y `setOpcionActiva` para recordar cuál está seleccionada.

---

## 🛠️ Tecnologías Utilizadas

- **Next.js 13+** (App Router)
- **React** (Hooks: `useState`)
- **Tailwind CSS** (Estilos)
- **Next/Image** (Optimización de imágenes)

---

## 📂 Estructura del Proyecto

```
/public
├── evento1.jpg
├── yanosupequeponerdeimagen.jpg
├── chava.jpg
├── sifuentes.jpg
└── manuel.jpg

/app
└── page.js (componente principal)
```

---

## 🎯 Conceptos de React Aprendidos

1. **Estado con `useState`**: Manejo de `eventoActivo`, `mensaje`, y `opcionActiva`
2. **Eventos del navegador**: `onClick`, `onChange`, `onDoubleClick`
3. **Renderizado condicional**: Mostrar contenido basado en el estado
4. **Props y callbacks**: Pasar funciones como props
5. **Manejo de formularios**: Prevenir envío con `e.preventDefault()`
6. **Inputs controlados**: Radio buttons controlados por React

---

## 🚀 Cómo ejecutar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación.

---

## 💡 Notas Importantes

- El **Evento 2** usa un formulario con `onSubmit` pero previene el envío real con `e.preventDefault()`
- El **Evento 4** maneja un estado adicional (`opcionActiva`) específico para los radio buttons
- Cada evento limpia el mensaje anterior al cambiar de evento
- Las imágenes deben estar en la carpeta `/public` para funcionar correctamente

---

**¡Diviértete explorando los eventos del navegador! 🎉**
