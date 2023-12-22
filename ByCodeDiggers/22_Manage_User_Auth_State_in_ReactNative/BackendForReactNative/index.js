const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises'); // Using fs.promises for async file operations
const app = express();

app.use(bodyParser.json());

const USERS_FILE_PATH = 'users.json';

app.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = JSON.parse(await fs.readFile(USERS_FILE_PATH, 'utf8'));

    // Check if the email already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Generate a unique id for the new user
    const id = users.length + 1;

    const newUser = { id, email, password };
    users.push(newUser);

    // Save the updated user array back to the JSON file
    await fs.writeFile(USERS_FILE_PATH, JSON.stringify(users));

    res.status(201).json({ msg: 'User created successfully', status: 'success', id });
  } catch (error) {
    console.log('Internal server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = JSON.parse(await fs.readFile(USERS_FILE_PATH, 'utf8'));

    const user = users.find(user => user.email === email);

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'User is Not Found', status: 'no_record_found' });
    }

    // In a real-world scenario, you would use bcrypt to compare hashed passwords
    // and generate a JWT for authentication.

    res.json({ message: 'User is Found', status: 'success' , user});
  } catch (error) {
    console.log('Internal server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
