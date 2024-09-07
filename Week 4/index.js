// import chalk from "chalk";

// console.log(chalk.blue('Hello, world!'));
// console.log(chalk.red.bold('This is an error message.'));
// console.log(chalk.green.underline('This is a success message.'));





//Making a CLI using commander which takes file path name of a text file as input and returns the number of lines in the file
// type node index.js with command "count" along with the path name

const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split('\n').length;
        console.log(`There are ${lines} lines in ${file}`);
      }
    });
  });
program.command('add <num1> <num2>')
  .description('Gives the sum of two numbers')
  .action((a, b)=>{
    const sum = parseInt(a) + parseInt(b);
    console.log(`The sum of ${a} and ${b} is ${sum}`);
  });
program.command('add a To-Do')
  .description('Add your todo')
  .action((str)=>{
    const todo = String(str);
    
  })

program.parse();
