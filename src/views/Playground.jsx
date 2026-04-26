import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Reflector } from 'three/examples/jsm/objects/Reflector';
import Navbar from '../components/navbar/Navbar';

/* ─────────────────────────────────────────────────────────────
   Helper: build the garage environment (walls, floor, ceiling,
   lights, props) — all procedural Three.js geometry.
   ───────────────────────────────────────────────────────────── */

function buildGarage(scene) {
  const assets = []; // keep refs for cleanup

  // ── Dimensions ──────────────────────────────────────────────
  const W = 18;  // width  (x)
  const D = 22;  // depth  (z)
  const H = 7;   // height (y)
  const floorY = -0.5;

  // ── Materials ───────────────────────────────────────────────
  const concreteMat = new THREE.MeshStandardMaterial({
    color: 0x1a1a24,
    roughness: 0.92,
    metalness: 0.05,
  });

  const wallMat = new THREE.MeshStandardMaterial({
    color: 0x14141e,
    roughness: 0.95,
    metalness: 0.02,
  });

  const ceilingMat = new THREE.MeshStandardMaterial({
    color: 0x0e0e16,
    roughness: 1,
    metalness: 0,
    side: THREE.BackSide,
  });

  const accentMat = new THREE.MeshStandardMaterial({
    color: 0x6c63ff,
    emissive: 0x6c63ff,
    emissiveIntensity: 0.8,
    roughness: 0.4,
    metalness: 0.6,
  });

  const warmAccentMat = new THREE.MeshStandardMaterial({
    color: 0xff6b35,
    emissive: 0xff6b35,
    emissiveIntensity: 0.6,
    roughness: 0.4,
    metalness: 0.6,
  });

  // ── Floor (reflective) ─────────────────────────────────────
  const floorGeo = new THREE.PlaneGeometry(W, D);
  const reflector = new Reflector(floorGeo, {
    clipBias: 0.003,
    textureWidth: 512,
    textureHeight: 512,
    color: 0x111118,
  });
  reflector.rotation.x = -Math.PI / 2;
  reflector.position.y = floorY;
  scene.add(reflector);
  assets.push(reflector);

  // Slightly-above overlay for epoxy-sheen look
  const overlayGeo = new THREE.PlaneGeometry(W, D);
  const overlayMat = new THREE.MeshStandardMaterial({
    color: 0x0f0f18,
    roughness: 0.35,
    metalness: 0.15,
    transparent: true,
    opacity: 0.55,
  });
  const overlay = new THREE.Mesh(overlayGeo, overlayMat);
  overlay.rotation.x = -Math.PI / 2;
  overlay.position.y = floorY + 0.005;
  scene.add(overlay);
  assets.push(overlay);

  // ── Floor grid lines (epoxy markings) ──────────────────────
  const gridLineMat = new THREE.MeshStandardMaterial({
    color: 0x6c63ff,
    emissive: 0x6c63ff,
    emissiveIntensity: 0.25,
    transparent: true,
    opacity: 0.12,
  });
  // Two parking-bay side lines
  for (const xPos of [-2.8, 2.8]) {
    const lineGeo = new THREE.PlaneGeometry(0.08, D * 0.6);
    const line = new THREE.Mesh(lineGeo, gridLineMat);
    line.rotation.x = -Math.PI / 2;
    line.position.set(xPos, floorY + 0.01, -1);
    scene.add(line);
    assets.push(line);
  }

  // ── Back Wall ──────────────────────────────────────────────
  const backWallGeo = new THREE.PlaneGeometry(W, H);
  const backWall = new THREE.Mesh(backWallGeo, wallMat.clone());
  backWall.position.set(0, floorY + H / 2, -D / 2);
  scene.add(backWall);
  assets.push(backWall);

  // Accent stripe on back wall
  const stripeGeo = new THREE.PlaneGeometry(W, 0.06);
  const stripe = new THREE.Mesh(stripeGeo, accentMat.clone());
  stripe.position.set(0, floorY + 1.2, -D / 2 + 0.01);
  scene.add(stripe);
  assets.push(stripe);

  // Secondary warm stripe
  const stripe2 = new THREE.Mesh(stripeGeo.clone(), warmAccentMat.clone());
  stripe2.position.set(0, floorY + 1.3, -D / 2 + 0.01);
  scene.add(stripe2);
  assets.push(stripe2);

  // ── Side Walls ─────────────────────────────────────────────
  const sideWallGeo = new THREE.PlaneGeometry(D, H);

  const leftWall = new THREE.Mesh(sideWallGeo, wallMat.clone());
  leftWall.rotation.y = Math.PI / 2;
  leftWall.position.set(-W / 2, floorY + H / 2, 0);
  scene.add(leftWall);
  assets.push(leftWall);

  const rightWall = new THREE.Mesh(sideWallGeo, wallMat.clone());
  rightWall.rotation.y = -Math.PI / 2;
  rightWall.position.set(W / 2, floorY + H / 2, 0);
  scene.add(rightWall);
  assets.push(rightWall);

  // Side wall accent strips (vertical neon)
  for (const side of [-1, 1]) {
    const neonGeo = new THREE.PlaneGeometry(0.04, H * 0.8);
    const neon = new THREE.Mesh(neonGeo, accentMat.clone());
    neon.rotation.y = side === -1 ? Math.PI / 2 : -Math.PI / 2;
    neon.position.set(side * (W / 2 - 0.01), floorY + H * 0.45, -3);
    scene.add(neon);
    assets.push(neon);
  }

  // ── Ceiling ────────────────────────────────────────────────
  const ceilingGeo = new THREE.PlaneGeometry(W, D);
  const ceiling = new THREE.Mesh(ceilingGeo, ceilingMat);
  ceiling.rotation.x = Math.PI / 2;
  ceiling.position.y = floorY + H;
  scene.add(ceiling);
  assets.push(ceiling);

  // ── Overhead Fluorescent Tubes ─────────────────────────────
  const tubeGeo = new THREE.CylinderGeometry(0.04, 0.04, 6, 8);
  const tubeMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xddeeff,
    emissiveIntensity: 1.5,
    roughness: 0.2,
    metalness: 0.1,
  });

  const tubePositions = [
    { x: -3, z: -4 },
    { x:  3, z: -4 },
    { x: -3, z:  3 },
    { x:  3, z:  3 },
  ];

  tubePositions.forEach(({ x, z }) => {
    const tube = new THREE.Mesh(tubeGeo, tubeMat);
    tube.rotation.z = Math.PI / 2;
    tube.position.set(x, floorY + H - 0.15, z);
    scene.add(tube);
    assets.push(tube);

    // Housing bracket
    const bracketGeo = new THREE.BoxGeometry(6.4, 0.08, 0.3);
    const bracketMat = new THREE.MeshStandardMaterial({ color: 0x222233, roughness: 0.8 });
    const bracket = new THREE.Mesh(bracketGeo, bracketMat);
    bracket.position.set(x, floorY + H - 0.06, z);
    scene.add(bracket);
    assets.push(bracket);
  });

  // ── Neon Under-glow Strips (floor edges) ───────────────────
  const neonStripGeo = new THREE.BoxGeometry(W * 0.9, 0.02, 0.06);
  const neonStripMat = new THREE.MeshStandardMaterial({
    color: 0x00d4ff,
    emissive: 0x00d4ff,
    emissiveIntensity: 1.2,
    transparent: true,
    opacity: 0.7,
  });

  const neonBack = new THREE.Mesh(neonStripGeo, neonStripMat);
  neonBack.position.set(0, floorY + 0.02, -D / 2 + 0.1);
  scene.add(neonBack);
  assets.push(neonBack);

  // ── Tool Rack / Pegboard Silhouettes (back wall) ───────────
  const pegGeo = new THREE.PlaneGeometry(5, 3);
  const pegMat = new THREE.MeshStandardMaterial({
    color: 0x1e1e30,
    roughness: 0.85,
    metalness: 0.1,
  });

  // Left pegboard
  const pegL = new THREE.Mesh(pegGeo, pegMat);
  pegL.position.set(-5, floorY + 3.5, -D / 2 + 0.02);
  scene.add(pegL);
  assets.push(pegL);

  // Right pegboard
  const pegR = new THREE.Mesh(pegGeo, pegMat);
  pegR.position.set(5, floorY + 3.5, -D / 2 + 0.02);
  scene.add(pegR);
  assets.push(pegR);

  // Pegboard tool silhouettes (simple shapes)
  const toolMat = new THREE.MeshStandardMaterial({
    color: 0x2a2a42,
    roughness: 0.6,
    metalness: 0.3,
  });

  // Wrench shapes on left board
  [-5.8, -5, -4.2].forEach((x, i) => {
    const height = 1.0 + i * 0.3;
    const toolGeo = new THREE.BoxGeometry(0.12, height, 0.04);
    const tool = new THREE.Mesh(toolGeo, toolMat);
    tool.position.set(x, floorY + 3 + i * 0.15, -D / 2 + 0.04);
    scene.add(tool);
    assets.push(tool);

    // Wrench head
    const headGeo = new THREE.BoxGeometry(0.3, 0.15, 0.04);
    const head = new THREE.Mesh(headGeo, toolMat);
    head.position.set(x, floorY + 3 + height / 2 + i * 0.15, -D / 2 + 0.04);
    scene.add(head);
    assets.push(head);
  });

  // Circular shapes on right board (gauges / wheels)
  [4.3, 5.1, 5.8].forEach((x) => {
    const ringGeo = new THREE.RingGeometry(0.28, 0.35, 16);
    const ring = new THREE.Mesh(ringGeo, toolMat);
    ring.position.set(x, floorY + 3.8, -D / 2 + 0.04);
    scene.add(ring);
    assets.push(ring);
  });

  // ── Workbench (left side) ──────────────────────────────────
  const benchTopGeo = new THREE.BoxGeometry(4, 0.12, 1.5);
  const benchMat = new THREE.MeshStandardMaterial({ color: 0x2a2a3a, roughness: 0.7, metalness: 0.15 });
  const benchTop = new THREE.Mesh(benchTopGeo, benchMat);
  benchTop.position.set(-6.5, floorY + 1.1, -D / 2 + 1.2);
  scene.add(benchTop);
  assets.push(benchTop);

  // Legs
  [[-8.3, -D / 2 + 0.5], [-8.3, -D / 2 + 1.9], [-4.7, -D / 2 + 0.5], [-4.7, -D / 2 + 1.9]].forEach(([x, z]) => {
    const legGeo = new THREE.BoxGeometry(0.1, 1.6, 0.1);
    const legMat = new THREE.MeshStandardMaterial({ color: 0x333344, roughness: 0.6, metalness: 0.3 });
    const leg = new THREE.Mesh(legGeo, legMat);
    leg.position.set(x, floorY + 0.8, z);
    scene.add(leg);
    assets.push(leg);
  });

  // ── Barrel / Oil Drum (right rear) ─────────────────────────
  const barrelGeo = new THREE.CylinderGeometry(0.45, 0.45, 1.3, 16);
  const barrelMat = new THREE.MeshStandardMaterial({ color: 0x1a3a1a, roughness: 0.7, metalness: 0.2 });
  const barrel = new THREE.Mesh(barrelGeo, barrelMat);
  barrel.position.set(7, floorY + 0.65, -D / 2 + 1.5);
  scene.add(barrel);
  assets.push(barrel);

  // Barrel rim highlight
  const rimGeo = new THREE.TorusGeometry(0.45, 0.03, 8, 24);
  const rimMat = new THREE.MeshStandardMaterial({ color: 0x444444, roughness: 0.3, metalness: 0.6 });
  const rimTop = new THREE.Mesh(rimGeo, rimMat);
  rimTop.rotation.x = Math.PI / 2;
  rimTop.position.set(7, floorY + 1.3, -D / 2 + 1.5);
  scene.add(rimTop);
  assets.push(rimTop);

  // Second barrel
  const barrel2 = barrel.clone();
  barrel2.position.set(7.9, floorY + 0.65, -D / 2 + 2.2);
  barrel2.material = barrelMat.clone();
  barrel2.material.color.setHex(0x2a1a1a);
  scene.add(barrel2);
  assets.push(barrel2);

  // ── Tire Stack (right side) ────────────────────────────────
  const tireMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.95, metalness: 0.02 });
  [0, 0.5, 1.0].forEach((yOff) => {
    const tireGeo = new THREE.TorusGeometry(0.38, 0.18, 12, 24);
    const tire = new THREE.Mesh(tireGeo, tireMat);
    tire.rotation.x = Math.PI / 2;
    tire.position.set(7.5, floorY + 0.2 + yOff, 3);
    scene.add(tire);
    assets.push(tire);
  });

  return assets;
}

/* ─────────────────────────────────────────────────────────────
   Helper: dramatic garage lighting rig
   ───────────────────────────────────────────────────────────── */
function buildLighting(scene) {
  const lights = [];

  // Ambient — very dim base
  const ambient = new THREE.AmbientLight(0x1a1a2e, 0.4);
  scene.add(ambient);
  lights.push(ambient);

  // Hemisphere — cool sky / warm ground
  const hemi = new THREE.HemisphereLight(0x3344aa, 0x221100, 0.35);
  scene.add(hemi);
  lights.push(hemi);

  // Key light — warm overhead, slightly forward
  const keyLight = new THREE.SpotLight(0xffeedd, 60, 30, Math.PI / 5, 0.6, 1.5);
  keyLight.position.set(0, 6, 2);
  keyLight.target.position.set(0, 0, 0);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(1024, 1024);
  scene.add(keyLight);
  scene.add(keyLight.target);
  lights.push(keyLight);

  // Fill light — cool, from the left
  const fillLight = new THREE.SpotLight(0x6688ff, 25, 25, Math.PI / 4, 0.7, 1.8);
  fillLight.position.set(-7, 4, 3);
  fillLight.target.position.set(0, 0, 0);
  scene.add(fillLight);
  scene.add(fillLight.target);
  lights.push(fillLight);

  // Rim / back light — accent purple from behind
  const rimLight = new THREE.SpotLight(0x6c63ff, 35, 25, Math.PI / 5, 0.5, 1.5);
  rimLight.position.set(3, 5, -8);
  rimLight.target.position.set(0, 0.5, 0);
  scene.add(rimLight);
  scene.add(rimLight.target);
  lights.push(rimLight);

  // Accent point light — warm orange, low right (under-car glow feel)
  const accentPt = new THREE.PointLight(0xff6b35, 8, 12, 2);
  accentPt.position.set(5, 0.2, 1);
  scene.add(accentPt);
  lights.push(accentPt);

  // Cyan accent from left low
  const cyanPt = new THREE.PointLight(0x00d4ff, 6, 10, 2);
  cyanPt.position.set(-5, 0.3, -2);
  scene.add(cyanPt);
  lights.push(cyanPt);

  // Overhead tube lights (point light approximation)
  [
    { x: -3, z: -4 },
    { x:  3, z: -4 },
    { x: -3, z:  3 },
    { x:  3, z:  3 },
  ].forEach(({ x, z }) => {
    const tubePt = new THREE.PointLight(0xddeeff, 15, 14, 2);
    tubePt.position.set(x, 5.8, z);
    scene.add(tubePt);
    lights.push(tubePt);
  });

  return lights;
}

/* ═══════════════════════════════════════════════════════════════
   PLAYGROUND COMPONENT
   ═══════════════════════════════════════════════════════════════ */
const Playground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // ── Core Setup ────────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a12, 0.022);

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      200
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: false,
    });
    renderer.setClearColor(0x0a0a0f, 1);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    // ── Controls ──────────────────────────────────────────────
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.enablePan = true;
    controls.minDistance = 3;
    controls.maxDistance = 14;
    controls.maxPolarAngle = Math.PI / 2 - 0.05;
    controls.minPolarAngle = 0.2;
    controls.target.set(0, 0.4, 0);

    // Pan limits
    controls.addEventListener('change', () => {
      const limit = 4;
      controls.target.x = THREE.MathUtils.clamp(controls.target.x, -limit, limit);
      controls.target.z = THREE.MathUtils.clamp(controls.target.z, -limit, limit);
      controls.target.y = THREE.MathUtils.clamp(controls.target.y, -0.3, 2.5);
    });

    // ── Responsive Sizing ─────────────────────────────────────
    const updateSize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      camera.aspect = w / h;
      camera.fov = w < 768 ? 60 : 50;
      camera.updateProjectionMatrix();
      controls.minDistance = w < 768 ? 5 : 3;
      controls.maxDistance = w < 768 ? 16 : 14;
    };
    updateSize();

    // ── Build Environment ─────────────────────────────────────
    const garageAssets = buildGarage(scene);
    const lightsArr = buildLighting(scene);

    // ── Load Porsche 911 ──────────────────────────────────────
    let model;
    const loader = new GLTFLoader();
    loader.load(
      '/models/porche_911.glb',
      (gltf) => {
        model = gltf.scene;

        // Normalize scale & center
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const isMobile = window.innerWidth < 768;
        const targetSize = isMobile ? 5.5 : 7.5;
        const scale = targetSize / maxDim;
        model.scale.set(scale, scale, scale);

        // Sit the car on the floor
        const scaledBox = new THREE.Box3().setFromObject(model);
        const center = scaledBox.getCenter(new THREE.Vector3());
        model.position.x = -center.x;
        model.position.y = -scaledBox.min.y - 0.5; // floor at -0.5
        model.position.z = -center.z;
        model.rotation.set(0, 0, 0);

        // Enable shadows on car parts
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(model);
      },
      undefined,
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    // ── Camera Start Position ─────────────────────────────────
    camera.position.set(6, 2.8, 7);
    controls.update();

    // ── Animation Loop ────────────────────────────────────────
    let frameId;
    const clock = new THREE.Clock();

    function animate() {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Subtle light pulsing for atmosphere
      if (lightsArr.length > 0) {
        const accentIdx = lightsArr.findIndex((l) => l.isPointLight && l.color.getHex() === 0xff6b35);
        if (accentIdx !== -1) {
          lightsArr[accentIdx].intensity = 8 + Math.sin(t * 1.5) * 2;
        }
        const cyanIdx = lightsArr.findIndex((l) => l.isPointLight && l.color.getHex() === 0x00d4ff);
        if (cyanIdx !== -1) {
          lightsArr[cyanIdx].intensity = 6 + Math.sin(t * 1.2 + 1) * 1.5;
        }
      }

      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    // ── Resize Listener ───────────────────────────────────────
    const handleResize = () => updateSize();
    window.addEventListener('resize', handleResize);

    // ── Cleanup ───────────────────────────────────────────────
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      controls.dispose();
      renderer.dispose();

      garageAssets.forEach((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
          else obj.material.dispose();
        }
      });
    };
  }, []);

  return (
    <div className="w-screen overflow-x-hidden bg-bg-primary min-h-screen relative">
      <Navbar />

      {/* Header Overlay */}
      <div className="absolute top-0 left-0 w-full pt-[calc(var(--navbar-height)+var(--space-lg))] text-center z-10 pointer-events-none select-none">
        <h3 className="text-[clamp(1.75rem,4vw,3.5rem)] font-extrabold bg-gradient-to-br from-white via-accent-primary to-accent-secondary bg-clip-text text-transparent drop-shadow-2xl">
          The Garage
        </h3>
        <p className="text-text-secondary max-w-[500px] mx-auto mt-sm text-sm md:text-base leading-relaxed opacity-80 backdrop-blur-sm bg-bg-primary/10 rounded-full px-md py-xs">
          Interactive 3D Engineering Space — Porsche 911
        </p>
      </div>

      {/* HUD Controls Hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none select-none">
        <div className="flex items-center gap-4 text-xs text-text-secondary/60 bg-bg-primary/40 backdrop-blur-md rounded-full px-5 py-2 border border-border-color/30">
          <span>🖱️ Orbit</span>
          <span className="w-px h-3 bg-border-color/40" />
          <span>⚙️ Scroll to Zoom</span>
          <span className="w-px h-3 bg-border-color/40" />
          <span>⇧ + Drag to Pan</span>
        </div>
      </div>

      {/* Full-screen Canvas */}
      <canvas
        ref={canvasRef}
        className="block w-full h-screen m-0 border-0 rounded-none cursor-crosshair"
      />
    </div>
  );
};

export default Playground;
