const randomNumber = (min, max) => {
  return Math.floor(Math.random() * max + min);
};

export const generateRandomPics = (length) => {
  return Array.from({ length: length }, (v, i) => i).map(() => {
    let width = randomNumber(200, 300);
    let height = randomNumber(200, 300); // random number between 200 and 300
    return `https://picsum.photos/${width}/${height}`;
  });
};

// const books = generateRandomPics(20);
export const publishers = generateRandomPics(10);
export const books = [
  "https://images.unsplash.com/photo-1629056338948-10eaaf4421f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTczMjI4OA&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1631034602548-63326fd3764b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTczMjMxMw&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1629269185086-2f818fb9d02a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTczMjMxNA&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1631482514423-36eb9ca07387?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTczMjMxNg&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1631102403318-e4e5e7572b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTczMjMxOA&ixlib=rb-1.2.1&q=80&w=1080",
];

export const topics = [
  {
    emoji: "🍻",
    text: "Entertainment",
  },
  {
    emoji: "🐈",
    text: "Cats",
  },
  {
    emoji: "🦾",
    text: "Robots",
  },
  {
    emoji: "🎉",
    text: "Party",
  },
  {
    emoji: "🌍",
    text: "World",
  },
  {
    emoji: "📚",
    text: "Books",
  },
  {
    emoji: "👘",
    text: "Fashion",
  },
  {
    emoji: "📱",
    text: "Applications",
  },
  {
    emoji: "📸",
    text: "Photography",
  },
  {
    emoji: "🧠",
    text: "Ideas",
  },
  {
    emoji: "⚔️",
    text: "War",
  },
  {
    emoji: "💼",
    text: "Business",
  },
  {
    emoji: "🎭",
    text: "Theater",
  },
  {
    emoji: "📮",
    text: "Job",
  },
];

export const categories = [
  {
    name: "Science",
    icon: "",
  },
  {
    name: "Art",
    icon: "",
  },
  {
    name: "Education",
    icon: "",
  },
  {
    name: "Art",
    icon: "",
  },
  {
    name: "Fantasy",
    icon: "",
  },
  {
    name: "Animals",
    icon: "",
  },
  {
    name: "Science",
    icon: "",
  },
  {
    name: "Art",
    icon: "",
  },
  {
    name: "Science",
    icon: "",
  },
  {
    name: "Art",
    icon: "",
  },
  {
    name: "Science",
    icon: "",
  },
  {
    name: "Art",
    icon: "",
  },
  {
    name: "Science",
    icon: "",
  },
  {
    name: "Art",
    icon: "",
  },
  {
    name: "Science",
    icon: "",
  },
  {
    name: "Art",
    icon: "",
  },
];
