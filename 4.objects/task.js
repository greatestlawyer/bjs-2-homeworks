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
);

Student.prototype.setSubject = function setSubject(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function addMark(mark) {
  
  if(this.marks === undefined){ 
    this.marks = [];
    }
  this.marks.push(mark);
}

Student.prototype.addMarks = function addMarks(mark1,mark2,mark3) {
  if(this.marks === undefined){ 
    this.marks = [];
    }
  this.marks.push(...marks);
}

Student.prototype.getAverage = function getAverage() {
  let res = 0;
  for (let i = 0; i < this.marks.length; i++) {
   res += this.marks[i];
  }
  return res/this.marks.length;
}

Student.prototype.exclude = function exclude(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
} 