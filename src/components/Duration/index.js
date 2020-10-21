import React from "react";

const Duration = ({ seconds, ...props }) => {
  return (
    <time dateTime={`P${Math.round(seconds)}S`} {...props}>
      {format(seconds)}
    </time>
  );
};

const format = (seconds) => {
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = pad(date.getUTCSeconds());
  if (hh) {
    return `${hh}:${pad(mm)}:${ss}`;
  }
  return `${mm}:${ss}`;
};

const pad = (string) => {
  return ("0" + string).slice(-2);
};

export default Duration;
