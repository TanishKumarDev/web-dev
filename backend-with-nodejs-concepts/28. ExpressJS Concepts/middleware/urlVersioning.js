// middleware/urlVersioning.js

/**
 * URL-based API Versioning Middleware
 * Example: /api/v1/books → version = v1
 */
const urlVersioning = (supportedVersions = ['v1']) => {
  return (req, res, next) => {
    // Extract version from URL path
    const versionMatch = req.originalUrl.match(/\/api\/(v[0-9]+)/);
    const version = versionMatch ? versionMatch[1] : null;

    // Check if version exists and is supported
    if (version && supportedVersions.includes(version)) {
      req.apiVersion = version; // store version for later use
      return next();
    }

    // Version missing or unsupported
    return res.status(400).json({
      status: 'error',
      message: `API version not supported. Supported versions: ${supportedVersions.join(', ')}`,
    });
  };
};

/**
 * Content-Type based API Versioning Middleware
 * Example header:
 *   Content-Type: application/vnd.myapi.v2+json
 */
const contentTypeVersioning = (req, res, next) => {
  const contentType = req.get('Content-Type') || '';

  if (contentType.includes('application/vnd.myapi.v1+json')) {
    req.apiVersion = 'v1';
  } else if (contentType.includes('application/vnd.myapi.v2+json')) {
    req.apiVersion = 'v2';
  }

  next();
};

/**
 * Example route handler demonstrating version-based response logic
 */
const handlerVersioning = (req, res) => {
  const version = req.apiVersion || 'v1'; // default to v1 if not set

  switch (version) {
    case 'v1':
      return res.json({ message: 'Response from API v1' });

    case 'v2':
      return res.json({ message: 'Response from API v2' });

    default:
      return res.status(400).json({
        status: 'error',
        message: 'Unsupported API version',
      });
  }
};

module.exports = {
  urlVersioning,
  contentTypeVersioning,
  handlerVersioning,
};
