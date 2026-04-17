import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import Navbar from '../components/navbar/Navbar';

const Playground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
        
        const updateSize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight * 0.6; 
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        updateSize();
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x6c63ff });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 2;

        const handleResize = () => {
            updateSize();
        };
        window.addEventListener('resize', handleResize);

        function animate(x,y) {
            cube.rotation.x -= y;
            cube.rotation.y -= x;
            renderer.render(scene, camera);
            requestAnimationFrame(() => animate(0.03 , y ));
        }
        animate(0.001,0);

        return () => {
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
        };
    }, []);

    return (
        <div className="w-screen overflow-x-hidden bg-bg-primary min-h-screen">
            <Navbar />
            
            {/* Playground Header */}
            <div className="pt-[calc(var(--navbar-height)+var(--space-xl))] text-center pb-xl px-lg">
                <h3 className="text-[clamp(1.75rem,4vw,3rem)] font-extrabold bg-gradient-to-br from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                  Playground
                </h3>
                <p className="text-text-secondary max-w-[600px] mx-auto mt-md text-base leading-relaxed">
                  ThreeJS playground area for experimenting with animations and object interactions.
                </p>
            </div>
            
            {/* Full-width 100vw Canvas Area */}
            <canvas 
              ref={canvasRef} 
              className="block w-full h-[60vh] m-0 border-0 rounded-none cursor-crosshair bg-bg-secondary/20 shadow-inner"
            />
        </div>
    );
};

export default Playground;
