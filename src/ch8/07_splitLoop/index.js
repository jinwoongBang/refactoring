function calculateSalary(people) {
  let youngest = people[0] ? people[0].age : Infinity;
  for (const p of people) {
    if (p.age < youngest) {
      youngest = p.age;
    }
  }

  let totalSalary = 0;
  for (const p of people) {
    totalSalary += p.salary;
  }
  return `최연소 : ${youngest}, 총 급여 : ${totalSalary}`;
}
