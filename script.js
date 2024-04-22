const root = document.getElementById('root');
//creating an area to enter text 
const text = document.createElement('textarea');
text.placeholder= 'Write something ';
root.appendChild(text);
//creating a submit button
const submitButton = document.createElement('button');
submitButton.textContent='submit';
submitButton.addEventListener('click',submissionProcess);
root.appendChild(submitButton)
// does the processs aftere the paragraph is submitted by the user
function submissionProcess(){
    const words = text.value.trim();
    const tokenWords= words.split(/\s+/);
    
    const frequencyTable={};
    // counts freqency of the word 
    tokenWords.forEach(word=> {
         frequencyTable[word]= frequencyTable[word]? frequencyTable[word] +1 :1;
    });
// sorting based on the frequency of the words on the array frequencytable
    const sort = Object.keys(frequencyTable).sort((a,b)=> frequencyTable[b]-frequencyTable[a]);

    const wordHierarchy = sort.slice(0,5);
// creating a table and adding the data to it based on the frequency of words used in the input 
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

    // Prints frequency table
    console.log('Frequency Table:', frequencyTable);
}
