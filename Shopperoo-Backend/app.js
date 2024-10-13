const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const userRouter = require('./routes/userRoutes');
const addressRouter = require('./routes/addressRoutes');
const productRouter = require('./routes/productRoutes');
const categoryRouter = require('./routes/categoryRoutes');
const subCategoryRouter = require('./routes/subCategoryRoutes');
const cartItemRouter = require('./routes/cartItemRoutes');
const cartRouter = require('./routes/cartRoutes');
const wishListRouter = require('./routes/wishListRoutes');
const checkoutRouter = require('./routes/checkoutRoutes');
// Start express app
const app = express();
app.set('trust proxy', 1);

// Set Cross-Origin-Resource-Policy header
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
  next();
});

const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend URL
  credentials: true, // Allow credentials (cookies, etc.)
};

app.use(cors(corsOptions));

// app.use(cors());

// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'));

// 1) GLOBAL MIDDLEWARES
// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Error handling for static files
app.use((err, req, res, next) => {
  if (err) {
    console.error('Error serving static files:', err);
    res.status(500).send('Internal Server Error');
  } else {
    next();
  }
});

// Set security HTTP headers
app.use(helmet());

// Set Cross-Origin-Resource-Policy header
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
  next();
});

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Enable 'trust proxy' setting

// Apply rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later',
});

app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10000kb' }));
app.use(express.urlencoded({ extended: true, limit: '10000kb' }));
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
// app.use(
//   hpp({
//     whitelist: [
//       'duration',
//       'ratingsQuantity',
//       'ratingsAverage',
//       'maxGroupSize',
//       'difficulty',
//       'price',
//     ],
//   }),
// );

// Test route for varsel check
app.get('/api/v1/varsel-check', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Varsel check route is working!',
  });
});

app.get('/', (req, res) => {
  res.send('Hello from Express on Vercel!');
});

// 3) ROUTES
// app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/addresses', addressRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/subCategories', subCategoryRouter);
app.use('/api/v1/cartItems', cartItemRouter);
app.use('/api/v1/wishLists', wishListRouter);
app.use('/api/v1/checkout', checkoutRouter); // Add this line
app.use('/api/v1/wishLists', wishListRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
