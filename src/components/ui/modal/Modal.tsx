"use client";
import React, { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './modal.module.css'
import CrossIcon from '@/components/svg/CrossIcon';
// const rootModal = document.querySelector('#root_modal');
interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}


const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.code === `Escape`) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.backdrop} onClick={handleClose}>
      <div style={{ transform: 'translate(-50% -50%)' }} className={styles.modalContainer}>
          <CrossIcon className={`${styles.closeModal} w-[16px] h-[16px] cursor-pointer`}  onClick={handleClose}/>
        {children}
      </div>
    </div>,
    document.querySelector("body")!
  );
};

export default Modal;