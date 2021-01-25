import { useState, useEffect } from 'react';


const getCategoryValue = (category) => {
  const categoryKeyMap = {
    job_type: "JOB TYPE",
    work_schedule: "WORK SCHEDULE",
    experience: "EXPERIENCE",
    department: "DEPARTMENT",
  };

  return categoryKeyMap[category];
};

const debounce = (
  func,
  timeout
) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export { getCategoryValue, useDebounce };
