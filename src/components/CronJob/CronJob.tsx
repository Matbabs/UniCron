import "./CronJob.css"

export default function CronJob(props: any) {

    const {cron, job} = props;

    return (
        <div>
            <div className="cronjob neumorphism">
                <div className="controle">
                    <span className="clear material-icons neumorphism">clear</span>
                    <span className="edit material-icons neumorphism">edit</span>
                </div>
                <span className="time">{cron}</span>
                <span>{job}</span>
            </div>
        </div>
        
    )

}