var task_list = []
$(document).ready(function(){

    $('.bton').click(function(event){
        event.preventDefault();
     var data =  $('textarea').val();
     var obj = {

        Task_name: $('textarea').val()   
    }
     $.ajax({
        type: 'post',
        url: 'http://localhost:3000/task',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(obj),
        success: function (data) {
        
        },
        error: function (error) {
            console.log(error)
        }
    })
    })
    Getdata();

})
function Getdata() {
    $.ajax({
        async: 'true',
        type: 'get',
        url: 'http://localhost:3000/task',
        contentType: 'application/json; charset=utf-8',
        dataType: 'JSON',
        success: function (data) {
        console.log(data)
        var html = '';
        var datalength = data.length
        
        for(var i = 0; i<data.length; i++){
           console.log(data[i].Task_name)
           html+='<div class="row list_style" onclick=gototask('+data[i].id+')>'+data[i].Task_name+'</div>'
           
        }

       
        $('.task').html(html);
          
     
        }

    });
};

function gototask(id){
       
        var obj ={
            id:id,
        }
        
        var new_url = '/todolisttaask.html?' + jQuery.param(obj)

        window.location.href=new_url


}