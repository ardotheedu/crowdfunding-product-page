
import {Container, Header, HeaderContent, Nav, Content, Introduction, Progress, About, TextContent, Buttons, BackButton, BookmarkButton, ProgressBar, ProgressInfo, Description, Product, ProductHeader, ProductBottom, Products} from '../styles/pages'
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

            <About>
              <h3>
                About this project
              </h3>

              <Description>
                <p> 
                  The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
                  to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
                  your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                </p>
                <p></p>
                <p>
                    Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
                    to allow notepads, pens, and USB sticks to be stored under the stand.
                </p>
              </Description>
              <Products>

                <Product available={true}>
                  <ProductHeader>
                    <h2>Bamboo Stand</h2>
                    <h3>Pledge $25 or more</h3>
                  </ProductHeader>
                  <p>
                    You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
                    you’ll be added to a special Backer member list.
                  </p>
                  <ProductBottom>
                    <div>
                      <h3>101</h3><p>left</p>
                    </div>
                    <BackButton>Select Reward</BackButton>
                  </ProductBottom>
                </Product>
                <Product available={true}>
                  <ProductHeader>
                    <h2>Black Edition Stand</h2>
                    <h3>Pledge $75 or more</h3>
                  </ProductHeader>
                  <p>
                    You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
                    member list. Shipping is included.
                  </p>
                  <ProductBottom>
                    <div>
                      <h3>64</h3><p>left</p>
                    </div>
                    <BackButton>Select Reward</BackButton>
                  </ProductBottom>
                </Product>
                <Product available={false}>
                  <ProductHeader>
                    <h2>Mahogany Special Edition</h2>
                    <h3>Pledge $200 or more</h3>
                  </ProductHeader>
                  <p>
                    You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
                    to our Backer member list. Shipping is included.
                  </p>
                  <ProductBottom>
                    <div>
                      <h3>0</h3><p>left</p>
                    </div>
                    <BackButton>Out of stock</BackButton>
                  </ProductBottom>
                </Product>
              </Products>
            </About>
          </Content>
      </Container>
  )
}
