 <script> 
    var now = new Date(); var hrs = now.getHours(); var min = now.getMinutes(); var date = now.getDate(); var year = now.getFullYear(); var month = now.getMonth() + 1;
    var uhrzeit = hrs+":"+min;
    var datum = date+"."+month+"."+year; 
    var msg = "";
    if (hrs >=  0) msg = "Good midnight!"; if (hrs >=  4) msg = "Good morning!"; if (hrs >= 11) msg = "Good lunchtime!"; 
    if (hrs >= 12) msg = "Good afternoon!"; if (hrs >= 17) msg = "Good evening!";
    document.getElementById('greeter').innerHTML = uhrzeit + " // " +  datum +"<br>"+ msg;
</script>

<div class="center"> <code id="greeter"> </code> </div>
