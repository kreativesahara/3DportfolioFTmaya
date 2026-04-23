import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Navbar from '../components/navbar/Navbar';

const Playground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
        
        const updateSize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight * 1; 
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        updateSize();
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.enablePan = true; 
        controls.minDistance = 4; // Prevent zooming inside the model
        controls.maxDistance = 8.5; // Prevent the model from becoming too small
        controls.maxPolarAngle = Math.PI / 2;

        // Custom Pan Limits
        controls.addEventListener('change', () => {
            const panLimit = 2.5; 
            controls.target.x = Math.max(-panLimit, Math.min(controls.target.x, panLimit));
            controls.target.z = Math.max(-panLimit, Math.min(controls.target.z, panLimit));
            controls.target.y = Math.max(-0.5, Math.min(controls.target.y, 0.5));
        });

        // Grid Helper
        const gridHelper = new THREE.GridHelper(10, 20, 0x6c63ff, 0x222222);
        gridHelper.position.y = -0.5;
        gridHelper.material.opacity = 0;
        gridHelper.material.transparent = true;
        scene.add(gridHelper);

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
        directionalLight.position.set(5, 10, 7.5);
        scene.add(directionalLight);

        const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
        scene.add(hemisphereLight);

        let model;
        const loader = new GLTFLoader();
        loader.load('/models/porche_911.glb', (gltf) => {
            model = gltf.scene;
            
            // Normalize scale and center to origin
            const box = new THREE.Box3().setFromObject(model);
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 6.5 / maxDim; 
            model.scale.set(scale, scale, scale);
            
            // Get bounding box of the scaled model and offset it to sit on (0,0,0)
            const scaledBox = new THREE.Box3().setFromObject(model);
            const center = scaledBox.getCenter(new THREE.Vector3());
            
            model.position.x = -center.x;
            model.position.y = -scaledBox.min.y - 0.5; // Sit on the floor at -0.5
            model.position.z = -center.z;

            // Reset rotation
            model.rotation.set(0, 0, 0);
            
            scene.add(model);
            controls.target.set(0, 0, 0); // Focus slightly above the floor level
        }, undefined, (error) => {
            console.error('Error loading model:', error);
        });

        camera.position.set(4, 2, 4);
        controls.update();

        const handleResize = () => {
            updateSize();
        };
        window.addEventListener('resize', handleResize);

        function animate() {
            controls.update();
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            controls.dispose();
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
              className="block w-full h-screen m-0 border-0 rounded-none cursor-crosshair bg-bg-secondary/20 shadow-inner"
            />
        </div>
    );
};

export default Playground;
