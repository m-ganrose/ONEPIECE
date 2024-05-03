const express = require('express');
const session = require('express-session');
const cors = require('cors');

const app = express();

// Use cors middleware
app.use(cors());

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }, // Set secure to true if using HTTPS
}));

app.post("/api/login", (req, res) => {
  // Authenticate the user (e.g., check credentials against a database)
  // If successful, create a session and set session variables
  req.session.user = { id: 1, username: 'example' };
  res.json({ login: true });
});

app.get('/api/logout', (req, res) => {
  // Destroy the session when the user logs out
  req.session.destroy(() => {
    res.json({ logout: true });
  });
});

// Other routes and middleware go here...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});