import './App.css'
import Controller from './components/Controller'
import Form from './components/Form'
import Preview from './components/Preview'

function App() {

  return (
    <div className='app'>
      <div className="controller">
        <Controller />
      </div>
      <div className="left">
        <Form />
      </div>
      <div className="right">
        <Preview />
      </div>
    </div>
  )
}

export default App
