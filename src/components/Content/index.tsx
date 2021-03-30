/* eslint-disable import/no-unresolved */
import React from 'react';
import Buttons from '../Buttons';
import { products } from '../../product';

import {
  Content,
  Introduction,
  BackButton,
  Progress,
  About,
  TextContent,
  ProgressBar,
  ProgressInfo,
  Description,
  Product,
  ProductHeader,
  ProductBottom,
  Products,
} from '../../styles/pages/index';

export default function ContentComponent() {
  return (
    <Content>
      <Introduction>
        <img src="/logo-mastercraft.svg" alt="logo" />
        <TextContent>
          <h1>Mastercraft Bamboo Monitor Riser</h1>
          <p>
            A beautiful handcrafted monitor stand to reduce neck and eye strain.
          </p>
        </TextContent>
        <Buttons />
      </Introduction>
      <Progress>
        <ProgressInfo>
          <div>
            <h3>
              <strong>$89,914</strong>
            </h3>
            <p> of $100,000 backed</p>
          </div>
          <div>
            <h3>
              <strong>5,007</strong>
            </h3>
            <p> total backers</p>
          </div>
          <div>
            <h3>
              <strong>56</strong>
            </h3>
            <p>days left</p>
          </div>
        </ProgressInfo>

        <ProgressBar>
          <div>
            <div />
          </div>
        </ProgressBar>
      </Progress>

      <About>
        <h3>About this project</h3>

        <Description>
          <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p />
          <p>
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </Description>
        <Products>
          {products.map(product => {
            return (
              <Product key={product.name} available={!!product.products_left}>
                <ProductHeader>
                  <h2>{product.name}</h2>
                  <h3>Pledge ${product.price} or more</h3>
                </ProductHeader>
                <p>{product.description}</p>
                <ProductBottom>
                  <div>
                    <h3>{product.products_left}</h3>
                    <p>left</p>
                  </div>
                  <BackButton>Select Reward</BackButton>
                </ProductBottom>
              </Product>
            );
          })}
        </Products>
      </About>
    </Content>
  );
}
