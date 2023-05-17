const users = [
  {
      "id": 7,
      "email": "michael.lawson@reqres.in",
      "first_name": "Michael",
      "last_name": "Lawson",
      "avatar": "https://reqres.in/img/faces/7-image.jpg",
       "age": 23
  },
  {
      "id": 8,
      "email": "lindsay.ferguson@reqres.in",
      "first_name": "Lindsay",
      "last_name": "Ferguson",
      "avatar": "https://reqres.in/img/faces/8-image.jpg",
       "age": 20
   },
  {
      "id": 9,
      "email": "tobias.funke@reqres.in",
      "first_name": "Tobias",
      "last_name": "Funke",
      "avatar": "https://reqres.in/img/faces/9-image.jpg",
      "age": 40
  },
  {
      "id": 10,
      "email": "byron.fields@reqres.in",
      "first_name": "Byron",
      "last_name": "Fields",
      "avatar": "https://reqres.in/img/faces/10-image.jpg",
      "age": 36
  },
  {
      "id": 11,
      "email": "george.edwards@reqres.in",
      "first_name": "George",
      "last_name": "Edwards",
      "avatar": "https://reqres.in/img/faces/11-image.jpg",
      "age": 70
  },
  {
      "id": 12,
      "email": "rachel.howell@reqres.in",
      "first_name": "Rachel",
      "last_name": "Howell",
      "avatar": "https://reqres.in/img/faces/12-image.jpg",
       "age": 45
  }
];

// 1. Получить строку с именами и фамилиями всех пользователей через
// запятую.

const fetchNames = () => {
  return users.map((user) => `${user.first_name} ${user.last_name}`).join(", ") //map , интерполяция , join : из массива в строку с запятыми и пробелами
} 

fetchNames();

// 2. Создать массив из emails по алфавиту.

const fetchEmails = () => {
  let emails =  users.map((user) => user["email"])
  return emails.sort()
}

fetchEmails();

// 3. Создать новый массив пользователей, где объект пользователя должен
// содержать только id и поле, отвечающее за имя пользователя(например
// username), которое должно содержать имя и фамилию.

const newUsers = users.map(({ id, first_name, last_name }) => ({ id, "username": `${first_name} ${last_name}` }));


// 4. Создать массив юзеров, где они отсортированы по возрасту по
// возрастанию и все пользователи младше 40 лет.

const middleAgeUsers = users.filter((user) => {
  return user.age < 40 
}) 
const sortedUsers = middleAgeUsers.sort((a, b) => {
  return a.age - b.age
})


// 5. Получить объект, где были бы
// a) данные о среднем возрасте пользователей
// b) количество пользователей старше 30
// c) количество пользователей старше 40
// d) количество пользователей старше 18

let sum = 0, max = 0;
users.forEach(({ age }) => {
  sum += age;
  if (age > max) max = age;
})
const average = sum / users.length;
console.log(average);


const yunger = users.filter((user) => {
  return user.age > 30 
});

const older = users.filter((user) => {
  return user.age < 40 
});

const underEighteen = users.filter((user) => {
  return user.age > 18
});


// 6. Создать объект, где ключ, это первая буква фамилии, а значение -
// массив из фамилий пользователей начинающихся на эту букву. Объект
// должен состоять только из ключей существующих фамилий в этом
// массиве. Например в этом массиве нет фамилии с букву Y, а значит и
// такого поля не должно быть в объекте. Пример того, что надо получить,
// когда пользователи имеют следующие фамилии Snow, Felton , Ford,
// Ferdinand:
// { s: [‘Snow’], f: ['Felton', 'Ford', 'Ferdinand' }