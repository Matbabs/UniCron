import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postCronjobsThunk } from "../../slices/cronjobs";
import { setDayMonth, setDayWeek, setHours, setJob, setMinutes, setMonth, clear, requestSelector} from "../../slices/request";
import "./ControlePanel.css"

export default function ControlePanel() {

    const [reload, setRelaod] = useState(false)
    const dispatch = useDispatch();
    const {minutes, hours, dayMonth, month, dayWeek, job} = useSelector(requestSelector);

    useEffect(() => {if(reload) setRelaod(false)}, [reload])

    function requestIsValid(){
        return minutes && hours && dayMonth && month && dayWeek && job
    }

    function inputsHandler(e: any, action: any){
        dispatch(action(e.target.value))
    }

    function clearHandler(){
        dispatch(clear())
        setRelaod(true)
    }

    function addHandler() {
        if(requestIsValid()) {
            dispatch<any>(postCronjobsThunk({
                Cron: `${minutes} ${hours} ${dayMonth} ${month} ${dayWeek}`,
                Job: job
            }))
        }
    }

    return (
        <div className='control-panel glass'>
            <h3>Control Panel</h3>
            {
                !reload && (
                    <div className='form'>
                        <input type="text" className='cron glass' placeholder="*" onChange={(e: any) => inputsHandler(e, setMinutes)} value={minutes}/>
                        <input type="text" className='cron glass' placeholder="*" onChange={(e: any) => inputsHandler(e, setHours)} value={hours}/>
                        <input type="text" className='cron glass' placeholder="*" onChange={(e: any) => inputsHandler(e, setDayMonth)} value={dayMonth}/>
                        <input type="text" className='cron glass' placeholder="*" onChange={(e: any) => inputsHandler(e, setMonth)} value={month}/> 
                        <input type="text" className='cron glass' placeholder="*" onChange={(e: any) => inputsHandler(e, setDayWeek)} value={dayWeek}/>
                        <input type="text" className='job glass' placeholder="echo 'Hello World !'" onChange={(e: any) => inputsHandler(e, setJob)} value={job}/>
                        <button className='clear glass' onClick={clearHandler}>Clear</button>
                        <button className='add glass' onClick={addHandler} disabled={!requestIsValid()}>Add</button>
                    </div>
                )
            }
        </div>
    )
}