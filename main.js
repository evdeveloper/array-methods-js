const presidents = [
    { first: 'George', last: 'Washington', born: 1732, died: 1799 },
    { first: 'John', last: 'Adams', born: 1735, died: 1826 },
    { first: 'Ronald', last: 'Reagan', born: 1911, died: 2004 },
    { first: 'Gerald', last: 'Ford', born: 1913, died: 2006 },
    { first: 'Richard', last: 'Nixon', born: 1913, died: 1994 },
    { first: 'John F.', last: 'Kennedy', born: 1917, died: 1963 },
    { first: 'Harry S.', last: 'Truman', born: 1884, died: 1972 },
    { first: 'Grover', last: 'Cleveland', born: 1837, died: 1908 },
    { first: 'Chester A.', last: 'Arthur', born: 1829, died: 1886 },
    { first: 'Abraham', last: 'Lincoln', born: 1809, died: 1865 },
    { first: 'Franklin', last: 'Pierce', born: 1804, died: 1869 },
    { first: 'Lyndon B.', last: 'Johnson', born: 1908, died: 1973 },
    { first: 'Dwight D.', last: 'Eisenhower', born: 1890, died: 1969 },
  ];


  const writers = ['Василий, Жуковский', 'Александр, Грибоедов', 'Александр, Пушкин', 'Владимир, Даль',
    'Николай, Языков', 'Федор, Тютчев', 'Николай, Гоголь', 'Алексей, Кольцов', 'Александр, Герцен',
    'Иван, Гончаров', 'Михаил, Лермонтов', 'Пётр, Ершов', 'Алексей, Толстой', 'Даниил, Заточник',
    'Александр, Радищев', 'Евгений, Баратынский', 'Петр, Вяземский', 'Александр, Бестужев-Марлинский',
    'Михаил, Загоскин', 'Сергей, Аксаков', 'Владимир, Одоевский', 'Григорий, Данилевский',
    'Алексей, Писемский', 'Дмитрий, Григорович', 'Яков, Полонский', 'Леонид, Андреев',
    'Валерий, Брюсов', 'Саша, Черный', 'Юрий, Трифонов', 'Федор, Абрамов',
    'Дмитрий, Кедрин', 'Василий, Шукшин'];

// Array.prototype.filter()
// 1. Отфильтровать президентов которые родились в 1700-х годах.

const let1700 = presidents.filter(president => {
    if(president.born >= 1700 && president.born < 1800) {
        return true;
    }
});
const let1701 = presidents.filter(president => president.born >= 1700 && president.born < 1800);

// Array.prototype.map()
// 2. Создать массив, который содержит только имя и фамилию каждого президента

const firstLast = presidents.map(president => {
    return `${president.first} ${president.last}`;
});
const firstLast1 = presidents.map(president => `${president.first} ${president.last}`);


 // Array.prototype.sort()
// 3. Отсортировать президентов по году рождения - от старшего к младшему 

const oldkid = presidents.sort((a, b)=> {
    if(a.born > b.born) {
        return 1;
    }else {
        return -1;
    }
});

const oldkid1 = presidents.sort((a, b)=> `${a.born > b.born ? 1 : -1 }`);


// Array.prototype.reduce()
// 4. Подсчитать общее количество лет жизни всех президентов

const totalLived = presidents.reduce((total, president) =>{
    return total + (president.died - president.born);
},0);

const totalLived1 = presidents.reduce((total, president) => total + (president.died - president.born),0);


// 5. Отсортировать президентов в зависимости от количества прожитых лет (от большего к меньшему)

const presidentSorted = presidents.sort((a ,b) => {
    const aLived = a.died - a.born;
    const bLived = b.died - b.born;
    return console.log(aLived, bLived);
    
})


console.table(presidentSorted);


// 6. Создать список названий городов (City) и областей (County) Калифорнии содержащих "San"
// https://en.wikipedia.org/wiki/List_of_cities_and_towns_in_California




// 7. Упражнение по сортировке
// Отсортировать массив "writers" по фамилии в алфавитном порядке