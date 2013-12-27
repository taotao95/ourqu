/**
 * Created by TatoooIn on 13-12-19.
 */
var dateStart,dateEnd;
$('#datetimepicker').datetimepicker({
    language:  'zh-CN',
    format: 'yyyy-mm-dd',
    todayBtn: true,
    minView: 'month',
    todayHighlight: true,
    autoclose: true
}).on('changeDate',function(ev){
        dateStart=ev.date;

    });
$('#datetimepicker2').datetimepicker({
    language:  'zh-CN',
    format: 'yyyy-mm-dd',
    todayBtn: true,
    minView: 'month',
    todayHighlight: true,
    autoclose: true
}).on('changeDate',function(ev){
        dateEnd=ev.date;
        if(dateEnd<dateStart){
            $('#myModal').modal()
            //alert('结束时间早于开始时间，请重新选择！')
        }
    });

