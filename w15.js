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

const maxTemp = Math.max(...temp);
console.log(maxTemp);
const minTemp = Math.min(...temp);
console.log(minTemp);

const pMax = document.createElement('p');
pMax.innerHTML = `Максимальная температура: ${maxTemp}&#8451;`;
const pMin = document.createElement('p');
pMin.innerHTML = `Минимальная температура: ${minTemp}&#8451;`;

document.body.appendChild(pMax);
document.body.appendChild(pMin);
