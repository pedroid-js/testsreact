import React from 'react'
import './App.css';
import Form from './Form'

function App() {
  const [values, setValue] = React.useState({
    name: '',
    surname: ''
  })

  const handleName = (e) => setValue(prevStates => ({ ...prevStates, name: e.target.value }))
  const handleSurname = (e) => setValue(prevStates => ({ ...prevStates, surname: e.target.value }))

  React.useEffect(() => {
    console.clear()
    console.log('name: ', values.name)
    console.log('surname: ', values.surname)
  }, [values.name, values.surname])

  return (
    <div className="App">
      <Form 
        handleName={handleName} 
        handleSurname={handleSurname} 
        value={values}
      />
    </div>
  );
}

export default App;
