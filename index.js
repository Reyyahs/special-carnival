const inquirer = require('inquirer');
const fs = require('fs');

const shapes = require('./lib/shapes.js');

function getUserInput() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter up to three characters for the logo:',
                name: 'characters',
                validate: characters => {
                    if (characters.length < 1 || characters.length > 3) {
                        return 'Please enter up to three characters.';
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                message: 'Enter desired text color (name or hex):',
                name: 'textColor'
            },
            {
                type: 'list',
                message: 'Select the logo shape:',
                choices: ['Circle', 'Triangle', 'Square'],
                name: 'shape'
            },
            {
                type: 'input',
                message: 'Enter desired shape color (name or hex):',
                name: 'shapeColor'
            }
        ])
        .then(response => {
            console.log(response);

            let shapeFunction;
            let shapeName = response.shape.toLowerCase();

            if (shapeName === 'circle') {
                shapeFunction = shapes.createCircle;
            } else if (shapeName === 'triangle') {
                shapeFunction = shapes.createTriangle;
            } else if (shapeName === 'square') {
                shapeFunction = shapes.createSquare;
            }

            if (shapeFunction) {
                const output = shapeFunction(response.characters, response.textColor, response.shapeColor);
                console.log(output);

                fs.writeFile('./examples/logo.svg', output, err => 
                    err ? console.error(err) : console.log('Generated logo.svg')
                );
            }
        });
}

getUserInput();

module.exports = { getUserInput };

