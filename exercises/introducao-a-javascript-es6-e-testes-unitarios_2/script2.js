const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addKey = (object, key, value) => {
  object[key] = value;
};
addKey(lesson2, 'turno', 'noite');

const listKeys = (object) => Object.keys(object);
console.log(listKeys(lesson1));

const keysLength = (object) => Object.keys(object).length;
console.log(keysLength(lesson1));

const listValues = (object) => Object.values(object);
console.log(listValues(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3});
console.log(allLessons);

const countStudents = (object) => {
  let counter = 0;
  const arrayOfObjects = Object.keys(object);
  for (key in arrayOfObjects) {
    counter += object[arrayOfObjects[key]].numeroEstudantes;
  }
  return counter;
}

console.log(countStudents(allLessons));
