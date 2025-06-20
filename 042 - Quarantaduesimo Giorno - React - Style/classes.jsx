import React from 'react';

import  AttentionGrabber from './AttentionGrabber';
import styles from './styles/Home.module.css';

function Home() {
  return (
    <div className={styles.div}>
      <AttentionGrabber />
      <footer>Codey Cademy: Full-Stack Developer</footer>
    </div>
  );
}

export default Home