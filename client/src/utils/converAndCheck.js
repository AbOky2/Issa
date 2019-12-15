const isFn = (functionToCheck) => functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';

export { isFn }