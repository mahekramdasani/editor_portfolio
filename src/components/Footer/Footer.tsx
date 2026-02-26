import { Container } from './styles'
import linkedin from '../../assets/linkedin.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import igIcon from '../../assets/OIP.jpg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://mahekramdasanieditor.vercel.app" className="logo">
        <span>www.mahekramdasani</span>
        <span>editor.vercel.app</span>
      </a>
      <div>
        <p>
          This Website was made with 
          <span>❤️</span>
        </p>
      </div>
      <div className="social-media">
        <a
        href="https://www.instagram.com/_mahek_moments_/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={igIcon} alt="Instagram" />
      </a>
        <a
        href="https://www.linkedin.com/in/mahek-ramdasani-b57398226/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
        
        <a
          href="https://api.whatsapp.com/send/?phone=%2B919879508137&text=Hello+Mahek+I+found+your+contact+through+portfolio+site.%0A%0A"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://t.me/mahek_ramdasani"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" />
        </a></div>
    </Container>
  )
}
