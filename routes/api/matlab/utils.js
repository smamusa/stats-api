const profileId = '21973659';
const url = `https://www.mathworks.com/matlabcentral/profile/authors/${profileId}`;
const regex = new RegExp('\\d+\\,?\\d*', 'g');

const payload = (label, text) => {
  const rank = text.match(regex)[0];
  const total = text.match(regex)[1];
  if (rank && total) {
    return {
      schemaVersion: 1,
      label: label,
      message: `${rank} of ${total}`,
      labelColor: 'orange',
      color: 'blue',
    };
  } else
    return {
      schemaVersion: 1,
      label: label,
      message: rank,
      labelColor: 'orange',
      color: 'blue',
    };
};

module.exports = {
  payload: payload,
  url: url,
};
