const fs = require('fs');

// Функція для читання JSON-файлу
function readJSONFile(filename) {
  try {
    const data = fs.readFileSync(filename, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(Помилка при читанні файлу ${filename}: ${error.message});
    process.exit(1);
  }
}

// Функція для запису результатів у файл
function writeResultsToFile(results) {
  try {
    fs.writeFileSync('output.txt', results.join('\n'), 'utf8');
    console.log('Результати успішно записані у файл output.txt');
  } catch (error) {
    console.error(Помилка при записі у файл output.txt: ${error.message});
  }
}

// Головна функція для аналізу JSON та запису результатів
function analyzeAndWriteResults(data) {
  const results = [];

  // Проходимося по кожному об'єкту у JSON-файлі
  data.forEach(item => {
    // Перевіряємо, чи є у полі "parent" значення "BS3_BanksLiab"
    if (item.parent === "BS3_BanksLiab") {
      // Додаємо результат до масиву
      results.push(${item.txt}: ${item.value});
    }
  });

  // Записуємо результати у файл
  writeResultsToFile(results);
}

// Головна функція програми
function main() {
  const filename = 'data.json';
  const jsonData = readJSONFile(filename);
  analyzeAndWriteResults(jsonData);
}

// Викликаємо головну функцію програми
main();
