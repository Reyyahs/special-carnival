class Shape {
    constructor(characters, textColor, shapeColor) {
        this.characters = characters;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    constructor(characters, textColor, shapeColor) {
        super(characters, textColor, shapeColor);
    }

    render() {
        return `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            
            <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
            
            <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
    
            </svg>`;
    }
}


class Triangle extends Shape {
    constructor(characters, textColor, shapeColor) {
        super(characters, textColor, shapeColor);
    }

    render() {
        return `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            
            <polyline points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
            
            <text x="150" y="150" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>

            </svg>`;
    }
}

class Square extends Shape {
    constructor(characters, textColor, shapeColor) {
        super(characters, textColor, shapeColor);
    }

    render() {
        return `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            
            <rect x="10" y="10" width="200" height="200" fill="${this.shapeColor}" />
            
            <text x="110" y="130" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>

            </svg>`;
    }
}

function createCircle(charactersInput, textColorInput, shapeColorInput) {
    const circleOutput = new Circle(charactersInput, textColorInput, shapeColorInput);
    return circleOutput.render();
}

function createTriangle(charactersInput, textColorInput, shapeColorInput) {
    const triangleOutput = new Triangle(charactersInput, textColorInput, shapeColorInput);
    return triangleOutput.render();
}

function createSquare(charactersInput, textColorInput, shapeColorInput) {
    const squareOutput = new Square(charactersInput, textColorInput, shapeColorInput);
    return squareOutput.render();
}

