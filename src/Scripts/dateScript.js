function calculateDayOfWeek() {
    const birthDate = new Date(document.getElementById("birthDate").value);
    const daysOfWeek = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
    const a = Math.floor((15 - birthDate.getMonth()) / 12);
    const y = birthDate.getFullYear() % 100 - a;
    const m = birthDate.getMonth() + 12 * a - 1;
    const dayOfWeek = Math.floor((birthDate.getDate() + y + Math.floor(y / 4) - Math.floor(y / 100) +
        Math.floor(y / 400) + Math.floor(31 * m / 12)) % 7);
    const result = `Ви народилися в ${daysOfWeek[dayOfWeek]}.`;
    document.getElementById("result").textContent = result;
}