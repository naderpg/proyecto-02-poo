import './style.css'
import { ejercicio } from './pages/ejercicio'
import { leerFormulario } from './methods/libro'
import type { Libro } from './methods/libro'
import { agregarFila } from './methods/tabla'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = ejercicio

const formulario = document.querySelector<HTMLFormElement>('#formulario')
const total = document.querySelector<HTMLSpanElement>('#total')
const vaciar = document.querySelector<HTMLButtonElement>('#vaciar')
const cuerpoTabla = document.querySelector<HTMLTableSectionElement>('#cuerpotabla')

if (!formulario || !total || !vaciar || !cuerpoTabla) {
	throw new Error('No se encontraron todos los elementos del catálogo.')
}

const libros: Libro[] = []

formulario.addEventListener('submit', (event) => {
	event.preventDefault()

	const libro = leerFormulario()
	if (!libro) return

	libros.push(libro)
	agregarFila(libro)
	total.textContent = String(libros.length)
	formulario.reset()
})

vaciar.addEventListener('click', () => {
	libros.length = 0
	cuerpoTabla.replaceChildren()
	total.textContent = '0'
})
