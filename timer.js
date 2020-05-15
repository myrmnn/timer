class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
       
    }

    start = () => {
        if(this.onStart){
            this.onStart(this.timeRmaining);
        }
        this.tick();
        this.interval = setInterval(this.tick, 50);
    }

    pause = () => {
    
        clearInterval(this.interval)
     }

    tick = () => {
        if(this.timeRmaining <= 0){
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }
        }else{
            const timeRmaining = this.timeRmaining;
            this.timeRmaining = timeRmaining -.05;
            if(this.onTick){
                this.onTick(this.timeRmaining);
            }
        }
      
    }

    get timeRmaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRmaining(time){
        return this.durationInput.value = time.toFixed(2);
    }

    onComplete = () => {
        if(this.onComplete){
            this.onComplete();
        }
    }

   
}