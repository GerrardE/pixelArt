//define variables
//get the document ready
// Select size input

// When size is submitted by the user, call makeGrid()

 //Your code goes here!
$(document).ready(function(){
	$('#sizePicker').submit(function makeGrid(e){
		//prevent the form from continuosly submitting
		e.preventDefault();
			//clear the cells on each submission
			$('table td, tr').remove();
			//collect the form ids and declare their values as variables
			var rows = $('#inputWidth').val();
			var cols = $('#inputHeight').val();
			//loop through the value of rows and display a row each time
				for (var x = 1; x<=rows; x++){
					$('table').append('<tr></tr>');
					}
			//loop through the value of cols and display a col each time
				for (var y = 1; y<=cols; y++){
						$('tr').append('<td></td>');
						//give a class of 'cells' to each table data 
						$('td').attr('class', 'cells');
					}
					//color the cells on click with the event listner
					$('.cells').click(function(color){
						//collect the color value selection
						var paint = $('#colorPicker').val();
						//color the target cell
						$(color.target).css('background-color', paint);
					});		
		 });
});
 