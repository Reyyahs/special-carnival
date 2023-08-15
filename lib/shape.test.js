const { Circle, Triangle, Square } = require('./shapes.js');

describe('Circle', () => {
    test('Should generate SVG text for a blue circle with red letters', () => {
        const expectedOutput = `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">

            <circle cx="150" cy="100" r="80" fill="blue" />

            <text x="150" y="120" font-size="60" text-anchor="middle" fill="red">ABC</text>

            </svg>`;

        const circle = new Circle("ABC", "red", "blue");

        
        expect(circle.render().replace(/\s/g, '')).toMatch(expectedOutput.replace(/\s/g, ''));
    });
});


describe('Triangle', () => {
    test('Should generate SVG text for a green triangle with yellow letters', () => {
        const expectedOutput = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        
        <polyline points="150, 18 244, 182 56, 182" fill="green" />
        
        <text x="150" y="150" font-size="50" text-anchor="middle" fill="yellow">SVG</text>

        </svg>`;

        const triangle = new Triangle("SVG", "yellow", "green");

        
        expect(triangle.render().replace(/\s/g, '')).toMatch(expectedOutput.replace(/\s/g, ''));
    });
});


describe('Square', () => {
    test('Should generate SVG text for an orange square with purple letters', () => {
        const expectedOutput = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        
        <rect x="10" y="10" width="200" height="200" fill="orange" />
        
        <text x="110" y="130" font-size="80" text-anchor="middle" fill="purple">XYZ</text>

        </svg>`;

        const square = new Square("XYZ", "purple", "orange");

        
        expect(square.render().replace(/\s/g, '')).toMatch(expectedOutput.replace(/\s/g, ''));
    });
});
