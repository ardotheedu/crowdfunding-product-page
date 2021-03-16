
import {Container, Header, HeaderContent, Nav, Content, Introduction, Progress, About, TextContent, Buttons, BackButton, BookmarkButton} from '../styles/pages'
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
          <Content>
            <Introduction>
            <img src="/logo-mastercraft.svg"></img>
            <TextContent>
              <h1>Mastercraft Bamboo Monitor Riser</h1>
              <p>A beautiful  handcrafted monitor stand to reduce neck and eye strain.</p>
            </TextContent>   
            <Buttons>
              <BackButton> Back this project</BackButton>
              <BookmarkButton>
                    Bookmark
              </BookmarkButton>
            </Buttons>
            </Introduction>
            <Progress>
              <p><strong>$89,914</strong><br/> of $100,000 backed</p>
              <p><strong>5,007</strong><br/> total backers</p>
              <p><strong>56</strong><br/> days left</p>

              <div>
                <div style={{width: `30%`}} />
                <span style={{left: `30%` }}></span>
              </div>
            </Progress>
            <About></About>
          </Content>
      </Container>
  )
}
