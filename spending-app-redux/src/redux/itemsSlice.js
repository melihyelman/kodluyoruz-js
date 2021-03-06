import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [
      {
        id: 1,
        title: 'Big Mac',
        price: 2,
        img: 'https://neal.fun/spend/images/big-mac.jpg',
        count: 0,
      },
      {
        id: 2,
        title: 'Flip Flops',
        price: 3,
        img: 'https://neal.fun/spend/images/flip-flops.jpg',
        count: 0,
      },
      {
        id: 3,
        title: 'Coca-Cola Pack',
        price: 5,
        img: 'https://neal.fun/spend/images/coca-cola-pack.jpg',
        count: 0,
      },
      {
        id: 4,
        title: 'Movie Ticket',
        price: 12,
        img: 'https://neal.fun/spend/images/movie-ticket.jpg',
        count: 0,
      },
      {
        id: 5,
        title: 'Book',
        price: 15,
        img: 'https://neal.fun/spend/images/book.jpg',
        count: 0,
      },
      {
        id: 6,
        title: 'Lobster Dinner',
        price: 45,
        img: 'https://neal.fun/spend/images/lobster-dinner.jpg',
        count: 0,
      },
      {
        id: 7,
        title: 'Video Game',
        price: 60,
        img: 'https://neal.fun/spend/images/video-game.jpg',
        count: 0,
      },
      {
        id: 8,
        title: 'Amazon Echo',
        price: 99,
        img: 'https://neal.fun/spend/images/amazon-echo.jpg',
        count: 0,
      },
      {
        id: 9,
        title: 'Year of Netflix',
        price: 100,
        img: 'https://neal.fun/spend/images/year-of-netflix.jpg',
        count: 0,
      },
      {
        id: 10,
        title: 'Air Jordans',
        price: 125,
        img: 'https://neal.fun/spend/images/air-jordans.jpg',
        count: 0,
      },
      {
        id: 11,
        title: 'Airpods',
        price: 199,
        img: 'https://neal.fun/spend/images/airpods.jpg',
        count: 0,
      },
      {
        id: 12,
        title: 'Gaming Console',
        price: 299,
        img: 'https://neal.fun/spend/images/gaming-console.jpg',
        count: 0,
      },
      {
        id: 13,
        title: 'Drone',
        price: 399,
        img: 'https://neal.fun/spend/images/drone.jpg',
        count: 0,
      },
      {
        id: 14,
        title: 'Smartphone',
        price: 699,
        img: 'https://neal.fun/spend/images/smartphone.jpg',
        count: 0,
      },
      {
        id: 15,
        title: 'Bike',
        price: 800,
        img: 'https://neal.fun/spend/images/bike.jpg',
        count: 0,
      },
      {
        id: 16,
        title: 'Kitten',
        price: 1500,
        img: 'https://neal.fun/spend/images/kitten.jpg',
        count: 0,
      },
      {
        id: 17,
        title: 'Puppy',
        price: 1500,
        img: 'https://neal.fun/spend/images/puppy.jpg',
        count: 0,
      },
      {
        id: 18,
        title: 'Auto Rickshaw',
        price: 2300,
        img: 'https://neal.fun/spend/images/auto-rickshaw.jpg',
        count: 0,
      },
      {
        id: 19,
        title: 'Horse',
        price: 2500,
        img: 'https://neal.fun/spend/images/horse.jpg',
        count: 0,
      },
      {
        id: 20,
        title: 'Acre of Farmland',
        price: 3000,
        img: 'https://neal.fun/spend/images/acre-of-farmland.jpg',
        count: 0,
      },
      {
        id: 21,
        title: 'Designer Handbag',
        price: 5500,
        img: 'https://neal.fun/spend/images/designer-handbag.jpg',
        count: 0,
      },
      {
        id: 22,
        title: 'Hot Tub',
        price: 6000,
        img: 'https://neal.fun/spend/images/hot-tub.jpg',
        count: 0,
      },
      {
        id: 23,
        title: 'Luxury Wine',
        price: 7000,
        img: 'https://neal.fun/spend/images/luxury-wine.jpg',
        count: 0,
      },
      {
        id: 24,
        title: 'Diamond Ring',
        price: 10000,
        img: 'https://neal.fun/spend/images/diamond-ring.jpg',
        count: 0,
      },
      {
        id: 25,
        title: 'Jet Ski',
        price: 12000,
        img: 'https://neal.fun/spend/images/jet-ski.jpg',
        count: 0,
      },
      {
        id: 26,
        title: 'Rolex',
        price: 15000,
        img: 'https://neal.fun/spend/images/rolex.jpg',
        count: 0,
      },
      {
        id: 27,
        title: 'Ford F-150',
        price: 30000,
        img: 'https://neal.fun/spend/images/ford-f-150.jpg',
        count: 0,
      },
      {
        id: 28,
        title: 'Tesla',
        price: 75000,
        img: 'https://neal.fun/spend/images/tesla.jpg',
        count: 0,
      },
      {
        id: 29,
        title: 'Monster Truck',
        price: 150000,
        img: 'https://neal.fun/spend/images/monster-truck.jpg',
        count: 0,
      },
      {
        id: 30,
        title: 'Ferrari',
        price: 250000,
        img: 'https://neal.fun/spend/images/ferrari.jpg',
        count: 0,
      },
      {
        id: 31,
        title: 'Single Family Home',
        price: 300000,
        img: 'https://neal.fun/spend/images/single-family-home.jpg',
        count: 0,
      },
      {
        id: 32,
        title: 'Gold Bar',
        price: 700000,
        img: 'https://neal.fun/spend/images/gold-bar.jpg',
        count: 0,
      },
      {
        id: 33,
        title: 'McDonalds Franchise',
        price: 1500000,
        img: 'https://neal.fun/spend/images/mcdonalds-franchise.jpg',
        count: 0,
      },
      {
        id: 34,
        title: 'Superbowl Ad',
        price: 5250000,
        img: 'https://neal.fun/spend/images/superbowl-ad.jpg',
        count: 0,
      },
      {
        id: 35,
        title: 'Yacht',
        price: 7500000,
        img: 'https://neal.fun/spend/images/yacht.jpg',
        count: 0,
      },
      {
        id: 37,
        title: 'M1 Abrams',
        price: 8000000,
        img: 'https://neal.fun/spend/images/m1-abrams.jpg',
        count: 0,
      },
      {
        id: 38,
        title: 'Formula 1 Car',
        price: 15000000,
        img: 'https://neal.fun/spend/images/formula-1-car.jpg',
        count: 0,
      },
      {
        id: 39,
        title: 'Apache Helicopter',
        price: 31000000,
        img: 'https://neal.fun/spend/images/apache-helicopter.jpg',
        count: 0,
      },
      {
        id: 40,
        title: 'Mansion',
        price: 45000000,
        img: 'https://neal.fun/spend/images/mansion.jpg',
        count: 0,
      },
      {
        id: 41,
        title: 'Make a Movie',
        price: 100000000,
        img: 'https://neal.fun/spend/images/make-a-movie.jpg',
        count: 0,
      },
      {
        id: 42,
        title: 'Boeing 747',
        price: 148000000,
        img: 'https://neal.fun/spend/images/boeing-747.jpg',
        count: 0,
      },
      {
        id: 43,
        title: 'Mona Lisa',
        price: 780000000,
        img: 'https://neal.fun/spend/images/mona-lisa.jpg',
        count: 0,
      },
      {
        id: 44,
        title: 'Skyscraper',
        price: 850000000,
        img: 'https://neal.fun/spend/images/skyscraper.jpg',
        count: 0,
      },
      {
        id: 45,
        title: 'Cruise Ship',
        price: 930000000,
        img: 'https://neal.fun/spend/images/cruise-ship.jpg',
        count: 0,
      },
      {
        id: 46,
        title: 'NBA Team',
        price: 2120000000,
        img: 'https://neal.fun/spend/images/nba-team.jpg',
        count: 0,
      },
    ],
    money: 100000000000,
  },
  reducers: {
    changeCount: (state, action) => {
      const { id, count } = action.payload;
      const item = state.items.find((item) => item.id === id);
      const totalPrice = item.price * count;
      if (state.money > totalPrice) {
        item.count = count;
        const m = state.items.reduce(
          (acc, current) => acc + current.price * current.count,
          0
        );
        state.money = 100000000000 - m;
      }
    },
  },
});

export const selectProducts = (state) => state.products.items;
export const selectMoney = (state) => state.products.money;

export const { changeCount } = productsSlice.actions;

export default productsSlice.reducer;
