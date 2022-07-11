const lista = ['pomodori', 'insalata', 'perperoni', 'lattuga', 'melanzane', 'zucchine'];
let ul_list = document.querySelector('ul');
let n = 0;
while (n <= lista.length - 1) {
    ul_list.innerHTML += `<li>${lista[n]}</li>`; 
    n++;
}
