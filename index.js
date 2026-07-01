import "dotenv/config";
import readline from "readline";
import { chatMistralAi } from "@langchain/mistralai";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => resolve(answer));
  });
}

function printMessage(role, message) {
  const label = role === "user" ? "You" : "AI";
  console.log(`\n[${label}] ${message}`);
  console.log("-".repeat(40));
}

const model = new chatMistralAi({
  model: "mistral-small-latest",
});

async function main() {
  while (true) {
    const userInput = await askQuestion("You: ");
    const trimmedInput = userInput.trim();

    if (!trimmedInput) {
      console.log("Please enter a message.");
      continue;
    }

    if (trimmedInput.toLowerCase() === "exit") {
      printMessage("user", trimmedInput);
      console.log("Goodbye!");
      break;
    }

    printMessage("user", trimmedInput);

    try {
      const response = await model.invoke(trimmedInput);
      const aiText = response?.text || response?.content || "No response";
      printMessage("ai", aiText);
    } catch (error) {
      printMessage("ai", "Sorry, I could not generate a response.");
    }
  }

  rl.close();
}

main().catch((error) => {
  console.error("Error:", error);
  rl.close();
});
