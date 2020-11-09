const Student = require('./person');

const student1 = new Student(59, 23, 'Ayomide');
const student2 = new Student(51, 40, 'Benard');

student1.score();
student2.score();

console.log(__filename);
