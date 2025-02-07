export function isEmpty(value) {
  switch (typeof value) {
    case 'string': {
      if (value && value.trim() !== '') {
        return false;
      } else {
        return true;
      }
    }
    case 'number': {
      let val = value.toString();
      if (val === '' && !val.includes('e', 0)) {
        return true;
      } else {
        return false;
      }
    }
    case 'undefined':
      return true;
    case 'object': {
      if (Array.isArray(value)) {
        return value.length > 0 ? false : true;
      } else {
        if (value === null || Object.keys(value).length === 0) {
          return true;
        }
        return false;
      }
    }
    default:
      return false;
  }
}

export function isEmail(value) {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
  return emailRegex.test(value);
}

export const isValidNumber = num => {
  const req = /^\s*[+-]?(\d+|\.\d+|\d+\.\d+|\d+\.)(e[+-]?\d+)?\s*$/;
  return req.test(num);
};

export const validateMobileNumber = mobNumber => {
  const re = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
  return re.test(mobNumber);
};

export function isNull(value) {
  if (!value || value === null || typeof value === 'undefined') return true;
  else return false;
}

export function isValidUrl(url) {
  const pattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  return pattern.test(url);
}

export const sum = arr => arr.reduce((acc, n) => acc + n, 0);
