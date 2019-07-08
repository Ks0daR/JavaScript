/*
  Напиши скрипт который определит и выведет в консоль
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся
  как свойства объекта в формате "имя":"кол-во задач"
*/

const tasksCompleted = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};

let bestWorker;
let maxTasks = 0;
// const tasks = Object.keys(tasksCompleted);

// for (const key of tasks) {
//   if (tasksCompleted[key] >= maxTasks) {
//     maxTasks = tasksCompleted[key];
//     bestWorker = key;
//   }
// }
// console.log(bestWorker, ':', maxTasks);

const tasks = Object.entries(tasksCompleted);
for (const task of tasks) {
  if (task[1] >= maxTasks) {
    maxTasks = task[1];
    bestWorker = task[0];
  }
}
console.log(bestWorker, maxTasks);
