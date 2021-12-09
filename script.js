const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width = 1500;
canvas.height = 800;

topCanvas = canvas.offsetTop
leftCanvas = canvas.offsetLeft


const enemies = []


function table() {

    c.fillStyle ='#000000'
    c.fillRect(0, 0, 1500, 800);
}


function tower() {
    c.beginPath();
    c.fillStyle = 'white';
    c.arc(750,400, 103, 0,9 * Math.PI);
    c.fill();
    }
    class Enemy {
    constructor (x,y,radius,color,velocity){
            this.x = x 
            this.y = y 
            this.radius = radius
            this.color = color
            this.velocity = velocity}
            draw(){
                c.beginPath()
                c.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
                c.fillStyle = this.color
                c.fill()
            }
            update(){
                this.draw()
                this.x = this.x  + this.velocity.x 
                this.y = this.y  + this.velocity.y 
            }}


function spawnEnemy(){
    


    setInterval(() =>{
        const disTwo = Math.hypot( Enemy.x - 750,Enemy.y - 400)
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height

        
        const angle = Math.atan2(
           (canvas.height - 450) - y,
           (canvas.width - 750) - x
           )
        const velocity ={
            x:Math.cos(angle),
            y:Math.sin(angle)
}

 let z= Math.random() * 5
 
    enemies.push (new Enemy (x,y,z,'#white',velocity),
 )},50)
}


spawnEnemy()

function animate (){
    requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height)
    table()
    tower()
    enemies.forEach((Enemy,index) => {
    Enemy.update()
   
    const disTwo = Math.hypot( Enemy.x - 750,Enemy.y - 400)
    
    if(disTwo<100){
        setTimeout(() =>{
   enemies.splice(index, 1)
        },0)}
})
}


animate ()




