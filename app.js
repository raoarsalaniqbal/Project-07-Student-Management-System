#!/usr/bin/env node
class School {
    name;
    students = [];
    teachers = [];
    addStudent(stdObj) {
        this.students.push(stdObj);
    }
    addTeacher(techObj) {
        this.teachers.push(techObj);
        constructor(name, string);
        {
            this.name = name;
        }
    }
}
class Student {
    name;
    age;
    schoolName;
    constructor(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
class Teacher extends Student {
}
let school1 = new School("Karachi Public");
let school2 = new School("The City School");
let s1 = new Student("Arsalan", 34, school1.name);
let s2 = new Student("Abrish", 6, school2.name);
let s3 = new Student("Yashfa", 2, school2.name);
let t1 = new Teacher("Hamzah", 22, school1.name);
let t2 = new Teacher("Imran", 40, school2.name);
let t3 = new Teacher("Okasha", 23, school2.name);
// add student
school1.addStudent(s1);
school2.addStudent(s2);
school2.addStudent(s3);
// add teacher
school1.addTeacher(t1);
school2.addTeacher(t2);
school2.addTeacher(t3);
// console.log(t1);
// console.log(t2);
// console.log(t3);
console.log(school1);
console.log(school2);
export {};
