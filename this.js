console.log(this);
/*
    1. here this is a global execution context    
*/
const kodomAli = {
    name: 'Kodom ALi',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function (){
        console.log(this);
        return this.name + ' is participating in an exam' // object er bhitor kisu access korte hoole this. use korte hobe
        
    },
    examArrow: () => {
        console.log(this);
    },
    examNested: () => {
        const arrow = () => {
            console.log(this);
        }
        arrow();
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
const badamAli = {
    name: 'kacha badam',
    money: 8000
}
badamAli.exam = kodomAli.exam;
badamAli.exam()

function clickHandler (){
    console.log(' inside click Hander', this);
}
document.getElementById('btn-click2').addEventListener('click', function(){
    console.log(this);
})