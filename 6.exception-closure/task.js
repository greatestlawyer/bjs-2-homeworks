function parseCount(meaning) {
  let parsedOne = Number.parseInt(meaning);
   if (Number.isNaN(parsedOne)) {
    throw new Error("Невалидное значение");
  }
  return parsedOne;
}

function validateCount(value) {
  try { 
    return parseCount(value);
  } catch (error){
      return error;
    }
}

//2 задача
class Triangle{
  constructor(
    sideOne, 
    sideTwo, 
    sideThree) {
    this.sideOne = sideOne,
    this.sideTwo = sideTwo,
    this.sideThree = sideThree;
    if (sideOne + sideTwo < sideThree || 
        sideOne + sideThree < sideTwo || 
        sideTwo + sideThree < sideOne) {
      throw new Error("Треугольник с такими сторонами не существует");
      }  
  }
  getPerimeter() {
    return this.sideOne + this.sideTwo + this.sideThree;
  }
  getArea() {
    let halfPerimeter = 1/2 * (this.sideOne + this.sideTwo + this.sideThree);
    return Number(Math.sqrt(halfPerimeter * (halfPerimeter - this.sideOne)*(halfPerimeter - this.sideTwo)*(halfPerimeter - this.sideThree)).toFixed(3));
  }
}


function getTriangle(sideOne, sideTwo, sideThree) {
  try{
    return new Triangle(sideOne, sideTwo, sideThree);
  } catch(error) {
      return {
        getPerimeter() {
          return "Ошибка! Треугольник не существует"
        },
        getArea() {
          return "Ошибка! Треугольник не существует"
        }
      }
    }
}