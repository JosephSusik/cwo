import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

interface Props {
    leftItem: string;
    rightItem: string;
    isLast?: boolean;
}

function TimelineCwoItem({leftItem, rightItem, isLast}: Props) {
    return(
        <TimelineItem>
            <TimelineOppositeContent className='timeline-left'>{leftItem}</TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                {!isLast && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent className='timeline-right'>{rightItem}</TimelineContent>
        </TimelineItem>
    );
}

export default TimelineCwoItem;