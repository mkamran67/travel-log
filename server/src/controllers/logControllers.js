/* eslint-disable no-console */
const getLogs = (req, res) => {
  res.json({
    message: '🌐',
  });
};

const postLogs = (req, res) => {
  console.log(req.body);
  res.json({
    message: 'lol',
  });
};

module.exports = {
  getLogs,
  postLogs,
};
