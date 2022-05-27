import "./ControlePanel.css"

export default function ControlePanel() {

    return (
        <div className='control-panel glass'>
            <h3>Control Panel</h3>
            <div className='form'>
                <input type="text" className='cron glass' placeholder="*"/>
                <input type="text" className='cron glass' placeholder="*"/>
                <input type="text" className='cron glass' placeholder="*"/>
                <input type="text" className='cron glass' placeholder="*"/> 
                <input type="text" className='cron glass' placeholder="*"/>
                <input type="text" className='job glass' placeholder="echo 'Hello World !'"/>
                <button className='clear glass'>Clear</button>
                <button className='add glass'>Add</button>
            </div>
        </div>
    )

}

