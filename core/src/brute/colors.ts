interface ColorsType {
  male: {
    skin: `#${string}`[];
    hair: `#${string}`[];
    clothing: `#${string}`[];
  },
  female: {
    skin: `#${string}`[];
    hair: `#${string}`[];
    clothing: `#${string}`[];
  },
}

const colors: ColorsType = {
  male: {
    skin: [
      '#996600',
      '#eccd57',
      '#cb841b',
      '#d79b75',
      '#fbe6c8',
      '#f8d198',
    ],
    hair: [
      '#784129',
      '#fff9ae',
      '#b85f1d',
      '#4f677d',
      '#df7e37',
      '#fbcd15',
      '#ffaa1e',
      '#952f04',
      '#a2886f',
      '#fff2df',
    ],
    clothing: [
      '#7bad30',
      '#b78104',
      '#bb1111',
      '#559399',
      '#fae31f',
      '#784129',
      '#7a73c8',
      '#fff9ae',
      '#f0dc99',
      '#b6e7a9',
      '#d31818',
      '#b85f1d',
      '#97cbff',
      '#8ba3d7',
      '#df7e37',
      '#d5eaff',
      '#ffaa1e',
      '#cbff97',
      '#ffcc79',
      '#fff2df',
    ],
  },
  female: {
    skin: [
      '#996600',
      '#f8cdc2',
      '#cb841b',
      '#eaaca6',
      '#fbe6c8',
      '#f8d198',
    ],
    hair: [
      '#fff9ae',
      '#b85f1d',
      '#eea2c9',
      '#8e63ad',
      '#fbcd15',
      '#ffaa1e',
      '#952f04',
      '#a2886f',
      '#fff2df',
    ],
    clothing: [
      '#7bad30',
      '#b78104',
      '#bb1111',
      '#559399',
      '#fae31f',
      '#784129',
      '#7a73c8',
      '#fff9ae',
      '#f0dc99',
      '#b6e7a9',
      '#d31818',
      '#b85f1d',
      '#97cbff',
      '#8ba3d7',
      '#d5eaff',
      '#df7e37',
      '#ffaa1e',
      '#cbff97',
      '#ffcc79',
      '#fff2df',
    ],
  },
};

export default colors;