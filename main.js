const fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Помилка читання файлу:', err);
    return;
  }
  try {
    const jsonData = JSON.parse(data);
    const results = [];

    for (const item of jsonData) {
      if (item.parent === 'BS3_BanksLiab') {
        results.push(`${item.txt}:${item.value}`);
      }
    }

    fs.writeFile('output.txt', results.join('\n'), (err) => {
      if (err) {
        console.error('Помилка запису у файл:', err);
        return;
      }
      console.log('Результати записано у файл output.txt');
    });
  } catch (error) {
    console.error('Помилка обробки JSON:', error);
  }
});
