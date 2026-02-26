import { Container } from "./styles";
import MahekRamdasani from "../../assets/MahekRamdasani.jpg";
import ScrollAnimation from "react-animate-on-scroll";
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
export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
<p>
  Hi, I’m Mahek — a creative video editor who brings stories to life.
</p>
</ScrollAnimation>

<ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
<p>
  I craft short-form reels, social media content, and cinematic edits with clean transitions, rhythm, and a focus on engagement.
</p>
</ScrollAnimation>

<ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
<p>
  My goal is to transform raw footage into videos that leave an impression and tell a memorable story.
</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4> Bachelor's of Engineering (BE)</h4>
            <p>lj Institute of Engineering and Technology | Nov 2021 - Jun 2025</p>
            <p>8.99 CGPA</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={capcutIcon} alt="capcut" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={vnIcon} alt="vn editor" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={inshotIcon} alt="Inshot" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={lrIcon} alt="Lightroom" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={canvaIcon} alt="Canva" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={editsIcon} alt="Instagram Edits" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={blackmagicIcon} alt="Blackmagic camera" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={dazzcamIcon} alt="Dazz Cam" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={goproIcon} alt="Go Pro Icon" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={viviIcon} alt="Vivi Sticker" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={cameraIcon} alt="Camera" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src={MahekRamdasani} alt="Mahek Ramdasani" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
