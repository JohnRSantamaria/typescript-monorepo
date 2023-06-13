import './App.css'

const App = () => {
  return (
    <div className='page'>
      <header>
        <h1>Buscarodr de peliculas</h1>
        <form className='form'>
          <input placeholder='Avengers, Star wars, The matrix...' />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        {/* peliculas */}
        Aqui iran los resultados
      </main>
    </div>
  )
}

export default App