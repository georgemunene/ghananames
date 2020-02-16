function day () {
    let cc = parseInt(document.getElementById("cc").value);
    let yy = parseInt(document.getElementById("yy").value);
    let mm = parseInt(document.getElementById("mm").value);
    let dd = parseInt(document.getElementById("dd").value);
    let male =parseInt(document.getElementById("male").value);
    let female =parseInt(document.getElementById("female").value);
    //var dayWeek = (((cc/4)-2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )%7;
    var dayWeek = Math.floor(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7 );
    
    if(document.getElementById('male').checked && dayWeek == 0 ){
      alert('You are Male.Your Akan name is Kwasi');
      //document.getElementById("d").innerHTML = "Your Ghanian day is : " + dayWeek;
    }
  
   
  
    else if(document.getElementById('male').checked && dayWeek == 1 ){
      alert('You are Male.Your Akan name is Kwadwo');
      //document.getElementById("d").innerHTML = "Your Ghanian day is : " + dayWeek;
    }
  
    else if(document.getElementById('male').checked && dayWeek == 2 ){
      alert('You are Male.Your Akan name is Kwabena');
      //document.getElementById("d").innerHTML = "Your Ghanian day is : " + dayWeek;
    }
  
    else if(document.getElementById('male').checked && dayWeek == 3){
      alert('You are Male.Your Akan name is Kwaku');
     // document.getElementById("d").innerHTML = "Your Ghanian day is : " + dayWeek;
    }
  
    else if(document.getElementById('male').checked && dayWeek == 4 ){
      alert('You are Male.Your Akan name is Yaw');
      //document.getElementById("d").innerHTML = "Your Ghanian day is : " + dayWeek;
    }
  
    else if(document.getElementById('male').checked && dayWeek == 5 ){
      alert('You are Male.Your Akan name is Kofi');
      //document.getElementById("d").innerHTML = "Your Ghanian day is : " + dayWeek;
    }
  
    else if(document.getElementById('male').checked && dayWeek == 6 ){
      alert('You are Male.Your Akan name is Kwame');
      //document.getElementById("d").innerHTML = "Your Ghanian day is : " + dayWeek;
    }
  
    // else if(document.getElementById('male').checked && dayWeek == 6 ){
    //   prompt('Male on Sunday');
    //   document.getElementById("d").innerHTML = "Your Ghanian day is : " + dayWeek;
    // }
  
    else if(document.getElementById('female').checked && dayWeek == 0 ){
      alert('You are Female.Your Akan name is Akosua');
      document.getElementById("d").innerHTML = "Your Ghanian day is : " + dayWeek;
    }
  
    else if(document.getElementById('female').checked && dayWeek == 1 ){
      alert('You are Female.Your Akan name is Adwoa');
      document.getElementById("d").innerHTML = "Your Ghanian day is : " + dayWeek;
    }
  
    else if(document.getElementById('female').checked && dayWeek == 2 ){
      alert('You are Female.Your Akan name is Abenaa');
      document.getElementById("d").innerHTML =  dayWeek;
    }
  
    else if(document.getElementById('female').checked && dayWeek == 3 ){
      alert('You are Female.Your Akan name is Akua');
      document.getElementById("d").innerHTML = "Your Ghanian day is : " + dayWeek;
    }
  
    else if(document.getElementById('female').checked && dayWeek == 4 ){
      alert('You are Female.Your Akan name is Yaa');
      document.getElementById("d").innerHTML = "Your Ghanian day is : " + dayWeek;
    }
  
    else if(document.getElementById('female').checked && dayWeek == 5 ){
      alert('You are Female.Your Akan name is Afua');
      document.getElementById("d").innerHTML = "Your Ghanian day is : " + dayWeek;
    }
  
    else if(document.getElementById('female').checked && dayWeek == 6){
      alert('You are Female.Your Akan name is Ama');
      document.getElementById("d").innerHTML = "Your Ghanian day is : " + dayWeek;
    }
  
  
  }
  
  
  
  
  
  
  
  
  