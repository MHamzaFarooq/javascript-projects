// let date = new Date('2003-01-20')
// console.log((((date.getTime()/1000)/3600)/60)/24);

let dateNow = new Date()
console.log(dateNow.toLocaleString('default',{
    weekday : "long",
    day : "2-digit",
    dateStyle: "full"
}));
