const onboarding_screens = [
  {
    id: 1,
    backgroundImage: require("../assets/images/background_01.png"),
    bannerImage: require("../assets/images/favourite_food.png"),
    title: "Choose the services required",
    description: "For your preferred service, we’ll hook you up with exclusive coupon, specials and rewards"
  },
  {
    id: 2,
    backgroundImage: require("../assets/images/background_02.png"),
    bannerImage: require("../assets/images/hot_delivery.png"),
    title: "Scheduled Pickup from Home",
    description: "We make pickups and deliveries fast, as per your convenient time slots."
  },
  {
    id: 3,
    backgroundImage: require("../assets/images/background_01.png"),
    bannerImage: require("../assets/images/great_food.png"),
    title: "Experience the top notch services",
    description: "Neighbourhood live laundry stores offering service as you please, taking care of your hygiene needs."
  }
];

const screens = {
  main_layout: "MainLayout",
  home: "Home",
  search: "Search",
  cart: "Cart",
  favourite: "Favourite",
  notification: "Notification",
  my_wallet: "My Wallet",
};

const bottom_tabs = [
  {
    id: 0,
    label: screens.home,
  },
  {
    id: 1,
    label: screens.search,
  },
  {
    id: 2,
    label: screens.cart,
  },
  {
    id: 3,
    label: screens.favourite,
  },
  {
    id: 4,
    label: screens.notification,
  },
];

const delivery_time = [
  {
    id: 1,
    label: "12 Hours",
  },
  {
    id: 2,
    label: "1 Day",
  },
  {
    id: 3,
    label: "2 Days",
  },
];

const ratings = [
  {
    id: 1,
    label: 1,
  },
  {
    id: 2,
    label: 2,
  },
  {
    id: 3,
    label: 3,
  },
  {
    id: 4,
    label: 4,
  },
  {
    id: 5,
    label: 5,
  },
];

const tags = [
  {
    id: 1,
    label: "Regulars",
  },
  {
    id: 2,
    label: "Dry Clean",
  },
  {
    id: 3,
    label: "Wash",
  },
  {
    id: 4,
    label: "Iron",
  },
  {
    id: 5,
    label: "Roll Press",
  },
  {
    id: 6,
    label: "Steam Press",
  },
  {
    id: 7,
    label: "Starch",
  },
  {
    id: 8,
    label: "Petrol Wash",
  },
];

export default {
  onboarding_screens,
  screens,
  bottom_tabs,
  delivery_time,
  ratings,
  tags,
};
