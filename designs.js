$('#sizePicker').submit( event => {
    event.preventDefault();

    // Table size input
    let width = $('#inputWidth').val();
    let height = $('#inputHeight').val();

    // Clear table
    $('#pixelCanvas').html('');

    // When size is submitted by the user, call makeGrid()
    makeGrid(height, width);

    // Listen for click event
    cellClickListener();
});

function makeGrid(height, width) {
    // Make canvas
    for(let i = 0; i < height; i++) {
        $('#pixelCanvas').append('<tr></tr>');
    };

    for(let i = 0; i < width; i++) {
        $('tr').append('<td></td>');
    };
}

function cellClickListener() {
    // Color the cell with colorPicker value
    $('td').click( event => {
        let color = $('#colorPicker').val();
        $(event.currentTarget).css("background-color", color)
    });
}