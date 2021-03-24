import React, {useState} from 'react';
import { useContext } from 'react'
import { ModalContext } from '../../contexts/modalContext'
import {Overlay, ContainerModal, ModalProduct, ModalProductHeader, ModalProductBottom, ModalPledge, CloseButton} from '../../styles/pages/BackProjectModal'

export default function Modal() {
    const [isOptionSelected, setIsOptionSelected] = useState('')

    const { closeBackModal } = useContext(ModalContext)

    return(
            <Overlay>
                <ContainerModal>
                    <CloseButton onClick={closeBackModal}>
                        <img src="/icon-close-modal.svg" />
                    </CloseButton>
                    
                    <h2>Back this project</h2>
                    <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
    
                    <div>
                    <ModalProduct available={true} optionSelected={isOptionSelected === 'Pledge with no reward'}>
                        <div>
                        <div>
                            <input type="radio" name="back_option" onFocus={() => setIsOptionSelected('Pledge with no reward')}/>
                        </div>
                        <div>
                            <ModalProductHeader>
                            <div>
                                <h3>Pledge with no reward</h3>
                            </div>
                            
                            </ModalProductHeader>
                            <p>
                            Choose to support us without a reward if you simply believe in our project. As a backer, 
                            you will be signed up to receive product updates via email.
                            </p>
                        
                        </div>
                        </div>
    
                        {isOptionSelected === 'Pledge with no reward' && (
                        <> 
                        
                            <hr />
    
                            <div>
                            <ModalProductBottom>
                                <div>
                                    <input type="text" placeholder="Enter you pledge"></input>
                                </div>
                                <div>
                                    <button>Continue</button>
                                </div>
                            </ModalProductBottom>
                            </div>
                        </>
                        )}
    
                        
                    </ModalProduct>
                    <ModalProduct available={true} optionSelected={isOptionSelected === 'Bamboo Stand'}>
                        <div>
                        <div>
                            <input type="radio" name="back_option" onFocus={() => setIsOptionSelected('Bamboo Stand')}/>
                        </div>
                        <div>
                            <ModalProductHeader>
                            <div>
                                <h3>Bamboo Stand</h3>
                                <ModalPledge>Pledge $25 or more</ModalPledge>
                            </div>
                            <div>
                                <h3>101</h3><p>left</p>
                            </div>
                            </ModalProductHeader>
                            <p>
                            You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
                            you’ll be added to a special Backer member list.
                            </p>
                        
                        </div>
                        </div>
    
                        {isOptionSelected === 'Bamboo Stand' && (
                        <> 
                        
                            <hr />
    
                            <div>
                            <ModalProductBottom>
                                <div>
                                    <input type="text" placeholder="Enter you pledge"></input>
                                </div>
                                <div>
                                    <button><p>$</p><strong>25</strong></button>
                                    <button>Continue</button>
                                </div>
                            </ModalProductBottom>
                            </div>
                        </>
                        )}
    
                        
                    </ModalProduct>
                    <ModalProduct available={true} optionSelected={isOptionSelected === 'Black Edition Stand'}>
                        <div>
                        <div>
                            <input type="radio" name="back_option" onFocus={() => setIsOptionSelected('Black Edition Stand')}/>
                        </div>
                        <div>
                            <ModalProductHeader>
                            <div>
                                <h3>Black Edition Stand</h3>
                                <ModalPledge>Pledge $75 or more</ModalPledge>
                            </div>
                            <div>
                                <h3>64</h3><p>left</p>
                            </div>
                            </ModalProductHeader>
                            <p>
                            You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                            member list. Shipping is included.
                            </p>
                        
                        </div>
                        </div>
    
                        {isOptionSelected === 'Black Edition Stand' && (
                        <> 
                        
                            <hr />
    
                            <div>
                            <ModalProductBottom>
                                <div>
                                    <input type="text" placeholder="Enter you pledge"></input>
                                </div>
                                <div>
                                    <button><p>$</p><strong>75</strong></button>
                                    <button>Continue</button>
                                </div>
                            </ModalProductBottom>
                            </div>
                        </>
                        )}
    
                        
                    </ModalProduct>
                    <ModalProduct available={false} optionSelected={isOptionSelected === 'Mahogany Special Edition'}>
                        <div>
                        <div>
                            <input type="radio" name="back_option" onFocus={() => setIsOptionSelected('Mahogany Special Edition')}/>
                        </div>
                        <div>
                            <ModalProductHeader>
                            <div>
                                <h3>Mahogany Special Edition</h3>
                                <ModalPledge>Pledge $200 or more</ModalPledge>
                            </div>
                            <div>
                                <h3>0</h3><p>left</p>
                            </div>
                            </ModalProductHeader>
                            <p>
                            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                            to our Backer member list. Shipping is included.
                            </p>
                        
                        </div>
                        </div>
    
                        {isOptionSelected === 'Mahogany Special Edition' && (
                        <> 
                        
                            <hr />
    
                            <div>
                            <ModalProductBottom>
                                <div>
                                    <input type="text" placeholder="Enter you pledge"></input>
                                </div>
                                <div>
                                    <button><p>$</p><strong>200</strong></button>
                                    <button>Continue</button>
                                </div>
                            </ModalProductBottom>
                            </div>
                        </>
                        )}
                        </ModalProduct>
                    </div>    
                </ContainerModal>
            </Overlay>
    )
}