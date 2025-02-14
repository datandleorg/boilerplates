const express = require('express');
const userRoutes = require('./routes/userRoutes');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const logger = require('./config/logger');
const path = require('path');
const fs = require('fs');

const app = express();

// Ensure logs directory exists
const logsDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

// Create a write stream for Morgan access logs
const accessLogStream = fs.createWriteStream(
    path.join(logsDir, 'access.log'),
    { flags: 'a' }
);

// Morgan logging setup
app.use(morgan('combined', { stream: accessLogStream }));
// Also log to console in development
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}

// Security middleware
app.use(helmet());
app.use(cors());

// Rate limiting configuration
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per windowMs
    message: {
        status: 'error',
        message: 'Too many requests from this IP, please try again after 15 minutes'
    },
    standardHeaders: true,
    legacyHeaders: false
});

// Apply rate limiting to all routes
app.use('/api', apiLimiter);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Validation error handler middleware
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        logger.error('Invalid JSON payload', { error: err.message });
        return res.status(400).json({
            status: 'error',
            message: 'Invalid JSON payload'
        });
    }
    next(err);
});

// Ping route
app.get('/ping', (req, res) => {
    logger.info('Ping request received');
    res.status(200).json({
        status: 'success',
        message: 'pong',
        timestamp: new Date().toISOString()
    });
});

// Routes
app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    logger.error('Unhandled error', {
        error: err.message,
        stack: err.stack,
        url: req.originalUrl,
        method: req.method
    });
    
    res.status(500).json({
        status: 'error',
        message: 'Something went wrong!'
    });
});

module.exports = app;