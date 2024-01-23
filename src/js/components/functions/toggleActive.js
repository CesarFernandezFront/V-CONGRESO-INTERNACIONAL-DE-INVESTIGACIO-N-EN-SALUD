export function toggleActive(entry,entries,state) {
  console.log('state: ', state)

  // if, la condición se evalúa tan pronto como se ejecuta la función. 
  if (state === true) {
    console.log('Elemento entró: ', entry.target.textContent)
    entry.target.classList.add('active');
  }
  else {
    console.log('Elemento salió: ', entry.target.textContent)
    entries.forEach((entrie) => {
      entry.target.classList.remove('active');
    })
  }

  // la condición no se evalúa inmediatamente al cargar la función, sino que se evalúa cuando se alcanza esa línea de código dentro de la función
  // state === true ? entry.target.classList.add('active') : entries.forEach((entry) => entry.target.classList.remove('active'));
}
