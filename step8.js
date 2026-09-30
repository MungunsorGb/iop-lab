async function getUsers() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users");
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);}
      const users = await response.json();
      users.forEach((user) => {
        console.log(user.name);
      });
    } catch (error) {
      console.error("user tatah aldaa:", error);
    }
  }
  getUsers();