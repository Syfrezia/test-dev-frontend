// Task 1: Data array dengan merepresentasikan jenis, ras, nama, dan karakteristik hewan peliharaan.
export const pets = [
  {
    name: 'Otto',
    type: 'anjing',
    race: 'Golden Retriever',
    description: 'Energik dan senang bermain bola.',
  },
  {
    name: 'Max',
    type: 'anjing',
    race: 'Siberian Husky',
    description: 'Bulu lebat dan mata biru.',
  },
  {
    name: 'Bob',
    type: 'anjing',
    race: 'Beagle',
    description: 'Selalu ceria dan aktif mengajak bermain di taman.',
  },
  {
    name: 'Luna',
    type: 'kucing',
    race: 'Persia',
    description: 'Anggun dan manja.',
  },
  {
    name: 'Milo',
    type: 'kucing',
    race: 'British Shorthair',
    description: 'Cerdas dan aktif.',
  },
  {
    name: 'Nana',
    type: 'ikan',
    race: 'Koi',
    description: 'Indah.',
  },
  {
    name: 'Goldie',
    type: 'ikan',
    race: 'Ikan Mas',
    description: 'Berwarna cerah.',
  },
];

export const favorites = ['Otto', 'Luna', 'Milo', 'Max'];

// Array untuk task 7
export const arrayOfNum = [15, 18, 3, 9, 6, 2, 12, 14];

// Test Case untuk task 8
export const anagramTestCases = [
  { str1: 'listen', str2: 'silent', expected: true },
  { str1: 'triangle', str2: 'integral', expected: true },
  { str1: 'apple', str2: 'pale', expected: false },
  { str1: 'Astronomer', str2: 'Moon starer', expected: true },
  { str1: 'The Morse Code', str2: 'Here come dots', expected: true },
  { str1: 'Hello', str2: 'World', expected: false },
];
