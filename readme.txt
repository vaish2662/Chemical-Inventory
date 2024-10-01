index.html
    The HTML structure defines the interface and layout of the web page.

    Key Elements:
        Title: Chemical Inventory Management
        Toolbar: A set of action buttons:
        Add Row: Adds a new row to the table.
        Delete Selected Row: Deletes the selected row.
        Move Row Up: Moves the selected row up by one position.
        Move Row Down: Moves the selected row down by one position.
        Refresh: Resets the table view to reflect the current data state.
        Table: A table that displays the chemical inventory with the following columns:
        ID 
        Chemical Name 
        Vendor 
        Density
        Viscosity
        Packaging
        Pack Size
        Unit
        Quantity
        Every column is sortable whenever user clicks on the column heading.
        Action: Provides buttons to edit and save rows.

script.js
    Key Variables:
    chemicals: An array of objects where each object represents a chemical with its properties such as id, name, vendor, density, viscosity, packaging, packSize, unit, and quantity.
    Key Functions:
    renderTable():
        Renders the chemical data into the table body dynamically.
        Adds event listeners for editing and saving rows.

    editRow(index, row):
        Enables editing mode for a row, allowing users to modify chemical properties.
        Makes table cells contenteditable for in-place editing and displays a save button.
    
    saveRow(index, row):
        Saves the edited values of the row back into the chemicals array.
        Disables editing and restores the table to its default state.
    
    moveRowUp():
        Moves the selected row up in the list by swapping it with the row above.
    
    moveRowDown():
        Moves the selected row down by swapping it with the row below.
   
    sortTable(columnIndex):
        Sorts the table rows based on the column clicked by the user.
    
    addRow():
        Adds a new chemical entry to the chemicals array with default values.
    
    deleteRow():
        Deletes the currently selected row from the chemicals array.

    refreshData():
        Refreshes the table view, effectively re-rendering the table.

    JavaScript Workflow:
        Initially, renderTable() is called to populate the table with chemical data.
        When the user clicks the Edit button, the row becomes editable.
        Upon clicking Save, the edited data is updated in the chemicals array.
        Users can add, delete, and reorder rows using the buttons provided.
        The table can be sorted by any column by clicking on the column headers.