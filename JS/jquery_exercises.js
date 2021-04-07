// $('.important, p').css('background-color', 'red');
// $('.codeup').css('border', '1px solid red');

// var contents = $('#yes1').html();
// alert(contents);
//---------------Mouse Events-------------------------------//

// $('#coding').click(function(){
//     // alert('Hmmmm, example page');
//     $(this).css('Background-color', '#FF0')
// });

$('#theList').hover(
    function() {
        $(this).css('background-color', 'red');
    },
    function() {
        $(this).css('background-color', '#FFF');
    }
);

$('#codeup').dblclick(function(e) {
    alert('h1 with the id of "codeup" was double clicked!');
});