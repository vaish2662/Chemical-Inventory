// Sample data for the chemical inventory
let chemicals = [
    { id: 1, name: 'Acetone', vendor: 'ABC Corp', density: '0.79 g/cm³', viscosity: '0.32 cP', packaging: 'Bottle', packSize: '500 mL', unit: 'Litre', quantity: 10 },
    { id: 2, name: 'Benzene', vendor: 'XYZ Inc.', density: '0.88 g/cm³', viscosity: '0.65 cP', packaging: 'Can', packSize: '1 L', unit: 'Litre', quantity: 15 },
    { id: 3, name: 'Methanol', vendor: 'Chemical Co.', density: '0.79 g/cm³', viscosity: '0.59 cP', packaging: 'Bottle', packSize: '250 mL', unit: 'Litre', quantity: 20 },
    // Add more rows as needed
];

// Selected row index
let selectedRowIndex = -1;

// Function to render the table
function renderTable() {
    const tableBody = document.getElementById('chemicalTableBody');
    tableBody.innerHTML = ''; // Clear existing rows
    chemicals.forEach((chemical, index) => {
        const row = document.createElement('tr');
        row.classList.toggle('highlight', index === selectedRowIndex);
        row.innerHTML = `
            <td>${chemical.id}</td>
            <td contenteditable="false">${chemical.name}</td>
            <td contenteditable="false">${chemical.vendor}</td>
            <td contenteditable="false">${chemical.density}</td>
            <td contenteditable="false">${chemical.viscosity}</td>
            <td contenteditable="false">${chemical.packaging}</td>
            <td contenteditable="false">${chemical.packSize}</td>
            <td contenteditable="false">${chemical.unit}</td>
            <td contenteditable="false">${chemical.quantity}</td>
             <td>
                <button class="edit-btn">Edit</button>
                <button class="save-btn" style="display:none;">Save</button>
            </td>
        `;
        row.querySelector('.edit-btn').addEventListener('click', () => editRow(index, row));
        row.querySelector('.save-btn').addEventListener('click', () => saveRow(index, row));
        tableBody.appendChild(row);
    });
}

function editRow(index, row) {
    selectedRowIndex = index;
    const cells = row.querySelectorAll('td');
    
    // Enable contenteditable on each cell except the first one (ID column)
    for (let i = 1; i < cells.length - 1; i++) {
        cells[i].setAttribute('contenteditable', 'true');
    }
    
    // Show Save button and hide Edit button
    row.querySelector('.edit-btn').style.display = 'none';
    row.querySelector('.save-btn').style.display = 'inline';
    row.classList.add('highlight');
}

// Function to save the edited row data and remove highlight
function saveRow(index, row) {
    const cells = row.querySelectorAll('td');
    
    // Update the chemical object with the edited values
    chemicals[index] = {
        id: parseInt(cells[0].textContent),
        name: cells[1].textContent,
        vendor: cells[2].textContent,
        density: cells[3].textContent,
        viscosity: cells[4].textContent,
        packaging: cells[5].textContent,
        packSize: cells[6].textContent,
        unit: cells[7].textContent,
        quantity: parseInt(cells[8].textContent)
    };
    
    // Disable contenteditable on each cell
    for (let i = 1; i < cells.length - 1; i++) {
        cells[i].setAttribute('contenteditable', 'false');
    }

    // Hide Save button and show Edit button
    row.querySelector('.edit-btn').style.display = 'inline';
    row.querySelector('.save-btn').style.display = 'none';

    // Remove highlight after saving
    row.classList.remove('highlight');

    alert('Row updated successfully!');
}
// Function to select a row for editing
function selectRow(index) {
    selectedRowIndex = index;
    renderTable();
    row.classList.add('highlight');
}

document.getElementById('refreshData').addEventListener('click', () => {
    // chemicals = [...this.chemicals]; // Reset to the original data
    // selectedRowIndex = -1; // Clear any selected row
    renderTable();
});

// Function to move a row up
function moveRowUp() {
    if (selectedRowIndex > 0) {
        const temp = chemicals[selectedRowIndex];
        chemicals[selectedRowIndex] = chemicals[selectedRowIndex - 1];
        chemicals[selectedRowIndex - 1] = temp;
        selectedRowIndex--;
        renderTable();
    }
}

function sortTable(columnIndex) {
    const compare = (a, b) => {
        const valA = Object.values(a)[columnIndex].toString().toLowerCase();
        const valB = Object.values(b)[columnIndex].toString().toLowerCase();
        return valA > valB ? 1 : valA < valB ? -1 : 0;
    };

    chemicals.sort(compare);
    renderTable();
}

// Function to move a row down
function moveRowDown() {
    if (selectedRowIndex < chemicals.length - 1) {
        const temp = chemicals[selectedRowIndex];
        chemicals[selectedRowIndex] = chemicals[selectedRowIndex + 1];
        chemicals[selectedRowIndex + 1] = temp;
        selectedRowIndex++;
        renderTable();
    }
}

// Function to add a new row
document.getElementById('addRow').addEventListener('click', () => {
    const newRow = { id: chemicals.length + 1, name: 'New Chemical', vendor: 'New Vendor', density: '0.0', viscosity: '0.0', packaging: 'New', packSize: '0', unit: 'kg', quantity: 0 };
    chemicals.push(newRow);
    renderTable();
});

// Function to delete the selected row
document.getElementById('deleteRow').addEventListener('click', () => {
    if (selectedRowIndex > -1) {
        chemicals.splice(selectedRowIndex, 1);
        selectedRowIndex = -1;
        renderTable();
    }
});

// Function to save the edited row data
// document.getElementById('saveData').addEventListener('click', () => {
//     if (selectedRowIndex > -1) {
//         const row = document.querySelectorAll('#chemicalTableBody tr')[selectedRowIndex];
//         const cells = row.querySelectorAll('td');
//         chemicals[selectedRowIndex] = {
//             id: parseInt(cells[0].textContent),
//             name: cells[1].textContent,
//             vendor: cells[2].textContent,
//             density: cells[3].textContent,
//             viscosity: cells[4].textContent,
//             packaging: cells[5].textContent,
//             packSize: cells[6].textContent,
//             unit: cells[7].textContent,
//             quantity: parseInt(cells[8].textContent)
//         };
//         alert('Row updated successfully!');
//         renderTable();
//     }
// });

// Move row up
document.getElementById('moveUp').addEventListener('click', moveRowUp);

// Move row down
document.getElementById('moveDown').addEventListener('click', moveRowDown);

// Initial render
renderTable();
