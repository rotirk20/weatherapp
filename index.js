$(document).ready(function() {
 $('#send').click(function(e) {
   e.preventDefault();
   var grad = $('#grad_value').val();
   if (grad !== '') {
     $.ajax({
       type: 'GET',
       url: (grad == 'Tuzla'| grad == 'tuzla') ? 'https://api.openweathermap.org/data/2.5/weather?q=' + grad + ',ba&appid=f7b256b67b8cabbff6f83b5e91572bad&units=metric' : 'https://api.openweathermap.org/data/2.5/weather?q=' + grad + '&appid=f7b256b67b8cabbff6f83b5e91572bad&units=metric',
       dataType: 'jsonp',
       success: function(podaci) {
         $('.ime_grada').text(podaci.name);
       var id = podaci.id;
       $.ajax({
         type: 'GET',
         url: 'https://api.openweathermap.org/data/2.5/forecast?id='+id+'&appid=f7b256b67b8cabbff6f83b5e91572bad&lang=hr&units=metric',
         dataType: 'jsonp',
         success: function (forecast) {
           var cnt = forecast.cnt,
           datum = new Date();
           satii = datum.getHours();
           satii.toString();
           datum = datum.getDate();

           function formatDate(date) {
             var d = new Date(date),
                 month = '' + (d.getMonth() + 1),
                 day = '' + d.getDate();
        
             if (month.length < 2) month = '0' + month;
             if (day.length < 2) day = '0' + day;
        
             return [day, month].join('.');
         }

           $.each(forecast.list, function(index, val) {
             var date=val.dt_txt.split(' ')[0],
             mjerenje= date.split('-')[2],
             vjetar = val.wind.speed.toFixed(2),
             sati = val.dt_txt;
             $('.box').css({'display':'block'});

             if (mjerenje==datum && index == 0)
             {
               $('#danas .datum').text(formatDate(val.dt_txt));
               $('#danas h4.vrijeme').text(val.weather[0].description);
               $('#danas img.icon').attr('src', 'http://openweathermap.org/img/w/'+val.weather[0].icon + '.png');
               $('#danas .temp').html('<img class="temp-ikon" src="https://www.raspberrypi.org/documentation/configuration/images/over_temperature_80_85.png">'+Math.round(val.main.temp) + ' °C');
               $('#danas .vjetar').html('<img class="vjetar-ikon" src="https://image.flaticon.com/icons/png/512/56/56086.png">'+vjetar + ' km/h');
               $('#danas .humidity').html('<img class="humidity-ikon" src="https://cdn.iconscout.com/icon/free/png-256/humidity-25-781162.png">'+val.main.humidity);

              }

              if (mjerenje==datum+1 && index == 8)
                {
                 $('#sutra .datum').text(formatDate(val.dt_txt));
                 $('#sutra h4.vrijeme').text(val.weather[0].description);
                 $('#sutra img.icon').attr('src', 'http://openweathermap.org/img/w/'+val.weather[0].icon + '.png');
                 $('#sutra .temp').html('<img class="temp-ikon" src="https://www.raspberrypi.org/documentation/configuration/images/over_temperature_80_85.png">'+Math.round(val.main.temp) + ' °C');
                 $('#sutra .vjetar').html('<img class="vjetar-ikon" src="https://image.flaticon.com/icons/png/512/56/56086.png">'+vjetar + ' km/h');
                 $('#sutra .humidity').html('<img class="humidity-ikon" src="https://cdn.iconscout.com/icon/free/png-256/humidity-25-781162.png">'+val.main.humidity);

              }

              if (mjerenje==datum+2 && index == 16)
                {
                 $('#prekosutra .datum').text(formatDate(val.dt_txt));
                 $('#prekosutra h4.vrijeme').text(val.weather[0].description);
                 $('#prekosutra img.icon').attr('src', 'http://openweathermap.org/img/w/'+val.weather[0].icon + '.png');
                 $('#prekosutra .temp').html('<img class="temp-ikon" src="https://www.raspberrypi.org/documentation/configuration/images/over_temperature_80_85.png">'+Math.round(val.main.temp) + ' °C');
                 $('#prekosutra .vjetar').html('<img class="vjetar-ikon" src="https://image.flaticon.com/icons/png/512/56/56086.png">'+vjetar + ' km/h');
                 $('#prekosutra .humidity').html('<img class="humidity-ikon" src="https://cdn.iconscout.com/icon/free/png-256/humidity-25-781162.png">'+val.main.humidity);

              }

              if (mjerenje==datum+3 && index == 24)
                {
                 $('#zakosutra .datum').text(formatDate(val.dt_txt));
                 $('#zakosutra h4.vrijeme').text(val.weather[0].description);
                 $('#zakosutra img.icon').attr('src', 'http://openweathermap.org/img/w/'+val.weather[0].icon + '.png');
                 $('#zakosutra .temp').html('<img class="temp-ikon" src="https://www.raspberrypi.org/documentation/configuration/images/over_temperature_80_85.png">'+Math.round(val.main.temp) + ' °C');
                 $('#zakosutra .vjetar').html('<img class="vjetar-ikon" src="https://image.flaticon.com/icons/png/512/56/56086.png">'+vjetar + ' km/h');
                 $('#zakosutra .humidity').html('<img class="humidity-ikon" src="https://cdn.iconscout.com/icon/free/png-256/humidity-25-781162.png">'+val.main.humidity);

              }

              if (mjerenje==datum+4 && index == 32)
                {
                 $('#petidan .datum').text(formatDate(val.dt_txt));
                 $('#petidan h4.vrijeme').text(val.weather[0].description);
                 $('#petidan img.icon').attr('src', 'http://openweathermap.org/img/w/'+val.weather[0].icon + '.png');
                 $('#petidan .temp').html('<img class="temp-ikon" src="https://www.raspberrypi.org/documentation/configuration/images/over_temperature_80_85.png">'+Math.round(val.main.temp) + ' °C');
                 $('#petidan .vjetar').html('<img class="vjetar-ikon" src="https://image.flaticon.com/icons/png/512/56/56086.png">'+vjetar + ' km/h');
                 $('#petidan .humidity').html('<img class="humidity-ikon" src="https://cdn.iconscout.com/icon/free/png-256/humidity-25-781162.png">'+val.main.humidity);

              }
                });
           }
     });
   }
     });   
   } else {
     alert('Provjerite da li ste unijeli pravilno ime grada');
   }
 });
});
