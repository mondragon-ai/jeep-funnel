
// import './CountdownTimer.css';

import { useEffect, useState } from "react";

// interface CountdownTimerProps {
//   targetDate: Date;
// }

const CountdownTimer = ({ timeLeft }) => {
    const [windowWidth, setWindowWidth] = useState(0);
  
    useEffect(() => {
      setWindowWidth(window.innerWidth);
    }, [])
  

  return (
    <div className="" style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    }}>
      <div className="" style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "25%",
            fontSize: windowWidth < 720 ? "" : "25px"
        }}>
        <div className=""><p>{timeLeft.days ? timeLeft.days : 0}</p></div>
        <div className="">DAYS</div>
      </div>
      <div className="" style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "25%",
            fontSize: windowWidth < 720 ? "" : "25px"
        }}>
        <div className=""><p>{timeLeft.hours ? timeLeft.hours : 0}</p></div>
        <div className="">HOURS</div>
      </div>
      <div className="" style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "25%",
            fontSize: windowWidth < 720 ? "" : "25px"
        }}>
        <div className=""><p>{timeLeft.minutes ? timeLeft.minutes : 0}</p></div>
        <div className="">MINUTES</div>
      </div>
      <div className="" style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "25%",
            fontSize: windowWidth < 720 ? "" : "25px"
        }}>
        <div className=""><p>{timeLeft.seconds ? timeLeft.seconds : 0}</p></div>
        <div className="">SECONDS</div>
      </div>
    </div>
  );
};

export default CountdownTimer;