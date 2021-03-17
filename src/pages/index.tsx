
import {Container, Header, HeaderContent, Nav, Content, Introduction, Progress, About, TextContent, Buttons, BackButton, BookmarkButton, ProgressBar, ProgressInfo} from '../styles/pages'
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
              <ProgressInfo>
                <div>
                  <h3><strong>$89,914</strong></h3> 
                  <p> of $100,000 backed</p>
                </div>
                <div>
                  <h3><strong>5,007</strong></h3>
                  <p> total backers</p>
                </div>
                <div>
                  <h3><strong>56</strong></h3><p>days left</p>
                </div>
              </ProgressInfo>

              <ProgressBar>
                <div>
                  <div />
                </div>
              </ProgressBar>
            </Progress>
            
            <About></About>
          </Content>
      </Container>
  )
}
