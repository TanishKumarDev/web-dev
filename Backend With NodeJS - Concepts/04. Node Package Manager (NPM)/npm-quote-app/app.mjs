// app.mjs
import axios from 'axios';
import chalk from 'chalk';

async function getQuote() {
  try {
    const res = await axios.get('https://api.api-ninjas.com/v2/quotes?categories=success,wisdom'); // Replace with your API endpoint
    console.log(chalk.greenBright("\n--- Random Quote ---"));
    console.log(chalk.yellow(res.data.content));
    console.log(chalk.cyan(`~ ${res.data.author}\n`));
  } catch (error) {
    console.log(chalk.red("Error fetching quote:", error.message));
  }
}

getQuote();
