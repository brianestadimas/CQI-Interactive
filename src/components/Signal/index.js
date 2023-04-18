import React, { useRef, useEffect } from "react";
import "./AnimatedLine.css";

import "./AnimatedLine.css";

function AnimatedWaveSpring() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Create a loop to animate the wave and ball
    let step = 0;
    let ballPosition = { x: 0, y: canvas.height / 2 };
    const ballVelocity = 10;
    function animate() {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the waveform
      const frequency = 225; // frequency of the wave
      const amplitude = 10; // amplitude of the wave
      const offsetY = canvas.height / 2; // center the waveform vertically
      const stepX = 10; // distance between each point on the x-axis

      // Create the gradient color effect
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "#a853ba");
      gradient.addColorStop(1, "#2a8af6");
      ctx.strokeStyle = gradient;

      // Set the line width to make the wave thicker
      ctx.lineWidth = 4;

      ctx.beginPath();
      ctx.moveTo(0, offsetY);
      for (let x = 0; x < canvas.width; x += stepX) {
        const y = Math.sin(x * frequency + step) * amplitude * Math.sin(step / 20) + offsetY;
        ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw the ball
      ctx.fillStyle = "#000000";
      ctx.beginPath();
      ctx.arc(ballPosition.x, ballPosition.y, 6, 0, 2 * Math.PI);
      ctx.fill();

      // Update the ball position
      ballPosition.x += ballVelocity;
      if (ballPosition.x > canvas.width) {
        ballPosition.x = 0;
      }

      // Update the step value for the next animation frame
      step += 0.2;

      // Request the next animation frame
      requestAnimationFrame(animate);
    }

    // Start the animation loop
    animate();
  }, []);

  return <canvas ref={canvasRef} className="wave"></canvas>;
}

export default AnimatedWaveSpring;
