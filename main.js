const bananas = document.getElementById('bananas');
const bananaSVG = `
  <svg
  height="60px" width="60px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 501.306 501.306" xml:space="preserve" fill="#000000"
>
  <g id="SVGRepo_bgCarrier" stroke-width="0"/>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
     stroke-width="6.0156719999999995">
    <path style="fill:#F8B64C;"
          d="M1.829,335.437c3.135-8.359,16.718-26.122,25.078-25.078c44.931,2.09,189.127,4.18,251.82-64.784 c0,0,39.706-32.392,52.245-111.804c0,0-6.269-65.829-11.494-89.861c-1.045-5.224,0-10.449,3.135-14.629l0,0 c4.18-6.269,12.539-8.359,19.853-6.269l14.629,3.135c10.449,3.135,16.718,11.494,17.763,21.943l2.09,59.559 c0,0,86.727,37.616,53.29,163.004c0,0-49.11,141.061-246.596,163.004c0,0-95.086,17.763-180.767-66.873 C-1.306,361.559-0.261,342.751,1.829,335.437z"/>
    <g>
      <path style="fill:#FFD15C;"
            d="M329.927,459.78c0,0-82.547,52.245-193.306,2.09c-12.539-5.224-12.539-31.347-12.539-31.347 c34.482,6.269,58.514,2.09,58.514,2.09c198.531-20.898,247.641-161.959,247.641-161.959 c33.437-125.388-53.29-163.004-53.29-163.004s-11.494-12.539-38.661-21.943c-5.225-10.449-11.494-20.898-15.673-29.257 c-1.045-5.224-1.045-9.404-2.09-12.539c-1.045-5.224,0-10.449,3.135-14.629l0,0c4.18-6.269,12.539-8.359,19.853-6.269l13.584,3.135 c7.314,2.09,12.539,7.314,15.673,13.584c0,0,0,1.045,1.045,1.045l19.853,45.976c0,0,94.041,4.18,107.624,132.702 C501.29,219.453,506.514,367.829,329.927,459.78z"/>
      <path style="fill:#FFD15C;"
            d="M372.767,39.731c-2.09-6.269-8.359-11.494-15.673-13.584l-13.584-4.18 c-7.314-2.09-14.629,1.045-19.853,6.269l0,0c-3.135,4.18-4.18,9.404-3.135,14.629c1.045,3.135,1.045,8.359,2.09,12.539 c-2.09-2.09-4.18-5.224-5.225-8.359c-3.135-4.18-3.135-9.404-2.09-14.629l0,0c2.09-7.314,8.359-12.539,15.673-13.584l14.629-1.045 c10.449-1.045,19.853,5.224,24.033,14.629L372.767,39.731z"/>
    </g>
    <path style="fill:#FCC556;"
          d="M376.947,107.649c0,0-11.494-12.539-38.661-21.943c11.494,20.898,20.898,41.796,20.898,41.796 c16.718,78.367-8.359,123.298-8.359,123.298c-34.482,86.727-169.273,136.882-212.114,150.465 c-7.314,2.09-12.539,9.404-13.584,17.763v12.539c34.482,6.269,58.514,2.09,58.514,2.09 c197.486-21.943,246.596-163.004,246.596-163.004C463.673,145.266,376.947,107.649,376.947,107.649z"/>
  </g>
  <g id="SVGRepo_iconCarrier">
    <path style="fill:#F8B64C;"
          d="M1.829,335.437c3.135-8.359,16.718-26.122,25.078-25.078c44.931,2.09,189.127,4.18,251.82-64.784 c0,0,39.706-32.392,52.245-111.804c0,0-6.269-65.829-11.494-89.861c-1.045-5.224,0-10.449,3.135-14.629l0,0 c4.18-6.269,12.539-8.359,19.853-6.269l14.629,3.135c10.449,3.135,16.718,11.494,17.763,21.943l2.09,59.559 c0,0,86.727,37.616,53.29,163.004c0,0-49.11,141.061-246.596,163.004c0,0-95.086,17.763-180.767-66.873 C-1.306,361.559-0.261,342.751,1.829,335.437z"/>
    <g>
      <path style="fill:#FFD15C;"
            d="M329.927,459.78c0,0-82.547,52.245-193.306,2.09c-12.539-5.224-12.539-31.347-12.539-31.347 c34.482,6.269,58.514,2.09,58.514,2.09c198.531-20.898,247.641-161.959,247.641-161.959 c33.437-125.388-53.29-163.004-53.29-163.004s-11.494-12.539-38.661-21.943c-5.225-10.449-11.494-20.898-15.673-29.257 c-1.045-5.224-1.045-9.404-2.09-12.539c-1.045-5.224,0-10.449,3.135-14.629l0,0c4.18-6.269,12.539-8.359,19.853-6.269l13.584,3.135 c7.314,2.09,12.539,7.314,15.673,13.584c0,0,0,1.045,1.045,1.045l19.853,45.976c0,0,94.041,4.18,107.624,132.702 C501.29,219.453,506.514,367.829,329.927,459.78z"/>
      <path style="fill:#FFD15C;"
            d="M372.767,39.731c-2.09-6.269-8.359-11.494-15.673-13.584l-13.584-4.18 c-7.314-2.09-14.629,1.045-19.853,6.269l0,0c-3.135,4.18-4.18,9.404-3.135,14.629c1.045,3.135,1.045,8.359,2.09,12.539 c-2.09-2.09-4.18-5.224-5.225-8.359c-3.135-4.18-3.135-9.404-2.09-14.629l0,0c2.09-7.314,8.359-12.539,15.673-13.584l14.629-1.045 c10.449-1.045,19.853,5.224,24.033,14.629L372.767,39.731z"/>
    </g>
    <path style="fill:#FCC556;"
          d="M376.947,107.649c0,0-11.494-12.539-38.661-21.943c11.494,20.898,20.898,41.796,20.898,41.796 c16.718,78.367-8.359,123.298-8.359,123.298c-34.482,86.727-169.273,136.882-212.114,150.465 c-7.314,2.09-12.539,9.404-13.584,17.763v12.539c34.482,6.269,58.514,2.09,58.514,2.09 c197.486-21.943,246.596-163.004,246.596-163.004C463.673,145.266,376.947,107.649,376.947,107.649z"/>
  </g>
</svg>
  `;

class Banana {
    constructor() {
        this.element = document.createElement('div');
        this.element.classList.add('banana');
        this.element.innerHTML = bananaSVG;
        this.size = window.innerWidth <= 480 ? 40 : (window.innerWidth <= 768 ? 50 : 60);
        this.x = Math.random() * (window.innerWidth - this.size);
        this.y = Math.random() * (window.innerHeight - this.size);

        // Base speed
        const baseSpeed = 0.5;

        // Random speed multiplier between 1 and 1.25
        const speedMultiplier = 1 + (Math.random() * 0.5);

        this.vx = ((Math.random() - 0.5) * baseSpeed) * speedMultiplier;
        this.vy = ((Math.random() - 0.5) * baseSpeed) * speedMultiplier;

        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        bananas.appendChild(this.element);
        this.setupDragging();

        this.originalSpeed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        this.collisionTime = 0;
        this.isColliding = false;

        this.element.style.touchAction = 'none'; // Prevent scrolling while touching bananas
    }

    setupDragging() {
        let isDragging = false;
        let startX, startY;

        const startDrag = (e) => {
            isDragging = true;
            const clientX = e.clientX || e.touches[0].clientX;
            const clientY = e.clientY || e.touches[0].clientY;
            startX = clientX - this.x;
            startY = clientY - this.y;
            this.element.style.transition = 'none';
        };

        const drag = (e) => {
            if (isDragging) {
                const clientX = e.clientX || (e.touches ? e.touches[0].clientX : startX + this.x);
                const clientY = e.clientY || (e.touches ? e.touches[0].clientY : startY + this.y);
                this.x = clientX - startX;
                this.y = clientY - startY;
                this.element.style.left = `${this.x}px`;
                this.element.style.top = `${this.y}px`;
            }
        };

        const endDrag = () => {
            isDragging = false;
            this.element.style.transition = 'all 0.5s ease-out';
        };

        // Mouse events
        this.element.addEventListener('mousedown', startDrag);
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', endDrag);

        // Touch events
        this.element.addEventListener('touchstart', startDrag);
        document.addEventListener('touchmove', drag);
        document.addEventListener('touchend', endDrag);
    }

    static checkCollision(banana1, banana2) {
        const dx = banana1.x - banana2.x;
        const dy = banana1.y - banana2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < (banana1.size + banana2.size) / 2;
    }

    update(otherBananas, deltaTime) {
        if (this.isColliding) {
            this.collisionTime += deltaTime;
            if (this.collisionTime >= 300) { // 300 ms = 0.3 seconds
                this.isColliding = false;
                this.collisionTime = 0;
            } else {
                // Non-linear slowdown
                const progress = this.collisionTime / 300;
                const speedFactor = 2 - Math.pow(progress, 2); // Quadratic easing
                const currentSpeed = this.originalSpeed * speedFactor;
                const angle = Math.atan2(this.vy, this.vx);
                this.vx = Math.cos(angle) * currentSpeed;
                this.vy = Math.sin(angle) * currentSpeed;
            }
        }

        this.x += this.vx;
        this.y += this.vy;

        // Check for collisions with other bananas
        otherBananas.forEach(otherBanana => {
            if (otherBanana !== this && Banana.checkCollision(this, otherBanana)) {
                if (!this.isColliding) {
                    // Double the speed
                    const angle = Math.atan2(this.vy, this.vx);
                    this.vx = Math.cos(angle) * this.originalSpeed * 2;
                    this.vy = Math.sin(angle) * this.originalSpeed * 2;
                    this.isColliding = true;
                    this.collisionTime = 0;
                }
                // Simple collision response (exchange velocities)
                const tempVx = this.vx;
                const tempVy = this.vy;
                this.vx = otherBanana.vx;
                this.vy = otherBanana.vy;
                otherBanana.vx = tempVx;
                otherBanana.vy = tempVy;
            }
        });

        // Bounce off walls
        if (this.x <= 0 || this.x >= window.innerWidth - this.size) {
            this.vx = -this.vx;
            this.targetX = undefined;
        }
        if (this.y <= 0 || this.y >= window.innerHeight - this.size) {
            this.vy = -this.vy;
            this.targetY = undefined;
        }

        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }
}

const minBananas = 5;
const maxBananas = 10;
const numberOfBananas = Math.floor(Math.random() * (maxBananas - minBananas + 1)) + minBananas;

const bananasArray = Array.from({length: numberOfBananas}, () => new Banana());

let lastTime = 0;

function animate(currentTime) {
    if (!lastTime) lastTime = currentTime;
    const deltaTime = currentTime - lastTime;
    lastTime = currentTime;

    bananasArray.forEach(banana => banana.update(bananasArray, deltaTime));
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
    bananasArray.forEach(banana => {
        banana.x = Math.clamp(banana.x, 0, window.innerWidth - 60);
        banana.y = Math.clamp(banana.y, 0, window.innerHeight - 60);
    });
});

// Helper function to clamp a value between a min and max
Math.clamp = (num, min, max) => Math.min(Math.max(num, min), max);
