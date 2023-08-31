AFRAME.registerComponent("obstacles",{
    init: function(){
        for(var i=1; i<=20; i++){
            var id=`bird${i}`
            var X=(Math.random()*3000+(-1000))
            var Y=(Math.random()*2+(-1))
            var Z=(Math.random()*3000+ -1000)
            var position={x:X,y:Y,z:Z}
            this.createBird(id,position)
        }
    },
    createBird: function(id,position){
        var terrainEl=document.querySelector("#terrain")
        var birdEl=document.createElement("a-entity")

        birdEl.setAttribute("id",id)
        birdEl.setAttribute("position",position)
        birdEl.setAttribute("scale",{x:500,y:500,z:500})
        birdEl.setAttribute("gltf-model","./assets/models/flying_bird/scene.gltf")
        birdEl.setAttribute("animation-mixer",{})
        birdEl.setAttribute("static-body",{shape:"sphere",sphereRadius:5})
        birdEl.setAttribute("game-play",{elementId:`#${id}`})
        
        terrainEl.appendChild(birdEl)
    }
})