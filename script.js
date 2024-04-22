const root = document.getElementById('root');

const text = document.createElement('textarea');
text.placeholder= 'Write something ';
root.appendChild(text);

const submitButton = document.createElement('button');
submitButton.textContent='submit';
submitButton.addEventListener('click',submissionProcess);
root.appendChild(submitButton)

function submissionProcess(){
    const words = text.value.trim();
    const tokenWords= words.split(/\s+/);
    
    const frequencyTable={};
    tokenWords.forEach(word=> {
         frequencyTable[word]= frequencyTable[word]? frequencyTable[word] +1 :1;
    });

    const sort = Object.keys(frequencyTable).sort((a,b)=> frequencyTable[b]-frequencyTable[a]);

    const wordHierarchy = sort.slice(0,5);

     const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableBody = document.createElement('tbody');
    const headRow = document.createElement('tr');
    const heading1 = document.createElement('th');
    heading1.textContent = 'Word Name';
    const heading2 = document.createElement('th');
    heading2.textContent = 'Word Frequency';
    headRow.appendChild(heading1);
    headRow.appendChild(heading2);
    tableHead.appendChild(headRow);
    table.appendChild(tableHead);
    wordHierarchy.forEach(word => {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        cell1.textContent = word;
        cell2.textContent = frequencyTable[word];
        row.appendChild(cell1);
        row.appendChild(cell2);
        tableBody.appendChild(row);
    });
    table.appendChild(tableBody);
    root.appendChild(table);

    // Log frequency table
    console.log('Frequency Table:', frequencyTable);
}