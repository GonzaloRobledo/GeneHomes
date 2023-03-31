import React, { useState } from 'react'

export const useModal = (active = false) => {
  const [activeModal, setActiveModal] = useState(active)

  const handleOpenModal = () => setActiveModal(!activeModal)

  return [activeModal, handleOpenModal]
}
