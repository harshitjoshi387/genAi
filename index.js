import readline  from "readline"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer.trim()));
  });
}

async function main() {
  const userInput = await askQuestion('Enter your prompt: ');

  if (!userInput) {
    console.log('No input provided.');
    rl.close();
    return;
  }

  console.log(`You entered: ${userInput}`);
  rl.close();
}

main().catch((err) => {
  console.error(err);
  rl.close();
});
