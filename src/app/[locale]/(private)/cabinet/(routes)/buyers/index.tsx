'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { topBuyers, initialSellers, IInitialSeller } from './mockup';
import { Section } from 'components/common/profile/Section';
import Image from 'next/image';
import s from './Buyers.module.scss';
import { AchiveIcon } from 'components/icons/AchiveIcon';
import Link from 'next/link';
import { MinusIcon } from 'components/icons/MinusIcon';
import { useState, useEffect } from 'react';
import { SeacrhIcon } from 'components/icons/social/SeacrhIcon';
import { ArrowRight } from 'components/icons/ArrowIcons';
import Pagination from '@mui/material/Pagination';
import { FilterArrowsIcon } from 'components/icons/FilterIcon';
import {Modal} from './modal/modal'
import {Item} from 'components/pages/buyers/item/Item';

export function Buyers() {
  const t = useTranslations('ProfilePage.Buyers');
  const [searchQuery, setSearchQuery] = useState('');
  const [sellers, setSellers] = useState<IInitialSeller[]>(initialSellers);

 
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [filterSellers, setFilterSellers] =
    useState<IInitialSeller[]>(initialSellers);

  const handleSearchClick = () => {
    const normalizedQuery = searchQuery.toLowerCase();
    const filtered = sellers.filter((seller) => {
      const normalizedUserName = seller.userName.toLowerCase();
      const isNameMatch = normalizedUserName.includes(normalizedQuery);
  // !If
      return isNameMatch;
    });
    console.log(new Date(sellers[0].date))
    console.log(dateFrom);
  
    setFilterSellers(filtered);
  };
  // !Pagination 
  const itemsPerPage = 5; 
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterSellers.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event:any, value:any) => {
    setCurrentPage(value);
  };

  // !Modal
  // const [openModal, setOpenModal] = useState(false);

  // ! Sort
  const [isDescendingOrder, setIsDescendingOrder] = useState(true);

  const sortSellersByPurchases = () => {
    const sortedSellers = [...filterSellers].sort((a, b) => {
      const purchasesA = parseInt(a.purchases);
      const purchasesB = parseInt(b.purchases);
      if (isDescendingOrder) {
        return purchasesB - purchasesA;
      } else {
        return purchasesA - purchasesB;
      }
    });
    setFilterSellers(sortedSellers);
    setIsDescendingOrder(!isDescendingOrder);
  };

  // ! Sort Date
  const [sortDate, setSortDate] = useState(true)
  const sortByDate = () => {
    const sortedDate = [...filterSellers].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
  
      if (sortDate) {
        return dateA - dateB; // Сортировка по возрастанию
      } else {
        return dateB - dateA; // Сортировка по убыванию
      }
    });
    setFilterSellers(sortedDate);
    setSortDate(!sortDate);
  };
//  ! Modal
const changeStatus = (userId: string) => {
  setFilterSellers((prev) =>
    prev.map((seller) => {
      if (seller.id === userId) {
        seller.status = true;
      }

      return seller;
    })
  );
};


  //
  // const [currentPage, setCurrentPage] = useState(1);
  // const [sellers, setsellers] = useState([]);
  // const [postsPerPage, setPostsPerPage] = useState(10);

  // useEffect(async()=> {
  //   const response = await axios.get(sellers);

  // })
  // const lastPostIndex = currentPage * postsPerPage;
  // const firstPostIndex = lastPostIndex - postsPerPage;
  // const currentPosts = sellers.slice(firstPostIndex, lastPostIndex)

  //

  return (
    <Section>
      <Section.Header>
        <h3>{t('title')}</h3>
      </Section.Header>
      <div className={s.box}>
        <h4>Top buyer</h4>
        <ul className={s.buyer_list}>
          {topBuyers.map((buyer, index) => (
            <li className={s.buyer_item} key={index}>
              <Link className={s.user_image} href="">
                <Image
                  src={buyer.avatarURL}
                  width={76}
                  height={76}
                  alt="foto"
                  // loader={({ src, width: w, quality }) => {
                  //   const q = quality || 75;
                  //   return `${src}?w=${w}&q=${q}`;
                  // }}
                />
                <span className={s.user_place}>{buyer.achievements[0]}</span>
              </Link>
              <Link className={s.user_name} href="">
                {buyer.userName}
              </Link>
              <div className={s.user_achive}>
                <AchiveIcon />
                <span>{buyer.achievements[1]}</span>
                <span>{buyer.purchase}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={s.search}>
        <div className={s.search_seller}>
          <p>Search</p>
          <input
            className={s.search_inputSearch}
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (!e.target.value) {
                setFilterSellers(sellers);
              }
            }}
            placeholder="Search seller"
          />
        </div>
        <div className={s.search_seller}>
          <p>Signup date</p>
          <input className={s.search_inputDate}
            type="date"
            placeholder="From"
            onChange={(e) => {
              setDateFrom(e.target.value);
            }}
          />
        </div>
        <input
        className={s.search_inputDate}
          type="date"
          placeholder="to"
          onChange={(e) => {
            setDateTo(e.target.value);
          }}
        />
        <div onClick={handleSearchClick} className={s.search_boxIcon}>
          <SeacrhIcon />
        </div>
      </div>
      <div className={s.designation}>
       <div>
        <input className={s.designation_box} type="checkbox" name="" id="" />
        </div>
        <p className={s.designation_userName}>User Name</p>
        <p className={s.designation_userNumber}>Number</p>
        <div>
          <button onClick={sortByDate}>
        <p className={s.designation_userDate}>Signup Date<span>
          <FilterArrowsIcon/>
        </span></p>
        </button>
        </div>
        <button onClick={sortSellersByPurchases}>
        <p className={s.designation_userPurchases}>purchases<span>
        <FilterArrowsIcon />
        </span></p>
        </button>
        <p className={s.designation_userOffers}>Offers</p>
      </div>
      <div>
        {/* filterSellers для поиска  currentItems для пагинации */}
        <ul className={s.sellers}>
          {currentItems.map((seller, index) => (
            <Item key={seller.purchases} user={seller} handler={() => changeStatus(seller.id)} />
          ))} 
          
        </ul>
        <div className={s.pagination}>
        <Pagination 
          count={Math.ceil(initialSellers.length / itemsPerPage)}
          shape="rounded"
          onChange={handlePageChange}
          classes={{ root: s.pagination_el }}
        />
        </div>
      </div>
      {/* <Modal open={openModal} onClose={() => setOpenModal(false)} /> */}
    </Section>
  );
}

  // * if
  
      // const sellerDate = new Date(seller.date);
      // if (dateFrom && dateTo) {
      //   return isNameMatch && sellerDate >= new Date(dateFrom) && sellerDate <= new Date(dateTo);
      // } else if (dateFrom) {
      //   return isNameMatch && sellerDate >= new Date(dateFrom)
      // } else if (dateTo){
      //   return isNameMatch && sellerDate <= new Date(dateTo);
      // } else {
      //   return true;
      // }