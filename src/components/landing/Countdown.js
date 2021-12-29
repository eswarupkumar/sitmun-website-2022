import React from "react";
import FlipCountdown from "@rumess/react-flip-countdown";

const Countdown = () => {
  return (
    <>
      <FlipCountdown
        size="medium"
        theme="dark"
        titlePosition="bottom"
        hideYear
        hideMinute
        hideSecond
        endAt={"2022-03-24 00:00:00"}
      />
    </>
  );
};

export default Countdown;
