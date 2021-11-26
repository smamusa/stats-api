const profileId = '21973659';
const url = `https://www.mathworks.com/matlabcentral/profile/authors/${profileId}`;
const regex = new RegExp('\\d+\\,?\\d*', 'g');

const payload = (label, text) => {
  const rank = text.match(regex)[0];
  const total = text.match(regex)[1];
  if (rank && total) {
    // For Average Rating only
    if (text.includes('AVERAGE')) {
      return {
        schemaVersion: 1,
        label: label,
        message: `${rank}.${total}`,
        labelColor: 'blue',
        color: 'orange',
      };
    }
    return {
      schemaVersion: 1,
      label: label,
      message: `${rank} of ${total}`,
      labelColor: 'blue',
      color: 'orange',
    };
  } else
    return {
      schemaVersion: 1,
      label: label,
      message: rank,
      labelColor: 'blue',
      color: 'orange',
    };
};

module.exports = {
  payload: payload,
  url: url,
};
