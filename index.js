var date1 = new Date(1970, 0, 1);
var date2 = new Date(1970, 0, 1);

date2.setHours(23);
date2.setMinutes(130);

var time = date2.getTime() - date1.getTime();
var horas = time / 3600000;

alert(parseInt(horas, 10) + ":" + ((time % 3600000) / 60000));
