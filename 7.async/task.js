class AlarmClock{
  constructor(alarmCollection, timerId){
    this.alarmCollection = [];
    this.timerId = null;
  }
  
  addClock(time, callback, id) {
    if (id === undefined) {
      throw new Error('error text');
    } else if (this.alarmCollection.some(item => item.id === id)) {
      return console.error('звонок с существующим id');
    }
    this.alarmCollection.push({id, time, callback});
  }
  
  removeClock(id){
    let res = this.alarmCollection.findIndex(item => item.id === id);
    if (res === -1) {
      return false;
    } else {
      this.alarmCollection.splice(res, 1);
      return true;
    }
}

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString().slice(0,-3);
  }
  
  start() {
    let checkClock = t => {
      if (t.time === this.getCurrentFormattedTime()) {
        t.callback();
      }
    }
    
    if (this.timerId === null) {
      this.timerId = setInterval(() => 
        this.alarmCollection.forEach(t => checkClock(t)), 2000);
    }
  }

  stop() {
    if(this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    this.alarmCollection.forEach(item => console.log(`Будильник ${item.id} сработает в ${item.time}`));
  }
  
  clearAlarms(){
    this.stop();
    this.alarmCollection = [];
  }
}

function testCase() {
  let alarmClock = new AlarmClock();
  alarmClock.addClock(alarmClock.getCurrentFormattedTime(), () => console.log('Текст'), 2);
  alarmClock.addClock(new Date(new Date().getTime() + 60000).toLocaleTimeString().slice(0, -3), () => {
    console.log('Еще текст');
    alarmClock.removeClock(alarmClock.timerId);
  }, 1);
  alarmClock.addClock(new Date(new Date().getTime() + 120000).toLocaleTimeString().slice(0, -3), () => {
    console.log('Текст очередной');
    alarmClock.clearAlarms();
    alarmClock.printAlarms();
  }, 1);

  alarmClock.printAlarms();

  alarmClock.start();
}

testCase();