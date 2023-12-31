import KristinImg from 'assets/images/top-sellers/kristin.png';
import ArthurImg from 'assets/images/top-sellers/arthur.png';
import  MarvinImg from 'assets/images/top-sellers/marvin.png';
import { StaticImageData } from 'next/image';

export const topBuyers = [
  {
    userName: 'Cooper, Kristin',
    avatarURL: KristinImg,
    achievements: ['#1', '2,140'],
    purchase: 'purchases'
  },
  {
    userName: 'Henry, Arthur',
    avatarURL: ArthurImg,
    achievements: ['#2', '2,140'],
    purchase: 'purchases'

  }, {
    userName: 'Cooper, Kristin',
    avatarURL: KristinImg,
    achievements: ['#3', '2,140'],
    purchase: 'purchases'

  },
  {
    userName: 'Henry, Arthur',
    avatarURL: ArthurImg,
    achievements: ['#4', '2,140'],
    purchase: 'purchases'
    
  }, {
    userName: 'Henry, Arthur',
    avatarURL: ArthurImg,
    achievements: ['#5', '2,140'],
    purchase: 'purchases'

  },
]
export interface IInitialSeller{
  id: string
  userName: string,
  avatarURL: StaticImageData,
  email: string,
  number: string,
  date: string,
  purchases: string,
  money: string,
  status: boolean,
}
export const initialSellers : IInitialSeller []  = [
  { 
    id: '1',
    userName: 'Kathryn Murphy',
    avatarURL: KristinImg,
    email: 'smallpaul@me.com',
    number: '(702)555-0122',
    date: '2023/11/1, 14:20',
    purchases: '11',
    money: '($4400.00)',
    status: false,
    
  },
  {
    id: '2',
    userName: 'Henry, Arthur',
    avatarURL: ArthurImg,
    email: 'smallpaul@me.com',
    number: '(702)555-0122',
    date: '2023/11/2, 14:20',
    purchases: '12',
    money: '($4400.00)',
    status: false,
  },
  {
    id: '3',
    userName: 'Kathryn Murphy',
    avatarURL: KristinImg,
    email: 'smallpaul@me.com',
    number: '(702)555-0122',
    date: '2023/11/3, 14:20',
    purchases: '13',
    money: '($4400.00)',
    status: false,
  },
  {
    id: '4',
    userName: 'Kathryn Murphy',
    avatarURL: KristinImg,
    email: 'smallpaul@me.com',
    number: '(702)555-0122',
    date: '2023/11/4, 14:20',
    purchases: '14',
    money: '($4400.00)',
    status: false,
  },
  {
    id: '5',
    userName: 'Black Marvin',
    avatarURL: MarvinImg,
    email: 'smallpaul@me.com',
    number: '(702)555-0122',
    date: '2023/11/5, 14:20',
    purchases: '15',
    money: '($4400.00)',
    status: false,
  }, {
    id: '6',
    userName: 'Kathryn Murphy',
    avatarURL: KristinImg,
    email: 'smallpaul@me.com',
    number: '(702)555-0122',
    date: '2023/11/6, 14:20',
    purchases: '16',
    money: '($4400.00)',
    status: false,
  },
  {
    id: '7',
    userName: 'Henry, Arthur',
    avatarURL: ArthurImg,
    email: 'smallpaul@me.com',
    number: '(702)555-0122',
    date: '2023/11/7, 14:20',
    purchases: '17',
    money: '($4400.00)',
    status: false,
  },
  {
    id: '8',
    userName: 'Kathryn Murphy',
    avatarURL: KristinImg,
    email: 'smallpaul@me.com',
    number: '(702)555-0122',
    date: '2023/11/8, 14:20',
    purchases: '18',
    money: '($4400.00)',
    status: false,
  },
  {
    id: '9',
    userName: 'Kathryn Murphy',
    avatarURL: KristinImg,
    email: 'smallpaul@me.com',
    number: '(702)555-0122',
    date: '2023/11/9, 14:20',
    purchases: '19',
    money: '($4400.00)',
    status: false,
  },
  {
    id: '10',
    userName: 'Black Marvin',
    avatarURL: MarvinImg,
    email: 'smallpaul@me.com',
    number: '(702)555-0122',
    date: '2023/11/10, 14:20',
    purchases: '20',
    money: '($4400.00)',
    status: false,
  }, {
    id: '11',
    userName: 'Kathryn Murphy',
    avatarURL: KristinImg,
    email: 'smallpaul@me.com',
    number: '(702)555-0122',
    date: '2023/11/11, 14:20',
    purchases: '21',
    money: '($4400.00)',
    status: false,
  },
  {
    id: '12',
    userName: 'Henry, Arthur',
    avatarURL: ArthurImg,
    email: 'smallpaul@me.com',
    number: '(702)555-0122',
    date: '2023/11/12, 14:20',
    purchases: '22',
    money: '($4400.00)',
    status: false,
  },
  {
    id: '13',
    userName: 'Kathryn Murphy',
    avatarURL: KristinImg,
    email: 'smallpaul@me.com',
    number: '(702)555-0122',
    date: '2023/11/13, 14:20',
    purchases: '23',
    money: '($4400.00)',
    status: false,
  },
  {id: '14',
    userName: 'Kathryn Murphy',
    avatarURL: KristinImg,
    email: 'smallpaul@me.com',
    number: '(702)555-0122',
    date: '2023/11/14, 14:20',
    purchases: '24',
    money: '($4400.00)',
    status: false,
  },
  {id: '15',
    userName: 'Black Marvin',
    avatarURL: MarvinImg,
    email: 'smallpaul@me.com',
    number: '(702)555-0122',
    date: '2023/11/15, 14:20',
    purchases: '25',
    money: '($4400.00)',
    status: false,
  },
]