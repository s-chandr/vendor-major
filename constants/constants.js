const onboarding_screens = [
  {
    id: 1,
    backgroundImage: require("../assets/images/background_01.png"),
    bannerImage: require("../assets/images/great_food.png"),
    titleE: "Choose The Services You Provide",
    descriptionE: "For the services you provide, we’ll hook you up with the best customers in the city.",
    titleH: "आपके द्वारा प्रदान की जाने वाली सेवाओं का चयन करें",
    descriptionH: "आपके द्वारा प्रदान की जाने वाली सेवाओं के लिए, हम आपको शहर के सर्वश्रेष्ठ ग्राहकों से जोड़ेंगे।"
  },
  {
    id: 2,
    backgroundImage: require("../assets/images/background_02.png"),
    bannerImage: require("../assets/images/favourite_food.png"),
    titleE: "Process Laundry The Modern Way",
    descriptionE: "Receive orders on your mobile phone hassle-free!",
    titleH: "लांड्री का आधुनिक तरीका अपनाएं",
    descriptionH: "बिना किसी परेशानी के अपने मोबाइल फोन पर ऑर्डर प्राप्त करें।"
  },
  {
    id: 3,
    backgroundImage: require("../assets/images/background_01.png"),
    bannerImage: require("../assets/images/hot_delivery.png"),
    titleE: "Pickup & Delivery Is On Us!",
    descriptionE: "No more pickup and drop for you, it's on us!",
    titleH: "पिकअप और डिलीवरी हम पर छोड़ दें!",
    descriptionH: "अब ग्राहकों से कपड़ों के पिकअप और डिलीवरी के लिए परेशान होने की जरूरत नहीं है।"
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
  myearnings: "My Earnings"
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
