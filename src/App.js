import { useState } from 'react';
import './App.css';
import { MainButton } from './components/MainButtons';
import { Meeting } from './components/Meeting';

const MainPage = () => {
  const [meetingNumber, setMeetingNumber] = useState(0);
  
  return (
    <div className="Main-page">
      {meetingNumber? <Meeting meetingNumber={meetingNumber}/> : <>
        <MainButton isJoin={false} setMeetingNumber={setMeetingNumber}/>
        <MainButton isJoin={true} setMeetingNumber={setMeetingNumber}/>
      </>}
    </div>
  );
}

function App() {
  return (
    <div className="App">
        <MainPage/>
    </div>
  );
}

export default App;
