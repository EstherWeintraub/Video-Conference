
import { useState } from 'react';
import './Components.css';
import {BiMicrophoneOff, BiMicrophone} from 'react-icons/bi'
import { setActions } from '../services/api-service';
export const Particpant = ({name, role, muted, isAdmin, meetingNumber, id}) => {
    const [canMuteAll, setCanMuteAll] = useState(false);
    const micPressed = () => {
        if(isAdmin && !canMuteAll) {
            setCanMuteAll(true);
        } else {
            // call api with !muted
            // for admin close the choices
            setActions({meetingId: meetingNumber, actionType: muted? 'unmute' : 'mute', participantId: id}).then(sucsess => {
                if(isAdmin) {
                    setCanMuteAll(false);
                }
            }).catch(error => {
                console.log(`Failed to `+ muted? 'unmute' : 'mute' + error.message);
            });
        }
    }

    const muteAll = () => {
        setActions({meetingId: meetingNumber, actionType: 'mute_all', participantId: id}).then(sucsess => {
            setCanMuteAll(false);
        }).catch(error => {
            console.log(`Failed to mute all participants ` + error.message);
        });
    }
    
    return (
      <div className="Particpnt">
        <h3>{role}</h3>
        <h3>{name}</h3>
        <button onClick={micPressed}><h3>{muted? <BiMicrophoneOff/> : <BiMicrophone/>}</h3></button>
        {canMuteAll && <>
            <button onClick={muteAll}><h3>mute all</h3></button>
            <button onClick={micPressed}><h3>{muted? 'unmute' : 'mute'}</h3></button>
        </>}
      </div>
    );
}