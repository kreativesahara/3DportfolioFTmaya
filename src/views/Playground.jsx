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
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Add objects to the scene here
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00fffAA });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 2;
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
            renderer.dispose();
        };
    }, []);

    return (
        <>
            <Navbar />
            <h3>Playground</h3>
            <p className='text-center'>ThreeJS playground area for experimenting with animations and object interactions.</p>
            <canvas ref={canvasRef} className="w-full h-screen" />
         {/* <Footer /> */}
        </>
    );
};

export default Playground;
