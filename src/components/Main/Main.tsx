import Particles from "react-tsparticles"
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";
import capcutIcon from "../../assets/Capcut-icon.svg.png";
import inshotIcon from "../../assets/images.jpg"
import lrIcon from "../../assets/lr.png"
import vnIcon from "../../assets/vn.png"
import canvaIcon from "../../assets/canva.jpg"
import cameraIcon from "../../assets/camera.jpg"
import blackmagicIcon from "../../assets/blackmagic.jpg"
import dazzcamIcon from "../../assets/dazzcam.jpg"
import editsIcon from "../../assets/edits.png"
import goproIcon from "../../assets/gopro.jpg"
import viviIcon from "../../assets/unnamed.webp" 


export function Main() {
  return (
    <Container>
      <Particles
        id="tsparticles"
        options={{
          "fullScreen": {
            "enable": true,
            "zIndex": 1
          },
          "detectRetina": true,
          "fpsLimit": 60,
          "interactivity": {
            "events": {
              "onClick": {
                "enable": true,
                "mode": "push"
              },
              "onDiv": {
                "elementId": "repulse-div",
                "enable": false,
                "mode": "repulse"
              },
              "onHover": {
                "enable": true,
                "mode": "bubble",
                "parallax": {
                  "enable": false,
                  "force": 60,
                  "smooth": 10
                }
              },
              "resize": true
            },
            "modes": {
              "bubble": {
                "distance": 400,
                "duration": 2,
                "opacity": 0.8,
                "size": 2,
              },
              "connect": {
                "distance": 80,
                "lineLinked": {
                  "opacity": 0.5
                },
                "radius": 60
              },
              "grab": {
                "distance": 400,
                "lineLinked": {
                  "opacity": 1
                }
              },
              "push": {
                "quantity": 2
              },
              "remove": {
                "quantity": 2
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              }
            }
          },
          "particles": {
            "color": {
              "value": "#ffffff"
            },
            "lineLinked": {
              "blink": false,
              "color": "#000",
              "consent": false,
              "distance": 150,
              "enable": false,
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "attract": {
                "enable": false,
                "rotate": {
                  "x": 600,
                  "y": 1200
                }
              },
              "bounce": false,
              "direction": "none",
              "enable": true,
              "outMode": "out",
              "random": false,
              "speed": 3,
              "straight": false
            },
            "number": {
              "density": {
                "enable": true,
                "area": 800
              },
              "limit": 20,
              "value": 15,
            },
            "opacity": {
              "animation": {
                "enable": true,
                "minimumValue": 0.2,
                "speed": 1,
                "sync": false
              },
              "random": true,
              "value": 1
            },
            "rotate": {
              "animation": {
                "enable": true,
                "speed": 5,
                "sync": false
              },
              "direction": "random",
              "random": true,
              "value": 0
            },
            "shape": {
              "character": {
                "fill": false,
                "font": "Verdana",
                "style": "",
                "value": "*",
                "weight": "400"
              },
              "image": [
                {
                  "src": capcutIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": inshotIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": lrIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": vnIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": canvaIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": cameraIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": blackmagicIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": dazzcamIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": editsIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": goproIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": viviIcon,
                  "width": 20,
                  "height": 20
                },
                // {
                //   "src": typescriptIcon,
                //   "width": 20,
                //   "height": 20
                // },
                // {
                //   "src": vscodeIcon,
                //   "width": 20,
                //   "height": 20
                // },
                // {
                //   "src": vueIcon,
                //   "width": 20,
                //   "height": 20
                // },

              ],
              "polygon": {
                "sides": 5
              },
              "stroke": {
                "color": "#000000",
                "width": 0
              },
              "type": "image"
            },
            "size": {
              "animation": {
                "enable": false,
                "minimumValue": 0.1,
                "speed": 40,
                "sync": false
              },
              "random": false,
              "value": 16
            }
          },
          "polygon": {
            "draw": {
              "enable": false,
              "lineColor": "#ffffff",
              "lineWidth": 0.5
            },
            "move": {
              "radius": 10
            },
            "scale": 1,
            "url": ""
          },
          "background": {
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
          }
        }}
      />
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </Container>
  );
}