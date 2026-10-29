# Tarea 1: Biblioteca

Formulario hecho con TypeScript para registrar libros. Los datos se guardan en un arreglo y se muestran en una tabla.

## Qué hace

- Registra libros con título, autor, fecha, género y estado
- Valida que no falten datos y que la fecha sea mayor a 0
- Muestra cada libro como una fila en la tabla
- Indica Disponible o Prestado según el checkbox
- Muestra el total de libros registrados
- Vacía la tabla y el arreglo con un botón

## Cómo ejecutarlo

```
npm install
npm run dev
```

Abre http://localhost:5173 en el navegador.

Para comprobar que no hay errores

```
npm run build
```

## Estructura

```
src/
├── components/
│   ├── enunciado.html
│   ├── formulario.html
│   └── lista.html
├── methods/
│   ├── libro.ts
│   └── tabla.ts
├── pages/
│   └── ejercicio.ts
├── main.ts
└── style.css
```

## Cómo funciona

- **libro.ts** define la interface Libro y la función leerFormulario, que valida los datos y devuelve un Libro o null
- **tabla.ts** tiene agregarFila, que crea la fila de un libro, y vaciarTabla, que deja el tbody vacío
- **main.ts** obtiene los elementos por su id, guarda los libros en el arreglo y conecta el envío del formulario y el botón de vaciar

## Tecnologías

- TypeScript
- Vite
- HTML y CSS

## Autor

Nader
