/**
  This app is model of Watch 
**/
function Watch(make){
  this.make = make;
  var date = new Date();
  this.hour = date.getHours();
  this.minutes =date.getMinutes();
  this.seconds = date.getSeconds();
  
}

Watch.prototype.diplay = function(){
    
  if( this.hour === 0){
      this.hour = 12;
    }
  else if(this.hour>12){
    this.hour = this.hour - 12;
    }
  else{
    this.hour = this.hour;
    }
    alert(this.make+" time is "+ this.hour + ' : '+ this.minutes );
  };

/*
var time = new Watch("Rolex");
time.diplay();*/

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
  
  if( this.hour === 0){
      this.hour = 0;
    }
  else if(this.hour>12){
    this.hour = this.hour;
    }
  else{
    this.hour = this.hour;
    }
    
  alert(this.make+" time is "+ this.hour + ' : '+ this.seconds +" : " +this.minutes );
    
   
};

//Function to trigger the alarm
DigitalWatch.prototype.triger_alarm = function(){
  if(this.alarm == "on"){
    alert("Alarm is ON");
    if(this.time[0] ===this.hour && this.time[1] === this.minutes && this.time[2]==this.seconds){
      alert("Reminder "+ this.alarm_info )
    }
  }else{
    alert("Alarm OFF")
  }
};

// Function to trigger the 
DigitalWatch.prototype.trigger_light = function(){
    if(this.light === "on"){
      alert("Light ON ");
    }
    else{
      alert("Light OFF");
    }
  };



var digitalwatch1 = new DigitalWatch("Swatch","on","off",[7,42,55]);

digitalwatch1.display();
digitalwatch1.triger_alarm();

digitalwatch1.trigger_light();

