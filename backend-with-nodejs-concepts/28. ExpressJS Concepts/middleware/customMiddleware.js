const requestLogger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const methods = req.method;
    const url = req.url;
    const userAgent = req.headers['user-agent'];
    console.log(`[${timestamp}] ${methods} ${url} - ${userAgent}`);
    next();
};

const addTimeStamp = (req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
};
module.exports = { requestLogger, addTimeStamp };