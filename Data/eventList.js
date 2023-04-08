const date = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',]
const currentMonth = date[(new Date().getMonth())]

export const eventList = [
  {
    _id: 0,
    title: ["Women Prayer And Success Service"],
    theme: "",
    emphasis: "Rising above challenges and Delays",
    image: "women2.jpg",
    endAdvert: "03-05-2023",
    startAdvert: "31-12-2023",
    eventDate: `1st Saturday in ${currentMonth}`,
    time: "8.00am",
    venue: "Church Auditorum",
    audience: ["Women Program"],
    type: ["Monthly"],
    featuring: [
      "Women deliverance",
      "Success Power",
      "Breakthrough for Women",
      "Women Empowerment",
      "Healing and Deliverance",
      "Breakthrough for my husband",
    ],
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
     Facere dicta necessitatibus nihil pariatur magnam excepturi, 
     aut provident accusantium alias libero, \n \n culpa quas ipsum deleniti a
     liquid nam. Minima temporibus ducimus soluta harum aperiam quisquam 
     quia fugit vero aliquid eum natus itaque saepe error, ipsam voluptate 
     excepturi cum sequi molestias? Voluptatum, \n\n enim mollitia error nesciunt
      repellendus ducimus praesentium numquam veniam commodi, laboriosam 
      quae accusantium nulla recusandae consectetur porro nam minus nostrum!
       Voluptate, quo in. Iure minus, \n\n eveniet dolorem excepturi quasi 
       cupiditate vel quam tempore dicta possimus itaque vitae aspernatur 
       similique ipsam laborum, enim numquam nobis perferendis impedit 
    quos explicabo facere suscipit deleniti. \n\n eveniet dolorem excepturi quasi 
    cupiditate vel quam tempore dicta possimus itaque vitae aspernatur 
    similique ipsam laborum, enim numquam nobis perferendis impedit 
 quos explicabo facere suscipit deleniti. \n\n eveniet dolorem excepturi quasi 
 cupiditate vel quam tempore dicta possimus itaque vitae aspernatur 
 similique ipsam laborum, enim numquam nobis perferendis impedit 
quos explicabo facere suscipit deleniti.`,
  },

  {
    _id: 1,
    title: ["Teens Hub"],
    theme: "",
    emphasis: "Gaining self confidence and courage",
    image: "girls-playing.jpg",
    endAdvert: "31-12-2023",
    startAdvert: "03-01-2023",
    eventDate: `2nd Sunday in ${currentMonth}`,
    time: "3.00pm",
    venue: "Church Auditorum",
    audience: ["Teens"],
    type: ["Monthly"],
    featuring: [
      "Teens Leadership empowerment",
      "Success Power",
      "Healing and deliverance for Teens",
      "Teens Empowerment",
      "Fun and Games",
      "Debates and Public Speaking",
      "Teens Mentorship",
      "Question and Answers"
    ],
    content:  `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Facere dicta necessitatibus nihil pariatur magnam excepturi, 
    aut provident accusantium alias libero, \n \n culpa quas ipsum deleniti a
    liquid nam. Minima temporibus ducimus soluta harum aperiam quisquam 
    quia fugit vero aliquid eum natus itaque saepe error, ipsam voluptate 
    excepturi cum sequi molestias? Voluptatum, \n\n enim mollitia error nesciunt
     repellendus ducimus praesentium numquam veniam commodi, laboriosam 
     quae accusantium nulla recusandae consectetur porro nam minus nostrum!
      Voluptate, quo in. Iure minus, \n\n eveniet dolorem excepturi quasi 
      cupiditate vel quam tempore dicta possimus itaque vitae aspernatur 
      similique ipsam laborum, enim numquam nobis perferendis impedit 
   quos explicabo facere suscipit deleniti. \n\n eveniet dolorem excepturi quasi 
   cupiditate vel quam tempore dicta possimus itaque vitae aspernatur 
   similique ipsam laborum, enim numquam nobis perferendis impedit 
quos explicabo facere suscipit deleniti. \n\n eveniet dolorem excepturi quasi 
cupiditate vel quam tempore dicta possimus itaque vitae aspernatur 
similique ipsam laborum, enim numquam nobis perferendis impedit 
quos explicabo facere suscipit deleniti.`,
  },
  
  {
    _id: 2,
    title: ["1st Sons & Daughters Forum"],
    theme: "",
    emphasis: "Winning in times of adversity",
    image: "boys-girls-chatting.jpg",
    endAdvert: "31-12-2023",
    startAdvert: "03-01-2023",
    eventDate: `3rd Saturday in ${currentMonth}`,
    time: "8.00am",
    venue: "Church Venue",
    audience: ["First Sons & Daughters"],
    type: ["Monthly"],
    featuring: [
      "Breaking the foundational courses",
      "Self Mastery and Courage",
      "Wisdom for COnfronting Issues",
      "Healing and Deliverance",
      "Capacity Building",
    ],
    content:  `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Facere dicta necessitatibus nihil pariatur magnam excepturi, 
    aut provident accusantium alias libero, \n \n culpa quas ipsum deleniti a
    liquid nam. Minima temporibus ducimus soluta harum aperiam quisquam 
    quia fugit vero aliquid eum natus itaque saepe error, ipsam voluptate 
    excepturi cum sequi molestias? Voluptatum, \n\n enim mollitia error nesciunt
     repellendus ducimus praesentium numquam veniam commodi, laboriosam 
     quae accusantium nulla recusandae consectetur porro nam minus nostrum!
      Voluptate, quo in. Iure minus, \n\n eveniet dolorem excepturi quasi 
      cupiditate vel quam tempore dicta possimus itaque vitae aspernatur 
      similique ipsam laborum, enim numquam nobis perferendis impedit 
   quos explicabo facere suscipit deleniti. \n\n eveniet dolorem excepturi quasi 
   cupiditate vel quam tempore dicta possimus itaque vitae aspernatur 
   similique ipsam laborum, enim numquam nobis perferendis impedit 
quos explicabo facere suscipit deleniti. \n\n eveniet dolorem excepturi quasi 
cupiditate vel quam tempore dicta possimus itaque vitae aspernatur 
similique ipsam laborum, enim numquam nobis perferendis impedit 
quos explicabo facere suscipit deleniti.`,
  },


  {
    _id: 3,
    title: ["Girls & Ladies Leadership World"],
    theme: "",
    emphasis:  "Winning ways for Decisive Ladies",
    image: "executive-lady.jpg",
    endAdvert: "31-12-2023",
    startAdvert: "03-01-2023",
    eventDate: `Last Sunday in ${currentMonth}`,
    time: "3.00pm",
    venue: "Church Auditorum",
    audience: ["Women", 'Ladies', 'Youths'],
    type: ["Monthly"],
    featuring: [
      "Breaking the foundational courses",
      "Self Mastery and Courage",
      "Wisdom for COnfronting Issues",
      "Healing and Deliverance",
      "Capacity Building",
    ],
    content:  `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Facere dicta necessitatibus nihil pariatur magnam excepturi, 
    aut provident accusantium alias libero, \n \n culpa quas ipsum deleniti a
    liquid nam. Minima temporibus ducimus soluta harum aperiam quisquam 
    quia fugit vero aliquid eum natus itaque saepe error, ipsam voluptate 
    excepturi cum sequi molestias? Voluptatum, \n\n enim mollitia error nesciunt
     repellendus ducimus praesentium numquam veniam commodi, laboriosam 
     quae accusantium nulla recusandae consectetur porro nam minus nostrum!
      Voluptate, quo in. Iure minus, \n\n eveniet dolorem excepturi quasi 
      cupiditate vel quam tempore dicta possimus itaque vitae aspernatur 
      similique ipsam laborum, enim numquam nobis perferendis impedit 
   quos explicabo facere suscipit deleniti. \n\n eveniet dolorem excepturi quasi 
   cupiditate vel quam tempore dicta possimus itaque vitae aspernatur 
   similique ipsam laborum, enim numquam nobis perferendis impedit 
quos explicabo facere suscipit deleniti. \n\n eveniet dolorem excepturi quasi 
cupiditate vel quam tempore dicta possimus itaque vitae aspernatur 
similique ipsam laborum, enim numquam nobis perferendis impedit 
quos explicabo facere suscipit deleniti.`,
  },

  {
    _id: 4,
    title: ["Communion Power Service"],
    theme: "",
    emphasis: "Starting the month with God's help via the communion",
    image: "prayer.jpg",
    endAdvert: "03-05-2023",
    startAdvert: "31-12-2023",
    eventDate: `1st Sunday in ${currentMonth}`,
    time: "8.00am",
    venue: "Church Venue",
    audience: ["General Public"],
    type: ["Weekly"],
    featuring: [
      'Breakthrough power of the Holy communion',
      'Provoking Power to win all through the new month',
      `Accessing Wisdom from God's Word for ultimate sucees`,
      `Miracle power in the word of God and prayer`,
      `Healings and deliverance though the throne room worship`,
      `Business breakthroughs fro unlimited access to proviaions`,
      `Accessing God's good hand for miraculous testimonies`
    ],
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
     Facere dicta necessitatibus nihil pariatur magnam excepturi, 
     aut provident accusantium alias libero, \n \n culpa quas ipsum deleniti a
     liquid nam. Minima temporibus ducimus soluta harum aperiam quisquam 
     quia fugit vero aliquid eum natus itaque saepe error, ipsam voluptate 
     excepturi cum sequi molestias? Voluptatum, \n\n enim mollitia error nesciunt
      repellendus ducimus praesentium numquam veniam commodi, laboriosam 
      quae accusantium nulla recusandae consectetur porro nam minus nostrum!
       Voluptate, quo in. Iure minus, \n\n eveniet dolorem excepturi quasi 
       cupiditate vel quam tempore dicta possimus itaque vitae aspernatur 
       similique ipsam laborum, enim numquam nobis perferendis impedit 
    quos explicabo facere suscipit deleniti. \n\n eveniet dolorem excepturi quasi 
    cupiditate vel quam tempore dicta possimus itaque vitae aspernatur 
    similique ipsam laborum, enim numquam nobis perferendis impedit 
 quos explicabo facere suscipit deleniti. \n\n eveniet dolorem excepturi quasi 
 cupiditate vel quam tempore dicta possimus itaque vitae aspernatur 
 similique ipsam laborum, enim numquam nobis perferendis impedit 
quos explicabo facere suscipit deleniti.`,
  },

  {
    _id: 5,
    title: ["Anointing & Breakthrough Service"],
    theme: "",
    emphasis: "Breaking limitations and accessing help through the power of the Anointing oil",
    image: "slain-in-gods-presence.jpg",
    endAdvert: "03-05-2023",
    startAdvert: "31-12-2023",
    eventDate: `2nd Sunday in ${currentMonth}`,
    time: "8.00am",
    venue: "Church Venue",
    audience: ["General Public"],
    type: ["Weekly"],
    featuring: [
      'Breakthrough power of the Holy Anointing Oil',
      'Provoking Power to win abattles and secret attacks',
      `Accessing Wisdom from God's Word for ultimate sucees`,
      `Miracle power in the word of God and prayer`,
      `Healings and deliverance though the throne room worship`,
      `Business breakthroughs fro unlimited access to proviaions`,
      `Accessing God's good hand for miraculous testimonies`
    ],
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
     Facere dicta necessitatibus nihil pariatur magnam excepturi, 
     aut provident accusantium alias libero, \n \n culpa quas ipsum deleniti a
     liquid nam. Minima temporibus ducimus soluta harum aperiam quisquam 
     quia fugit vero aliquid eum natus itaque saepe error, ipsam voluptate 
     excepturi cum sequi molestias? Voluptatum, \n\n enim mollitia error nesciunt
      repellendus ducimus praesentium numquam veniam commodi, laboriosam 
      quae accusantium nulla recusandae consectetur porro nam minus nostrum!
       Voluptate, quo in. Iure minus, \n\n eveniet dolorem excepturi quasi 
       cupiditate vel quam tempore dicta possimus itaque vitae aspernatur 
       similique ipsam laborum, enim numquam nobis perferendis impedit 
    quos explicabo facere suscipit deleniti. \n\n eveniet dolorem excepturi quasi 
    cupiditate vel quam tempore dicta possimus itaque vitae aspernatur 
    similique ipsam laborum, enim numquam nobis perferendis impedit 
 quos explicabo facere suscipit deleniti. \n\n eveniet dolorem excepturi quasi 
 cupiditate vel quam tempore dicta possimus itaque vitae aspernatur 
 similique ipsam laborum, enim numquam nobis perferendis impedit 
quos explicabo facere suscipit deleniti.`,
  },

  {
    _id: 6,
    title: ["Family & Friends Success Service"],
    theme: "",
    emphasis: "Winning family battles and rising above limitations",
    image: "prayer-worship.jpg",
    endAdvert: "03-05-2023",
    startAdvert: "31-12-2023",
    eventDate: `3rd Sunday in ${currentMonth}`,
    time: "8.00am",
    venue: "Church Venue",
    audience: ["General Public"],
    type: ["Weekly"],
    featuring: [
      'Breaking family curses and hiden foundational battles',
      'Provoking Power to win battles and secret attacks',
      `Accessing Wisdom from God's Word for ultimate sucess`,
      `Miracle power in the word of God and prayer`,
      `Healings and deliverance though the throne room worship`,
      `Business breakthroughs fro unlimited access to proviaions`,
      `Accessing God's good hand for miraculous testimonies`
    ],
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
     Facere dicta necessitatibus nihil pariatur magnam excepturi, 
     aut provident accusantium alias libero, \n \n culpa quas ipsum deleniti a
     liquid nam. Minima temporibus ducimus soluta harum aperiam quisquam 
     quia fugit vero aliquid eum natus itaque saepe error, ipsam voluptate 
     excepturi cum sequi molestias? Voluptatum, \n\n enim mollitia error nesciunt
      repellendus ducimus praesentium numquam veniam commodi, laboriosam 
      quae accusantium nulla recusandae consectetur porro nam minus nostrum!
       Voluptate, quo in. Iure minus, \n\n eveniet dolorem excepturi quasi 
       cupiditate vel quam tempore dicta possimus itaque vitae aspernatur 
       similique ipsam laborum, enim numquam nobis perferendis impedit 
    quos explicabo facere suscipit deleniti. \n\n eveniet dolorem excepturi quasi 
    cupiditate vel quam tempore dicta possimus itaque vitae aspernatur 
    similique ipsam laborum, enim numquam nobis perferendis impedit 
 quos explicabo facere suscipit deleniti. \n\n eveniet dolorem excepturi quasi 
 cupiditate vel quam tempore dicta possimus itaque vitae aspernatur 
 similique ipsam laborum, enim numquam nobis perferendis impedit 
quos explicabo facere suscipit deleniti.`,
  },

];
