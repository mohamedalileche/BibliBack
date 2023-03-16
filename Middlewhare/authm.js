const jwt = require ('jsonwebtoken');

const auth = (req, res, next) => {
  const authHeader = req.header('Authorisation');
  if (!authHeader) {
    return res.status(401).json({ message: 'Access denied' });
  }

  const [scheme, token] = authHeader.split(' ');
  if (scheme !== 'Bearer' || !token) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.client = decoded.clientId;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

module.exports = auth;