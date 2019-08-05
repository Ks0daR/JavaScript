const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
const createList = () => {
  const elementList = elements.map(e => {const li = document.createElement('li'); li.textContent = e; li.classList.add('list-tiem')});
  console.log(elementList);
  return elementList;
};

createList(elements);