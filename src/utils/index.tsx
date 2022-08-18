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
  "https://images.unsplash.com/photo-1631102403318-e4e5e7572b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTczMjMxOA&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1631102403318-e4e5e7572b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTczMjMxOA&ixlib=rb-1.2.1&q=80&w=1080",
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

export const BOOK_PAGES = [
  "https://up.mangadudes.com/bleach/18/bleach-9337-e60a76a126bc6ecd3211aeaad51a7dba.jpg",
  "https://up.mangadudes.com/bleach/18/bleach-9338-89fcdb98b22c94781ba2846ea2e562c3.jpg",
  "https://up.mangadudes.com/bleach/18/bleach-9339-5d0e73373eb814d65b18bfa4ca533be8.jpg",
  "https://up.mangadudes.com/bleach/18/bleach-9340-c1220292956ae4cc1df0676e2d01c2e1.jpg",
  "https://up.mangadudes.com/bleach/18/bleach-9341-159bcbae27446cd1d6c964b4b70af020.jpg",
  "https://up.mangadudes.com/bleach/18/bleach-9342-024e1db41ff0ea6e6bc47574b209fda4.jpg",
  "https://up.mangadudes.com/bleach/18/bleach-9344-b14e956a08b6998dd00a61f89db84238.jpg",
];

export const BOOK_TEXT_PAGES = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus laoreet non curabitur gravida. Nec ultrices dui sapien eget mi proin sed libero. Et egestas quis ipsum suspendisse ultrices. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Orci a scelerisque purus semper eget. Ut aliquam purus sit amet. Risus at ultrices mi tempus imperdiet. Velit dignissim sodales ut eu. Enim sit amet venenatis urna cursus eget nunc scelerisque. Gravida arcu ac tortor dignissim convallis aenean et. Nisl tincidunt eget nullam non nisi est sit. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Dui nunc mattis enim ut tellus elementum sagittis vitae. Enim neque volutpat ac tincidunt vitae semper quis lectus. Mattis molestie a iaculis at erat pellentesque adipiscing. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Odio tempor orci dapibus ultrices in iaculis nunc sed augue.

  Eget dolor morbi non arcu risus. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Mattis vulputate enim nulla aliquet porttitor. Amet dictum sit amet justo donec enim diam. At augue eget arcu dictum varius duis at. Nulla pellentesque dignissim enim sit amet venenatis urna. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Arcu ac tortor dignissim convallis aenean et tortor at. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Sem integer vitae justo eget magna fermentum. At quis risus sed vulputate odio ut enim blandit. Nullam eget felis eget nunc. Est ante in nibh mauris cursus mattis molestie. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Fringilla ut morbi tincidunt augue interdum velit. Sit amet facilisis magna etiam.
  
  Dolor sit amet consectetur adipiscing elit ut. Aliquam ultrices sagittis orci a scelerisque purus. Commodo nulla facilisi nullam vehicula ipsum a. Urna condimentum mattis pellentesque id nibh. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Volutpat ac tincidunt vitae semper quis lectus nulla. Fringilla urna porttitor rhoncus dolor purus. Sed cras ornare arcu dui vivamus. Id consectetur purus ut faucibus pulvinar elementum integer enim. Leo vel fringilla est ullamcorper eget nulla. Neque convallis a cras semper auctor. Mi quis hendrerit dolor magna. Cras adipiscing enim eu turpis egestas pretium. Auctor neque vitae tempus quam pellentesque nec. Ut diam quam nulla porttitor massa id neque. Eros donec ac odio tempor. A condimentum vitae sapien pellentesque habitant morbi tristique senectus et.
  
  Pharetra convallis posuere morbi leo urna molestie at elementum. In nibh mauris cursus mattis molestie. Egestas sed sed risus pretium. Tristique senectus et netus et. Consectetur lorem donec massa sapien faucibus et. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. At consectetur lorem donec massa sapien faucibus et molestie ac. Tristique risus nec feugiat in fermentum posuere urna. Mattis pellentesque id nibh tortor id. Tellus mauris a diam maecenas sed enim ut sem viverra. Mi ipsum faucibus vitae aliquet nec ullamcorper. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Sed nisi lacus sed viverra tellus in hac.
  
  Magna fringilla urna porttitor rhoncus. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Augue lacus viverra vitae congue eu consequat ac felis donec. Semper auctor neque vitae tempus quam. Ipsum dolor sit amet consectetur adipiscing. Nulla aliquet porttitor lacus luctus accumsan. Massa vitae tortor condimentum lacinia quis vel eros. Erat pellentesque adipiscing commodo elit at. Auctor elit sed vulputate mi sit amet mauris commodo. Massa sed elementum tempus egestas sed. Tortor aliquam nulla facilisi cras fermentum. Duis at tellus at urna condimentum mattis pellentesque. Turpis egestas sed tempus urna et pharetra pharetra massa. Mauris nunc congue nisi vitae. Mattis aliquam faucibus purus in massa tempor nec. Quis eleifend quam adipiscing vitae proin sagittis nisl. Tristique senectus et netus et malesuada fames ac turpis.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum. Nunc faucibus a pellentesque sit amet. Sed adipiscing diam donec adipiscing tristique. Consectetur purus ut faucibus pulvinar elementum integer. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Odio tempor orci dapibus ultrices in. Dolor morbi non arcu risus quis varius quam. Diam sollicitudin tempor id eu nisl. Egestas dui id ornare arcu odio ut sem. Cursus euismod quis viverra nibh cras pulvinar. Velit dignissim sodales ut eu sem integer vitae justo eget.

  In iaculis nunc sed augue lacus viverra vitae. Tincidunt arcu non sodales neque sodales ut. Nisl vel pretium lectus quam id leo in. Velit dignissim sodales ut eu sem. Egestas maecenas pharetra convallis posuere. Tortor id aliquet lectus proin nibh nisl. Enim ut tellus elementum sagittis vitae et. Gravida quis blandit turpis cursus in hac habitasse platea. Erat velit scelerisque in dictum non consectetur a erat nam. Ut etiam sit amet nisl purus in mollis nunc sed. Diam sollicitudin tempor id eu. Sit amet mattis vulputate enim nulla aliquet porttitor. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Non diam phasellus vestibulum lorem sed risus. Nulla facilisi cras fermentum odio eu feugiat. Nisl nunc mi ipsum faucibus. Eu turpis egestas pretium aenean. Suscipit adipiscing bibendum est ultricies. Neque volutpat ac tincidunt vitae semper quis. Quis varius quam quisque id diam vel.
  
  Lorem donec massa sapien faucibus et molestie ac feugiat. Amet risus nullam eget felis eget nunc. Pharetra sit amet aliquam id. Integer eget aliquet nibh praesent tristique. Diam phasellus vestibulum lorem sed risus ultricies. Sed arcu non odio euismod lacinia at quis risus. Pharetra vel turpis nunc eget. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Magna fringilla urna porttitor rhoncus dolor purus non enim. In massa tempor nec feugiat. Est sit amet facilisis magna etiam tempor orci eu. Pellentesque elit ullamcorper dignissim cras. Leo integer malesuada nunc vel risus. Enim eu turpis egestas pretium. In tellus integer feugiat scelerisque varius morbi enim. Purus in mollis nunc sed id. Dui faucibus in ornare quam viverra orci sagittis eu. Vitae congue mauris rhoncus aenean vel elit scelerisque.
  
  Mauris sit amet massa vitae. Sollicitudin ac orci phasellus egestas tellus. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Enim nulla aliquet porttitor lacus. Ac feugiat sed lectus vestibulum mattis ullamcorper. Sit amet risus nullam eget felis eget nunc lobortis mattis. Et malesuada fames ac turpis egestas. At varius vel pharetra vel turpis. Non sodales neque sodales ut etiam sit amet nisl. Fringilla ut morbi tincidunt augue interdum velit euismod in.
  
  Laoreet id donec ultrices tincidunt arcu non sodales neque. Amet mattis vulputate enim nulla. Aliquet enim tortor at auctor. Scelerisque in dictum non consectetur a erat. Semper eget duis at tellus at urna. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Id nibh tortor id aliquet lectus proin nibh nisl. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Quam id leo in vitae turpis. Tempus iaculis urna id volutpat lacus laoreet. Ornare arcu odio ut sem nulla pharetra diam. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Ut enim blandit volutpat maecenas.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Nisl suscipit adipiscing bibendum est. Congue eu consequat ac felis donec et odio pellentesque. Vitae congue mauris rhoncus aenean vel elit scelerisque. Dui sapien eget mi proin sed. Ultrices tincidunt arcu non sodales neque sodales ut. Lacus laoreet non curabitur gravida arcu ac tortor. Aliquet enim tortor at auctor urna nunc id cursus. Sed enim ut sem viverra aliquet eget sit amet. Euismod nisi porta lorem mollis aliquam. Pretium viverra suspendisse potenti nullam ac tortor vitae. Orci eu lobortis elementum nibh tellus molestie nunc. Cras tincidunt lobortis feugiat vivamus at. Praesent tristique magna sit amet purus gravida quis blandit. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sagittis eu volutpat odio facilisis mauris sit amet massa. Imperdiet massa tincidunt nunc pulvinar sapien. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Nec dui nunc mattis enim ut tellus.

  Risus commodo viverra maecenas accumsan lacus. Augue interdum velit euismod in. Enim eu turpis egestas pretium aenean pharetra magna ac. Cras tincidunt lobortis feugiat vivamus at. Commodo viverra maecenas accumsan lacus. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Feugiat in ante metus dictum at tempor. Libero id faucibus nisl tincidunt. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Purus in massa tempor nec feugiat. Sagittis eu volutpat odio facilisis mauris sit amet. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Quisque non tellus orci ac auctor augue mauris augue.
  
  Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Sed lectus vestibulum mattis ullamcorper. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Dolor sit amet consectetur adipiscing. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Lacus vel facilisis volutpat est velit. Amet risus nullam eget felis eget nunc. Leo urna molestie at elementum eu facilisis sed. Odio ut sem nulla pharetra diam sit. Iaculis nunc sed augue lacus viverra vitae congue eu. Pulvinar mattis nunc sed blandit libero volutpat. Blandit cursus risus at ultrices mi tempus. Proin fermentum leo vel orci porta. Facilisi nullam vehicula ipsum a arcu.
  
  Ultricies mi eget mauris pharetra et. Fringilla est ullamcorper eget nulla. Turpis egestas sed tempus urna et. Fermentum dui faucibus in ornare quam viverra. Nibh venenatis cras sed felis. Et tortor at risus viverra adipiscing. Tellus id interdum velit laoreet id. Ut etiam sit amet nisl purus. Tincidunt tortor aliquam nulla facilisi. At ultrices mi tempus imperdiet. Orci nulla pellentesque dignissim enim sit amet venenatis. Velit euismod in pellentesque massa placerat. Magna ac placerat vestibulum lectus mauris. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Sapien et ligula ullamcorper malesuada proin. Platea dictumst quisque sagittis purus sit amet volutpat. Sit amet nisl suscipit adipiscing bibendum est.
  
  Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Ac feugiat sed lectus vestibulum. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Nibh tortor id aliquet lectus. Tellus orci ac auctor augue mauris augue neque gravida. Sed ullamcorper morbi tincidunt ornare. Ac auctor augue mauris augue. Condimentum vitae sapien pellentesque habitant morbi tristique. Vitae et leo duis ut diam quam nulla. Varius quam quisque id diam vel quam elementum pulvinar. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Neque volutpat ac tincidunt vitae semper quis lectus. Habitant morbi tristique senectus et netus. Est ullamcorper eget nulla facilisi etiam.`,
];
