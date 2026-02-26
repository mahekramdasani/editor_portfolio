import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { ReelCard } from "./ReelCard";


export function Project() {
  return (
    <Container id="project">

      <h2>My Work</h2>

      {/* ===== Freelance Projects ===== */}
      <h3 className="section-title">Freelance Projects</h3>

      <div className="projects">

        <ScrollAnimation animateIn="fadeInUp">
          <ReelCard
            video="/videos/freelance01.mp4"
            title="Sajjangarh Travel Reel"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp">
          <ReelCard
            video="/videos/freelance2.mp4"
            title="Tata Mumbai Marathon Story"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp">
          <ReelCard
            video="/videos/freelance3.mp4"
            title="Gym Weightlifting Reel"
          />
        </ScrollAnimation>

      </div>

      {/* ===== Best Edits ===== */}
      <h3 className="section-title">Best Edits</h3>

      <div className="projects">

        <ScrollAnimation animateIn="fadeInUp">
          <ReelCard
            video="/videos/bestedit1.mp4"
            title="Ahmedabad Aesthetics"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp">
          <ReelCard
            video="/videos/bestedit2.mp4"
            title="Desi Wedding Reel"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp">
          <ReelCard
            video="/videos/bestedit3.mp4"
            title="Old heritage Edit"
          />
        </ScrollAnimation>

      </div>

      {/* ===== Instagram CTA ===== */}
      <p className="insta-cta">
        To see all my work 👉{" "}
        <a
          href="https://www.instagram.com/_mahek_moments_/"
          target="_blank"
          rel="noreferrer"
        >
          Visit my Instagram
        </a><br/>
        {"  "}as well as {"  "}
        <a
          href="https://drive.google.com/drive/folders/1zxL2GSpbiN300GUEazuna31OufS-_XmQ"
          target="_blank"
          rel="noreferrer"
        >
          Visit my drive
        </a>
      </p>

    </Container>
  );
}