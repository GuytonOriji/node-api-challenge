module.exports = function logger(req, res, next) {




  const method = req.method;
  const endpoint = req.originalUrl;
  const timeStamp = req.timeStamp;

  console.log(`${method} to ${endpoint} / ${timeStamp}`);

  next(); 
};