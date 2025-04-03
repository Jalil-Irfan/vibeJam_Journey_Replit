import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface SatelliteModelProps {
  position?: {
    x: number;
    y: number;
    z: number;
  };
  rotation?: {
    x: number;
    y: number;
    z: number;
  };
  scale?: number;
  className?: string;
}

export default function SatelliteModel({ 
  position = { x: 0, y: 0, z: 0 },
  rotation = { x: 0, y: 0, z: 0 },
  scale = 1,
  className = ""
}: SatelliteModelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create scene
    const scene = new THREE.Scene();
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(200, 200);
    containerRef.current.appendChild(renderer.domElement);
    
    // Create basic satellite geometry
    const bodyGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 16);
    const bodyMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x888888,
      shininess: 100
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    
    // Create solar panels
    const panelGeometry = new THREE.BoxGeometry(3, 1, 0.1);
    const panelMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x3355FF,
      shininess: 100
    });
    const leftPanel = new THREE.Mesh(panelGeometry, panelMaterial);
    leftPanel.position.x = -1.75;
    
    const rightPanel = new THREE.Mesh(panelGeometry, panelMaterial);
    rightPanel.position.x = 1.75;
    
    // Create antenna
    const antennaGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1.5, 8);
    const antennaMaterial = new THREE.MeshPhongMaterial({
      color: 0xCCCCCC
    });
    const antenna = new THREE.Mesh(antennaGeometry, antennaMaterial);
    antenna.position.y = 1.5;
    
    // Add dish
    const dishGeometry = new THREE.SphereGeometry(0.3, 16, 16, 0, Math.PI);
    const dishMaterial = new THREE.MeshPhongMaterial({
      color: 0xFFFFFF,
      side: THREE.DoubleSide
    });
    const dish = new THREE.Mesh(dishGeometry, dishMaterial);
    dish.rotation.x = Math.PI / 2;
    dish.position.y = 2;
    
    // Group everything
    const satellite = new THREE.Group();
    satellite.add(body);
    satellite.add(leftPanel);
    satellite.add(rightPanel);
    satellite.add(antenna);
    satellite.add(dish);
    
    // Set position, rotation, scale
    satellite.position.set(position.x, position.y, position.z);
    satellite.rotation.set(rotation.x, rotation.y, rotation.z);
    satellite.scale.set(scale, scale, scale);
    
    scene.add(satellite);
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      satellite.rotation.y += 0.01;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Clean up
    return () => {
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [position, rotation, scale]);
  
  return (
    <div ref={containerRef} className={className}></div>
  );
}
