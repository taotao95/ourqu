/**
 * Created by TatoooIn on 13-12-13.
 */
$('.tao-reply-btn').click(function(){
    var t = $(this).parent().find('a.tao-reply-name').html();
    tname = '回复' + t + '的：';
    $('#room-reply-text').append(tname);
})
/** stickUp **/
jQuery(function($) {
    $(document).ready( function() {
        //enabling stickUp on the '.navbar-wrapper' class
        $('.navbar-wrapper').stickUp();
    });

});

$('.banner').unslider({
});
/**tab**/
$('#myTab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
});



//$(document).ready(function(){
//    year = 1900;
//
//    for(var i = 0;i<200;i++){
//          //alert('<option ' + 'value=\"' + i + ' \" >' +  year + '</option>');
//        $('.form-uc-year').append('<option ' + 'value=\"' + i + ' \" >' +  year + '</option>');
//        year += 1;
//    }
//    for(var i = 1;i<13;i++){
//        $('.form-uc-month').append('<option ' + 'value=\"' + i + '\">' + i + '</option>');
//    }
//    for(var i = 1;i<13;i++){
//        $('.form-uc-month').append('<option ' + 'value=\"' + i + '\">' + i + '</option>');
//    }
//})

