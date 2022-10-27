
function onLoad(){
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = "#CCCCCC";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function animation() {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
        constructor() {
            //this.x = Math.random() * canvas.width/2 + canvas.width/4;
            //this.y = Math.random() * canvas.height/2 + canvas.height/4;
            this.x = canvas.width / 2;
            this.y = canvas.height / 2;
            this.size = 8;
            this.vx = (Math.random() * 10 + 5) * (Math.random() * 2 - 1);
            this.vy = (Math.random() * 10 + 5) * (Math.random() * 2 - 1);
            this.popable = false;
            this.time = 0.5;
            this.opacity = 1;
        }
        draw(context) {
            context.fillStyle = `rgba(0,0,0,${this.opacity})`;
            context.fillRect(this.x, this.y, this.size, this.size)
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if(this.opacity > 0) {
                this.opacity -=  0.008;
            }

        }
    }

    class Effect {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.particlesArray = [];
        }
        init() {
            this.particlesArray.push(new Particle());
        }
        draw(context) {
            this.particlesArray.forEach(e => e.draw(context))
        }
        update() {
            this.particlesArray.forEach(e => e.update())

        }
    }


    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        effect.draw(ctx);
        effect.update();
        //console.log(effect.particlesArray.length)
        window.requestAnimationFrame(animate);
    }

    const effect = new Effect(canvas.width, canvas.height);
    for (let index = 0; index < 1000; index++) {
        effect.init();
    }

    animate();
}

function ligma() {
    new Audio('ligmaballs.mp3').play();
    setTimeout(function () { animation(); }, 1500);

}
