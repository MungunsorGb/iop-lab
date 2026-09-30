const users = [
    {
      name: "Бат",
      age: 20,
      email: "bat@example.com",
    },
    {
      name: "Сараа",
      age: 17,
      email: "saraa@example.com",
    },
    {
      name: "Дорж",
      age: 25,
      email: "dorj@example.com",
    },
    {
      name: "Оюунаа",
      age: 18,
      email: "oyuuna@example.com",
    },
  ];

  const getAdultNames = users =>
    users
      .filter(user => user.age > 18)
      .map(user => `${user.name} (${user.age})`);

  const result = getAdultNames(users);
  console.log(result);  