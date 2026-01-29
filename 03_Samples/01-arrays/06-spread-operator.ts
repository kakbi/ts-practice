const dataArray1: number[] = [1, 2, 3];
const dataArray2: number[] = [...dataArray1, 100, 200]; // spread operator - додаємо елементи масиву dataArray1 в кінець масиву dataArray2

console.log(dataArray2);

const point2D = { x: 10, y: 20 };
const point3D = { ...point2D, z: 30 }; // object spread - властивості об'єкта point2D додаються до властивостей об'єкта point3D

console.log(point3D);
