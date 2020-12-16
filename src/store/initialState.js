/* eslint-disable max-len */
const initialGoods = [
  {
    id: 1,
    title: 'Шампунь',
    image: 'shampoo1.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    price: 200,
    colors: [
      'Желтый',
      'Красный',
      'Зеленый',
      'Золотой',
      'Синий',
      'Фиолетовый',
      'Оранжевый',
    ],
    sizes: [
      '100',
      '200',
      '300',
    ],
    isNew: false,
  },
  {
    id: 2,
    title: 'Шампунь',
    image: 'shampoo2.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    price: 300,
    colors: [
      'Желтый',
      'Красный',
      'Зеленый',
      'Золотой',
      'Синий',
      'Фиолетовый',
      'Оранжевый',
    ],
    sizes: [
      '100',
      '200',
      '300',
    ],
    isNew: false,
  },
  {
    id: 3,
    title: 'Шампунь',
    image: 'shampoo3.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    price: 250,
    colors: [
      'Желтый',
      'Красный',
      'Зеленый',
      'Золотой',
      'Синий',
      'Фиолетовый',
      'Оранжевый',
    ],
    sizes: [
      '100',
      '200',
      '300',
    ],
    isNew: true,
  },
];

const initialState = {
  goods: initialGoods,
  basket: [],
};

export default initialState;
