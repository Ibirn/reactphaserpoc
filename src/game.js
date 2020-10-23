import Phaser from "phaser"
import { useEffect } from "react"
import React from 'react'

const SapphireGame = (props) => {

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 1260,
      height: 720,
      physics: {
        default: "arcade",
        arcade: {
          // gravity: { y: 200 },
        },
      },
      scene: [props.scene],
      parent: "myDIV",
      pixelArt: true
      }

    new Phaser.Game(config)

  },[props.scene])
  

  return (
    <div id="myDIV"></div>
  )
}

export default SapphireGame