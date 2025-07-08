
import https from 'https';
import readline from 'readline';
import chalk from 'chalk';

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const apiKey = '564d8dd00e555ebb44d12847';
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

// Fetch exchange rates
https.get(url, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data += chunk;
  });

  response.on('end', () => {
    const jsonData = JSON.parse(data);

    if (jsonData.result !== 'success') {
      console.log(chalk.red('Failed to fetch exchange rates.'));
      rl.close();
      return;
    }

    const rates = jsonData.conversion_rates;

    rl.question('Enter the amount in USD: ', (amountInput) => {
      const amount = parseFloat(amountInput);

      if (isNaN(amount)) {
        console.log(chalk.red('Invalid amount. Please enter a number.'));
        rl.close();
        return;
      }

      rl.question('Enter the target currency (e.g., INR, EUR, NPR): ', (targetCurrency) => {
        targetCurrency = targetCurrency.toUpperCase();

        if (!rates[targetCurrency]) {
          console.log(chalk.red('Invalid currency code.'));
          rl.close();
          return;
        }

        const convertedAmount = amount * rates[targetCurrency];
        console.log(chalk.green(`\n${amount} USD = ${convertedAmount.toFixed(2)} ${targetCurrency}`));
        rl.close();
      });
    });
  });
}).on('error', (err) => {
  console.log(chalk.red('Error: ' + err.message));
  rl.close();
});
