import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ControlePanel from './components/ControlePanel/ControlePanel';
import CronJob from './components/CronJob/CronJob';
import { cronjobsSelector, getCronjobsThunk} from './slices/cronjobs';

function App() {

    const dispatch = useDispatch();
    const { cronjobs, loading } = useSelector(cronjobsSelector)	

    useEffect(() => {
        dispatch<any>(getCronjobsThunk())
    }, [dispatch])

    return (
        <div className='container'>
            <div className='header'>
                <div className='title'>
                    <span className="iconify" data-icon="mdi:unicorn" style={{color: '#fc427b'}} data-width="70" data-height="70"></span>
                    <span>UniCron</span>
                </div>
                <a href='https://crontab.guru/'>https://crontab.guru/</a>
            </div>
            <ControlePanel/>
            <div className='cronjobs'>
                {
                    !loading && cronjobs && cronjobs.map((cronjob: any, id: any) => 
                        <CronJob cron={cronjob.Cron} job={cronjob.Job} key={id}/>
                    )
                }
            </div>
        </div>
    );
}

export default App; 
