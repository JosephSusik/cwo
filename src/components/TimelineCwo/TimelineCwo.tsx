import './TimelineCwo.css'
import Timeline from '@mui/lab/Timeline';
import TimelineCwoItem from './TimelineCwoItem';

function TimelineCwo() {
    return(
        <section className="timeline">
            <p className='headline'>Timeline</p>
            <div className='timeline-tree'>
            <Timeline>
                <TimelineCwoItem leftItem={'01.10.2024 - 20.10.2024'} rightItem={'1. kolo registrace: Jednotlivec XXX Kč, Tým XXX kč'} />
                <TimelineCwoItem leftItem={'21.10.2024 - 10.11.2024'} rightItem={'2. kolo registrace: Jednotlivec XXX Kč, Tým XXX kč'} />
                <TimelineCwoItem leftItem={'11.11.2024 - 01.12.2024'} rightItem={'3. kolo registrace: Jednotlivec XXX Kč, Tým XXX kč'} />
                <TimelineCwoItem leftItem={'21.12.2024 - 22.12.2024'} rightItem={'Termín konání soutěže'} isLast/>
            </Timeline>
            </div>
        </section>
    );
}

export default TimelineCwo;