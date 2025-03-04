const { Command } = require('commander');
const fs = require('fs');

const program = new Command();

program
    .option('-i, --input <path>', 'Шлях до вхідного JSON-файлу (обовʼязковий параметр)')
    .option('-o, --output <path>', 'Шлях до вихідного файлу')
    .option('-d, --display', 'Вивести результат у консоль')
    .parse(process.argv);

const options = program.opts();

if (!options.input) {
    console.error("Please, specify input file");
    process.exit(1);
}

if (!fs.existsSync(options.input)) {
    console.error("Cannot find input file");
    process.exit(1);
}

const rawData = fs.readFileSync(options.input, 'utf8');
const jsonData = JSON.parse(rawData);

const filteredData = jsonData.filter(item => item.ku === 13 && item.value > 5)
                              .map(item => item.value);

if (filteredData.length === 0) {
    console.log("No matching data found.");
    process.exit(0);
}

const result = filteredData.join('\n');

if (options.output) {
    fs.writeFileSync(options.output, result, 'utf8');
}

if (options.display) {
    console.log("Результат:", result);
}

