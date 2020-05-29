const bears = [
  {
    id: 1,
    name: 'Paddington',
    image: 'https://c402277.ssl.cf1.rackcdn.com/photos/16934/images/hero_small/Medium_WW266637.jpg?1551469111',
    fishCaught: 10,
  },
  {
    id: 2,
    name: 'Yogi',
    image: 'https://www.hcn.org/issues/49.22/alaska-in-the-home-of-the-bear/bears-4-jpg/@@images/c7fc0ef9-4461-4e5b-8151-49e108460f7f.jpeg',
    fishCaught: 3,
  },
  {
    id: 3,
    name: 'Teddy',
    image: 'https://bloximages.newyork1.vip.townnews.com/montereycountyweekly.com/content/tncms/assets/v3/editorial/7/23/7239df78-4b4d-11e9-b2b4-6bc306b360e5/5c92a0493ca87.image.jpg',
    fishCaught: 50,
  },
  {
    id: 4,
    name: 'Pooh',
    image: 'https://www.naturepl.com/cache/pcache2/01407315.jpg',
    fishCaught: 23,
  },
  {
    id: 5,
    name: 'Smoky',
    image: 'https://katonahlibrary.org/wp-content/uploads/2017/12/blackbear.jpg',
    fishCaught: 105,
  }
]

const getBears = () => bears;

const setBears = (name, image) => {
  const nextId = Math.max(...bears.map(x => x.id)) + 1;
  const newBear = { 
    bearId: nextId,
    bearName: name,
    bearImage: image,
    fishCaught: 0
  };
  setBears.push(newBear);
}

export default { getBears, setBears }
