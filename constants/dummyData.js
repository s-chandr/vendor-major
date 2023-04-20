import { icons, images } from "./";

const myProfile = {
	name: "My LaundroMateVendor",
	profile_image: images.profile,
	address: "23, Park Road, Lantern Square",
};

const categories = [
	{
		id: 1,
		name: "Daily Wear",
		icon: icons.dailywear,
	},
	{
		id: 2,
		name: "Party Wear",
		icon: icons.partywear,
	},
	{
		id: 3,
		name: "Ornamental",
		icon: icons.ornamental,
	},
];

const regularwash = {
	id: 1,
	name: "Total Revenue Generated",
	description: "",
	categories: [1, 2],
	price: "₹2000",
	Times: "Revenue",
	isFavourite: true,
	image: require("../assets/dummyData/regularwash.png"),
};

const premiumlaundry = {
	id: 2,
	name: "New Orders",
	description: "Newly added",
	categories: [1, 3],
	price: "3",
	Times: "",
	isFavourite: false,
	image: require("../assets/dummyData/premiumlaundry.png"),
};

const regularsteamironing = {
	id: 3,
	name: "Regular Steam Ironing",
	description: "Starting at",
	categories: [1, 2, 3],
	price: "12",
	Times: 55,
	isFavourite: true,
	image: require("../assets/dummyData/regularsteamironing.png"),
};

const heavysteampress = {
	id: 4,
	name: "Count",
	description: "",
	categories: [1, 2],
	price: "30",
	Times: "Total Orders",
	isFavourite: true,
	image: require("../assets/dummyData/heavysteampress.png"),
};

const dryClean = {
	id: 5,
	name: "Dry Cleaning",
	description: "Starting at",
	categories: [2, 3],
	price: "99",
	Times: 75,
	isFavourite: true,
	image: require("../assets/dummyData/dryclean.png"),
};

const curtainCleaning = {
	id: 6,
	name: "Curtain Cleaning",
	description: "Starting at",
	categories: [1, 2, 3],
	price: "249",
	Times: 44,
	isFavourite: true,
	image: require("../assets/dummyData/curtaincleaning.png"),
};

const woolenCare = {
	id: 7,
	name: "Woolen Care",
	description: "Starting at",
	categories: [1, 2],
	price: "249",
	Times: 77,
	isFavourite: true,
	image: require("../assets/dummyData/woolencare.png"),
};

const linenWash = {
	id: 8,
	name: "Linen Wash",
	description: "Starting at",
	categories: [2, 3],
	price: "399",
	Times: 66,
	isFavourite: true,
	image: require("../assets/dummyData/linenwash.png"),
};
const myCards = [
	{
		id: 1,
		name: "Order 1",
		icon: require("../assets/icons/cart.png"),
		card_no: "1234"
	},
	{
		id: 2,
		name: "Order 2",
		icon: require("../assets/icons/cart.png"),
		card_no: "1234"
	},
	{
		id: 3,
		name: "Order 3",
		icon: require("../assets/icons/cart.png"),
		card_no: "1234"
	},

]

const allCards = [
	{
		id: 1,
		name: "cart Pay",
		icon: require("../assets/icons/cart.png")
	},
	{
		id: 2,
		name: "Visa",
		icon: require("../assets/icons/cart.png"),
	},
	{
		id: 3,
		name: "PayPal",
		icon: require("../assets/icons/cart.png"),
	},
	{
		id: 4,
		name: "Google Pay",
		icon: require("../assets/icons/cart.png"),
	},
	{
		id: 5,
		name: "Master Card",
		icon: require("../assets/icons/cart.png"),
	},
]
const menu = [
	{
		id: 1,
		name: "Orders",
		list: [premiumlaundry],
	},
	{
		id: 2,
		name: "Summary",
		list: [regularwash, heavysteampress],
	},


	// {
	//   id: 3,
	//   name: "Summary",
	//   list: [regularwash, , heavysteampress],
	// },
];

const userMap = require("../assets/images/usermap.jpg");


export default {
	myProfile,
	categories,
	menu,
	myCards,
	allCards,
	regularwash,
	premiumlaundry,
	regularsteamironing,
	heavysteampress,
	dryClean,
	curtainCleaning,
	woolenCare,
	linenWash,
	userMap
};
