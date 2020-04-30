$(document).ready(function(){ // Якщо документ загрузився

     document.getElementById("oneMore").disabled = true;
var rand_num = Math.floor(Math.random() * 100); // загадуємо число
console.log(rand_num); // :) робимо собі підказку

var hints = '';
var tableText='';
var count=0;
var countArr=[];
var name=[];

     $('#oneMore').click(function () {
         document.getElementById("input_num").disabled = false;

        rand_num = Math.floor(Math.random() * 100);
         console.log(rand_num);
        num=0;
        count = 0;
        $('#you_num').val('');
        $('#your_name').val('');
        $('#table').html("").empty;
         
        console.log(tableText);
        document.getElementById("you_num").disabled = false;
        document.getElementById("your_name").disabled = false;
        document.getElementById("oneMore").disabled = true;

    });

$("#input_num").click(function() { //після нажання кнопки
    var num = $('#you_num').val(); // берем своє введене число  
             count++;
    if (num == rand_num) { // і перевіряємо чи вгадали
         tableText='';
        document.getElementById("oneMore").disabled = false;
        hints += 'Вірно'+'<br>' ;
        countArr.push(count);
        name.push($('#your_name').val());
        $('#myMmodal').modal('show');      
                    for (var j = 0; j < name.length ; j++) 
                    {
                        if (countArr[j] > countArr[j + 1]) 
                        {
                           var temp =countArr[j];
                           countArr[j] = countArr[j + 1];
                           countArr[j + 1] = temp;
                           
                           temp =name[j];
                           name[j] = name[j + 1];
                           name[j + 1] = temp;
                        }
                    }
        
        for(var i=0;i<name.length;i++){
        tableText+='Ім`я: '+name[i]+'  Кількість спроб: '+countArr[i]+'<br>';            
        }
        $('#table').html(tableText);
        document.getElementById("input_num").disabled = true;
        // відповідно вітаємо з перемогою
    } else {
        hints += 'неправильно' + '<br>' ; // або кажемо що не вгадав
       
      if(num>rand_num){ // і хочу щоб була підказка
            $('#myMmodal1').modal('show');
        }
        if(num<rand_num){
            $('#myMmodal2').modal('show');
        }
    }
});
    


});