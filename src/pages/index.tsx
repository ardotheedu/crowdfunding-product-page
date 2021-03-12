
import {Container, Header, HeaderContent, Nav} from '../styles/pages'
export default function Home() {
  return (
      <Container>
          <Header>
            <HeaderContent>
              <img src="/logo.svg"></img>
              <Nav>
                <ul>
                  <li><a>About</a></li>
                  <li><a>Discover</a></li>
                  <li><a>Get Started</a></li>
                </ul>
              </Nav>
            </HeaderContent>
          </Header>
      </Container>
  )
}
