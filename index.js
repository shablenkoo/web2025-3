const { Command } = require('commander');
const program = new Command();

program
    .version('1.0.0')
    .description('Програма для роботи з командним рядком')
    .option('-n, --name <type>', 'Ваше ім’я', 'Користувач')
    .option('-a, --age <number>', 'Ваш вік');

program.parse(process.argv);

const options = program.opts();
console.log(`Привіт, ${options.name}!`);
if (options.age) {
    console.log(`Вам ${options.age} років.`);
}

