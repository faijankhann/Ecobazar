import React, { useState, useEffect } from 'react';
import "../components/countdownTimer.css"


const CountdownTimer = ({ initialDays, initialHours, initialMinutes, initialSeconds }) => {
    const [time, setTime] = useState({
        days: initialDays,
        hours: initialHours,
        minutes: initialMinutes,
        seconds: initialSeconds,
    });

    useEffect(() => {
        const countdown = setInterval(() => {
            const { days, hours, minutes, seconds } = time;

            if (seconds > 0) {
                setTime((prevTime) => ({ ...prevTime, seconds: seconds - 1 }));
            } else if (minutes > 0) {
                setTime((prevTime) => ({ ...prevTime, minutes: minutes - 1, seconds: 59 }));
            } else if (hours > 0) {
                setTime((prevTime) => ({ ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 }));
            } else if (days > 0) {
                setTime((prevTime) => ({ ...prevTime, days: days - 1, hours: 23, minutes: 59, seconds: 59 }));
            } else {
                clearInterval(countdown);
            }
        }, 1000);

        return () => clearInterval(countdown);
    }, [time]);

    return (
        <div className="countdown-timer">
            <div className="time-section">
                <span className="time">{time.days}</span>
                <span className="label">Days</span>
            </div>
            <span className='com'>:</span>
            <div className="time-section">
                <span className="time">{time.hours}</span>
                <span className="label">Hours</span>
            </div>
            <span className='com'>:</span>
            <div className="time-section">
                <span className="time">{time.minutes}</span>
                <span className="label">Minutes</span>
            </div>
            <span className='com'>:</span>
            <div className="time-section">
                <span className="time">{time.seconds}</span>
                <span className="label">Seconds</span>
            </div>
        </div>
    );
};

export default CountdownTimer;
