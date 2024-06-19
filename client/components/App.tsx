function App() {

  const refreshPage = () => {
    window.location.reload();
  }

  return (
    <div>
      <h1>App</h1>
      <p>React development has begun!</p>
      <button 
        onClick={refreshPage} 
        style={{ 
          padding: '10px 20px', 
          fontSize: '16px', 
          backgroundColor: '#ff4500', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        Get a New Dog Picture
      </button>
    </div>
  )
}

export default App
