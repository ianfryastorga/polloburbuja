import React, { useEffect, useState } from 'react';
import './pro_reflex.css';
import Layout from '../../../layout.jsx';

const ProReflex = () => {
  const [score, setScore] = useState(0);
  const [objectPosition, setObjectPosition] = useState(getRandomPosition());
  const [velocity, setVelocity] = useState({ x: 40, y: 30 });
  const [gameOver, setGameOver] = useState(false);
  const [audio, setAudio] = useState(new Audio());

  function getRandomPosition() {
    let x = Math.random() * (800 - 50);
    let y = Math.random() * (640 - 50);
    return { x, y };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameOver) {
        let newPosition = {
          x: objectPosition.x + velocity.x,
          y: objectPosition.y + velocity.y,
        };
        if (newPosition.x < 0 || newPosition.x > 800 - 50) {
          setVelocity((v) => ({ ...v, x: -v.x }));
        } else if (newPosition.y < 0 || newPosition.y > 640 - 50) {
          setVelocity((v) => ({ ...v, y: -v.y }));
        } else {
          setObjectPosition(newPosition);
        }
      }
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [objectPosition, velocity, gameOver]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        const objectCenterX = objectPosition.x + 25;
        const objectCenterY = objectPosition.y + 25;
        const containerWidth = 800;
        const containerHeight = 640;
        const objectRadius = 25;
        const containerCenterX = containerWidth / 2;
        const containerCenterY = containerHeight / 2;

        const dx = Math.abs(objectCenterX - containerCenterX);
        const dy = Math.abs(objectCenterY - containerCenterY);

        if (dx <= objectRadius + containerWidth / 2 && dy <= objectRadius + containerHeight / 2) {
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = Math.sqrt((objectRadius + containerWidth / 2) ** 2 + (objectRadius + containerHeight / 2) ** 2);
          const normalizedDistance = distance / maxDistance;

          if (normalizedDistance <= 0.15) {
            setScore(1);
            setAudio(new Audio('src\\game\\minigames\\pro_reflex\\1.mp3'));
          } else if (normalizedDistance <= 0.25) {
            setScore(0.75);
            setAudio(new Audio('src\\game\\minigames\\pro_reflex\\0.75.mp3'));
          } else if (normalizedDistance <= 0.35) {
            setScore(0.5);
            setAudio(new Audio('src\\game\\minigames\\pro_reflex\\0.5.mp3'));
          } else if (normalizedDistance <= 0.45) {
            setScore(0.25);
            setAudio(new Audio('src\\game\\minigames\\pro_reflex\\0.25.mp3'));
          } else {
            setScore(0);
            setAudio(new Audio('src\\game\\minigames\\pro_reflex\\0.mp3'));
          }

          audio.play();
          setGameOver(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [objectPosition]);

  return (
    <Layout>
      <div className="game_container">
        <div id="circle" className="circle" />
        <div
          style={{
            top: `${objectPosition.y}px`,
            left: `${objectPosition.x}px`,
            backgroundColor: gameOver ? 'green' : 'blue',
          }}
          className="object"
        />
        <p>Puntuación: {score.toFixed(2)}</p>
        <audio src="src\\game\\minigames\\pro_reflex\\fondo_proreflex.mp3" autoPlay loop/>
      </div>  
    </Layout>
  );
};

export default ProReflex;
