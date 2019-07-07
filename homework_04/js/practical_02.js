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

let bestWorker = 0;
const tasks = Object.keys(tasksCompleted);

for (const key of tasks) {
  if (tasksCompleted[key] >= bestWorker) bestWorker = tasksCompleted[key];
}
console.log(bestWorker);
