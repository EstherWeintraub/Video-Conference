import { useEffect, useState } from "react";
import { Particpant } from "./Particpant";
import './Components.css';
import { Sidebar } from "./Sidebar";
import { getMeetingDetails } from "../services/api-service";
export const Meeting = ({meetingNumber}) => {
    const [meetingDetails, setMeetingDetails] = useState(null);

    useEffect(() => {
        getMeetingDetails(meetingNumber).then(meetingDetails => {
            setMeetingDetails(meetingDetails)
        }).catch(error => {
            console.log(`Failed fetching meeting details ` + error.message);
        });
        // setMeetingDetails({file_number: '47-64-464', file_subject: 'case josef', particpnts: [{name: 'ghgh', role: 'JUDGE', muted: false, isAdmin: true, id: 5}, {name: 'GDJS', role: 'DEFENDAT', muted: true, isAdmin: false, id: 6}]})
    }, [meetingNumber]);
    
    return (
      <div className="Meeting">
        {meetingDetails && <><header>
                <h3>{meetingDetails.file_subject}</h3>
                <h4>file number {meetingDetails.file_number}</h4>
            </header>
            <div className="Main-Meeting">
                <div className="all-Particpants">
                    {meetingDetails.particpnts?.map(a => <Particpant {...a} meetingNumber={meetingNumber}/>)}
                </div>
                <Sidebar particpntsSize={meetingDetails.particpnts?.length}/>
            </div>
        </>}
      </div>
    );
}