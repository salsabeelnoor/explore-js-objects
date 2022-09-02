const student = {
    name: 'Kodom ALi',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function (){
        return this.name + 'is participating in an exam' // object er bhitor kisu access korte hoole this. use korte hobe
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treatDey: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
}
const output = student.exam();
// console.log(output);
const reExam = student.improveExam('Algebra'); // passing a subject as parameter
// console.log(reExam);
const remaining = student.treatDey(900, 100);
// console.log(remaining);
const dolaReamining = student.treatDey(500, 50);
console.log(dolaReamining);