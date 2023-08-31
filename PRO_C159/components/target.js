AFRAME.registerComponent("rings",{
    init: function(){
        for(var i=1; i<=20; i++){
            var id=`ring${i}`
            var X=(Math.random()*3000+(-1000))
            var Y=(Math.random()*2+(-1))
            var Z=(Math.random()*3000+ -1000)
            var position={x:X,y:Y,z:Z}
            this.createRing(id,position)
        }
    },
    createRing: function(id,position){
        var terrainEl=document.querySelector("#terrain")
        var ringEl=document.createElement("a-entity")

        ringEl.setAttribute("id",id)
        ringEl.setAttribute("position",position)
        ringEl.setAttribute("material","color","gold")
        ringEl.setAttribute("geometry",{primitive:"torus",radius:8})
        ringEl.setAttribute("static-body",{shape:"sphere",sphereRadius:2})
        ringEl.setAttribute("game-play",{elementId:`#${id}`})
        
        terrainEl.appendChild(ringEl)
    }
})