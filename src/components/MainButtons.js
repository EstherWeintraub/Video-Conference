import { useState } from 'react';
import './Components.css';
import { createMeeting } from "../services/api-service";
export const MainButton = ({isJoin, setMeetingNumber}) => {
    const [isFirstDisplay, setIsFirstDisplay] = useState(true);
    const [value, setValue] = useState('');

    const buttonClick = () => {
        if(isFirstDisplay) {
            setIsFirstDisplay(false);
        } else {
            if(isJoin) {
                setMeetingNumber(value);
            } else{
                createMeeting(value).then(meetingNum => {
                    setMeetingNumber(meetingNum);
                }).catch(error => {
                    console.log(`Failed creating meeting ` + error.message);
                });
            }
        }
    }
    return (
      <div className="Main-buttons">
        {!isFirstDisplay && <input placeholder={isJoin? 'Join meeting' : 'Create meeting'} type="text" value={value} onChange={setValue}/>}
        <button onClick={buttonClick}>{isJoin? 'Join meeting' : 'Create meeting'}</button>
      </div>
    );
}
