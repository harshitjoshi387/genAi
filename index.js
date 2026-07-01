import "dotenv/config"
import readline  from "readline"
import{chatMistralAi}  from "@langchain/mistralai"
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name?  ",(name)=>{
    console.log(`hello ${name}`);
    
})
 
const model= new chatMistralAi({
    model:"mistral-small-latest",

})

const response= await model.invoke("what is the captial of INDIA")

console.log(response.text)
rl.close()
