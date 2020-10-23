import Phaser from "phaser"
import { useEffect } from "react"
import React from 'react'
import Startscene from './StartScene'

const SapphireGame = () => {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: (window.innerWidth * 0.75),
      height: (window.innerHeight * 0.75),
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 200 },
        },
      },
      scene: [Startscene],
      parent: "myDIV",
      pixelArt: true
      }

    new Phaser.Game(config)

  },[])
  
  

  return (
    <div id="myDIV"></div>
  )
}

export default SapphireGame