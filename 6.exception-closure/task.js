function parseCount(value) {
  if (isNaN(Number.parseInt(value))) {
    const valueError =  new Error("Невалидное значение");
    throw valueError;
  }
  return Number.parseInt(value);
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch(e) {
		throw(e);
    }
}


class Triangle {

	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;

		if (a + b <= c) {
		    const triangleError = new Error('Треугольник с такими сторонами не существует');
            throw triangleError;
    	} else if (a + c <= b) {
    		const triangleError = new Error('Треугольник с такими сторонами не существует');
    		throw triangleError;
    	} else if (b + c <= a) {
    		const triangleError = new Error('Треугольник с такими сторонами не существует');
    		throw triangleError;
    	}
	}

	getPerimeter() {
        return this.a+this.b+this.c;
	}

	getArea() {
        return Number(Math.sqrt((this.a+this.b+this.c)/2*((this.a+this.b+this.c)/2-this.a)*((this.a+this.b+this.c)/2-this.b)*((this.a+this.b+this.c)/2-this.c)).toFixed(3));
	}
}

function getTriangle(a, b, c) {
    try {
    	return new Object;
    } catch(err) {
    	
    }
}