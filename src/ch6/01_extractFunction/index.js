function printBanner() {
  console.log("*****************");
  console.log("*****고객 채무*****");
  console.log("*****************");
}

function printDetails(invoice, outstanding) {
  // 세부사항을 출력한다.
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
}

function recordDueDate(invoice) {
  // 마감일(dueDate) 를 기록한다.
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

function calculateOutstanding(invoice) {
  // 미해결 채무(outstanding) 를 계산한다.
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}

function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}

printOwing({
  customer: "김철수",
  orders: [{ amount: 10 }, { amount: 20 }, { amount: 30 }],
});
