import React, { useState } from 'react'
import fg from '../assets/ironMan.png'
import { useRef, useEffect } from "react"
import axios from 'axios';

const About = ({ className = "" }) => {
  
  const containerRef = useRef(null);
    const frameRef = useRef({
      raf: null,
      mouseX: 0,
      mouseY: 0,
      lastX: 0,
      lastY: 0,
    });
  
    useEffect(() => {
      const el = containerRef.current;
      if (!el) return;
      const depth = 0.12;
      const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  
      const onMouseMove = (e) => {
        const fgEl = el.querySelector("[data-layer='fg']");
        if (!fgEl) return;
  
        const rect = fgEl.getBoundingClientRect();
  
        // cursor → center difference
        // jo image ka center hai use hum distance calculate kar rhe hai 
        const diffX = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
        const diffY = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
  
        frameRef.current.mouseX = clamp(diffX, -0.6, 0.6);
        frameRef.current.mouseY = clamp(diffY, -0.6, 0.6);
  
        startRAF();
      };

      const onMouseLeave = () => {
        const state = frameRef.current;

        state.mouseX = 0;
        state.mouseY = 0;
        state.lastX = 0;
        state.lastY = 0;

        startRAF();
      };
      const tick = () => {
        const s = frameRef.current;
  
        s.lastX += (s.mouseX - s.lastX) * 0.12;
        s.lastY += (s.mouseY - s.lastY) * 0.12;
  
        const rotateY = s.lastX * 25; // tilt more
        const rotateX = -s.lastY * 25;
  
        const scale = 1 + (Math.abs(s.lastX) + Math.abs(s.lastY)) * 0.03;
  
        const fgEl = el.querySelector("[data-layer='fg']");
        if (fgEl) {
          fgEl.style.transform = `
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateZ(80px)
            scale(${scale})
          `;
        }
  
        s.raf = null;
      };
  
      const startRAF = () => {
        if (frameRef.current.raf == null) {
          frameRef.current.raf = requestAnimationFrame(tick);
        }
      };
  
      el.addEventListener("mousemove", onMouseMove);
      el.addEventListener("mouseleave", onMouseLeave);

  
      return () => {
        el.removeEventListener("mousemove", onMouseMove);
        el.addEventListener("mouseleave", onMouseLeave);

      };
    }, []);
  
    return (
      <section
        ref={containerRef}
        className={`relative w-full h-full flex   justify-around items-center rounded-2xl shadow-2xl transform-gpu ${className}`}
        style={{ perspective: "1200px" }}
      >
        {/* Foreground Image */}
        <div>
          <h1 className='text-white'>
            hello bhai 
          </h1>
        </div>
          <div className='flex justify-center top-0 relative items-center '>
            <img
          data-layer="fg"
          src={fg}
          alt="Subject"
          className=" pointer-events-none absolute  max-w-[420px] object-contain will-change-transform"
          style={{ zIndex: 3, transformStyle: "preserve-3d" }}
        />
          </div>
          
        </section>
  )
}

export default About
