import Student from './Student'

function App() {

  return (
    <div>
        <Student name="SpongeBob" age="30" isStudent={true}/>
        <Student name="Patrick" age={42} isStudent={false}/>
        <Student name="Squidward" age={50} isStudent={false}/>
        <Student />
    </div>
  )
}


export default App
