import React, { useRef, useEffect, useState } from "react";
import fg from "../assets/Goku.png";
import About from "./About";
import axios from "axios";

const Project = ({ className = "" }) => {
  const [animeD, setAnimeD] = useState([]);
    useEffect(()=>{
      const fetchdata=async function(){
        try {
        const res=await axios.get('http://localhost:8080/Admin');
        let data1=[...animeD];
        setAnimeD(...data1,res.data);
        console.log(animeD);
      } catch (error) {
       console.log(error);
       alert(error,"hello"); 
      }
      }
      fetchdata();
    },[])
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

      // (rect.left + rect.width / 2) this give the center of the selected items 
      // jo image ka center hai use hum distance calculate kar rhe hai aur is value ko kaam karne ke liye hume yaha pr jo hai ye width se divide karte hai taki kafi kaam value mile hume 
      const diffX = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
      const diffY = (e.clientY - (rect.top + rect.height / 2)) / rect.height;

      frameRef.current.mouseX = clamp(diffX, -0.6, 0.6);
      frameRef.current.mouseY = clamp(diffY, -0.6, 0.6);

      startRAF();
    };
    
    const onMouseLeave = () => {
  const state = frameRef.current;

  // reset all values
  state.mouseX = 0;
  state.mouseY = 0;
  state.lastX = 0;
  state.lastY = 0;

  startRAF(); // smooth reset
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
      className={`relative overflow-hidden w-full h-full flex justify-around items-center  shadow-2xl transform-gpu ${className}`}
      style={{ perspective: "1200px" }}
    >

         <div className="w-1/2 flex  flex-col justify-center items-center">
           {
            animeD.map((val, ind) => {
             return (
               <div key={ind} className="w-1/2 ">
                 <h1 className="text-white">
                   <div className="text-3xl">{val.name}</div>
                 </h1>

                 <div className="text-white">
                   <div>{new Date(val.date).toLocaleDateString()}</div>
                   <div>Seasons: {val.num}</div>
                   <div>Description:</div>
                   <div className="flex text-wrap">{val.description}</div>

                   <div className="font-bold">Goku Bhai </div>
                   <div>Quote: {val.quote}</div>
                 </div>
               </div>
             );
           })
         }
         </div>
               <div className='w-1/2 p-10 flex justify-center top-0 relative items-center'>
                 <img
               data-layer="fg"
               src={fg}
               alt="Subject"
               className="pointer-events-none absolute  max-w-[420px] object-contain will-change-transform"
               style={{ zIndex: 3, transformStyle: "preserve-3d" }}
             />
               </div>

      {/* Text Content */}
     
    </section>
  );
};

export default Project;
