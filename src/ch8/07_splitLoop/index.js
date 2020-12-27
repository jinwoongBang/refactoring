function calculateSalary(people) {
  return `최연소 : ${youngest()}, 총 급여 : ${totalSalary()}`;

  function totalSalary() {
    let totalSalary = 0;
    for (const p of people) {
      totalSalary += p.salary;
    }
    return totalSalary;
  }

  function youngest() {
    let youngest = people[0] ? people[0].age : Infinity;
    for (const p of people) {
      if (p.age < youngest) {
        youngest = p.age;
      }
    }
    return youngest;
  }
}
