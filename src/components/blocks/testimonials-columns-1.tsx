"use client";
import React from "react";
import { motion } from "motion/react";


export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: { text: string; image: string; name: string; role: string }[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-8 lg:p-10 rounded-2xl border border-white/10 shadow-lg shadow-black max-w-xs w-full bg-[#050505] text-cream-dim" key={i}>
                  <div className="text-[15px] leading-relaxed">{text}</div>
                  <div className="flex items-center gap-4 mt-6">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full border border-white/20"
                    />
                    <div className="flex flex-col gap-0.5">
                      <div className="font-display font-medium text-[15px] text-cream tracking-tight leading-5">{name}</div>
                      <div className="text-[12px] uppercase tracking-widest text-gold/70">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

;