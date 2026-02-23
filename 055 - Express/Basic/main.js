// Import the Express app here
const { app } = require('./app.js')

// Designate which PORT the server will listen on
const PORT = process.env.PORT || 4001;

// Invoke the app's `.listen()` method here:
app.listen(PORT, _ => console.log(`Server listening on ${PORT}`))