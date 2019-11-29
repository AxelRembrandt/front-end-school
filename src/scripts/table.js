function table(container, headers, lines) {
  const table = document.createElement('table');
  table.className = 'table';

  const row = document.createElement('row');

  headers.forEach(h => {
    const header = document.createElement('th');
    header.innerText = h;
  });

  table.appendChild(row);
  if (lines && lines.length) {
    lines.forEach(line => table.appendChild(line));
  }
  container.appendChild(table);
}

function line(data) {

}

const element = document.getElementById('card')
table(element, 
  ['Название', 
  'Место проведения', 
  'Дата проведения', 
  'Количество мест', 
  'Осталось мест', 
  '']
  ,[]);