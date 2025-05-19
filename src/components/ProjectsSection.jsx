'use client';
import { motion, useScroll, useTransform } from "framer-motion";
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Footer from '@/components/Footer';

const projects = [
  {
    title: 'Graphic Works Website',
    description: 'React/TypeScript responsive portfolio site.',
    link: 'https://www.graphicworks.digital/',
    modelPath: '/models/monitor.glb'
  },
  {
    title: 'JDM USA Website',
    description: 'Creative site for a Car import company.',
    link: 'https://jdmusawebsite-4krnpuvmz-mmm1602s-projects.vercel.app/',
    modelPath: '/models/jdmcar.glb'
  },
  {
    title: 'Drone Website',
    description: 'Responsive site for drone projects.',
    link: 'https://mmm1602.github.io/Drone-Website/',
    modelPath: '/models/drone.glb'
  },
  {
    title: 'Engine Simulator App',
    description: 'Responsive site for drone projects.',
    link: 'https://mmm1602.github.io/engine-simulator/',
    modelPath: '/models/engine.glb'
  },
  {
    title: 'Instant Messaging App',
    description: 'A small project for an instant messaging solution made using wpf and c#.',
    link: 'https://github.com/mmm1602/Rooms-ChattingApp',
    modelPath: '/models/iphone.glb'
  },
];

function ProjectModel({ path, scrollProgress }) {
  const gltf = useGLTF(path);
  const groupRef = useRef();

  const box = new THREE.Box3().setFromObject(gltf.scene);
  const size = new THREE.Vector3();
  box.getSize(size);
  const center = new THREE.Vector3();
  box.getCenter(center);

  gltf.scene.position.sub(center);
  const maxDimension = Math.max(size.x, size.y, size.z);
  const scaleFactor = 10 / maxDimension;

  const rotationY = useTransform(scrollProgress, [0.5, 1], [0, Math.PI * 2.4]);
  const rotationX = useTransform(scrollProgress, [0.5, 1], [.5, Math.PI / 9.4]);
  const dynamicScale = useTransform(scrollProgress, [0.5, 1], [scaleFactor * 0.9, scaleFactor * 1.5]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = rotationY.get();
      groupRef.current.rotation.x = rotationX.get();
      groupRef.current.scale.set(dynamicScale.get(), dynamicScale.get(), dynamicScale.get());
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={gltf.scene} />
    </group>
  );
}

export default function ProjectsSection() {
  useEffect(() => {
    projects.forEach(project => {
      new GLTFLoader().load(project.modelPath, () => {});
    });
  }, []);

  return (
    <section className="relative bg-black text-white">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-72 h-72 bg-purple-600 opacity-20 rounded-full top-10 left-10 blur-3xl animate-pulse" />
        <div className="absolute w-96 h-96 bg-blue-500 opacity-20 rounded-full bottom-20 right-32 blur-2xl animate-spin-slow" />
        <div className="absolute w-80 h-80 bg-pink-500 opacity-20 rounded-full top-50% left-1/3 blur-2xl animate-bounce" />
        <div className="absolute w-72 h-72 bg-purple-600 opacity-20 rounded-full top-10 left-10 blur-3xl animate-pulse" />
        <div className="absolute w-96 h-96 bg-blue-500 opacity-20 rounded-full bottom-20 right-32 blur-2xl animate-spin-slow" />
        <div className="absolute w-80 h-80 bg-pink-500 opacity-20 rounded-full top-1/2 left-1/3 blur-2xl animate-bounce" />
        <div className="absolute w-72 h-72 bg-purple-600 opacity-20 rounded-full top-10 left-10 blur-3xl animate-pulse" />
        <div className="absolute w-96 h-96 bg-blue-500 opacity-20 rounded-full bottom-20 right-32 blur-2xl animate-spin-slow" />
        <div className="absolute w-80 h-80 bg-pink-500 opacity-20 rounded-full top-1/2 left-1/3 blur-2xl animate-bounce" />
      </div>

      {projects.map((project, index) => {
        const projectRef = useRef(null);
        const { scrollYProgress } = useScroll({
          target: projectRef,
          offset: ["start start", "end end"]
        });

        return (
          <motion.div
            key={index}
            ref={projectRef}
            className="h-[150vh] z-10 w-full flex flex-col md:flex-row justify-center items-center snap-start relative p-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="sticky top-0 h-screen flex flex-col md:flex-row">
              <div className="relative w-full md:w-1/2 h-screen">
                <Canvas camera={{ position: [0, 0, 15] }} className="w-full h-full">
                  <ambientLight intensity={0.4} />
                  <directionalLight position={[10, 10, 10]} intensity={1.5} castShadow />
                  <pointLight position={[-10, -10, -10]} intensity={1} />
                  <ProjectModel path={project.modelPath} scrollProgress={scrollYProgress} />
                  <OrbitControls enableZoom={false} autoRotate={false} />
                </Canvas>
              </div>

              <motion.div
                className="relative z-10 text-center md:text-left mt-4 md:mt-0 w-full md:w-1/2 h-screen flex flex-col justify-center md:items-start"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-4xl md:text-6xl font-bold text-white mb-4 underline hover:text-blue-400 transition">
                    {project.title}
                  </h3>
                </a>
                <p className="text-xl md:text-2xl text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg inline-block">
                  {project.description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        );
      })}

      <Footer />
    </section>
  );
}
