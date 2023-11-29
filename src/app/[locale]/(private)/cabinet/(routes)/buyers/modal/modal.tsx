import React, { useEffect, useRef, useState } from 'react';
import s from '../modal/modal.module.scss';
import { Dispatch, FC, MouseEvent, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from 'components/icons/CloseIcon';

interface IProps {
  onClose: Dispatch<SetStateAction<boolean>>;
  handler: () => void;
}

export const Modal: FC<IProps> = ({ onClose, handler }) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#portal');
    document.body.classList.add('show-modal');
    setMounted(true);

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.classList.remove('show-modal');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const hadleCloseModal = (e: MouseEvent<HTMLElement, Event>) => {
    const targetElement = e.target as HTMLElement;

    const topElement = targetElement.closest(`.${s.wrapper}`);

    if (topElement && targetElement !== topElement) return;

    onClose(false);
  };

  const handleActionClick = () => {
    handler();
    onClose(false);
  };

  return mounted && ref.current
    ? createPortal(
        <div className={s.backdrop} onClick={hadleCloseModal}>
          <div className={s.wrapper}>
            <h2 className={s.top}>
              Ban seller <div onClick={() => onClose(false)}><CloseIcon/></div>
            </h2>

            <div className={s.content}>
              <p>Are you sure to ban this seller?</p>
            </div>

            <div className={s.bottom}>
              <button className={s.btnPrimary} onClick={() => onClose(false)}>
                Cancel
              </button>
              <button className={s.btnSecondary} onClick={handleActionClick}>
                Ban
              </button>
            </div>
          </div>
        </div>,
        ref.current
      )
    : null;
};


