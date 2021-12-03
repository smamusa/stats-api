const url = `https://www.mathworks.com/matlabcentral/profile/authors/${process.env.MATLAB_PROFILE_ID}`;
const regex = new RegExp('\\d+\\,?\\d*', 'g');
const response = {
  schemaVersion: 1,
  label: '',
  message: '',
  labelColor: 'blue',
  color: 'orange',
};

const payload = (label, text) => {
  const rank = text.match(regex)[0];
  const total = text.match(regex)[1];
  if (rank && total) {
    // For Average Rating only
    if (text.includes('AVERAGE')) {
      return {
        ...response,
        label: label,
        message: `${rank}.${total}`,
      };
    }
    return {
      ...response,
      label: label,
      message: `${rank} of ${total}`,
    };
  } else
    return {
      ...response,
      label: label,
      message: rank,
    };
};

module.exports = {
  payload: payload,
  url: url,
};
