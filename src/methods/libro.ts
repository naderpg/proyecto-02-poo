export interface Libro {
    titulo: string
    autor: string
    fecha: number
    genero: string
    disponible: boolean
}

export function leerFormulario(): Libro | null {
    const titulo = (document.getElementById('titulo') as HTMLInputElement).value.trim()
    const autor = (document.getElementById('autor') as HTMLInputElement).value.trim()
    const fecha = Number((document.getElementById('fecha') as HTMLInputElement).value)
    const genero = (document.getElementById('genero') as HTMLSelectElement).value
    const disponible = (document.getElementById('disponible') as HTMLInputElement).checked

    if (titulo === '' || autor ==='' || genero === '' || !(fecha > 0)) {
    alert('tenemos que llenar todos los campos y escribe una fecha mayor a 0')
    return null
 }


 return { titulo, autor, fecha, genero, disponible }
}



