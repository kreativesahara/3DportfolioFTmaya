import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';
import './playground.css';

const Playground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Add objects to the scene here
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x6c63ff });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 2;

        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        function animate(x,y) {
            cube.rotation.x -= y;
            cube.rotation.y -= x;
            // Update objects and camera here
            renderer.render(scene, camera);
            requestAnimationFrame(() => animate(0.03 , y ));
        }
        animate(0.001,0);

        return () => {
            // Cleanup function
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
        };
    }, []);

    return (
        <>
            <Navbar />
            <div className='playground-header'>
                <h3>Playground</h3>
                <p>ThreeJS playground area for experimenting with animations and object interactions.</p>
            </div>
            <canvas ref={canvasRef} id="playground-canvas" />
         {/* <Footer /> */}
        </>
    );
};

export default Playground;
