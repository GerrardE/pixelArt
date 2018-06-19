//define variables
//get the document ready
$(document).ready (function () {
    $('#sizePicker').submit(function makeGrid(grid){    
        $('table tr').remove();
            var row = $('#inputWidth').val();
            var col = $('#inputHeight').val();
                for (var i = 1; i <= col; i++){
                    $('table').append('<tr></tr>');
                    for (var j = 1; j <= row; j++){
                        $('tr:last').append('<td></td>');
                        $('td').attr("class", 'cells');
                    }
                }
            grid.preventDefault();
            $('.cells').click(function(event){
                var paint = $('#colorPicker').val();
                    $(event.target).css('background-color', paint);
            });
    });
});
// Select size input

// When size is submitted by the user, call makeGrid()

// Your code goes here!
