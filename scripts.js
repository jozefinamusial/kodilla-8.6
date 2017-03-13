function getTriangleArea(a, h) {
  return a > 0 && h > 0 ? a * h / 2 : 'Nieprawidłowe dane';
}

console.log(getTriangleArea(10, 6))
var triangle1Area = getTriangleArea(10, 15);
console.log(triangle1Area);
var triangle2Area = getTriangleArea(10, 20);
console.log(triangle2Area);
var triangle3Area = getTriangleArea(-2, 30);
console.log(triangle3Area);