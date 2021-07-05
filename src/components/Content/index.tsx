/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import CountUp from 'react-countup';
import { products } from '../../product';

import {
  Content,
  Introduction,
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
  Buttons,
  BackButton,
  BookmarkButton,
} from './styles';

interface HeaderProps {
  onOpenNewModal: () => void;
}

export default function ContentComponent({ onOpenNewModal }: HeaderProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  function handleBookmark() {
    setIsBookmarked(!isBookmarked);
  }
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
        <Buttons>
          <BackButton onClick={onOpenNewModal}> Back this project</BackButton>
          {isBookmarked ? (
            <BookmarkButton
              textColor="--dark-cyan"
              icon="/icon-bookmarked.svg"
              onClick={() => handleBookmark()}
            >
              Bookmark
            </BookmarkButton>
          ) : (
            <BookmarkButton
              textColor="--dark-gray"
              icon="/icon-bookmark.svg"
              onClick={() => handleBookmark()}
            >
              Bookmark
            </BookmarkButton>
          )}
        </Buttons>
      </Introduction>
      <Progress>
        <ProgressInfo>
          <div>
            <h3>
              <strong>
                $
                <CountUp
                  duration={2.75}
                  end={89.914}
                  decimals={3}
                  decimal=","
                />
              </strong>
            </h3>
            <p> of $100,000 backed</p>
          </div>
          <div>
            <h3>
              <strong>
                <CountUp duration={2.75} end={5.007} decimals={3} decimal="," />
              </strong>
            </h3>
            <p> total backers</p>
          </div>
          <div>
            <h3>
              <strong>
                <CountUp end={56} />
              </strong>
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
                  {product.products_left ? (
                    <BackButton>Select Reward</BackButton>
                  ) : (
                    <BackButton disabled>Out of stock</BackButton>
                  )}
                </ProductBottom>
              </Product>
            );
          })}
        </Products>
      </About>
    </Content>
  );
}
