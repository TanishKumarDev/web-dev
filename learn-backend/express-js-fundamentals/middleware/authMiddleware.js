// Custom middleware for authentication check
exports.checkAuth = (req, res, next) => {
    const isAuth = true; // fake auth check (normally token/cookie check)
    if (isAuth) {
        console.log("✅ Authenticated");
        next(); // move to next middleware or controller
    } else {
        res.status(403).send("❌ Not Authorized");
    }
};
