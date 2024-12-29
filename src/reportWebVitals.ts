import { Metric } from 'web-vitals'; // Only import available members

const reportWebVitals = (onPerfEntry?: (metric: Metric) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getLCP(onPerfEntry);
    // Remove unavailable members like getFCP or others if they cause issues
  }
};

export default reportWebVitals;
function getCLS(onPerfEntry: (metric: Metric) => void) {
  throw new Error('Function not implemented.');
}

function getFID(onPerfEntry: (metric: Metric) => void) {
  throw new Error('Function not implemented.');
}

function getLCP(onPerfEntry: (metric: Metric) => void) {
  throw new Error('Function not implemented.');
}

