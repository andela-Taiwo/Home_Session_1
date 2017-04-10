/**
  This app is model of Watch 
**/
function Watch(make){
  this.make = make;
  var date = new Date();
  this.hour = date.getHours() % 12 || 12;
  this.minutes =date.getMinutes();
  this.seconds = date.getSeconds();
  
}

Watch.prototype.display = function(){

    alert(this.make+" time is "+ this.hour + ' : '+ this.minutes );
  };


var watch1 = new Watch("Rolex");
watch1.display();


/*
 create a subclass DigitalWatch that inherit for Watch
*/

function DigitalWatch(make, light, alarm,alarm_info,alarm_time){
  Watch.call(this,make);
  this.alarm = alarm;
  this.light = light;
  this.time = alarm_time;
  this.alarm_info = alarm_info;
  
  
  
}


DigitalWatch.prototype = Object.create(Watch.prototype);

DigitalWatch.prototype.constructor = DigitalWatch;

//Overriding the parent class display function

DigitalWatch.prototype.display = function(){
  
   var ampm = this.hour >= 12 ? 'pm' : 'am';
  this.hour = this.hour % 12;
  this.hour = this.hour ? this.hour : 12; // the hour '0' should be '12'
  this.minutes = this.minutes < 10 ? '0'+this.minutes : this.minutes;
  this.seconds = this.seconds < 10 ? '0'+this.seconds : this.seconds;
 
 
    
  alert(this.make+" time is "+ this.hour  +" : " +this.minutes+ ' : '+ this.seconds +" "+ ampm );
    
   
};

//Function to trigger the alarm
DigitalWatch.prototype.triger_alarm = function(){
  if(this.alarm == "on"){
    alert("DigitalWatch Alarm is ON");
    if(this.time[0] ===this.hour && this.time[1] === this.minutes && this.time[2]==this.seconds){
      alert("Reminder "+ this.alarm_info )
    }
  }else{
    alert("DigitalWatch Alarm OFF")
  }
};

// Function to trigger the 
DigitalWatch.prototype.trigger_light = function(){
    if(this.light === "on"){
      alert(" DigitalWatch Light ON ");
    }
    else{
      alert("DigitalWatch Light OFF");
    }
  };

// function to set the time
DigitalWatch.prototype.set_time = function(hour,minutes,seconds){
  this.hour = hour;
  this.minutes = minutes;
  this.seconds =seconds;
  
}
// create an object for the DigitalWatch
var digitalwatch1 = new DigitalWatch("Swatch","on","off",[7,42,55]);
digitalwatch1.set_time(13,45,15);
digitalwatch1.display();
digitalwatch1.triger_alarm();

digitalwatch1.trigger_light();



/*
 create a subclass AnalogWatch that inherit for Watch
*/
function AnalogWatch(make){
  Watch.call(this,make);
  
}

AnalogWatch.prototype = Object.create(Watch.prototype);
AnalogWatch.prototype.constructor = AnalogWatch;

// create a new function for the AnalogWatch
AnalogWatch.prototype.wind = function(hour,minutes){
  this.hour = hour;
  this.minutes = minutes;
  
};

var analogwatch1= new AnalogWatch("Survivor");

analogwatch1.wind(12,45); // use wind function to update the time
analogwatch1.display();    // display the updated time

// I need to improve on how to display the analog hands

