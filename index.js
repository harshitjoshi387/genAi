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

while(true){
    const userInput=await rl.question("you: ")
    const response = await model.invoke(userInput)
    console.log(response.text)
}
rl.close()
