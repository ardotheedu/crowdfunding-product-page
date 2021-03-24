import React from 'react';
import { useContext } from 'react'
import { ModalContext } from '../../contexts/modalContext'
import { Buttons, BackButton, BookmarkButton } from '../../styles/pages/index';

export default function Button() {
    const { openBackModal } = useContext(ModalContext)
  return (
      <Buttons>     
          <BackButton onClick={openBackModal}> Back this project</BackButton>
          <BookmarkButton>
              Bookmark
          </BookmarkButton>
      </Buttons>
  )
}
