const students = [
    {id : 20, name :"sumon"},
    {id : 50, name :"rumon"},
    {id : 40, name :"shamon"},
    {id : 41, name :"lumon"}
];

const sName = [];
for(let i = 0; i < students.length; i++){
    const element = students[i];
    sName.push(element.name);
}

const names = students.map(s => s.name);
const ids = students.map(s => s.id);   
const idd = students.filter(s => s.id > 40); 
const iddOne = students.find(s => s.id > 40);
console.log(idd);