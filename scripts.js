function getTriangleArea(a, h) {
  
  if (a < 0 || h < 0) {
    console.log('Nieprawidłowe dane');
  }
  
  var triangleArea = a*h/2;

  return triangleArea;

}

console.log(getTriangleArea(10, 6))

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(10, 20);
var triangle3Area = getTriangleArea(20, 30);