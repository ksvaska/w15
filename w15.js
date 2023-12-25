const cities =['Москава','Казань','Владивосток','Краснодар'];
const temp =[];
const list = document.querySelector('.list');
for ( let i=0; i<cities.length; i++){
    temp.push(prompt(`Введите температуру города ${cities[i]}`));

}
console.log(temp);
 

for(let i =0; i<temp.length;i++){
    let li = document.createElement('li');
    li.innerHTML += `Температура города ${cities[i]}: ${temp[i]}&#8451;`;
    list.append(li);
}

