const corsOptions = {
  origin: ['http://localhost:3000','https://develott-front.herokuapp.com'],
  optionsSuccessStatus: 200,
  credentials: true
}

module.exports = corsOptions;