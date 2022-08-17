const Student = function(
  name,
  gender,
  age
){
  this.name = name;
  this.gender = gender;
  this.age = age;
}

const student1 = new Student(
  'Alex','male', 34
);
const student2 = new Student(
  'Android','male', 24
); //1.Создал функцию конструктор Student(name, gender, age) и с помощью оператора new несколько экземпляров объектов (студентов).

Student.prototype.setSubject = function setSubject(subjectName) {
  this.subject = subjectName;
} //2.Создал доступный для всех экземпляров student метод setSubject(subjectName), который при вызове устанавливает поле предмет subject экземпляра в subjectName. 

Student.prototype.addMark = function addMark(mark) {
  if(this.marks === undefined){ 
    this.marks = [];
    this.marks.push(mark);
    } else {
      this.marks.push(mark);
    }
}//Создал метод addMark(mark), который при вызове добавляет студенту оценку mark в свойство (массив) marks объекта.

Student.prototype.addMarks = function addMarks(mark1,mark2,mark3...) {
  this.marks = (mark1,mark2,mark3...);
}// тут не пойму, консоль выдает ошибку Uncaught SyntaxError: Unexpected token '...' 

Student.prototype.getAverage = function getAverage() {
  let res = 0;
  for (let i = 0; i < this.marks.length; i++) {
   res += this.marks[i];
  }
  return res/this.marks.length;
}//5.Создал метод getAverage() который при вызове возвращает среднее арифметическое оценок студента.

Student.prototype.exclude = function exclude(reason) {
  delete Student.subject;
  delete Student.marks;
  this.excluded = reason;
} //удалил свойства subject и marks и добавил свойство excluded со значением reason.