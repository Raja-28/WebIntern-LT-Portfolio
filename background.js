class Background {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.spheres = [];
        this.init();
    }

    init() {
        // Setup renderer
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('background-canvas').appendChild(this.renderer.domElement);

        // Setup camera
        this.camera.position.z = 10;

        // Add lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);

        const pointLight1 = new THREE.PointLight(0x00ffff, 1);
        pointLight1.position.set(10, 10, 10);
        this.scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0xff00ff, 0.5);
        pointLight2.position.set(-10, -10, -10);
        this.scene.add(pointLight2);

        // Create spheres
        for (let i = 0; i < 7; i++) {
            const geometry = new THREE.SphereGeometry(0.3, 32, 32);
            const material = new THREE.MeshStandardMaterial({
                color: new THREE.Color(`hsl(${i * 40}, 100%, 75%)`),
                transparent: true,
                opacity: 0.6,
                metalness: 0.5,
                roughness: 0.2
            });
            const sphere = new THREE.Mesh(geometry, material);
            sphere.position.x = i - 3;
            this.spheres.push(sphere);
            this.scene.add(sphere);
        }

        // Handle window resize
        window.addEventListener('resize', () => this.onWindowResize(), false);

        // Start animation
        this.animate();
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        const time = Date.now() * 0.001;

        this.spheres.forEach((sphere, i) => {
            const offset = i * Math.PI * 0.5;
            
            // Complex movement pattern
            sphere.position.x = Math.sin(time * 0.5 + offset) * (2 + Math.sin(time * 0.2) * 0.5);
            sphere.position.y = Math.cos(time * 0.4 + offset) * (2 + Math.cos(time * 0.3) * 0.5);
            sphere.position.z = Math.sin(time * 0.3 + offset) * 0.5;
            
            // Rotation
            sphere.rotation.x += 0.01 + Math.sin(time * 0.1) * 0.002;
            sphere.rotation.y += 0.01 + Math.cos(time * 0.1) * 0.002;
            
            // Scale animation
            const scale = 1 + Math.sin(time * 2 + offset) * 0.1;
            sphere.scale.set(scale, scale, scale);
        });

        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize background
new Background();