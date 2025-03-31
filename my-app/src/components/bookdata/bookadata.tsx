const booksData = [
  {
    id: "1",
    name: "The Fellowship of the Ring",
    imageUrl: "/fellow.jpg",
    longDescription:
      "The first volume of The Lord of the Rings. Frodo Baggins inherits the One Ring and sets off on a perilous journey to Mount Doom, joined by the Fellowship of the Ring.",
  },
  {
    id: "2",
    name: "The Two Towers",
    imageUrl: "/ring2.jpg",
    longDescription:
      "The second volume of The Lord of the Rings. The Fellowship is divided, with Aragorn, Legolas, and Gimli tracking the kidnapped hobbits while Frodo and Sam continue towards Mordor with Gollum as their guide.",
  },
  {
    id: "3",
    name: "The Return of the King",
    imageUrl: "/ring3.jpg",
    longDescription:
      "The final volume of The Lord of the Rings. As Sauron's forces wage war on Gondor, Frodo and Sam face their final challenge in the quest to destroy the One Ring.",
  },
  {
    id: "4",
    name: "The Silmarillion",
    imageUrl: "/silmarillion.jpg",
    longDescription:
      "A collection of mythopoeic stories detailing the creation of Middle-earth, the rise and fall of great kingdoms, and the first war against Morgoth, the first Dark Lord.",
    chapters: [
      { id: "4-1", name: "Ainulindalë" },
      { id: "4-2", name: "Valaquenta" },
      { id: "4-3", name: "Quenta Silmarillion" },
      { id: "4-4", name: "Akallabêth" },
      { id: "4-5", name: "Of the Rings of Power and the Third Age" },
    ],
  },
  {
    id: "5",
    name: "An Unexpected Journey",
    imageUrl: "/hobbitt.jpg",
    longDescription:
      "The first film in The Hobbit trilogy. Bilbo Baggins is recruited by Gandalf and a company of dwarves to help reclaim their homeland from the dragon Smaug.",
    chapters: [
      { id: "1-1", name: "An Unexpected Party" },
      { id: "1-2", name: "Roast Mutton" },
      { id: "1-3", name: "A Short Rest" },
      { id: "1-4", name: "Over Hill and Under Hill" },
      { id: "1-5", name: "Riddles in the Dark" },
    ],
  },

  {
    id: "6",
    name: "The Desolation of Smaug",
    imageUrl: "/hobbit2.jpg",
    longDescription:
      "The second film in The Hobbit trilogy. Bilbo and the company continue their quest, encountering the dangerous Mirkwood forest, the elves of Thranduil, and the dragon Smaug.",
    chapters: [
      { id: "2-1", name: "Queer Lodgings" },
      { id: "2-2", name: "Flies and Spiders" },
      { id: "2-3", name: "Barrels Out of Bond" },
      { id: "2-4", name: "A Warm Welcome" },
      { id: "2-5", name: "Inside Information" },
    ],
  },
  {
    id: "7",
    name: "The Battle of the Five Armies",
    imageUrl: "/hobbit3.jpg",
    longDescription:
      "The final film in The Hobbit trilogy. After the slaying of Smaug, factions clash over the Lonely Mountain's treasure while Bilbo tries to prevent unnecessary bloodshed.",
    chapters: [
      { id: "3-1", name: "Not at Home" },
      { id: "3-2", name: "Fire and Water" },
      { id: "3-3", name: "The Gathering of the Clouds" },
      { id: "3-4", name: "The Clouds Burst" },
      { id: "3-5", name: "The Last Stage" },
    ],
  },
];

export default booksData;
