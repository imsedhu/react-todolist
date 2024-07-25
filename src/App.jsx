
import './App.css'

function App() {
  

  return (
    <>
      <main>
        <h1>To Do List</h1>

        <div className="input-container">
          <input type="text"  id="task" placeholder='Enter Your Task Here..' />
          <button>+</button>
        </div>

        <div className="container">
          <div className="todo">
            <p>go to the gym</p>
            <div className="actions">
              <input type="checkbox" id="" />
              <button>Delete</button>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}

export default App
