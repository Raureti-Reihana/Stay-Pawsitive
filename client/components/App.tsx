import Dogs from './fetchDog.tsx'

function App() {
  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <div>
      <div>Comment something pawsitive about the dog</div>
      <Dogs />
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
          marginTop: '20px',
        }}
      >
        Get a New Dog Picture
      </button>
    </div>
  )
}

export default App
