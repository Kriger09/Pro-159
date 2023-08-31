AFRAME.registerComponent("game-play",{
    schema:{
        elementId:{type:"string",default:"#ring1"}
    },
    init: function(){
        var dur=240
        var timerEl=document.querySelector("#timer")
        this.startTimer(dur,timerEl)
    },
    update: function(){
        this.isCollided(this.data.elementId)
    },
    startTimer: function (dur, timerEl) {
        var minutes;
        var seconds;
    
        setInterval(()=> {
          if (dur >=0) {
            minutes = parseInt(dur / 60);
            seconds = parseInt(dur % 60);
    
            if (minutes < 10) {
              minutes = "0" + minutes;
            }
            if (seconds < 10) {
              seconds = "0" + seconds;
            }
    
            timerEl.setAttribute("text", {
              value: minutes + ":" + seconds,
            });
    
            dur -= 1;
          } 
          else {
            this.gameOver();        
          }
        },1000)
    },
    isCollided: function(elementId){
        const element=document.querySelector(elementId)
        element.addEventListener("collide",(e)=>{
            if(elementId.includes("#ring")){
                this.updateTargets()
                this.updateScore()
                element.setAttribute("visible",false)
            }
            else if(elementId.includes("#bird")){
                this.gameOver()

            }
        })
    },
    updateTargets: function () {
        var element = document.querySelector("#targets");
        var count = element.getAttribute("text").value;
        var currentTargets = parseInt(count);
        currentTargets -= 1;
        element.setAttribute("text", {
          value: currentTargets,
        });
      },
      updateScore: function () {
        var element = document.querySelector("#score");
        var count = element.getAttribute("text").value;
        var currentScore = parseInt(count);
        currentScore += 50;
        element.setAttribute("text", {
          value: currentScore,
        });
      },
      gameOver: function () {
        var planeEl = document.querySelector("#plane_model");
        var element = document.querySelector("#gameOver");
        element.setAttribute("visible", true);
        planeEl.setAttribute("dynamic-body", {
          mass: 1
        });
      },
})