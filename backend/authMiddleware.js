const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'origa_secret_key_123';

/**
 * authMiddleware
 * Verifies the JWT token from the Authorization header.
 * Expected format: "Bearer <token>"
 */
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.admin = decoded;
        next();
    } catch (err) {
        console.error('Token verification error:', err.message);
        return res.status(401).json({ error: 'Unauthorized: Invalid or expired token' });
    }
};

module.exports = authMiddleware;
