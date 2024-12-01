import React, { useState, useEffect, useMemo } from 'react';
import styles from './Typewriter.module.css';

const Typewriter = () => {
  const words = useMemo(() => ["Robotics", "Coding"], []);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(200);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[loopNum % words.length];
      setText(
        isDeleting
          ? currentWord.substring(0, text.length - 1)
          : currentWord.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 100 : 200);

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, loopNum, words]);

  return (
    <div className={styles.typewriter}>
      <span>{text}</span>
      <span className={styles.cursor}>|</span>
      <span className={styles.staticText}> Club</span>
    </div>
  );
};

export default Typewriter;
