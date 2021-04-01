import React, { useState } from 'react';
import { useContext } from 'react';
import { ModalContext } from '../../contexts/modalContext';
import { products } from '../../product';

import {
  Overlay,
  ContainerModal,
  ModalProduct,
  ModalProductHeader,
  ModalProductBottom,
  ModalPledge,
  CloseButton,
} from '../../styles/pages/BackProjectModal';

export default function Modal() {
  const [isOptionSelected, setIsOptionSelected] = useState('');

  const { closeBackModal } = useContext(ModalContext);

  return (
    <Overlay>
      <ContainerModal>
        <CloseButton onClick={closeBackModal}>
          <img src="/icon-close-modal.svg" alt="close button" />
        </CloseButton>

        <h2>Back this project</h2>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>

        <div>
          <ModalProduct
            available
            optionSelected={isOptionSelected === 'Pledge with no reward'}
          >
            <div>
              <div>
                <input
                  type="radio"
                  name="back_option"
                  onFocus={() => setIsOptionSelected('Pledge with no reward')}
                />
              </div>
              <div>
                <ModalProductHeader>
                  <div>
                    <h3>Pledge with no reward</h3>
                  </div>
                </ModalProductHeader>
                <p>
                  Choose to support us without a reward if you simply believe in
                  our project. As a backer, you will be signed up to receive
                  product updates via email.
                </p>
              </div>
            </div>

            {isOptionSelected === 'Pledge with no reward' && (
              <>
                <hr />

                <div>
                  <ModalProductBottom>
                    <div>
                      <input type="text" placeholder="Enter you pledge" />
                    </div>
                    <div>
                      <button type="button">Continue</button>
                    </div>
                  </ModalProductBottom>
                </div>
              </>
            )}
          </ModalProduct>

          {products.map(product => {
            return (
              <ModalProduct
                available={!!product.products_left}
                optionSelected={isOptionSelected === product.name}
              >
                <div>
                  <div>
                    {product.products_left > 0 ? (
                      <input
                        type="radio"
                        name="back_option"
                        onFocus={() => setIsOptionSelected(product.name)}
                      />
                    ) : (
                      <input
                        disabled
                        type="radio"
                        name="back_option"
                        onFocus={() => setIsOptionSelected(product.name)}
                      />
                    )}
                  </div>
                  <div>
                    <ModalProductHeader>
                      <div>
                        <h3>{product.name}</h3>
                        <ModalPledge>
                          Pledge ${product.price} or more
                        </ModalPledge>
                      </div>
                      <div>
                        <h3>{product.products_left}</h3>
                        <p>left</p>
                      </div>
                    </ModalProductHeader>
                    <p>{product.description}</p>
                  </div>
                </div>

                {isOptionSelected === product.name && (
                  <>
                    <hr />

                    <div>
                      <ModalProductBottom>
                        <div>
                          <input type="text" placeholder="Enter you pledge" />
                        </div>
                        <div>
                          <button type="button">
                            <p>$</p>
                            <strong>{product.price}</strong>
                          </button>
                          <button type="button">Continue</button>
                        </div>
                      </ModalProductBottom>
                    </div>
                  </>
                )}
              </ModalProduct>
            );
          })}
        </div>
      </ContainerModal>
    </Overlay>
  );
}
