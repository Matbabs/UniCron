import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cronjobsSelector, putCronjobsThunk } from "../../slices/cronjobs";
import { setDayMonth, setDayWeek, setHours, setJob, setMinutes, setMonth } from "../../slices/request";
import "./CronJob.css"

export default function CronJob(props: any) {

    const dispatch = useDispatch()
    const {cronjobs} = useSelector(cronjobsSelector)
    const {cron, job} = props;

    function editHandler() {
        const cronSplit = cron.split(" ")
        dispatch(setMinutes(cronSplit[0]))
        dispatch(setHours(cronSplit[1]))
        dispatch(setDayMonth(cronSplit[2]))
        dispatch(setMonth(cronSplit[3]))
        dispatch(setDayWeek(cronSplit[4]))
        dispatch(setJob(job))
    }

    function deleteHandler() {
        dispatch<any>(putCronjobsThunk(cronjobs.filter((c: any) => c.Cron !== cron || c.Job !== job)))
    }

    return (
        <div>
            <div className="cronjob neumorphism">
                <div className="controle">
                    <span className="clear material-icons neumorphism" onClick={deleteHandler}>clear</span>
                    <span className="edit material-icons neumorphism" onClick={editHandler}>edit</span>
                </div>
                <span className="time">{cron}</span>
                <span>{job}</span>
            </div>
        </div>
    )
}