const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { generateStory } = require('./ai');

app.use(bodyParser.json());

// Store generated stories, user prompts, and upvotes in a database

// API endpoint to generate a story based on the prompt
app.post('/generate-story', (req, res) => {
  const prompt = req.body.prompt;
  
  // Call the AI model to generate the story based on the prompt
  const story = generateStory(prompt);
  
  // Store the generated story in the database
  
  res.json({ story });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
