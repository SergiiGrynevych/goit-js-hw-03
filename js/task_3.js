//tak3

// Поиск наибольшего значения среди свойств объекта
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников
// и возвращает имя самого продуктивного(который выполнил больше всех задач).
// Сотрудники и кол - во выполненных задач содержатся как свойства объекта в
// формате "имя": "кол-во задач".

// ПЕРВЫЙ ВАРИАНТ РЕШЕНИЯ ///////////////////////////////////////////////////
// const findBestEmployee = function (employees) {
//   "use strict";

//   const entries = Object.entries(employees);

//   if (entries.length !== 0) {
//     let bestEmployee = entries[0];
//     for (const employee of entries) {
//       if (employee[1] > bestEmployee[1]) {
//         bestEmployee = employee;
//       }
//     }
//     return bestEmployee[0];
//   }
//   return "";
// };

// // ВТОРОЙ ВАРИАНТ РЕШЕНИЯ ///////////////////////////////////////////////////
// // c воспроизведением ключа и значения /////////////////////////////////////

// const findBestEmployee = function (employees) {
//   return Object.entries(employees).reduce((max, n) =>
//     n[1] > max[1] ? n : max
//   );
// };

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
  helen: 1,
  helen: 1,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  david: 21,
  kiwi: 19,
  lux: 147,
  lux: 146,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
