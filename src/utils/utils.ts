export function isToday(date: Date) {
  const today = new Date();
  return (
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate()
  );
}

export function generateRandomCode(): string {
  const letters = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩ"; 
  const randomPrefix =
    letters.charAt(Math.floor(Math.random() * letters.length)) +
    letters.charAt(Math.floor(Math.random() * letters.length));

  const randomNumber = Math.floor(Math.random() * 10000);
  const paddedNumber = String(randomNumber).padStart(4, "0");

  return `${randomPrefix}-${paddedNumber}`;
}
