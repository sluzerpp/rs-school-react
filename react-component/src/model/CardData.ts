export interface IProjectData {
  id: number;
  name: string;
  creator: string;
  tags: string[];
  likes: number;
  views: number;
  img: string;
  date: string;
  isImportant: boolean;
}

export type IFormProjectData = Omit<IProjectData, 'id'>;

export const CardData: IProjectData[] = [
  {
    id: 1,
    name: 'Toko Downtown',
    creator: 'Pokemon',
    tags: ['branding', 'Photography', 'Digital Art'],
    likes: 432,
    views: 1233,
    img: 'https://picsum.photos/1280/1080',
    date: '05.05.2022',
    isImportant: true,
  },
  {
    id: 2,
    name: 'New York Uptown',
    creator: 'Pokemon',
    tags: ['branding', 'Photography', 'Digital Art'],
    likes: 555,
    views: 543,
    img: 'https://picsum.photos/1280/1380',
    date: '05.04.2022',
    isImportant: false,
  },
  {
    id: 3,
    name: 'New GPT Art',
    creator: 'Pokemon',
    tags: ['branding', 'Photography', 'Digital Art'],
    likes: 2,
    views: 773,
    img: 'https://picsum.photos/1080/1280',
    date: '05.05.2022',
    isImportant: true,
  },
  {
    id: 4,
    name: 'Abobus',
    creator: 'Pokemon',
    tags: ['branding', 'Photography', 'Digital Art'],
    likes: 75,
    views: 325,
    img: 'https://picsum.photos/1080/1080',
    date: '07.07.2022',
    isImportant: true,
  },
  {
    id: 5,
    name: 'Can you ever think about god?',
    creator: 'Pokemon',
    tags: ['branding', 'Photography', 'Digital Art'],
    likes: 343,
    views: 549,
    img: 'https://picsum.photos/1280/980',
    date: '01.05.2022',
    isImportant: false,
  },
  {
    id: 6,
    name: 'Death straight up',
    creator: 'Pokemon',
    tags: ['branding', 'Photography', 'Digital Art'],
    likes: 756,
    views: 9000,
    img: 'https://picsum.photos/1380/1080',
    date: '05.09.2022',
    isImportant: false,
  },
  {
    id: 7,
    name: 'Beautiful landscape',
    creator: 'Pokemon',
    tags: ['branding', 'Photography', 'Digital Art'],
    likes: 345,
    views: 435,
    img: 'https://picsum.photos/1280/1580',
    date: '05.05.2022',
    isImportant: false,
  },
  {
    id: 8,
    name: 'O my godness',
    creator: 'Pokemon',
    tags: ['branding', 'Photography', 'Digital Art'],
    likes: 52,
    views: 7541,
    img: 'https://picsum.photos/1080/1280',
    date: '05.05.2022',
    isImportant: false,
  },
  {
    id: 9,
    name: 'Angel And Demon',
    creator: 'Pokemon',
    tags: ['branding', 'Photography', 'Graphic Design'],
    likes: 4,
    views: 13,
    img: 'https://picsum.photos/1280/1280',
    date: '05.05.2022',
    isImportant: false,
  },
  {
    id: 10,
    name: 'I want to go home',
    creator: 'Pokemon',
    tags: ['branding', 'Fine Arts', 'Digital Art'],
    likes: 1043,
    views: 1233,
    img: 'https://picsum.photos/1080/1080',
    date: '',
    isImportant: true,
  },
];
