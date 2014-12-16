
// @author: Kwabena Gyekye Ohene-Bonsu
//   Mobile Web Final Project (2014)
//   C2015 | MIS
//   16/12/2014

  function syncAjax(u){
        console.log(u);
        var obj=$.ajax(
          {url:u,
           async:false
           }
        );
        console.log(obj.responseText);
        return $.parseJSON(obj.responseText);
        
      }

      function loadListEvents(){

          r=syncAjax("http://50.63.128.135/~csashesi/class2015/kwabena-ohene-bonsu/mw_final/jquery_mobile/index_json_response.php?cmd=8");
          var part
         for (var i = 0; i < r.mw_final.length; i++)
         {
          var the_id = r.mw_final[i].e_id;
           part += "<option>" + r.mw_final[i].ename + ", on: " + r.mw_final[i].date + ", at: " + r.mw_final[i].venue
           + " [ " + r.mw_final[i].time + " ]</option>";
           
         }
         $('#allListEvents').html(part);
      }

      function loadEvents(){

          r=syncAjax("http://50.63.128.135/~csashesi/class2015/kwabena-ohene-bonsu/mw_final/jquery_mobile/index_json_response.php?cmd=1");
          var part
         for (var i = 0; i < r.mw_final.length; i++)
         {
           part += "<p>Event: " + r.mw_final[i].ename + "</p><p>Date: " + r.mw_final[i].date + "</p><p>Venue: " + r.mw_final[i].venue
           + "</p><p>Time: " + r.mw_final[i].time + "</p><p>Contact No: " + r.mw_final[i].con_number +"</p><br>";
           
         }
         $('#allEvents').html(part);
      }

      // function loadDelegates(){

      //     r=syncAjax("index_json_response.php?cmd=2");
      //     var part
      //    for (var i = 0; i < r.mw_final.length; i++)
      //    {
      //      part += "<tr><td>" + r.mw_final[i].fname + "</td><td>" + r.mw_final[i].lname + "</td><td>" + r.mw_final[i].email
      //      + "</td><td>" + r.mw_final[i].phone + "</td><td>" + r.mw_final[i].organization +"</td></tr>";
           
      //    }
      //    $('#allDelegates').html(part);
      // }

      // function loadAttendees(){

      //     r=syncAjax("index_json_response.php?cmd=3");
      //     var part
      //    for (var i = 0; i < r.mw_final.length; i++)
      //    {
      //      part += "<tr><td>" + r.mw_final[i].attendant + "</td><td>" + r.mw_final[i].event_id + r.mw_final[i].code +"</td></tr>";
           
      //    }
      //    $('#allAttendees').html(part);
      // }

  function refresh(){
    document.location.reload(true);
  }

  $(document).ready(function(){

    //loadEvents();


    //save event details
  // $("#save_event").click(function(){
  //     var en = $('#ename').val();
  //     var dt = $('#date').val();
  //     var vn = $('#venue').val();
  //     var tm = $('#time').val();
  //     var cn = $('#con_number').val();
  //   var res = syncAjax("index_json_response.php?cmd=4&en="+en+"&dt="+dt+"&vn="+vn+"&tm="+tm+"&cn="+cn);

  //       if (res == 0){
  //     // $('#mess').val("error registering delegate");
  //     $("#mess").fadeTo(500,1, function() { $(this).html("<font size='5' color='red'>Error Saving Event Details :(</font>").fadeTo(5000,0,function() {}); })
  //   }
  //   else{
  //     // $('#mess').val("delegate registered");
  //     $("#mess").fadeTo(500,1, function() { $(this).html("<font size='5' color='green'>Event Details Saved :)</font>").fadeTo(5000,0,function() {}); })
  //   }
  //   // document.getElementById("save_event").disabled = true;

  //   $('#ename').val("");
  //   $('#date').val("");
  //   $('#venue').val("");
  //   $('#time').val("");
  //   $('#con_number').val("");
  //   return res;
  // });

      //clear event details
  $("#clear_event").click(function(){
    $('#ename').val("");
    $('#date').val("");
    $('#venue').val("");
    $('#time').val("");
    $('#con_number').val("");
  });

      //save delegate details
  $("#save_delegate").click(function(){
      var fn = $('#fname').val();
      var ln = $('#lname').val();
      var em = $('#email').val();
      var ph = $('#phone').val();
      var og = $('#organization').val();
      // console.log(fn,ln,em,ph,og);
    var res = syncAjax("http://50.63.128.135/~csashesi/class2015/kwabena-ohene-bonsu/mw_final/jquery_mobile/index_json_response.php?cmd=5&fn="+fn+"&ln="+ln+"&em="+em+"&ph="+ph+"&og="+og);

    if (res == 0){
      // $('#mess').val("error registering delegate");
      $("#status").fadeTo(500,1, function() { $(this).html("<font size='5' color='red'>Error Registering Delegate :(</font>").fadeTo(5000,0,function() {}); })
    }
    else{
      // $('#mess').val("delegate registered");
      $("#status").fadeTo(500,1, function() { $(this).html("<font size='5' color='green'>Delegate Registered :)</font>").fadeTo(5000,0,function() {}); })
    }
    // document.getElementById("save_event").disabled = true;

    $('#fname').val("");
    $('#lname').val("");
    $('#email').val("");
    $('#phone').val("");
    $('#organization').val("");
    return res;
  });

        //clear delegate details
  $("#clear_delegate").click(function(){
    $('#fname').val("");
    $('#lname').val("");
    $('#email').val("");
    $('#phone').val("");
    $('#organization').val("");
  });


  // Login Function
      // $("#login").click(function(){
      // var name1=$('#username').val();
      // var password1=$('#psword').val();
      // var u ="index_json_response.php?cmd=7&name="+name1+"&password="+password1;
      // r=syncAjax(u);

      // // if (name1 == r.users.name1 && password1 == r.users.password1) {
      // //   location.href="adminindex.html";
      // // }

      // if (r == 1) {
      //   // location.href="adminindex.html";
      //   $("#status").fadeTo(500,1, function() { $(this).html("<font color='green'>Success! Loading Admin Page...</font>").
      //     fadeTo(5000,0,function() {location.href="adminindex.html"}); })
      // }

      // //Message displayed if username or password is not correct
      // else {
      //   $("#status").fadeTo(500,1, function() { $(this).html("Invalid username or password"); })
      // }

      // });

      // Attend Function
      $("#attend").click(function(){
      var code=$('#code').val();
      var u ="http://50.63.128.135/~csashesi/class2015/kwabena-ohene-bonsu/mw_final/jquery_mobile/index_json_response.php?cmd=10&code="+code;
      r=syncAjax(u);

      if (r == 1) {
        // location.href="adminindex.html";
          var pin=$('#pin').val();
          var phone=$('#phonen').val();
          var a ="http://50.63.128.135/~csashesi/class2015/kwabena-ohene-bonsu/mw_final/jquery_mobile/index_json_response.php?cmd=11&pin="+pin+"&phone="+phone;
          red=syncAjax(a);

          if (red == 1){
            var eve=$('#allListEvents').val();
            var code=$('#code').val();
            var pin=$('#pin').val();
            var phone=$('#phonen').val();
            var b ="http://50.63.128.135/~csashesi/class2015/kwabena-ohene-bonsu/mw_final/jquery_mobile/index_json_response.php?cmd=6&pin="+pin+"&phone="+phone+"&eve="+eve+"&code="+code;
            c = syncAjax(b);

            if (c == 1){
              $("#status1").fadeTo(500,1, function() { $(this).html("<font color='green'>You are now marked Present</font>").
          fadeTo(7000,0,function() {}); })
              $('#code').val("");
              $('#pin').val("");
              $('#phonen').val("");
              return c;
            }

            else {
              $("#status1").fadeTo(500,1, function() { $(this).html("<font color='red'>Attendance Unsuccessful</font>"); })
            }
          }

          else {
            $("#status1").fadeTo(500,1, function() { $(this).html("<font color='red'>Invalid User ID or Phone Number</font>"); })
          }

        
      }

      //Message displayed if username or password is not correct
      else if (r==0) {
        // alert("Invalid Ticket");
        $("#status1").fadeTo(500,1, function() { $(this).html("<font color='red'>Invalid Ticket Number</font>"); })
      }

      });

});
