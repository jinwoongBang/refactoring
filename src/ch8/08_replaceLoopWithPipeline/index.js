export function acquireData(input) {
  const lines = input.split("\n"); // 컬렉션
  const result = [];
  const loopItem = lines.slice(1).filter((line) => line.trim() !== "");
  for (const line of loopItem) {
    const record = line.split(",");
    if (record[1].trim() === "India") {
      result.push({ city: record[0].trim(), phone: record[2].trim() });
    }
  }

  return result;
}
