import type { Libro } from './libro'

export function agregarFila(libro: Libro): void {
	const cuerpoTabla = document.querySelector<HTMLTableSectionElement>('#cuerpotabla')
	if (!cuerpoTabla) return

	const fila = cuerpoTabla.insertRow()
	fila.insertCell().textContent = libro.titulo
	fila.insertCell().textContent = libro.autor
	fila.insertCell().textContent = String(libro.fecha)
	fila.insertCell().textContent = libro.genero
	fila.insertCell().textContent = libro.disponible ? 'Disponible' : 'Prestado'
}
