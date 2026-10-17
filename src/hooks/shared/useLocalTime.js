import {useEffect, useState} from 'react';

const refreshMs = 30000;
const timeFormat = {hour: '2-digit', minute: '2-digit'};
const locale = 'es-BO';

const formatTime = (timeZone) => new Intl.DateTimeFormat(locale, {...timeFormat, timeZone}).format(new Date());

function useLocalTime(timeZone) {
  const [time, setTime] = useState(() => formatTime(timeZone));

  useEffect(() => {
    const timer = setInterval(() => setTime(formatTime(timeZone)), refreshMs);
    return () => clearInterval(timer);
  }, [timeZone]);

  return time;
}

export default useLocalTime;
