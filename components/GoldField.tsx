"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GoldField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: "low-power",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.z = 8;

    const COUNT = 900;
    const positions = new Float32Array(COUNT * 3);
    const speeds = new Float32Array(COUNT);
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      speeds[i] = 0.0015 + Math.random() * 0.004;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const canvas2d = document.createElement("canvas");
    canvas2d.width = canvas2d.height = 64;
    const ctx = canvas2d.getContext("2d")!;
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, "rgba(245,221,156,1)");
    grad.addColorStop(0.35, "rgba(212,175,55,0.85)");
    grad.addColorStop(1, "rgba(212,175,55,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(canvas2d);

    const mat = new THREE.PointsMaterial({
      size: 0.14,
      map: tex,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      opacity: 0.75,
    });

    const points = new THREE.Points(geo, mat);
    scene.add(points);

    let mx = 0;
    let my = 0;
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse, { passive: true });

    const resize = () => {
      const { clientWidth: w, clientHeight: h } =
        canvas.parentElement || document.body;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    let running = true;
    const tick = () => {
      if (!running) return;
      const pos = geo.attributes.position.array as Float32Array;
      for (let i = 0; i < COUNT; i++) {
        pos[i * 3 + 1] += speeds[i];
        if (pos[i * 3 + 1] > 7.5) pos[i * 3 + 1] = -7.5;
      }
      geo.attributes.position.needsUpdate = true;
      camera.position.x += (mx * 0.6 - camera.position.x) * 0.04;
      camera.position.y += (-my * 0.4 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onVis = () => {
      running = document.visibilityState === "visible";
      if (running) raf = requestAnimationFrame(tick);
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
      geo.dispose();
      mat.dispose();
      tex.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden
    />
  );
}
