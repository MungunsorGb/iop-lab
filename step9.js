const students = [
    { name: "Бат", score: 85 },
    { name: "Сараа", score: 55 },
    { name: "Дорж", score: 72 },
  ];
  const average = students.reduce((sum, student) => {
    return sum + student.score;
  }, 0) / students.length;
  
  console.log("dundaj:", average); 
  const passedStudents = students
    .filter((student) => student.score > 60)
    .map((student) => student.name);
  
  console.log("60<:", passedStudents);
  