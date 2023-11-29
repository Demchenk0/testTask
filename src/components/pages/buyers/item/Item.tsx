import { FC, useState } from "react";
import { IInitialSeller } from "../../../../app/[locale]/(private)/cabinet/(routes)/buyers/mockup";
import { Modal } from "../../../../app/[locale]/(private)/cabinet/(routes)/buyers/modal/modal";
import s from "../../../../app/[locale]/(private)/cabinet/(routes)/buyers/Buyers.module.scss";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "components/icons/ArrowIcons";
import { MinusIcon } from "components/icons/MinusIcon";

interface IProps {
  handler: () => void;
  user: IInitialSeller;
}

export const Item: FC<IProps> = ({ handler, user:seller }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <li className={s.sellers_item} >
              <input className={s.sellers_box} type="checkbox" name="" id="" />
              <div className={s.sellers_image}>
                <Link className={s.user_image} href="">
                  <Image
                    src={seller.avatarURL}
                    width={48}
                    height={48}
                    alt="foto"
                  />
                </Link>
                <div className={s.sellers_text}>
                  <Link className={s.sss} href="">
                    {seller.userName}
                  </Link>
                  <Link className={s.sss} href="">
                    {seller.email}
                  </Link>
                </div>
              </div>
              <Link className={s.sellers_number} href="">
                {seller.number}
              </Link>
              <Link className={s.sellers_data} href="">
                {seller.date}
              </Link>
              <div className={s.sellers_money}>
                <Link className={s.sss} href="">
                  {seller.purchases}
                </Link>
                <p>{seller.money}</p>
              </div>
              <div className={`${seller.status} ${seller.status ? s.true : s.false}`}>
              <MinusIcon />
              </div>
              <div>
              <button className={s.sellers_arrow}  
              onClick={() => setOpenModal(true)}
              >
                <ArrowRight  />
              </button>
              </div>
              {openModal && <Modal onClose={setOpenModal} handler={handler} />} 
            </li>
  );
};

{/* <button onClick={() => setIsShow(true)}>Show Modal</button>

{isShow && <Modal onClose={setIsShow} handler={handler} />} */}