// Complete product catalog with REAL images from user's photo library
// Images in /images/sweets/ and /images/namkeen/

export function getImage(name, category) {
  return nameImageMap[name] || categoryImageMap[category] || '/images/sweets/GheeMysorepak.jpg';
}

// Direct name → image mapping for every product
const nameImageMap = {
  // Kaju Sweets
  'Kaju Katli': '/images/sweets/kaju katli.jpg',
  'Badam Katli': '/images/sweets/badam katli.jpg',
  'Kaju Items': '/images/sweets/kajumix_B_211120.jpg',
  'Kaju D/F Items': '/images/sweets/kaju D:F item.jpg',
  'Kaju Honey Badam': '/images/sweets/kaju honey badam.jpg',
  'Kaju Pakam': '/images/sweets/kaju_pakam.jpg',
  'Kaju Bites': '/images/sweets/Kaju_Bites.jpg',
  'Badam Bites': '/images/sweets/badam bites.jpg',
  'Pista Bites': '/images/sweets/Pista-bites.jpg',
  'Badam Rakhi': '/images/sweets/badamrakhi.jpg',

  // Kalakand
  'Ajmer Kalakand': '/images/sweets/Ajmer-kalakand.jpg',
  'White Kalakand': '/images/sweets/white-kalakand.jpg',
  'Horlicks Kalakand': '/images/sweets/horlickskalakand.jpg',
  'Honey Kalakand': '/images/sweets/honey kalakand.jpg',
  'Magic Kalakand': '/images/sweets/magic kalakand.jpg',

  // Kova Sweets
  'Kova Bobbatlu': '/images/sweets/kova bobbatlu.jpg',
  'Kova Kajikai': '/images/sweets/kova-kajjikayalu.jpg',
  'Kova Items': '/images/sweets/kovaitems.jpg',
  'Kova Cut Jamun': '/images/sweets/kova cut jamun.jpg',
  'Loose Kova': '/images/sweets/loose kova.jpg',

  // Mysurpak
  'Ghee Mysurpak': '/images/sweets/GheeMysorepak.jpg',
  'Honey Mysurpak': '/images/sweets/honey mysorepak.jpg',
  'Ghee Mysurpak Pieces': '/images/sweets/ghee mysorepak peaces.jpg',
  'Ghee Plate Mysurpak': '/images/sweets/ghee plate mysorepak.jpeg',
  'Dalda Mysurpak': '/images/sweets/dalda mysorepak.jpg',

  // Peda & Burfi
  'Sp Doodh Peda': '/images/sweets/sp doodh peda.jpg',
  'White Doodh Peda': '/images/sweets/white doodh peda.jpg',
  'Icecream Burfi': '/images/sweets/ICECREAM BURFI.JPG',
  'Agra Pan': '/images/sweets/agrapan.jpg',

  // Laddu
  'Motichoor Laddu': '/images/sweets/Motichur-Laddu.jpg',
  'Dry Fruit Laddu': '/images/sweets/dry fruits laddu.jpg',
  'Ghee Annamayya Laddu': '/images/sweets/ghee annamayya laddu.jpg',
  'Sunnundalu': '/images/sweets/sunundalu.jpg',
  'Sadu Laddu': '/images/sweets/SADA LADDU.jpg',
  'Nuvvulu Laddu': '/images/sweets/ NUVVULU LADDU.jpg',
  'Atisaggulu Laddu': '/images/sweets/ATISAGGULU LADDU.jpg',
  'Maramarala Undalu': '/images/sweets/marmarala laddu.jpg',
  'Laddu': '/images/sweets/ladduu.jpg',

  // Bengali Sweets
  'Small Rasagulla': '/images/sweets/small ragulla.jpg',
  'Big Rasagulla': '/images/sweets/big rasgulla.jpg',
  'Big Gulab Jamun': '/images/sweets/big gulabjamun.jpg',
  'Small Gulab Jamun': '/images/sweets/small gulabjamun.jpg',
  'Kala Jamun': '/images/sweets/kala jamun.jpg',
  'White Bengali': '/images/sweets/white bengali.jpg',
  'Bengali Sandwich': '/images/sweets/bengali sandwich.jpg',

  // Halwa
  'Badam Halwa': '/images/sweets/Badam-Halwa.JPG',
  'Dry Fruit Halwa': '/images/sweets/dryfruithalwa.jpg',
  'Black Halwa': '/images/sweets/black halwa.jpg',
  'Bombay Halwa': '/images/sweets/bombay halwa.jpg',
  'Carrot Halwa': '/images/sweets/carrot halwa.jpg',

  // Ariselu
  'Ghee Plain Ariselu': '/images/sweets/ghee plain ariselu.jpg',
  'Ghee Nuvvulu Ariselu': '/images/sweets/ghee nuvvula ariselu.jpg',
  'Oil Plain Ariselu': '/images/sweets/oil plain ariselu.jpg',
  'Oil Nuvvulu Ariselu': '/images/sweets/oil nuvvulu ariselu.jpg',

  // Malpuri
  'Ghee Malpuri': '/images/sweets/ghee malpuri.jpg',
  'Oil Malpuri': '/images/sweets/oil malpuri.jpg',

  // Jangiri
  'Jaangiri': '/images/sweets/KovaJangri.jpg',
  'Paneer Jilebi': '/images/sweets/paneer jilebi.jpg',

  // Bobbatlu
  'Purnam Bobbatlu': '/images/sweets/poornam bobbatlu.jpg',

  // Badusha
  'Badusha': '/images/sweets/badhusha.jpg',
  'Chitti Badusha': '/images/sweets/chitti_badusha.jpg',

  // Kaja & Kajikai
  'Madatha Kaja': '/images/sweets/Madata-Kaja.jpg',
  'Chitti Kaja': '/images/sweets/chitti kaja.jpg',
  'D/F Kajjikayalu': '/images/sweets/d:f kajjikayalu.jpg',
  'Powder Kajjikayalu': '/images/sweets/powder kajjikayalu.jpg',
  'Kova Kajjikayalu': '/images/sweets/kova-kajjikayalu.jpg',
  'Petapuri': '/images/sweets/petapuri.jpg',

  // Chikki
  'Palli Chikki': '/images/sweets/palli chekka.jpg',
  'Nuvvulu Chikki': '/images/sweets/nuvvula chikki.jpg',
  'Dry Fruits Chikki': '/images/sweets/dry fruits chikki.jpg',
  'Boondi Chekka': '/images/sweets/boondi chekka.jpg',

  // Boondi
  'Sweet Boondi': '/images/sweets/sweet boondi.jpg',

  // Papidi
  'Papdi Loose': '/images/sweets/papdi loose.jpg',
  'Papdi Pieces': '/images/sweets/papdi peaces.jpg',

  // Special
  'Almond Biscuits': '/images/sweets/almond biscuits.jpg',

  // ── NAMKEEN / SAVORY ──
  'Samosa': '/images/namkeen/samosa.jpg',
  'Mirchi Bajji': '/images/namkeen/bajji.jpg',
  'Aalu Bonda': '/images/namkeen/aalu bonda.jpg',
  'Kachori': '/images/namkeen/Kachori.jpg',
  'Dry Fruit Samosa': '/images/namkeen/dry fruit samosa.jpg',
  'Kaju Pakodi': '/images/namkeen/KajuPakodi.jpg',
  'Chekka Pakodi': '/images/namkeen/chekkapakodi.jpg',
  'Palli Pakodi': '/images/namkeen/palli pakodi.jpg',
  'Bhakarwadi': '/images/namkeen/bhakarwadi.jpg',
  'Murukulu': '/images/namkeen/murukulu.jpg',
  'Chekodi': '/images/namkeen/chekodi.jpg',
  'Big Chekodi': '/images/namkeen/big chekodi.jpg',
  'Cornflakes Mixture': '/images/namkeen/cornflakes.jpg',
  'Dal Mudi': '/images/namkeen/dalmudi.jpg',
  'Sp Mixture': '/images/namkeen/sp mixture.jpg',
  'Delhi Mixture': '/images/namkeen/delhi mixture.jpg',
  'Boondi Mixture': '/images/namkeen/boondhi mixture.jpg',
  'Dry Fruits Mixture': '/images/namkeen/dryfruits_mixture.jpg',
  'Maramarala Mixture': '/images/namkeen/maramarala mixture.jpg',
  'Marwadi Mixture': '/images/namkeen/marwadi mixture.jpg',
  'Navratna Mixture': '/images/namkeen/navratanmixure.jpg',
  'Varity Mixture': '/images/namkeen/varity mixture.jpg',
  'Atukulu Mix': '/images/namkeen/atukulumix.jpg',
  'Kaara Boondi': '/images/namkeen/KaaraBoondhi.jpg',
  'Sanna Boondi': '/images/namkeen/sanna boondhi.jpg',
  'Butter Chekkalu': '/images/namkeen/butter chekkalu.jpg',
  'Chitti Chekkalu': '/images/namkeen/chitti chekkalu.jpg',
  'Masala Chekkalu': '/images/namkeen/masala chekkalu.jpg',
  'Tapala Chekkalu': '/images/namkeen/TAPALA CHEKKALU.jpg',
  'Chala Chakralu': '/images/namkeen/chala chakralu.jpg',
  'Minapa Chakralu': '/images/namkeen/MinapaChakralu.jpg',
  'Hot Gavvalu': '/images/namkeen/hot gavvalu.webp',
  'Sweet Gavvalu': '/images/namkeen/sweet gavvalu.jpg',
  'Kaju Fry': '/images/namkeen/kajufry.jpg',
  'Vamu Khajalu': '/images/namkeen/vamu khajalu.jpg',
  'Vamu Pusa': '/images/namkeen/vamu pusa.jpg',
  'Sanna Pusa': '/images/namkeen/sanna pusa.jpg',
  'Potarekulu': '/images/namkeen/potarekulu.jpg',
  'Vennundalu': '/images/namkeen/vennundalu.jpg',
  'Potato Chips': '/images/namkeen/potato chips.webp',
  'Ragi Mixture': '/images/namkeen/ragi mixture.jpg',
  'Ghewar': '/images/namkeen/ghewar.jpg',
  'Indrapuri': '/images/namkeen/indrapuri.jpg',
  'Rasmalai': '/images/namkeen/rasmalai.jpg',
  'Basundi': '/images/namkeen/basundi.jpg',
  'Angoor Basundi': '/images/namkeen/Angoor Basundi.jpg',
  'Madras Vadalu': '/images/namkeen/madras vadalu .jpeg',
  'Saggubiyyam Chekkalu': '/images/namkeen/saggubiyyam chekkalu.jpg',
  'Big Saggubiyam Mixture': '/images/namkeen/BIG SAGGUBIYAM MIXTURE.jpg',
  'Small Saggubiyam Mixture': '/images/namkeen/small SAGGUBIYAM MIXTURE.jpg',
  'Vam Chekkalu': '/images/namkeen/vam chekralu.jpg',
  'Chocolate Kalakand': '/images/sweets/magic kalakand.jpg',
  'Jug Kalakand': '/images/namkeen/jug kalakand.jpg',
  'Kova Jaangiri': '/images/sweets/KovaJangri.jpg',
};

const categoryImageMap = {
  'Kaju Sweets': '/images/sweets/kaju katli.jpg',
  'Kalakand': '/images/sweets/Ajmer-kalakand.jpg',
  'Kova Sweets': '/images/sweets/kovaitems.jpg',
  'Peda & Burfi': '/images/sweets/sp doodh peda.jpg',
  'Laddu': '/images/sweets/Motichur-Laddu.jpg',
  'Mysurpak': '/images/sweets/GheeMysorepak.jpg',
  'Bengali Sweets': '/images/sweets/small ragulla.jpg',
  'Halwa': '/images/sweets/Badam-Halwa.JPG',
  'Ariselu': '/images/sweets/ghee plain ariselu.jpg',
  'Malpuri': '/images/sweets/ghee malpuri.jpg',
  'Jangiri': '/images/sweets/KovaJangri.jpg',
  'Bobbatlu': '/images/sweets/poornam bobbatlu.jpg',
  'Badusha': '/images/sweets/badhusha.jpg',
  'Kaja & Kajikai': '/images/sweets/Madata-Kaja.jpg',
  'Chikki': '/images/sweets/palli chekka.jpg',
  'Dry Fruits': '/images/sweets/dry fruits chikki.jpg',
  'Boondi': '/images/sweets/sweet boondi.jpg',
  'Papidi': '/images/sweets/papdi loose.jpg',
  'Special': '/images/sweets/almond biscuits.jpg',
  'Hot & Savory': '/images/namkeen/samosa.jpg',
  'Mixtures': '/images/namkeen/sp mixture.jpg',
  'Chekkalu & Chakralu': '/images/namkeen/butter chekkalu.jpg',
  'Pakodi': '/images/namkeen/KajuPakodi.jpg',
  'Snacks': '/images/namkeen/bhakarwadi.jpg',
};

const rawProducts = [
  {
    "id": 1,
    "name": "Kaju Katli",
    "category": "Kaju Sweets",
    "badge": null,
    "description": "Silver-dressed cashew fudge. The one people ask for by name.",
    "ingredients": [
      "Cashew Nuts",
      "Sugar",
      "Pure Ghee",
      "Cardamom Powder",
      "Edible Silver Leaf (Vark)"
    ],
    "tradition": "Kaju Katli is the undisputed king of Indian mithai. A symbol of prosperity and celebration, it is the most gifted sweet during Diwali across India. The diamond-shaped pieces adorned with edible silver foil represent purity and auspiciousness in Indian tradition.",
    "variants": [
      {
        "weight": "250g",
        "price": 250
      },
      {
        "weight": "500g",
        "price": 500
      },
      {
        "weight": "1kg",
        "price": 1000
      }
    ],
    "reviews": [
      {
        "name": "Priya R.",
        "location": "Guntur",
        "stars": 5,
        "text": "Best Kaju Katli in all of Guntur! Melts in your mouth."
      },
      {
        "name": "Venkat S.",
        "location": "Guntur",
        "stars": 5,
        "text": "We buy only from Murali Sweets for every Diwali. Unmatched quality!"
      },
      {
        "name": "Lakshmi D.",
        "location": "Guntur",
        "stars": 4,
        "text": "Rich cashew flavor and perfect sweetness. A must-try!"
      }
    ]
  },
  {
    "id": 2,
    "name": "Badam Katli",
    "category": "Kaju Sweets",
    "badge": "Bestseller",
    "description": "Almond fudge with a melt-in-mouth texture.",
    "ingredients": [
      "Almonds",
      "Sugar",
      "Pure Ghee",
      "Saffron",
      "Cardamom",
      "Edible Silver Leaf"
    ],
    "tradition": "Badam Katli traces its roots to the royal kitchens of Rajasthan and Hyderabad. Almonds, known as 'Badam' in Hindi, are considered brain food in Ayurveda. This sweet is traditionally offered during Navratri and wedding ceremonies as a symbol of wisdom and good health.",
    "variants": [
      {
        "weight": "250g",
        "price": 220
      },
      {
        "weight": "500g",
        "price": 440
      },
      {
        "weight": "1kg",
        "price": 880
      }
    ],
    "reviews": [
      {
        "name": "Ramesh K.",
        "location": "Guntur",
        "stars": 5,
        "text": "The saffron aroma is heavenly. Tastes like a royal treat!"
      },
      {
        "name": "Sunita P.",
        "location": "Guntur",
        "stars": 5,
        "text": "Perfect texture, not too soft, not too firm. Pure almond goodness."
      }
    ]
  },
  {
    "id": 3,
    "name": "Kaju Items",
    "category": "Kaju Sweets",
    "badge": null,
    "description": "Assorted cashew sweet pieces.",
    "ingredients": [
      "Cashew Nuts",
      "Sugar",
      "Ghee",
      "Milk Powder",
      "Cardamom",
      "Pistachios"
    ],
    "tradition": "Cashew-based sweets became popular in India with the Portuguese influence in Goa. Over centuries, Indian halwais perfected the art of crafting cashew into diverse shapes, rolls, diamonds, and artistic molds, making them centerpieces of festival gift boxes.",
    "variants": [
      {
        "weight": "250g",
        "price": 230
      },
      {
        "weight": "500g",
        "price": 460
      },
      {
        "weight": "1kg",
        "price": 920
      }
    ],
    "reviews": [
      {
        "name": "Anil M.",
        "location": "Guntur",
        "stars": 5,
        "text": "The variety of kaju items is amazing. Each one is unique!"
      },
      {
        "name": "Deepa V.",
        "location": "Guntur",
        "stars": 4,
        "text": "Fresh and rich. Perfect for gifting."
      }
    ]
  },
  {
    "id": 4,
    "name": "Kaju D/F Items",
    "category": "Kaju Sweets",
    "badge": null,
    "description": "Cashew dry fruit mix sweets.",
    "ingredients": [
      "Cashew Nuts",
      "Almonds",
      "Pistachios",
      "Dried Figs",
      "Sugar",
      "Ghee",
      "Saffron"
    ],
    "tradition": "The fusion of dry fruits with cashew base is a modern Indian innovation that celebrates abundance. These premium sweets are traditionally exchanged during business dealings and corporate Diwali celebrations, symbolizing prosperity and mutual respect.",
    "variants": [
      {
        "weight": "250g",
        "price": 280
      },
      {
        "weight": "500g",
        "price": 560
      },
      {
        "weight": "1kg",
        "price": 1120
      }
    ],
    "reviews": [
      {
        "name": "Suresh B.",
        "location": "Guntur",
        "stars": 5,
        "text": "The dry fruit filling makes it extra special. Premium quality!"
      },
      {
        "name": "Kavitha R.",
        "location": "Guntur",
        "stars": 5,
        "text": "Bought for corporate gifting. Everyone loved them!"
      }
    ]
  },
  {
    "id": 5,
    "name": "Kaju Honey Badam",
    "category": "Kaju Sweets",
    "badge": "New",
    "description": "Cashew and almond fusion with honey notes.",
    "ingredients": [
      "Cashew Nuts",
      "Almonds",
      "Honey",
      "Ghee",
      "Cardamom",
      "Saffron Strands"
    ],
    "tradition": "Honey has been used in Indian sweets since Vedic times when it was considered amrit (nectar of the gods). Combining honey with cashew and almond creates a sweet that is both indulgent and rooted in Ayurvedic principles of balanced nutrition.",
    "variants": [
      {
        "weight": "250g",
        "price": 270
      },
      {
        "weight": "500g",
        "price": 540
      },
      {
        "weight": "1kg",
        "price": 1080
      }
    ],
    "reviews": [
      {
        "name": "Meena L.",
        "location": "Guntur",
        "stars": 5,
        "text": "The honey adds such a wonderful natural sweetness!"
      },
      {
        "name": "Harish G.",
        "location": "Guntur",
        "stars": 4,
        "text": "Unique combination. You can taste the quality honey."
      }
    ]
  },
  {
    "id": 6,
    "name": "Kaju Pakam",
    "category": "Kaju Sweets",
    "badge": null,
    "description": "Traditional cashew pakam style.",
    "ingredients": [
      "Cashew Nuts",
      "Sugar Syrup",
      "Ghee",
      "Cardamom",
      "Rose Water"
    ],
    "tradition": "Pakam refers to the sugar syrup consistency, a technique mastered over generations by Telugu halwais. Getting the 'pakam' right is the secret to perfect sweets, and Kaju Pakam showcases this art at its finest with its glossy, perfectly set texture.",
    "variants": [
      {
        "weight": "250g",
        "price": 240
      },
      {
        "weight": "500g",
        "price": 480
      },
      {
        "weight": "1kg",
        "price": 960
      }
    ],
    "reviews": [
      {
        "name": "Rajesh T.",
        "location": "Guntur",
        "stars": 5,
        "text": "The sugar syrup coating is perfection. True artistry!"
      },
      {
        "name": "Padma N.",
        "location": "Guntur",
        "stars": 4,
        "text": "Authentic Telugu sweet. Reminds me of my grandmother's kitchen."
      }
    ]
  },
  {
    "id": 7,
    "name": "Kaju Bites",
    "category": "Kaju Sweets",
    "badge": null,
    "description": "Bite-sized cashew treats.",
    "ingredients": [
      "Cashew Nuts",
      "Sugar",
      "Ghee",
      "Milk",
      "Cardamom"
    ],
    "tradition": "Bite-sized sweets hold a special place in Indian snacking culture. From temple prasadam to chai-time treats, small sweet morsels have always been a way to share joy without excess. Kaju Bites are the modern avatar of this timeless tradition.",
    "variants": [
      {
        "weight": "250g",
        "price": 235
      },
      {
        "weight": "500g",
        "price": 470
      },
      {
        "weight": "1kg",
        "price": 940
      }
    ],
    "reviews": [
      {
        "name": "Sravani K.",
        "location": "Guntur",
        "stars": 5,
        "text": "Perfect bite-sized pieces! Great for evening tea."
      },
      {
        "name": "Mohan R.",
        "location": "Guntur",
        "stars": 4,
        "text": "Kids love them! Pop-in-mouth size with rich taste."
      }
    ]
  },
  {
    "id": 8,
    "name": "Badam Bites",
    "category": "Dry Fruits",
    "badge": null,
    "description": "Almond bite-sized sweets.",
    "ingredients": [
      "Almonds",
      "Sugar",
      "Ghee",
      "Cardamom",
      "Saffron"
    ],
    "tradition": "Almonds (Badam) hold a revered place in Indian wellness traditions. Ayurveda prescribes soaked almonds as brain food, and almond-based sweets are given to children during exam seasons. Badam Bites combine this nutritional wisdom with the joy of mithai.",
    "variants": [
      {
        "weight": "250g",
        "price": 225
      },
      {
        "weight": "500g",
        "price": 450
      },
      {
        "weight": "1kg",
        "price": 900
      }
    ],
    "reviews": [
      {
        "name": "Harini S.",
        "location": "Guntur",
        "stars": 5,
        "text": "Pure almond goodness in every bite!"
      },
      {
        "name": "Suresh V.",
        "location": "Guntur",
        "stars": 5,
        "text": "Healthy and delicious. A great gift option!"
      }
    ]
  },
  {
    "id": 9,
    "name": "Pista Bites",
    "category": "Dry Fruits",
    "badge": "New",
    "description": "Pistachio flavoured bite-sized sweets.",
    "ingredients": [
      "Pistachios",
      "Sugar",
      "Ghee",
      "Cardamom",
      "Rose Water"
    ],
    "tradition": "Pistachios came to India through Persian trade routes and became a symbol of luxury in Indian cuisine. The vibrant green color of pistachios is associated with new beginnings, making pista sweets popular during Gudi Padwa and Ugadi celebrations.",
    "variants": [
      {
        "weight": "250g",
        "price": 260
      },
      {
        "weight": "500g",
        "price": 520
      },
      {
        "weight": "1kg",
        "price": 1040
      }
    ],
    "reviews": [
      {
        "name": "Kamini R.",
        "location": "Guntur",
        "stars": 5,
        "text": "The pistachio flavor is so rich and natural!"
      },
      {
        "name": "Praveen M.",
        "location": "Guntur",
        "stars": 4,
        "text": "Beautiful green color and premium taste!"
      }
    ]
  },
  {
    "id": 10,
    "name": "Almond Biscuits",
    "category": "Dry Fruits",
    "badge": null,
    "description": "Crunchy almond cookies.",
    "ingredients": [
      "Almonds",
      "Maida Flour",
      "Sugar",
      "Butter",
      "Cardamom",
      "Vanilla"
    ],
    "tradition": "Almond Biscuits represent the blend of British colonial baking traditions with Indian flavors. Indian bakers added cardamom and extra almonds to the Western biscuit, creating a uniquely Indian treat that is now a tea-time favorite across the country.",
    "variants": [
      {
        "weight": "250g",
        "price": 150
      },
      {
        "weight": "500g",
        "price": 300
      },
      {
        "weight": "1kg",
        "price": 600
      }
    ],
    "reviews": [
      {
        "name": "Meghana K.",
        "location": "Guntur",
        "stars": 5,
        "text": "Crunchy and nutty! Perfect with chai."
      },
      {
        "name": "Ravi P.",
        "location": "Guntur",
        "stars": 4,
        "text": "The almond crunch is wonderful. Great tea-time snack!"
      }
    ]
  },
  {
    "id": 11,
    "name": "Badam Rakhi",
    "category": "Dry Fruits",
    "badge": null,
    "description": "Badam Rakhi prepared fresh in the authentic sweet shop tradition of Guntur.",
    "ingredients": [
      "Almonds",
      "Sugar",
      "Ghee",
      "Saffron",
      "Silver Leaf"
    ],
    "tradition": "Badam Rakhi is a special sweet shaped and decorated like a rakhi (sacred thread), prepared during the Raksha Bandhan festival. Sisters gift these edible rakhis to brothers, combining the sweetness of sibling love with the nutrition of almonds.",
    "variants": [
      {
        "weight": "250g",
        "price": 90
      },
      {
        "weight": "500g",
        "price": 180
      },
      {
        "weight": "1kg",
        "price": 360
      }
    ],
    "reviews": [
      {
        "name": "Priya D.",
        "location": "Guntur",
        "stars": 5,
        "text": "Such a creative concept for Raksha Bandhan! Loved it."
      },
      {
        "name": "Arun K.",
        "location": "Guntur",
        "stars": 5,
        "text": "My sister surprised me with this. Beautiful and delicious!"
      }
    ]
  },
  {
    "id": 12,
    "name": "Ajmer Kalakand",
    "category": "Kalakand",
    "badge": null,
    "description": "Grainy milk cake from the Ajmer tradition.",
    "ingredients": [
      "Fresh Paneer",
      "Full Cream Milk",
      "Sugar",
      "Cardamom",
      "Pistachios",
      "Rose Water"
    ],
    "tradition": "Kalakand originated in the royal city of Alwar, Rajasthan, and was invented by Baba Thakur Das in the early 20th century. The Ajmer style uses a creamier texture and is traditionally served during Janmashtami and wedding celebrations across Rajasthan and North India.",
    "variants": [
      {
        "weight": "250g",
        "price": 150
      },
      {
        "weight": "500g",
        "price": 300
      },
      {
        "weight": "1kg",
        "price": 600
      }
    ],
    "reviews": [
      {
        "name": "Anita S.",
        "location": "Guntur",
        "stars": 5,
        "text": "The grainy texture is just right, authentic Rajasthani flavor!"
      },
      {
        "name": "Kiran P.",
        "location": "Guntur",
        "stars": 5,
        "text": "Best kalakand I've had outside Rajasthan. Truly creamy!"
      }
    ]
  },
  {
    "id": 13,
    "name": "White Kalakand",
    "category": "Kalakand",
    "badge": null,
    "description": "Pure white milk cake, delicate and creamy.",
    "ingredients": [
      "Fresh Milk",
      "Paneer",
      "Sugar",
      "Cardamom Powder",
      "Pistachios"
    ],
    "tradition": "White Kalakand is the purest form of this milk-based delicacy, where the natural whiteness of fresh paneer is preserved. In Indian culture, white sweets symbolize purity and are often chosen for Satyanarayan Puja and religious ceremonies.",
    "variants": [
      {
        "weight": "250g",
        "price": 140
      },
      {
        "weight": "500g",
        "price": 280
      },
      {
        "weight": "1kg",
        "price": 560
      }
    ],
    "reviews": [
      {
        "name": "Vijay K.",
        "location": "Guntur",
        "stars": 5,
        "text": "So soft and milky! Perfect for puja occasions."
      },
      {
        "name": "Radha M.",
        "location": "Guntur",
        "stars": 4,
        "text": "Fresh and not overly sweet. Just the way I like it."
      }
    ]
  },
  {
    "id": 14,
    "name": "Horlicks Kalakand",
    "category": "Kalakand",
    "badge": "New",
    "description": "Kalakand with a malty twist.",
    "ingredients": [
      "Fresh Paneer",
      "Milk",
      "Horlicks Powder",
      "Sugar",
      "Ghee",
      "Cardamom"
    ],
    "tradition": "A modern Indian innovation, Horlicks Kalakand blends the nostalgia of India's beloved malted drink with traditional mithai-making. This fusion sweet represents how Indian sweet-makers continue to evolve while honoring their roots, a hallmark of our culinary creativity.",
    "variants": [
      {
        "weight": "250g",
        "price": 160
      },
      {
        "weight": "500g",
        "price": 320
      },
      {
        "weight": "1kg",
        "price": 640
      }
    ],
    "reviews": [
      {
        "name": "Swathi R.",
        "location": "Guntur",
        "stars": 5,
        "text": "What a creative twist! My kids absolutely love this one."
      },
      {
        "name": "Ramu G.",
        "location": "Guntur",
        "stars": 4,
        "text": "The malty flavor with traditional kalakand, brilliant combination!"
      }
    ]
  },
  {
    "id": 15,
    "name": "Honey Kalakand",
    "category": "Kalakand",
    "badge": null,
    "description": "Honey-sweetened milk cake.",
    "ingredients": [
      "Fresh Paneer",
      "Milk",
      "Honey",
      "Cardamom",
      "Almonds"
    ],
    "tradition": "In Ayurveda, honey is called 'Madhu' and is revered for its healing properties. When combined with fresh paneer in Kalakand, it creates a sweet that is not just delicious but also nourishing, embodying the Indian philosophy that food should be both pleasure and medicine.",
    "variants": [
      {
        "weight": "250g",
        "price": 165
      },
      {
        "weight": "500g",
        "price": 330
      },
      {
        "weight": "1kg",
        "price": 660
      }
    ],
    "reviews": [
      {
        "name": "Bhavani T.",
        "location": "Guntur",
        "stars": 5,
        "text": "Natural honey sweetness makes this so special."
      },
      {
        "name": "Arjun D.",
        "location": "Guntur",
        "stars": 4,
        "text": "A healthier take on traditional kalakand. Wonderful!"
      }
    ]
  },
  {
    "id": 16,
    "name": "Chocolate Kalakand",
    "category": "Kalakand",
    "badge": null,
    "description": "Chocolate Kalakand prepared fresh in the authentic sweet shop tradition of Guntur.",
    "ingredients": [
      "Fresh Paneer",
      "Milk",
      "Sugar",
      "Butterscotch",
      "Cardamom",
      "Mixed Nuts"
    ],
    "tradition": "Magic Kalakand is a signature innovation that showcases the creative spirit of Indian halwais. Every sweet shop adds its own 'magic', a secret combination of flavors that makes their version unique. This tradition of secret recipes has been passed down through generations.",
    "variants": [
      {
        "weight": "250g",
        "price": 150
      },
      {
        "weight": "500g",
        "price": 300
      },
      {
        "weight": "1kg",
        "price": 600
      }
    ],
    "reviews": [
      {
        "name": "Sita R.",
        "location": "Guntur",
        "stars": 5,
        "text": "The butterscotch twist is pure magic! True to its name."
      },
      {
        "name": "Gopi K.",
        "location": "Guntur",
        "stars": 5,
        "text": "There's something different about this one, and I love it!"
      }
    ]
  },
  {
    "id": 17,
    "name": "Jug Kalakand",
    "category": "Kalakand",
    "badge": "Bestseller",
    "description": "Jug Kalakand prepared fresh in the authentic sweet shop tradition of Guntur.",
    "ingredients": [
      "Paneer",
      "Thickened Milk",
      "Sugar Syrup",
      "Pistachios",
      "Almonds",
      "Cardamom"
    ],
    "tradition": "Jug Kalakand gets its name from the traditional jug-like clay pots or moulds used to slow-set the hot, fresh milk cake. Setting it in this manner keeps it moist and gives it a crumbly, granular texture that dissolves in the mouth. It is a cherished delicacy of traditional sweet halls.",
    "variants": [
      {
        "weight": "250g",
        "price": 150
      },
      {
        "weight": "500g",
        "price": 300
      },
      {
        "weight": "1kg",
        "price": 600
      }
    ],
    "reviews": [
      {
        "name": "Venu M.",
        "location": "Guntur",
        "stars": 5,
        "text": "Extra moist and crumbly! Love the texture."
      },
      {
        "name": "Bhagya S.",
        "location": "Guntur",
        "stars": 5,
        "text": "Rich milk flavor. Perfect sweet balance and very fresh!"
      }
    ]
  },
  {
    "id": 18,
    "name": "Kova Items",
    "category": "Kova Sweets",
    "badge": null,
    "description": "Assorted kova-based sweets.",
    "ingredients": [
      "Thickened Milk (Kova)",
      "Sugar",
      "Ghee",
      "Cardamom",
      "Saffron",
      "Nuts"
    ],
    "tradition": "Kova (also called Mawa or Khoya) is the soul of South Indian sweet-making. Made by slowly reducing full-cream milk for hours, this patient process transforms simple milk into a rich, fudge-like base. Andhra Pradesh's kova sweets are legendary across India.",
    "variants": [
      {
        "weight": "250g",
        "price": 130
      },
      {
        "weight": "500g",
        "price": 260
      },
      {
        "weight": "1kg",
        "price": 520
      }
    ],
    "reviews": [
      {
        "name": "Lakshmi N.",
        "location": "Guntur",
        "stars": 5,
        "text": "Pure kova flavor in every bite. Outstanding quality!"
      },
      {
        "name": "Prasad M.",
        "location": "Guntur",
        "stars": 5,
        "text": "The best kova sweets in Guntur. Nothing comes close!"
      }
    ]
  },
  {
    "id": 19,
    "name": "Loose Kova",
    "category": "Kova Sweets",
    "badge": null,
    "description": "Pure kova for cooking or eating fresh.",
    "ingredients": [
      "Full Cream Milk",
      "Sugar",
      "Cardamom",
      "Ghee"
    ],
    "tradition": "Loose Kova is the purest expression of milk reduction, a craft that takes hours of patient stirring over a slow flame. In Telugu homes, buying loose kova to make sweets at home is a cherished ritual during festivals like Sankranti and Ugadi.",
    "variants": [
      {
        "weight": "250g",
        "price": 100
      },
      {
        "weight": "500g",
        "price": 200
      },
      {
        "weight": "1kg",
        "price": 400
      }
    ],
    "reviews": [
      {
        "name": "Kamala D.",
        "location": "Guntur",
        "stars": 5,
        "text": "Fresh and aromatic. I use it to make sweets at home for festivals."
      },
      {
        "name": "Suresh R.",
        "location": "Guntur",
        "stars": 4,
        "text": "Rich and creamy. You can tell it's freshly made."
      }
    ]
  },
  {
    "id": 20,
    "name": "Kova Cut Jamun",
    "category": "Kova Sweets",
    "badge": null,
    "description": "Kova-based cut jamun pieces.",
    "ingredients": [
      "Kova (Thickened Milk)",
      "Sugar Syrup",
      "Ghee",
      "Cardamom",
      "Rose Water",
      "Saffron"
    ],
    "tradition": "Cut Jamun is a South Indian twist on the classic Bengali Gulab Jamun. Stuffed with rich kova filling and soaked in fragrant sugar syrup, this sweet bridges the culinary traditions of Bengal and Andhra, symbolizing India's sweet cultural exchanges.",
    "variants": [
      {
        "weight": "250g",
        "price": 135
      },
      {
        "weight": "500g",
        "price": 270
      },
      {
        "weight": "1kg",
        "price": 540
      }
    ],
    "reviews": [
      {
        "name": "Bhanu P.",
        "location": "Guntur",
        "stars": 5,
        "text": "The kova filling inside makes it so much better than regular jamun!"
      },
      {
        "name": "Sowmya K.",
        "location": "Guntur",
        "stars": 5,
        "text": "Absolutely divine. Perfect balance of sweetness!"
      }
    ]
  },
  {
    "id": 21,
    "name": "Kova Jaangiri",
    "category": "Kova Sweets",
    "badge": null,
    "description": "Kova Jaangiri prepared fresh in the authentic sweet shop tradition of Guntur.",
    "ingredients": [
      "Urad Dal Batter",
      "Kova",
      "Sugar Syrup",
      "Saffron",
      "Cardamom",
      "Ghee"
    ],
    "tradition": "Jaangiri (or Imarti) has roots dating back to the Mughal era. The addition of kova filling to this traditional sweet is a South Indian innovation that adds richness and depth. The intricate flower-like pattern symbolizes beauty in Indian art traditions.",
    "variants": [
      {
        "weight": "250g",
        "price": 130
      },
      {
        "weight": "500g",
        "price": 260
      },
      {
        "weight": "1kg",
        "price": 520
      }
    ],
    "reviews": [
      {
        "name": "Rani M.",
        "location": "Guntur",
        "stars": 5,
        "text": "The kova-filled version is amazing. So much richer than regular jaangiri!"
      },
      {
        "name": "Venkat L.",
        "location": "Guntur",
        "stars": 4,
        "text": "Beautiful to look at and heavenly to taste!"
      }
    ]
  },
  {
    "id": 22,
    "name": "Kova Bobbatlu",
    "category": "Kova Sweets",
    "badge": null,
    "description": "Kova-filled bobbatlu, rich and sweet.",
    "ingredients": [
      "Maida Flour",
      "Kova",
      "Sugar",
      "Ghee",
      "Cardamom",
      "Nutmeg"
    ],
    "tradition": "Bobbatlu (also known as Puran Poli) is a sacred sweet in Telugu culture, prepared during every major festival, Ugadi, Sankranti, and weddings. The kova-filled version elevates this humble flatbread into a royal delicacy, honoring both tradition and innovation.",
    "variants": [
      {
        "weight": "250g",
        "price": 120
      },
      {
        "weight": "500g",
        "price": 240
      },
      {
        "weight": "1kg",
        "price": 480
      }
    ],
    "reviews": [
      {
        "name": "Sarada G.",
        "location": "Guntur",
        "stars": 5,
        "text": "Tastes exactly like my grandmother used to make! Pure nostalgia."
      },
      {
        "name": "Nagesh T.",
        "location": "Guntur",
        "stars": 5,
        "text": "The kova filling is so rich. A festival must-have!"
      }
    ]
  },
  {
    "id": 23,
    "name": "Kova Kajikai",
    "category": "Kova Sweets",
    "badge": null,
    "description": "Traditional crescent-shaped kova-filled pastry.",
    "ingredients": [
      "Maida Flour",
      "Kova",
      "Sugar",
      "Ghee",
      "Cardamom",
      "Coconut"
    ],
    "tradition": "Kajikai are crescent-shaped sweet dumplings that resemble the half-moon, symbolizing Lord Ganesha's modak. Filled with rich kova, these are traditional offerings during Vinayaka Chavithi and hold deep spiritual significance in Telugu households.",
    "variants": [
      {
        "weight": "250g",
        "price": 140
      },
      {
        "weight": "500g",
        "price": 280
      },
      {
        "weight": "1kg",
        "price": 560
      }
    ],
    "reviews": [
      {
        "name": "Padmaja S.",
        "location": "Guntur",
        "stars": 5,
        "text": "The crescent shape is so pretty and the kova filling is heavenly!"
      },
      {
        "name": "Ravi N.",
        "location": "Guntur",
        "stars": 4,
        "text": "Crispy outside, creamy inside. Perfect sweet!"
      }
    ]
  },
  {
    "id": 24,
    "name": "Basundi",
    "category": "Kova Sweets",
    "badge": null,
    "description": "Basundi prepared fresh in the authentic sweet shop tradition of Guntur.",
    "ingredients": [
      "Full Cream Milk",
      "Sugar",
      "Saffron",
      "Cardamom",
      "Pistachios",
      "Almonds",
      "Chironji Seeds"
    ],
    "tradition": "Basundi is a traditional Western and Southern Indian dessert made by reducing milk over a low flame until it reaches a thick, creamy consistency. Prepared during festivals like Gudi Padwa and Bhai Dooj, it represents patience and care, as the milk is stirred continuously for hours to achieve its rich, layered texture.",
    "variants": [
      {
        "weight": "250g",
        "price": 130
      },
      {
        "weight": "500g",
        "price": 260
      },
      {
        "weight": "1kg",
        "price": 520
      }
    ],
    "reviews": [
      {
        "name": "Meenakshi S.",
        "location": "Guntur",
        "stars": 5,
        "text": "Perfect creamy consistency! Rich in saffron flavor and loaded with nuts."
      },
      {
        "name": "Ramesh P.",
        "location": "Guntur",
        "stars": 5,
        "text": "Reminds me of traditional home cooking. Absolutely perfect!"
      }
    ]
  },
  {
    "id": 25,
    "name": "Angoor Basundi",
    "category": "Kova Sweets",
    "badge": null,
    "description": "Angoor Basundi prepared fresh in the authentic sweet shop tradition of Guntur.",
    "ingredients": [
      "Small Chhena Balls (Angoori)",
      "Full Cream Milk (Rabri)",
      "Saffron",
      "Cardamom",
      "Pistachios",
      "Almonds",
      "Sugar"
    ],
    "tradition": "Angoor Basundi is an elegant variant of Basundi containing 'Angoori' (grape-sized) chhena balls. The small, spongy cottage cheese balls soak up the rich, cardamom-scented rabri, creating a dessert that is both creamy and wonderfully texture-rich. A staple at premium weddings.",
    "variants": [
      {
        "weight": "250g",
        "price": 130
      },
      {
        "weight": "500g",
        "price": 260
      },
      {
        "weight": "1kg",
        "price": 520
      }
    ],
    "reviews": [
      {
        "name": "Kavitha R.",
        "location": "Guntur",
        "stars": 5,
        "text": "The tiny chhena balls are so cute and juicy. The basundi is amazing!"
      },
      {
        "name": "Sanjay J.",
        "location": "Guntur",
        "stars": 5,
        "text": "A premium wedding dessert at home. My family's favorite!"
      }
    ]
  },
  {
    "id": 26,
    "name": "White Doodh Peda",
    "category": "Peda & Burfi",
    "badge": null,
    "description": "White milk peda, delicate flavour.",
    "ingredients": [
      "Full Cream Milk",
      "Sugar",
      "Cardamom",
      "Ghee",
      "Pistachios"
    ],
    "tradition": "Peda is synonymous with the holy city of Mathura, Lord Krishna's birthplace. White Doodh Peda, made from pure reduced milk, is the traditional prasadam at Krishna temples. Offering peda is considered extremely auspicious and is a core part of Janmashtami celebrations.",
    "variants": [
      {
        "weight": "250g",
        "price": 130
      },
      {
        "weight": "500g",
        "price": 260
      },
      {
        "weight": "1kg",
        "price": 520
      }
    ],
    "reviews": [
      {
        "name": "Vijayalakshmi B.",
        "location": "Guntur",
        "stars": 5,
        "text": "Pure milk taste! So soft and melt-in-mouth."
      },
      {
        "name": "Krishna R.",
        "location": "Guntur",
        "stars": 5,
        "text": "Reminds me of Mathura peda. Truly divine!"
      }
    ]
  },
  {
    "id": 27,
    "name": "Sp Doodh Peda",
    "category": "Peda & Burfi",
    "badge": null,
    "description": "Special milk peda, rich and crumbly.",
    "ingredients": [
      "Milk",
      "Sugar",
      "Ghee",
      "Saffron",
      "Pistachios",
      "Cardamom"
    ],
    "tradition": "Special Doodh Peda is enriched with saffron and pistachios, making it a premium offering. In Indian tradition, saffron (kesar) represents royalty and is added to sweets served to honored guests and during special pujas.",
    "variants": [
      {
        "weight": "250g",
        "price": 140
      },
      {
        "weight": "500g",
        "price": 280
      },
      {
        "weight": "1kg",
        "price": 560
      }
    ],
    "reviews": [
      {
        "name": "Anuradha V.",
        "location": "Guntur",
        "stars": 5,
        "text": "The saffron flavor is just perfect. A special treat!"
      },
      {
        "name": "Manoj K.",
        "location": "Guntur",
        "stars": 4,
        "text": "Rich and creamy. Worth every rupee!"
      }
    ]
  },
  {
    "id": 28,
    "name": "Icecream Burfi",
    "category": "Peda & Burfi",
    "badge": "New",
    "description": "Colourful layered burfi with ice cream flavour.",
    "ingredients": [
      "Milk Powder",
      "Sugar",
      "Ghee",
      "Cream",
      "Vanilla",
      "Cardamom",
      "Mixed Nuts"
    ],
    "tradition": "Ice Cream Burfi is a modern innovation in Indian mithai, a layered sweet that mimics the creamy indulgence of ice cream in a shelf-stable form. It represents the new generation of Indian sweet-makers who honor tradition while embracing creative experimentation.",
    "variants": [
      {
        "weight": "250g",
        "price": 150
      },
      {
        "weight": "500g",
        "price": 300
      },
      {
        "weight": "1kg",
        "price": 600
      }
    ],
    "reviews": [
      {
        "name": "Sneha T.",
        "location": "Guntur",
        "stars": 5,
        "text": "Kids love this one! Tastes like frozen dessert in sweet form."
      },
      {
        "name": "Rahul B.",
        "location": "Guntur",
        "stars": 4,
        "text": "Creamy layers with a crunchy nut topping. Innovative and delicious!"
      }
    ]
  },
  {
    "id": 29,
    "name": "Badam Halwa",
    "category": "Halwa",
    "badge": null,
    "description": "Rich almond halwa cooked low and slow in ghee.",
    "ingredients": [
      "Almonds",
      "Sugar",
      "Pure Ghee",
      "Saffron",
      "Cardamom",
      "Milk"
    ],
    "tradition": "Badam Halwa is a regal sweet from the Hyderabadi Nizami cuisine. Made with blanched almonds slow-cooked in ghee, this translucent, jewel-like dessert was served in the courts of the Nizams. It is considered the pinnacle of halwa-making artistry in South India.",
    "variants": [
      {
        "weight": "250g",
        "price": 200
      },
      {
        "weight": "500g",
        "price": 400
      },
      {
        "weight": "1kg",
        "price": 800
      }
    ],
    "reviews": [
      {
        "name": "Fathima R.",
        "location": "Guntur",
        "stars": 5,
        "text": "The ghee aroma is incredible. True Hyderabadi taste!"
      },
      {
        "name": "Shyam P.",
        "location": "Guntur",
        "stars": 5,
        "text": "Rich, aromatic, and perfectly cooked. A masterpiece!"
      }
    ]
  },
  {
    "id": 30,
    "name": "Black Halwa",
    "category": "Halwa",
    "badge": null,
    "description": "Dark, dense halwa with an intense flavour.",
    "ingredients": [
      "Wheat Flour",
      "Coconut Milk",
      "Jaggery",
      "Ghee",
      "Cardamom",
      "Cashews"
    ],
    "tradition": "Black Halwa (Karupatti Halwa) originated in Kerala and Tamil Nadu, made with jaggery that gives it its distinctive dark color. This ancient sweet is deeply connected to harvest festivals and is believed to generate warmth in the body during winter months.",
    "variants": [
      {
        "weight": "250g",
        "price": 140
      },
      {
        "weight": "500g",
        "price": 280
      },
      {
        "weight": "1kg",
        "price": 560
      }
    ],
    "reviews": [
      {
        "name": "Meera S.",
        "location": "Guntur",
        "stars": 5,
        "text": "The jaggery flavor is so authentic. Love the dark richness!"
      },
      {
        "name": "Ganesh V.",
        "location": "Guntur",
        "stars": 4,
        "text": "A unique sweet you won't find everywhere. Truly special!"
      }
    ]
  },
  {
    "id": 31,
    "name": "Dry Fruit Halwa",
    "category": "Halwa",
    "badge": null,
    "description": "Loaded with mixed dry fruits and nuts.",
    "ingredients": [
      "Mixed Dry Fruits",
      "Ghee",
      "Sugar",
      "Saffron",
      "Cardamom",
      "Rose Water"
    ],
    "tradition": "Dry Fruit Halwa represents the zenith of Indian mithai luxury. Loaded with almonds, cashews, pistachios, and saffron, this sweet was historically a symbol of affluence. It is traditionally prepared for Eid celebrations and Diwali gift boxes.",
    "variants": [
      {
        "weight": "250g",
        "price": 220
      },
      {
        "weight": "500g",
        "price": 440
      },
      {
        "weight": "1kg",
        "price": 880
      }
    ],
    "reviews": [
      {
        "name": "Saleem A.",
        "location": "Guntur",
        "stars": 5,
        "text": "Every bite is packed with nuts! Premium quality."
      },
      {
        "name": "Jaya L.",
        "location": "Guntur",
        "stars": 5,
        "text": "Perfect for gifting. Rich and absolutely delicious!"
      }
    ]
  },
  {
    "id": 32,
    "name": "Bombay Halwa",
    "category": "Halwa",
    "badge": null,
    "description": "Colourful, bouncy Bombay-style halwa.",
    "ingredients": [
      "Cornflour",
      "Sugar",
      "Ghee",
      "Cashews",
      "Cardamom",
      "Food Color"
    ],
    "tradition": "Bombay Halwa (also called Karachi Halwa) is a translucent, jewel-toned sweet that arrived in India via the Sindhi and Gujarati trading communities. Its glossy, gem-like appearance makes it a favorite during Diwali when homes are decorated with light and color.",
    "variants": [
      {
        "weight": "250g",
        "price": 130
      },
      {
        "weight": "500g",
        "price": 260
      },
      {
        "weight": "1kg",
        "price": 520
      }
    ],
    "reviews": [
      {
        "name": "Pooja M.",
        "location": "Guntur",
        "stars": 5,
        "text": "So colorful and tasty! My favorite halwa variety."
      },
      {
        "name": "Dinesh K.",
        "location": "Guntur",
        "stars": 4,
        "text": "The translucent texture is amazing. Unique and delicious!"
      }
    ]
  },
  {
    "id": 33,
    "name": "Carrot Halwa",
    "category": "Halwa",
    "badge": "New",
    "description": "Fresh carrot halwa made with whole milk and ghee.",
    "ingredients": [
      "Fresh Carrots",
      "Full Cream Milk",
      "Sugar",
      "Pure Ghee",
      "Cashews",
      "Raisins",
      "Cardamom"
    ],
    "tradition": "Gajar Ka Halwa is the quintessential winter sweet of North India, made when red carrots are in season. In Punjabi and UP households, a steaming bowl of carrot halwa on a cold winter evening is a cherished family tradition, especially during Lohri and Makar Sankranti.",
    "variants": [
      {
        "weight": "250g",
        "price": 140
      },
      {
        "weight": "500g",
        "price": 280
      },
      {
        "weight": "1kg",
        "price": 560
      }
    ],
    "reviews": [
      {
        "name": "Rekha B.",
        "location": "Guntur",
        "stars": 5,
        "text": "Loaded with ghee and nuts! Authentic gajar ka halwa."
      },
      {
        "name": "Amit S.",
        "location": "Guntur",
        "stars": 5,
        "text": "The carrot-to-milk ratio is perfect. Rich and satisfying!"
      }
    ]
  },
  {
    "id": 34,
    "name": "Boondi Chekka",
    "category": "Chikki",
    "badge": null,
    "description": "Dense boondi sweet block.",
    "ingredients": [
      "Besan (Gram Flour) Boondi",
      "Jaggery",
      "Ghee",
      "Cardamom",
      "Dry Ginger"
    ],
    "tradition": "Chekka (Chikki) is a traditional Indian brittle that dates back centuries. Boondi Chekka combines the crunch of tiny gram flour droplets with melted jaggery, a combination that is both a snack and an energy booster. It's a staple during Sankranti celebrations in Andhra Pradesh.",
    "variants": [
      {
        "weight": "250g",
        "price": 90
      },
      {
        "weight": "500g",
        "price": 180
      },
      {
        "weight": "1kg",
        "price": 360
      }
    ],
    "reviews": [
      {
        "name": "Srinivas R.",
        "location": "Guntur",
        "stars": 5,
        "text": "Perfect crunch! The jaggery is just right."
      },
      {
        "name": "Manga D.",
        "location": "Guntur",
        "stars": 4,
        "text": "A classic Sankranti treat. Love the boondi texture!"
      }
    ]
  },
  {
    "id": 35,
    "name": "Palli Chikki",
    "category": "Chikki",
    "badge": null,
    "description": "Crunchy peanut brittle with jaggery.",
    "ingredients": [
      "Peanuts",
      "Jaggery",
      "Ghee",
      "Cardamom"
    ],
    "tradition": "Palli Chekka (Peanut Chikki) is India's most popular brittle. In Maharashtra, it's called 'Chikki' and is the pride of Lonavala. The combination of roasted peanuts and jaggery provides instant energy, making it a favorite with farmers and workers across rural India.",
    "variants": [
      {
        "weight": "250g",
        "price": 80
      },
      {
        "weight": "500g",
        "price": 160
      },
      {
        "weight": "1kg",
        "price": 320
      }
    ],
    "reviews": [
      {
        "name": "Satish M.",
        "location": "Guntur",
        "stars": 5,
        "text": "Crunchy peanuts with perfect jaggery binding. A classic!"
      },
      {
        "name": "Latha K.",
        "location": "Guntur",
        "stars": 5,
        "text": "My kids snack on this daily. Healthy and tasty!"
      }
    ]
  },
  {
    "id": 36,
    "name": "Nuvvulu Chikki",
    "category": "Chikki",
    "badge": null,
    "description": "Sesame brittle, crunchy and nutritious.",
    "ingredients": [
      "Sesame Seeds (Nuvvulu)",
      "Jaggery",
      "Ghee"
    ],
    "tradition": "Nuvvulu (sesame) Chikki is an essential part of Sankranti celebrations in Telugu culture. Sharing sesame and jaggery sweets with the greeting 'Ellu Bella Thindu, Ollu Mathaadu' (eat sesame-jaggery and speak sweet words) is a centuries-old tradition promoting harmony.",
    "variants": [
      {
        "weight": "250g",
        "price": 90
      },
      {
        "weight": "500g",
        "price": 180
      },
      {
        "weight": "1kg",
        "price": 360
      }
    ],
    "reviews": [
      {
        "name": "Vani P.",
        "location": "Guntur",
        "stars": 5,
        "text": "The sesame aroma is wonderful. Perfect Sankranti sweet!"
      },
      {
        "name": "Raju V.",
        "location": "Guntur",
        "stars": 4,
        "text": "Crunchy and not too sweet. Traditional taste!"
      }
    ]
  },
  {
    "id": 37,
    "name": "Dry Fruits Chikki",
    "category": "Chikki",
    "badge": null,
    "description": "Premium dry fruits in crunchy brittle.",
    "ingredients": [
      "Almonds",
      "Cashews",
      "Pistachios",
      "Walnuts",
      "Jaggery",
      "Ghee"
    ],
    "tradition": "The premium version of traditional chikki, loaded with dry fruits, represents the evolution of Indian snacking. Once a simple farmer's energy bar, chikki has been elevated to a gourmet treat that makes a perfect healthy gift during festivals.",
    "variants": [
      {
        "weight": "250g",
        "price": 180
      },
      {
        "weight": "500g",
        "price": 360
      },
      {
        "weight": "1kg",
        "price": 720
      }
    ],
    "reviews": [
      {
        "name": "Nandini R.",
        "location": "Guntur",
        "stars": 5,
        "text": "So many nuts in every piece! Worth the premium."
      },
      {
        "name": "Vikram S.",
        "location": "Guntur",
        "stars": 5,
        "text": "The best chikki I've ever had. Loaded with dry fruits!"
      }
    ]
  },
  {
    "id": 38,
    "name": "Laddu",
    "category": "Laddu",
    "badge": "Bestseller",
    "description": "Laddu prepared fresh in the authentic sweet shop tradition of Guntur.",
    "ingredients": [
      "Besan (Gram Flour)",
      "Sugar",
      "Pure Ghee",
      "Cardamom",
      "Cashews",
      "Raisins"
    ],
    "tradition": "Laddu is the most sacred sweet in Indian tradition. From Tirupati Laddu to Ganesh Chaturthi offerings, no celebration is complete without these golden spheres. The round shape symbolizes completeness and the cycle of life, making it auspicious for every occasion.",
    "variants": [
      {
        "weight": "250g",
        "price": 130
      },
      {
        "weight": "500g",
        "price": 260
      },
      {
        "weight": "1kg",
        "price": 520
      }
    ],
    "reviews": [
      {
        "name": "Satyam B.",
        "location": "Guntur",
        "stars": 5,
        "text": "Ghee-rich and perfectly round. Temple-quality laddu!"
      },
      {
        "name": "Uma D.",
        "location": "Guntur",
        "stars": 5,
        "text": "The aroma fills the room. Pure ghee perfection!"
      }
    ]
  },
  {
    "id": 39,
    "name": "Motichoor Laddu",
    "category": "Laddu",
    "badge": null,
    "description": "Golden boondi pearls pressed into perfect spheres.",
    "ingredients": [
      "Fine Besan Boondi",
      "Sugar Syrup",
      "Ghee",
      "Saffron",
      "Cardamom",
      "Pistachios",
      "Rose Water"
    ],
    "tradition": "Motichoor Laddu, meaning \"crushed pearls\", is the royalty of all laddus. These delicate spheres made from tiny, melt-in-mouth boondi are the traditional wedding sweet across North India. No Indian wedding is considered complete without distributing Motichoor Laddus.",
    "variants": [
      {
        "weight": "250g",
        "price": 130
      },
      {
        "weight": "500g",
        "price": 260
      },
      {
        "weight": "1kg",
        "price": 520
      }
    ],
    "reviews": [
      {
        "name": "Ashok G.",
        "location": "Guntur",
        "stars": 5,
        "text": "Melts in your mouth! The finest laddu in town."
      },
      {
        "name": "Savitha M.",
        "location": "Guntur",
        "stars": 5,
        "text": "We ordered 500 pieces for our daughter's wedding. Everyone loved them!"
      }
    ]
  },
  {
    "id": 40,
    "name": "Atisaggulu Laddu",
    "category": "Laddu",
    "badge": null,
    "description": "Traditional pressed laddu, dense and flavourful.",
    "ingredients": [
      "Rice Flour (Atisaggulu)",
      "Jaggery",
      "Ghee",
      "Cardamom",
      "Sesame Seeds"
    ],
    "tradition": "Atisaggulu Laddu is a cherished Telugu traditional sweet, prepared with popped rice flour and jaggery. It's deeply connected to rural Andhra festivals and is often the first sweet taught to young brides in Telugu households as part of their culinary initiation.",
    "variants": [
      {
        "weight": "250g",
        "price": 130
      },
      {
        "weight": "500g",
        "price": 260
      },
      {
        "weight": "1kg",
        "price": 520
      }
    ],
    "reviews": [
      {
        "name": "Lakshmi T.",
        "location": "Guntur",
        "stars": 5,
        "text": "Pure Telugu taste! My amma used to make these."
      },
      {
        "name": "Narsimha R.",
        "location": "Guntur",
        "stars": 4,
        "text": "The jaggery flavor is authentic. A rare traditional treat!"
      }
    ]
  },
  {
    "id": 41,
    "name": "Sadu Laddu",
    "category": "Laddu",
    "badge": null,
    "description": "Simple sweet laddu, childhood favourite.",
    "ingredients": [
      "Bengal Gram Flour",
      "Sugar",
      "Ghee",
      "Cardamom",
      "Cashews"
    ],
    "tradition": "Sada Laddu (also called Sanna Boorelu in some regions) is a traditional sweet that showcases the simplicity of Indian dessert-making. Using minimal ingredients but maximum love, these laddus embody the philosophy that the best sweets don't need elaborate preparation.",
    "variants": [
      {
        "weight": "250g",
        "price": 110
      },
      {
        "weight": "500g",
        "price": 220
      },
      {
        "weight": "1kg",
        "price": 440
      }
    ],
    "reviews": [
      {
        "name": "Durga P.",
        "location": "Guntur",
        "stars": 5,
        "text": "Simple yet so flavorful. True traditional taste!"
      },
      {
        "name": "Chandra S.",
        "location": "Guntur",
        "stars": 4,
        "text": "My go-to laddu. Never disappoints!"
      }
    ]
  },
  {
    "id": 42,
    "name": "Nuvvulu Laddu",
    "category": "Laddu",
    "badge": null,
    "description": "Sesame laddu with jaggery sweetness.",
    "ingredients": [
      "White Sesame Seeds",
      "Jaggery",
      "Ghee",
      "Cardamom",
      "Dry Ginger Powder"
    ],
    "tradition": "Nuvvulu (Sesame) Laddu is an essential Sankranti sweet in Andhra Pradesh and Telangana. Sesame seeds are believed to absorb negative energy, and eating them during the harvest festival is considered purifying. These laddus are shared with neighbors as a gesture of community bonding.",
    "variants": [
      {
        "weight": "250g",
        "price": 120
      },
      {
        "weight": "500g",
        "price": 240
      },
      {
        "weight": "1kg",
        "price": 480
      }
    ],
    "reviews": [
      {
        "name": "Saraswathi N.",
        "location": "Guntur",
        "stars": 5,
        "text": "Perfect for Sankranti! The sesame is perfectly roasted."
      },
      {
        "name": "Ravi T.",
        "location": "Guntur",
        "stars": 5,
        "text": "Healthy and delicious. We buy these year-round!"
      }
    ]
  },
  {
    "id": 43,
    "name": "Dry Fruit Laddu",
    "category": "Laddu",
    "badge": null,
    "description": "Loaded with premium dry fruits.",
    "ingredients": [
      "Almonds",
      "Cashews",
      "Pistachios",
      "Dates",
      "Ghee",
      "Cardamom",
      "Saffron"
    ],
    "tradition": "Dry Fruit Laddu is the premium offering in any sweet box. Packed with nutrition from various nuts and dried fruits, these laddus are often given to new mothers in Indian tradition as part of the 'gond ka laddu' custom, providing essential nutrients for postnatal recovery.",
    "variants": [
      {
        "weight": "250g",
        "price": 200
      },
      {
        "weight": "500g",
        "price": 400
      },
      {
        "weight": "1kg",
        "price": 800
      }
    ],
    "reviews": [
      {
        "name": "Annapurna K.",
        "location": "Guntur",
        "stars": 5,
        "text": "Loaded with premium dry fruits. Every bite is a delight!"
      },
      {
        "name": "Murthy V.",
        "location": "Guntur",
        "stars": 5,
        "text": "The best gift for health-conscious people. Love it!"
      }
    ]
  },
  {
    "id": 44,
    "name": "Ghee Annamayya Laddu",
    "category": "Laddu",
    "badge": null,
    "description": "Temple-style offering laddu made in pure ghee.",
    "ingredients": [
      "Besan",
      "Pure Cow Ghee",
      "Sugar",
      "Cardamom",
      "Cashews",
      "Raisins"
    ],
    "tradition": "Named after the great poet-saint Annamacharya of Tirupati, this laddu follows the traditional recipe used in Tirumala temple. Made with generous amounts of pure cow ghee, it carries the divine blessing associated with Lord Venkateswara's prasadam tradition.",
    "variants": [
      {
        "weight": "250g",
        "price": 150
      },
      {
        "weight": "500g",
        "price": 300
      },
      {
        "weight": "1kg",
        "price": 600
      }
    ],
    "reviews": [
      {
        "name": "Balaji S.",
        "location": "Guntur",
        "stars": 5,
        "text": "Tastes like Tirupati prasadam! The ghee quality is unmatched."
      },
      {
        "name": "Padma L.",
        "location": "Guntur",
        "stars": 5,
        "text": "So much ghee! Reminds me of temple laddus. Truly blessed taste."
      }
    ]
  },
  {
    "id": 45,
    "name": "Maramarala Undalu",
    "category": "Laddu",
    "badge": null,
    "description": "Puffed rice and jaggery laddu.",
    "ingredients": [
      "Puffed Rice (Maramaralu)",
      "Jaggery",
      "Ghee",
      "Peanuts",
      "Cardamom"
    ],
    "tradition": "Maramarala Undalu (puffed rice balls) are a quintessential Andhra snack with deep rural roots. Made during festivals and family gatherings, these light, crunchy laddus represent the agricultural heritage of the Godavari and Krishna delta regions.",
    "variants": [
      {
        "weight": "250g",
        "price": 100
      },
      {
        "weight": "500g",
        "price": 200
      },
      {
        "weight": "1kg",
        "price": 400
      }
    ],
    "reviews": [
      {
        "name": "Subbamma G.",
        "location": "Guntur",
        "stars": 5,
        "text": "Crunchy and sweet! Perfect old-school snack."
      },
      {
        "name": "Raju M.",
        "location": "Guntur",
        "stars": 4,
        "text": "Takes me back to my village. Authentic taste!"
      }
    ]
  },
  {
    "id": 46,
    "name": "Sunnundalu",
    "category": "Laddu",
    "badge": null,
    "description": "Black gram laddu, traditional Andhra protein snack.",
    "ingredients": [
      "Urad Dal",
      "Pure Ghee",
      "Powdered Sugar",
      "Cardamom",
      "Dry Ginger"
    ],
    "tradition": "Sunnundalu (Urad Dal Laddu) is the signature sweet of Andhra Pradesh, made with roasted black gram and loads of ghee. This protein-rich sweet is traditionally prepared for pregnant women and new mothers. No Telugu function is complete without Sunnundalu on the menu.",
    "variants": [
      {
        "weight": "250g",
        "price": 140
      },
      {
        "weight": "500g",
        "price": 280
      },
      {
        "weight": "1kg",
        "price": 560
      }
    ],
    "reviews": [
      {
        "name": "Lakshmi G.",
        "location": "Guntur",
        "stars": 5,
        "text": "The ghee just drips! Authentic Andhra sunnundalu at its best."
      },
      {
        "name": "Srikanth R.",
        "location": "Guntur",
        "stars": 5,
        "text": "No one makes sunnundalu like Murali Sweets. The texture is perfect!"
      }
    ]
  },
  {
    "id": 47,
    "name": "Honey Mysurpak",
    "category": "Mysurpak",
    "badge": "Hot",
    "description": "Mysurpak glazed with pure honey.",
    "ingredients": [
      "Besan (Gram Flour)",
      "Honey",
      "Pure Ghee",
      "Cardamom",
      "Cashews"
    ],
    "tradition": "Mysore Pak was invented in the royal kitchen of the Mysore Palace by the legendary cook Kakasura Madappa. The honey variant adds natural sweetness, creating a healthier version of this royal sweet that was originally created for Maharaja Krishna Raja Wadiyar IV.",
    "variants": [
      {
        "weight": "250g",
        "price": 190
      },
      {
        "weight": "500g",
        "price": 380
      },
      {
        "weight": "1kg",
        "price": 760
      }
    ],
    "reviews": [
      {
        "name": "Aruna S.",
        "location": "Guntur",
        "stars": 5,
        "text": "The honey makes it so special! Rich and not overly sweet."
      },
      {
        "name": "Prasanna K.",
        "location": "Guntur",
        "stars": 5,
        "text": "Melts on the tongue! The ghee quality is evident in every bite."
      }
    ]
  },
  {
    "id": 48,
    "name": "Ghee Mysurpak",
    "category": "Mysurpak",
    "badge": null,
    "description": "Three ingredients. Pure ghee. Made in 40 minutes of constant stirring.",
    "ingredients": [
      "Besan (Gram Flour)",
      "Sugar",
      "Pure Ghee (generous quantity)",
      "Cardamom"
    ],
    "tradition": "Ghee Mysurpak is the original, authentic version where ghee is the star, used in quantities that would astonish modern bakers. A perfect Mysurpak should literally dissolve the moment it touches the tongue, leaving behind only the rich aroma of pure ghee.",
    "variants": [
      {
        "weight": "250g",
        "price": 180
      },
      {
        "weight": "500g",
        "price": 360
      },
      {
        "weight": "1kg",
        "price": 720
      }
    ],
    "reviews": [
      {
        "name": "Narayana R.",
        "location": "Guntur",
        "stars": 5,
        "text": "The ghee literally drips from this! Absolute perfection."
      },
      {
        "name": "Shanthi V.",
        "location": "Guntur",
        "stars": 5,
        "text": "One bite and you'll forget all other sweets exist. Simply the best!"
      }
    ]
  },
  {
    "id": 49,
    "name": "Ghee Mysurpak Pieces",
    "category": "Mysurpak",
    "badge": null,
    "description": "Pre-cut pieces of pure ghee mysurpak.",
    "ingredients": [
      "Besan",
      "Sugar",
      "Pure Ghee",
      "Cardamom",
      "Cashew Pieces"
    ],
    "tradition": "Cut into convenient pieces for sharing and gifting, Ghee Mysurpak Pieces are the preferred choice for festival gift boxes. In South Indian tradition, sharing ghee-rich sweets is considered sharing prosperity itself.",
    "variants": [
      {
        "weight": "250g",
        "price": 175
      },
      {
        "weight": "500g",
        "price": 350
      },
      {
        "weight": "1kg",
        "price": 700
      }
    ],
    "reviews": [
      {
        "name": "Madhavi K.",
        "location": "Guntur",
        "stars": 5,
        "text": "Perfect portions for gifting. Everyone loves these pieces!"
      },
      {
        "name": "Sai R.",
        "location": "Guntur",
        "stars": 4,
        "text": "Convenient size with the same great taste. Good for sharing!"
      }
    ]
  },
  {
    "id": 50,
    "name": "Ghee Plate Mysurpak",
    "category": "Mysurpak",
    "badge": null,
    "description": "Full plate serving of ghee mysurpak.",
    "ingredients": [
      "Besan",
      "Sugar",
      "Abundant Pure Ghee",
      "Cardamom"
    ],
    "tradition": "Plate Mysurpak refers to the traditional presentation, a whole tray of uncut Mysurpak, served family-style. In South Indian homes, bringing a full plate of Mysurpak to a celebration is considered the highest form of sweet generosity.",
    "variants": [
      {
        "weight": "500g",
        "price": 350
      },
      {
        "weight": "1kg",
        "price": 670
      }
    ],
    "reviews": [
      {
        "name": "Govind P.",
        "location": "Guntur",
        "stars": 5,
        "text": "A whole plate of pure ghee Mysurpak, what a treat!"
      },
      {
        "name": "Yamini D.",
        "location": "Guntur",
        "stars": 5,
        "text": "We always order the plate size for our family functions."
      }
    ]
  },
  {
    "id": 51,
    "name": "Dalda Mysurpak",
    "category": "Mysurpak",
    "badge": null,
    "description": "Classic mysurpak, affordable option.",
    "ingredients": [
      "Besan",
      "Sugar",
      "Vegetable Oil/Dalda",
      "Cardamom"
    ],
    "tradition": "Dalda Mysurpak offers the beloved taste of Mysore Pak at an accessible price point. While purists prefer the ghee version, this variant has its own loyal following, especially for everyday enjoyment and large-quantity orders for community events.",
    "variants": [
      {
        "weight": "250g",
        "price": 120
      },
      {
        "weight": "500g",
        "price": 240
      },
      {
        "weight": "1kg",
        "price": 480
      }
    ],
    "reviews": [
      {
        "name": "Suresh K.",
        "location": "Guntur",
        "stars": 4,
        "text": "Great value for the price. Good everyday sweet!"
      },
      {
        "name": "Manga L.",
        "location": "Guntur",
        "stars": 4,
        "text": "Nice taste and affordable. Perfect for daily treats."
      }
    ]
  },
  {
    "id": 52,
    "name": "Ghee Plain Ariselu",
    "category": "Ariselu",
    "badge": "Bestseller",
    "description": "Rice and jaggery, fried in pure ghee. Andhra's oldest sweet.",
    "ingredients": [
      "Rice Flour",
      "Jaggery",
      "Pure Ghee",
      "Sesame Seeds",
      "Cardamom"
    ],
    "tradition": "Ariselu is THE sweet of Sankranti in Telugu culture, no Pongal celebration is complete without these golden, crispy rice-jaggery discs. Made with ghee, they represent the agricultural harvest and are offered to the Sun God during the festival of gratitude.",
    "variants": [
      {
        "weight": "250g",
        "price": 120
      },
      {
        "weight": "500g",
        "price": 240
      },
      {
        "weight": "1kg",
        "price": 480
      }
    ],
    "reviews": [
      {
        "name": "Lakshmi K.",
        "location": "Guntur",
        "stars": 5,
        "text": "Perfect Sankranti sweet! Crispy outside, chewy inside."
      },
      {
        "name": "Ramana G.",
        "location": "Guntur",
        "stars": 5,
        "text": "The ghee makes all the difference. Authentic festival taste!"
      }
    ]
  },
  {
    "id": 53,
    "name": "Ghee Nuvvulu Ariselu",
    "category": "Ariselu",
    "badge": null,
    "description": "Sesame-coated ariselu in pure ghee.",
    "ingredients": [
      "Rice Flour",
      "Jaggery",
      "Pure Ghee",
      "White Sesame Seeds (Nuvvulu)",
      "Cardamom"
    ],
    "tradition": "The addition of sesame seeds (nuvvulu) to ariselu creates a more nutritious and flavorful version. Sesame and jaggery together are considered sacred during Sankranti, they symbolize 'sticking together' like the jaggery, promoting unity in relationships.",
    "variants": [
      {
        "weight": "250g",
        "price": 130
      },
      {
        "weight": "500g",
        "price": 260
      },
      {
        "weight": "1kg",
        "price": 520
      }
    ],
    "reviews": [
      {
        "name": "Sarada V.",
        "location": "Guntur",
        "stars": 5,
        "text": "The sesame coating gives it such a nice crunch!"
      },
      {
        "name": "Praveen T.",
        "location": "Guntur",
        "stars": 5,
        "text": "Best ghee nuvvulu ariselu in Guntur. Period!"
      }
    ]
  },
  {
    "id": 54,
    "name": "Oil Plain Ariselu",
    "category": "Ariselu",
    "badge": null,
    "description": "Classic ariselu fried in oil.",
    "ingredients": [
      "Rice Flour",
      "Jaggery",
      "Sesame Oil",
      "Cardamom"
    ],
    "tradition": "Oil Ariselu is the traditional village-style version, deep-fried in sesame oil which adds its own distinctive nutty flavor. Many Telugu families actually prefer this over the ghee version, as it represents the rustic, uncompromised taste of rural Andhra cooking.",
    "variants": [
      {
        "weight": "250g",
        "price": 100
      },
      {
        "weight": "500g",
        "price": 200
      },
      {
        "weight": "1kg",
        "price": 400
      }
    ],
    "reviews": [
      {
        "name": "Venu M.",
        "location": "Guntur",
        "stars": 4,
        "text": "The sesame oil flavor is wonderful. Very traditional!"
      },
      {
        "name": "Bharathi R.",
        "location": "Guntur",
        "stars": 4,
        "text": "Reminds me of village festivals. Authentic taste!"
      }
    ]
  },
  {
    "id": 55,
    "name": "Oil Nuvvulu Ariselu",
    "category": "Ariselu",
    "badge": null,
    "description": "Sesame ariselu in oil-fried version.",
    "ingredients": [
      "Rice Flour",
      "Jaggery",
      "Sesame Oil",
      "White Sesame Seeds",
      "Cardamom"
    ],
    "tradition": "Oil Nuvvulu Ariselu combines two forms of sesame, oil for frying and seeds for coating, creating a double-sesame delight. This version has the most authentic rustic flavor and is the preferred choice in many temple kitchens during Sankranti.",
    "variants": [
      {
        "weight": "250g",
        "price": 110
      },
      {
        "weight": "500g",
        "price": 220
      },
      {
        "weight": "1kg",
        "price": 440
      }
    ],
    "reviews": [
      {
        "name": "Kamesh B.",
        "location": "Guntur",
        "stars": 5,
        "text": "Double sesame goodness! The most traditional version."
      },
      {
        "name": "Lalitha G.",
        "location": "Guntur",
        "stars": 4,
        "text": "Perfect texture and not too sweet. Just right!"
      }
    ]
  },
  {
    "id": 56,
    "name": "Oil Malpuri",
    "category": "Malpuri",
    "badge": null,
    "description": "Malpuri in the traditional oil-fried way.",
    "ingredients": [
      "Maida Flour",
      "Milk",
      "Sugar Syrup",
      "Oil",
      "Fennel Seeds",
      "Cardamom"
    ],
    "tradition": "Malpua (Malpuri) is an ancient Indian pancake-like sweet mentioned in early Sanskrit texts. It is particularly associated with Holi and Chhath Puja celebrations. In Odisha and Bihar, offering malpua to deities during festivals is a centuries-old tradition.",
    "variants": [
      {
        "weight": "250g",
        "price": 110
      },
      {
        "weight": "500g",
        "price": 220
      },
      {
        "weight": "1kg",
        "price": 440
      }
    ],
    "reviews": [
      {
        "name": "Padma T.",
        "location": "Guntur",
        "stars": 4,
        "text": "Crispy and soaked in sweet syrup. Festival perfection!"
      },
      {
        "name": "Kiran V.",
        "location": "Guntur",
        "stars": 4,
        "text": "Love the fennel flavor. Very traditional taste!"
      }
    ]
  },
  {
    "id": 57,
    "name": "Ghee Malpuri",
    "category": "Malpuri",
    "badge": "Hot",
    "description": "Thick pancake sweet fried in ghee, soaked in syrup.",
    "ingredients": [
      "Maida Flour",
      "Milk",
      "Sugar Syrup",
      "Pure Ghee",
      "Fennel Seeds",
      "Cardamom",
      "Saffron"
    ],
    "tradition": "Ghee Malpuri elevates the traditional malpua with the richness of pure ghee. In Mathura and Vrindavan, ghee malpua is offered to Lord Krishna during Janmashtami, and it is believed that Lord Krishna himself was particularly fond of this sweet.",
    "variants": [
      {
        "weight": "250g",
        "price": 140
      },
      {
        "weight": "500g",
        "price": 280
      },
      {
        "weight": "1kg",
        "price": 560
      }
    ],
    "reviews": [
      {
        "name": "Radha S.",
        "location": "Guntur",
        "stars": 5,
        "text": "The ghee makes it so much richer! Incredible taste."
      },
      {
        "name": "Gopal K.",
        "location": "Guntur",
        "stars": 5,
        "text": "Worth every calorie! The ghee version is far superior."
      }
    ]
  },
  {
    "id": 58,
    "name": "Kala Jamun",
    "category": "Bengali Sweets",
    "badge": "Hot",
    "description": "Dark caramelized gulab jamun with deeper flavour.",
    "ingredients": [
      "Khoya",
      "Paneer",
      "Maida",
      "Sugar Syrup",
      "Ghee",
      "Cardamom",
      "Rose Water"
    ],
    "tradition": "Kala Jamun is the darker, richer cousin of Gulab Jamun, cooked longer in ghee until they develop a deep brown color and caramelized flavor. The name 'Kala' (black) comes from this extended cooking that gives it a more intense, toffee-like taste.",
    "variants": [
      {
        "weight": "250g",
        "price": 130
      },
      {
        "weight": "500g",
        "price": 260
      },
      {
        "weight": "1kg",
        "price": 520
      }
    ],
    "reviews": [
      {
        "name": "Sneha R.",
        "location": "Guntur",
        "stars": 5,
        "text": "The caramelized flavor is so unique! Better than regular gulab jamun."
      },
      {
        "name": "Arvind M.",
        "location": "Guntur",
        "stars": 5,
        "text": "Deep, dark, and incredibly rich. A true indulgence!"
      }
    ]
  },
  {
    "id": 59,
    "name": "Small Rasagulla",
    "category": "Bengali Sweets",
    "badge": null,
    "description": "Soft spongy chena balls in light sugar syrup.",
    "ingredients": [
      "Fresh Chhena (Cottage Cheese)",
      "Sugar Syrup",
      "Rose Water",
      "Cardamom"
    ],
    "tradition": "Rasgulla is the pride of Bengal, invented by Nobin Chandra Das in 1868 in Kolkata. These spongy white balls of chhena dipped in light sugar syrup are the quintessential Bengali sweet. It is also the official sweet of Odisha, where it is offered to Lord Jagannath in Puri.",
    "variants": [
      {
        "weight": "250g",
        "price": 100
      },
      {
        "weight": "500g",
        "price": 200
      },
      {
        "weight": "1kg",
        "price": 400
      }
    ],
    "reviews": [
      {
        "name": "Bina D.",
        "location": "Guntur",
        "stars": 5,
        "text": "So soft and spongy! Perfect rasagulla texture."
      },
      {
        "name": "Mahesh P.",
        "location": "Guntur",
        "stars": 4,
        "text": "Light and refreshing. Not overly sweet. Just right!"
      }
    ]
  },
  {
    "id": 60,
    "name": "Small Gulab Jamun",
    "category": "Bengali Sweets",
    "badge": null,
    "description": "Bite-sized gulab jamun, perfectly syrupy.",
    "ingredients": [
      "Khoya",
      "Milk Powder",
      "Maida",
      "Sugar Syrup",
      "Ghee",
      "Cardamom",
      "Rose Water",
      "Saffron"
    ],
    "tradition": "Gulab Jamun, meaning \"rose-scented berry\", arrived in India with the Mughal emperors. Made from khoya (reduced milk) and soaked in rose-scented syrup, these golden orbs have become India's most universally loved dessert, served at every celebration from weddings to birthday parties.",
    "variants": [
      {
        "weight": "250g",
        "price": 110
      },
      {
        "weight": "500g",
        "price": 220
      },
      {
        "weight": "1kg",
        "price": 440
      }
    ],
    "reviews": [
      {
        "name": "Fatima N.",
        "location": "Guntur",
        "stars": 5,
        "text": "Melt-in-mouth perfection! The rose syrup is heavenly."
      },
      {
        "name": "Ajay K.",
        "location": "Guntur",
        "stars": 5,
        "text": "The perfect gulab jamun, soft, juicy, and not too sweet!"
      }
    ]
  },
  {
    "id": 61,
    "name": "Big Rasagulla",
    "category": "Bengali Sweets",
    "badge": null,
    "description": "Jumbo rasagulla, extra soft and juicy.",
    "ingredients": [
      "Fresh Chhena",
      "Sugar Syrup",
      "Rose Water",
      "Cardamom",
      "Kewra Water"
    ],
    "tradition": "Big Rasgullas are the showpiece sweet in Bengali celebrations. Their larger size allows them to absorb more syrup, creating an even juicier, more indulgent experience. In Durga Puja pandals across Bengal, giant rasgullas are offered as bhog (divine food offering).",
    "variants": [
      {
        "weight": "250g",
        "price": 120
      },
      {
        "weight": "500g",
        "price": 240
      },
      {
        "weight": "1kg",
        "price": 480
      }
    ],
    "reviews": [
      {
        "name": "Sulochana B.",
        "location": "Guntur",
        "stars": 5,
        "text": "Jumbo size with even better flavor! So juicy."
      },
      {
        "name": "Tapan R.",
        "location": "Guntur",
        "stars": 5,
        "text": "One big rasgulla is a meal in itself! Love the size."
      }
    ]
  },
  {
    "id": 62,
    "name": "Big Gulab Jamun",
    "category": "Bengali Sweets",
    "badge": null,
    "description": "Golden fried milk dumplings soaked in rose sugar syrup.",
    "ingredients": [
      "Khoya",
      "Milk Powder",
      "Maida",
      "Sugar Syrup",
      "Ghee",
      "Cardamom",
      "Rose Water",
      "Saffron"
    ],
    "tradition": "The generously-sized Gulab Jamun is the grand finale of any Indian feast. In North Indian wedding traditions, the size of the gulab jamun reflects the generosity of the host family. Larger portions are a sign of lavish hospitality and warm welcome.",
    "variants": [
      {
        "weight": "250g",
        "price": 120
      },
      {
        "weight": "500g",
        "price": 240
      },
      {
        "weight": "1kg",
        "price": 480
      }
    ],
    "reviews": [
      {
        "name": "Rani K.",
        "location": "Guntur",
        "stars": 5,
        "text": "Huge and syrupy! The most satisfying dessert ever."
      },
      {
        "name": "Kishore L.",
        "location": "Guntur",
        "stars": 5,
        "text": "One piece is enough to end the meal on a perfect note!"
      }
    ]
  },
  {
    "id": 63,
    "name": "White Bengali",
    "category": "Bengali Sweets",
    "badge": null,
    "description": "Milky white Bengali sweet, delicately flavoured.",
    "ingredients": [
      "Chhena",
      "Sugar",
      "Milk",
      "Cardamom",
      "Pistachios"
    ],
    "tradition": "White Bengali sweets, made from fresh chhena (paneer), represent the artistic tradition of Bengal's sweet-making. The white color symbolizes purity and these are traditionally served during Saraswati Puja and other religious occasions.",
    "variants": [
      {
        "weight": "250g",
        "price": 110
      },
      {
        "weight": "500g",
        "price": 220
      },
      {
        "weight": "1kg",
        "price": 440
      }
    ],
    "reviews": [
      {
        "name": "Swapna M.",
        "location": "Guntur",
        "stars": 5,
        "text": "Delicate and milky. Beautiful presentation too!"
      },
      {
        "name": "Bhaskar V.",
        "location": "Guntur",
        "stars": 4,
        "text": "Light and elegant. Perfect after a heavy meal."
      }
    ]
  },
  {
    "id": 64,
    "name": "Agra Pan",
    "category": "Bengali Sweets",
    "badge": null,
    "description": "Sweet paan-flavoured treat from Agra tradition.",
    "ingredients": [
      "Chhena",
      "Sugar Syrup",
      "Saffron",
      "Cardamom",
      "Pistachios"
    ],
    "tradition": "Agrapan (from Agra) is a fusion of North Indian and Bengali sweet traditions. It combines the rich flavors of the Mughal-influenced Agra sweet-making with Bengali chhena techniques, creating a sweet that bridges two great Indian culinary traditions.",
    "variants": [
      {
        "weight": "250g",
        "price": 160
      },
      {
        "weight": "500g",
        "price": 320
      },
      {
        "weight": "1kg",
        "price": 640
      }
    ],
    "reviews": [
      {
        "name": "Nikhil S.",
        "location": "Guntur",
        "stars": 4,
        "text": "A unique sweet with a wonderful blend of flavors!"
      },
      {
        "name": "Deepa R.",
        "location": "Guntur",
        "stars": 5,
        "text": "Something different from the usual Bengali sweets. Love it!"
      }
    ]
  },
  {
    "id": 65,
    "name": "Petapuri",
    "category": "Bengali Sweets",
    "badge": null,
    "description": "Layered puri-style sweet from Andhra.",
    "ingredients": [
      "Maida",
      "Chhena",
      "Sugar Syrup",
      "Ghee",
      "Cardamom"
    ],
    "tradition": "Peta Puri is a layered sweet that combines crispy outer shells with a soft, sweet filling. This sweet is popular during Dussehra celebrations and represents the layered richness of Indian culinary craftsmanship.",
    "variants": [
      {
        "weight": "250g",
        "price": 120
      },
      {
        "weight": "500g",
        "price": 240
      },
      {
        "weight": "1kg",
        "price": 480
      }
    ],
    "reviews": [
      {
        "name": "Lavanya K.",
        "location": "Guntur",
        "stars": 4,
        "text": "Crispy and creamy layers! Unique and delicious."
      },
      {
        "name": "Satish B.",
        "location": "Guntur",
        "stars": 4,
        "text": "An interesting texture combination. Very enjoyable!"
      }
    ]
  },
  {
    "id": 66,
    "name": "Bengali Sandwich",
    "category": "Bengali Sweets",
    "badge": null,
    "description": "Layered Bengali sweet with contrasting textures.",
    "ingredients": [
      "Chhena",
      "Sugar",
      "Cream",
      "Pistachios",
      "Rose Water",
      "Cardamom"
    ],
    "tradition": "Bengali Sandwich sweet is an innovative layered dessert where different flavored chhena layers are pressed together, creating a visually stunning cross-section. This modern Bengali innovation has become a bestseller at sweet shops across India.",
    "variants": [
      {
        "weight": "250g",
        "price": 140
      },
      {
        "weight": "500g",
        "price": 280
      },
      {
        "weight": "1kg",
        "price": 560
      }
    ],
    "reviews": [
      {
        "name": "Tanuja M.",
        "location": "Guntur",
        "stars": 5,
        "text": "The layered look is so pretty and each layer tastes different!"
      },
      {
        "name": "Rambabu K.",
        "location": "Guntur",
        "stars": 4,
        "text": "Creative and tasty. A great conversation starter at parties!"
      }
    ]
  },
  {
    "id": 67,
    "name": "Rasmalai",
    "category": "Bengali Sweets",
    "badge": "Bestseller",
    "description": "Rasmalai prepared fresh in the authentic sweet shop tradition of Guntur.",
    "ingredients": [
      "Chhena",
      "Milk (Rabri)",
      "Saffron",
      "Pistachios",
      "Almonds",
      "Sugar Syrup",
      "Cardamom"
    ],
    "tradition": "Rasmalai is a classic Bengali royal dessert, described by food historians as a 'rich cheesecake without a crust'. The soft, pillowy chhena discs are cooked in sugar syrup and then soaked in sweet, saffron-infused milk (rabri). In Bengali culture, serving Rasmalai is a gesture of high respect for esteemed guests.",
    "variants": [
      {
        "weight": "250g",
        "price": 120
      },
      {
        "weight": "500g",
        "price": 240
      },
      {
        "weight": "1kg",
        "price": 480
      }
    ],
    "reviews": [
      {
        "name": "Sourav B.",
        "location": "Guntur",
        "stars": 5,
        "text": "Incredibly soft and pillowy! The saffron milk is rich and delicious."
      },
      {
        "name": "Radhika M.",
        "location": "Guntur",
        "stars": 5,
        "text": "The best rasmalai in Guntur! Absolutely fresh and delicious."
      }
    ]
  },
  {
    "id": 68,
    "name": "Indrapuri",
    "category": "Bengali Sweets",
    "badge": null,
    "description": "Indrapuri prepared fresh in the authentic sweet shop tradition of Guntur.",
    "ingredients": [
      "Chhena",
      "Sugar Syrup",
      "Kova",
      "Pistachios",
      "Saffron",
      "Rose Water"
    ],
    "tradition": "Indrapuri is a grand Bengali sweet named after the mythological palace of Lord Indra, the king of gods. This royal sweet features a large, golden-hued rasgulla stuffed with a rich kova filling and decorated with saffron threads. It represents the height of luxury in traditional festive sweets.",
    "variants": [
      {
        "weight": "250g",
        "price": 120
      },
      {
        "weight": "500g",
        "price": 240
      },
      {
        "weight": "1kg",
        "price": 480
      }
    ],
    "reviews": [
      {
        "name": "Sujatha K.",
        "location": "Guntur",
        "stars": 5,
        "text": "Very rich and royal! The stuffing inside makes it extra special."
      },
      {
        "name": "Pradeep T.",
        "location": "Guntur",
        "stars": 5,
        "text": "A truly celestial sweet. Perfect for special family celebrations!"
      }
    ]
  },
  {
    "id": 69,
    "name": "Jaangiri",
    "category": "Jangiri",
    "badge": "Bestseller",
    "description": "Saffron-coloured spirals fried in ghee.",
    "ingredients": [
      "Urad Dal Batter",
      "Sugar Syrup",
      "Saffron",
      "Cardamom",
      "Ghee"
    ],
    "tradition": "Jangiri (also called Imarti in North India) dates back to the Mughal era and was inspired by the ornate jali (lattice) patterns of Mughal architecture. The intricate flower-shaped design is piped by hand, making each piece a work of edible art.",
    "variants": [
      {
        "weight": "250g",
        "price": 130
      },
      {
        "weight": "500g",
        "price": 260
      },
      {
        "weight": "1kg",
        "price": 520
      }
    ],
    "reviews": [
      {
        "name": "Suhasini T.",
        "location": "Guntur",
        "stars": 5,
        "text": "The floral pattern is so beautiful! Tastes as good as it looks."
      },
      {
        "name": "Raghu M.",
        "location": "Guntur",
        "stars": 5,
        "text": "Crispy on the outside, soft inside. Perfectly soaked in syrup!"
      }
    ]
  },
  {
    "id": 70,
    "name": "Purnam Bobbatlu",
    "category": "Bobbatlu",
    "badge": null,
    "description": "Stuffed flatbread with chana dal filling.",
    "ingredients": [
      "Maida Flour",
      "Chana Dal",
      "Jaggery",
      "Ghee",
      "Cardamom",
      "Nutmeg"
    ],
    "tradition": "Bobbatlu (Puran Poli / Holige) is the most sacred sweet in Telugu and Maharashtrian homes. It is the centerpiece of Ugadi (Telugu New Year) celebrations and is offered to God before being served to the family. The sweet chana dal filling wrapped in a thin roti represents the sweetness hidden within simplicity.",
    "variants": [
      {
        "weight": "250g",
        "price": 100
      },
      {
        "weight": "500g",
        "price": 200
      },
      {
        "weight": "1kg",
        "price": 400
      }
    ],
    "reviews": [
      {
        "name": "Vijayamma N.",
        "location": "Guntur",
        "stars": 5,
        "text": "Just like homemade! The chana dal filling is perfectly balanced."
      },
      {
        "name": "Mahesh S.",
        "location": "Guntur",
        "stars": 5,
        "text": "The best bobbatlu in Guntur. My Ugadi isn't complete without these!"
      }
    ]
  },
  {
    "id": 71,
    "name": "Chitti Kaja",
    "category": "Kaja & Kajikai",
    "badge": null,
    "description": "Mini kaja, crispy and syrupy.",
    "ingredients": [
      "Maida Flour",
      "Sugar Syrup",
      "Ghee",
      "Cardamom"
    ],
    "tradition": "Kaja is the iconic sweet of Andhra Pradesh, particularly famous from the temple town of Kakinada. Chitti (small) Kaja features multiple flaky layers soaked in sweet syrup. The layered texture represents the many blessings of Lord Venkateswara and is a beloved temple-town treat.",
    "variants": [
      {
        "weight": "250g",
        "price": 110
      },
      {
        "weight": "500g",
        "price": 220
      },
      {
        "weight": "1kg",
        "price": 440
      }
    ],
    "reviews": [
      {
        "name": "Suryam B.",
        "location": "Guntur",
        "stars": 5,
        "text": "Crispy layers soaked in syrup! Kakinada-style perfection."
      },
      {
        "name": "Jyothi V.",
        "location": "Guntur",
        "stars": 5,
        "text": "The flakiness is incredible. A true Andhra specialty!"
      }
    ]
  },
  {
    "id": 72,
    "name": "Madatha Kaja",
    "category": "Kaja & Kajikai",
    "badge": null,
    "description": "Multi-layered flaky sweet soaked in sugar syrup.",
    "ingredients": [
      "Maida Flour",
      "Sugar Syrup",
      "Ghee",
      "Cardamom"
    ],
    "tradition": "Madata Kaja is the larger, more indulgent version of the classic kaja. The word 'madata' means 'fold' in Telugu, referring to the multiple folds of dough that create its characteristic layered texture. This sweet is a pride of Coastal Andhra cuisine.",
    "variants": [
      {
        "weight": "250g",
        "price": 120
      },
      {
        "weight": "500g",
        "price": 240
      },
      {
        "weight": "1kg",
        "price": 480
      }
    ],
    "reviews": [
      {
        "name": "Narasimha D.",
        "location": "Guntur",
        "stars": 5,
        "text": "So many crispy layers! Pure Andhra craftsmanship."
      },
      {
        "name": "Annapurna S.",
        "location": "Guntur",
        "stars": 4,
        "text": "Generously soaked in syrup. Big and satisfying!"
      }
    ]
  },
  {
    "id": 73,
    "name": "Powder Kajjikayalu",
    "category": "Kaja & Kajikai",
    "badge": null,
    "description": "Powder-stuffed traditional kajjikayalu.",
    "ingredients": [
      "Maida Flour",
      "Sugar Powder",
      "Coconut",
      "Ghee",
      "Cardamom",
      "Poppy Seeds"
    ],
    "tradition": "Powder Kajikallu are filled with a dry, powdered sugar-coconut mixture that gives a delightful contrast between the crispy shell and the sandy-sweet filling. This version is preferred for its longer shelf life, making it ideal for festival seasons.",
    "variants": [
      {
        "weight": "250g",
        "price": 130
      },
      {
        "weight": "500g",
        "price": 260
      },
      {
        "weight": "1kg",
        "price": 520
      }
    ],
    "reviews": [
      {
        "name": "Manga T.",
        "location": "Guntur",
        "stars": 4,
        "text": "The powder filling is unique! Crunchy and sweet."
      },
      {
        "name": "Raghu B.",
        "location": "Guntur",
        "stars": 4,
        "text": "Different from the kova version but equally delicious!"
      }
    ]
  },
  {
    "id": 74,
    "name": "D/F Kajjikayalu",
    "category": "Kaja & Kajikai",
    "badge": null,
    "description": "Dry fruit stuffed kajjikayalu.",
    "ingredients": [
      "Maida Flour",
      "Mixed Dry Fruits",
      "Sugar",
      "Ghee",
      "Cardamom",
      "Saffron"
    ],
    "tradition": "Dry Fruit Kajikallu is the premium offering that combines the traditional crescent-shaped dumpling with a luxurious dry fruit filling. This modern innovation is the perfect gift sweet, blending traditional artistry with contemporary flavors.",
    "variants": [
      {
        "weight": "250g",
        "price": 160
      },
      {
        "weight": "500g",
        "price": 320
      },
      {
        "weight": "1kg",
        "price": 640
      }
    ],
    "reviews": [
      {
        "name": "Rajkumar M.",
        "location": "Guntur",
        "stars": 5,
        "text": "Loaded with dry fruits! Premium quality at its best."
      },
      {
        "name": "Lavanya R.",
        "location": "Guntur",
        "stars": 5,
        "text": "Perfect for gifting. Everyone asks where we bought them!"
      }
    ]
  },
  {
    "id": 75,
    "name": "Badusha",
    "category": "Badusha",
    "badge": null,
    "description": "Flaky, ghee-soaked pastry that dissolves on contact.",
    "ingredients": [
      "Maida Flour",
      "Yogurt",
      "Sugar Syrup",
      "Ghee",
      "Cardamom",
      "Baking Soda"
    ],
    "tradition": "Badusha (also called Balushahi in North India) is believed to have been inspired by the Persian 'Bamieh'. It became a staple of South Indian sweet shops and is an essential part of the Diwali sweet box in Andhra Pradesh. The flaky, syrup-soaked texture makes it irresistible.",
    "variants": [
      {
        "weight": "250g",
        "price": 130
      },
      {
        "weight": "500g",
        "price": 260
      },
      {
        "weight": "1kg",
        "price": 520
      }
    ],
    "reviews": [
      {
        "name": "Sarojini M.",
        "location": "Guntur",
        "stars": 5,
        "text": "Flaky and syrupy! The ghee aroma is wonderful."
      },
      {
        "name": "Chandra K.",
        "location": "Guntur",
        "stars": 5,
        "text": "Crispy outside, soft inside. The perfect badusha!"
      }
    ]
  },
  {
    "id": 76,
    "name": "Chitti Badusha",
    "category": "Badusha",
    "badge": null,
    "description": "Mini badusha, bite-sized perfection.",
    "ingredients": [
      "Maida Flour",
      "Yogurt",
      "Sugar Syrup",
      "Ghee",
      "Cardamom"
    ],
    "tradition": "Chitti (small) Badusha are bite-sized versions perfect for festival gift boxes and temple prasadam distribution. In many Andhra temples, small badushas are distributed as prasadam, making each small piece a carrier of divine blessings.",
    "variants": [
      {
        "weight": "250g",
        "price": 120
      },
      {
        "weight": "500g",
        "price": 240
      },
      {
        "weight": "1kg",
        "price": 480
      }
    ],
    "reviews": [
      {
        "name": "Rani T.",
        "location": "Guntur",
        "stars": 5,
        "text": "Perfect small size! Great for snacking and gifting."
      },
      {
        "name": "Srinu B.",
        "location": "Guntur",
        "stars": 4,
        "text": "Same great taste in a convenient small size!"
      }
    ]
  },
  {
    "id": 77,
    "name": "Sweet Boondi",
    "category": "Boondi",
    "badge": null,
    "description": "Sweet tiny besan pearls in sugar syrup.",
    "ingredients": [
      "Besan (Gram Flour)",
      "Sugar Syrup",
      "Ghee",
      "Saffron",
      "Cardamom",
      "Rose Water"
    ],
    "tradition": "Sweet Boondi is an integral part of Indian religious ceremonies. From temple prasadam to wedding feasts, these tiny golden droplets soaked in sugar syrup symbolize abundant blessings. In many Indian homes, boondi is the first sweet offered to God during any puja.",
    "variants": [
      {
        "weight": "250g",
        "price": 80
      },
      {
        "weight": "500g",
        "price": 160
      },
      {
        "weight": "1kg",
        "price": 320
      }
    ],
    "reviews": [
      {
        "name": "Tulasi M.",
        "location": "Guntur",
        "stars": 5,
        "text": "Perfectly sweet and each boondi is evenly sized!"
      },
      {
        "name": "Krishna G.",
        "location": "Guntur",
        "stars": 4,
        "text": "Great quality boondi. We buy this for every puja at home."
      }
    ]
  },
  {
    "id": 78,
    "name": "Papdi Loose",
    "category": "Papidi",
    "badge": null,
    "description": "Loose papdi, sweet and flaky.",
    "ingredients": [
      "Maida Flour",
      "Sugar Syrup",
      "Ghee",
      "Cardamom"
    ],
    "tradition": "Papidi is a flaky, layered South Indian sweet similar to baklava but with Indian spicing. The multiple thin layers are painstakingly built by hand, and the 'loose' version offers the individual flaky sheets that dissolve on the tongue.",
    "variants": [
      {
        "weight": "250g",
        "price": 100
      },
      {
        "weight": "500g",
        "price": 200
      },
      {
        "weight": "1kg",
        "price": 400
      }
    ],
    "reviews": [
      {
        "name": "Sarada K.",
        "location": "Guntur",
        "stars": 5,
        "text": "So many layers! Each one melts in your mouth."
      },
      {
        "name": "Naresh T.",
        "location": "Guntur",
        "stars": 4,
        "text": "The flakiness is incredible. A skilled sweet to make!"
      }
    ]
  },
  {
    "id": 79,
    "name": "Papdi Pieces",
    "category": "Papidi",
    "badge": null,
    "description": "Cut papdi pieces, perfect for snacking.",
    "ingredients": [
      "Maida Flour",
      "Sugar Syrup",
      "Ghee",
      "Cardamom"
    ],
    "tradition": "Papidi Pieces are the compact, cut form of this layered delicacy. The multiple layers when cut reveal a beautiful cross-section of craftsmanship. These are the preferred choice for gift boxes as they're easier to pack and serve.",
    "variants": [
      {
        "weight": "250g",
        "price": 110
      },
      {
        "weight": "500g",
        "price": 220
      },
      {
        "weight": "1kg",
        "price": 440
      }
    ],
    "reviews": [
      {
        "name": "Varalakshmi B.",
        "location": "Guntur",
        "stars": 5,
        "text": "Beautiful layers visible in each piece! Tastes amazing."
      },
      {
        "name": "Mohan D.",
        "location": "Guntur",
        "stars": 4,
        "text": "Great for gifting. The layered texture is wonderful!"
      }
    ]
  },
  {
    "id": 80,
    "name": "Paneer Jilebi",
    "category": "Special",
    "badge": null,
    "description": "Rich paneer-based jilebi, unique texture.",
    "ingredients": [
      "Paneer",
      "Maida Flour",
      "Sugar Syrup",
      "Saffron",
      "Ghee",
      "Cardamom",
      "Rose Water"
    ],
    "tradition": "Paneer Jalebi is a royal variant of India's beloved spiral sweet. While regular jalebi dates back to the 15th century, the paneer version adds richness and protein. Jalebi is so beloved in India that it has been declared the national sweet of Pakistan and is equally adored across Indian states.",
    "variants": [
      {
        "weight": "250g",
        "price": 150
      },
      {
        "weight": "500g",
        "price": 300
      },
      {
        "weight": "1kg",
        "price": 600
      }
    ],
    "reviews": [
      {
        "name": "Kavitha S.",
        "location": "Guntur",
        "stars": 5,
        "text": "The paneer adds such a unique richness! Incredible!"
      },
      {
        "name": "Ramu T.",
        "location": "Guntur",
        "stars": 5,
        "text": "Crispy, syrupy, and the paneer twist makes it special. A must-try!"
      }
    ]
  },
  {
    "id": 81,
    "name": "Potarekulu",
    "category": "Special",
    "badge": "Hot",
    "description": "Paper-thin rice starch sweet filled with ghee and sugar.",
    "ingredients": [
      "Fine Rice Batter (Jaya Rice)",
      "Pure Ghee",
      "Powdered Sugar",
      "Jaggery",
      "Cashews",
      "Almonds"
    ],
    "tradition": "Pootharekulu (or Potarekulu) is the legendary sweet of Atreyapuram, Andhra Pradesh. The name translates to 'coated sheet' in Telugu. Made by cooking wafer-thin sheets of rice starch on an inverted clay pot, then layering them with ghee, sugar, and dry fruits, this delicate sweet is a masterpiece of Andhra culinary heritage.",
    "variants": [
      {
        "weight": "6 pcs",
        "price": 120
      },
      {
        "weight": "12 pcs",
        "price": 220
      }
    ],
    "reviews": [
      {
        "name": "Srinivas A.",
        "location": "Guntur",
        "stars": 5,
        "text": "Authentic Atreyapuram taste! Flaky, sweet, and rich in ghee."
      },
      {
        "name": "Padma L.",
        "location": "Guntur",
        "stars": 5,
        "text": "The sheets are paper-thin and melt in your mouth. Exquisite!"
      }
    ]
  },
  {
    "id": 82,
    "name": "Ghewar",
    "category": "Special",
    "badge": null,
    "description": "Ghewar prepared fresh in the authentic sweet shop tradition of Guntur.",
    "ingredients": [
      "Maida Flour",
      "Ghee",
      "Ice Water",
      "Sugar Syrup",
      "Rabri",
      "Saffron",
      "Almonds",
      "Pistachios"
    ],
    "tradition": "Ghevar is a disc-shaped sweet cake from Rajasthan, traditionally prepared during the Teej and Raksha Bandhan festivals. Made using a special technique where batter is dropped into hot ghee to create a honeycomb-like lace, it is soaked in syrup and topped with rich rabri and silver leaf, symbolizing seasonal joy.",
    "variants": [
      {
        "weight": "250g",
        "price": 150
      },
      {
        "weight": "500g",
        "price": 300
      },
      {
        "weight": "1kg",
        "price": 600
      }
    ],
    "reviews": [
      {
        "name": "Amit S.",
        "location": "Guntur",
        "stars": 5,
        "text": "Perfect honeycomb structure! Crispy, rich, and delicious with rabri."
      },
      {
        "name": "Nisha K.",
        "location": "Guntur",
        "stars": 5,
        "text": "Authentic Rajasthani taste. Best Ghevar in the region!"
      }
    ]
  },
  {
    "id": 83,
    "name": "Boondi Mixture",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Crunchy boondi with spiced nuts mix.",
    "ingredients": [
      "Besan Boondi",
      "Peanuts",
      "Curry Leaves",
      "Red Chili",
      "Salt",
      "Oil",
      "Asafoetida"
    ],
    "tradition": "Boondi Mixture is the quintessential Indian tea-time snack. Every region has its own version, the South adds curry leaves and mustard seeds, while the North prefers more sev. This crunchy mix is also a staple at all Indian railway stations, sustaining millions of travelers daily.",
    "variants": [
      {
        "weight": "250g",
        "price": 85
      },
      {
        "weight": "500g",
        "price": 170
      },
      {
        "weight": "1kg",
        "price": 340
      }
    ],
    "reviews": [
      {
        "name": "Ramesh K.",
        "location": "Guntur",
        "stars": 5,
        "text": "The perfect chai companion! Crunchy and spicy."
      },
      {
        "name": "Lakshmi V.",
        "location": "Guntur",
        "stars": 5,
        "text": "Fresh and not too oily. The curry leaves add great flavor!"
      }
    ]
  },
  {
    "id": 84,
    "name": "Delhi Mixture",
    "category": "Hot & Savory",
    "badge": "Hot",
    "description": "North Indian style chatpata mixture.",
    "ingredients": [
      "Besan Sev",
      "Peanuts",
      "Cornflakes",
      "Green Peas",
      "Cashews",
      "Spices",
      "Oil"
    ],
    "tradition": "Delhi Mixture is the bold, spicier cousin of South Indian mixtures. Originating from Chandni Chowk's famous namkeen shops, this North Indian style features a wider variety of ingredients and a more assertive spice profile, reflecting Delhi's role as India's melting pot.",
    "variants": [
      {
        "weight": "250g",
        "price": 90
      },
      {
        "weight": "500g",
        "price": 180
      },
      {
        "weight": "1kg",
        "price": 360
      }
    ],
    "reviews": [
      {
        "name": "Vivek S.",
        "location": "Guntur",
        "stars": 5,
        "text": "The North Indian spice hit is addictive! Love the variety of textures."
      },
      {
        "name": "Priti M.",
        "location": "Guntur",
        "stars": 4,
        "text": "Different from our local mixture, but in a great way!"
      }
    ]
  },
  {
    "id": 85,
    "name": "Ragi Mixture",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Ragi Mixture prepared fresh in the authentic sweet shop tradition of Guntur.",
    "ingredients": [
      "Ragi (Finger Millet) Flour",
      "Rice Flour",
      "Peanuts",
      "Curry Leaves",
      "Red Chili Powder",
      "Cumin Seeds",
      "Oil",
      "Salt"
    ],
    "tradition": "Ragi (finger millet) Mixture is a modern health-conscious addition to the traditional namkeen repertoire. Ragi has been cultivated in South India for over 4,000 years and is prized for its calcium and iron content. This mixture brings ancient grain nutrition into the beloved mixture format.",
    "variants": [
      {
        "weight": "250g",
        "price": 90
      },
      {
        "weight": "500g",
        "price": 180
      },
      {
        "weight": "1kg",
        "price": 360
      }
    ],
    "reviews": [
      {
        "name": "Kavitha N.",
        "location": "Guntur",
        "stars": 5,
        "text": "Healthy and delicious! The ragi flavor adds a lovely nuttiness."
      },
      {
        "name": "Anil K.",
        "location": "Guntur",
        "stars": 4,
        "text": "Finally a healthy mixture that actually tastes good!"
      }
    ]
  },
  {
    "id": 86,
    "name": "Varity Mixture",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Varity Mixture prepared fresh in the authentic sweet shop tradition of Guntur.",
    "ingredients": [
      "Besan Sev",
      "Boondi",
      "Peanuts",
      "Cashews",
      "Raisins",
      "Cornflakes",
      "Curry Leaves",
      "Mixed Spices",
      "Oil"
    ],
    "tradition": "Variety Mixture is the grand ensemble of Indian namkeen, combining every beloved snack element into one harmonious mix. With sev, boondi, nuts, and multiple spiced components, each handful delivers a different flavor adventure. It's the mixtape of Indian snacking culture.",
    "variants": [
      {
        "weight": "250g",
        "price": 90
      },
      {
        "weight": "500g",
        "price": 180
      },
      {
        "weight": "1kg",
        "price": 360
      }
    ],
    "reviews": [
      {
        "name": "Subba Rao M.",
        "location": "Guntur",
        "stars": 5,
        "text": "So many textures and flavors in one bite! The best variety."
      },
      {
        "name": "Anitha G.",
        "location": "Guntur",
        "stars": 5,
        "text": "Every handful is different. Love the mix of sweet and spicy!"
      }
    ]
  },
  {
    "id": 87,
    "name": "Big Saggubiyam Mixture",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Big Saggubiyam Mixture prepared fresh in the authentic sweet shop tradition of Guntur.",
    "ingredients": [
      "Large Sabudana (Sago/Tapioca Pearls)",
      "Peanuts",
      "Red Chili Powder",
      "Curry Leaves",
      "Salt",
      "Oil",
      "Turmeric"
    ],
    "tradition": "Saggubiyam (sago/tapioca) Mixture uses large sago pearls that puff up into airy, crunchy balls when deep-fried. Originally a fasting food in Hindu tradition, sago snacks have become everyday favorites. The big pearls create satisfying, cloud-like puffs that shatter delightfully with each bite.",
    "variants": [
      {
        "weight": "250g",
        "price": 90
      },
      {
        "weight": "500g",
        "price": 180
      },
      {
        "weight": "1kg",
        "price": 360
      }
    ],
    "reviews": [
      {
        "name": "Rajesh V.",
        "location": "Guntur",
        "stars": 5,
        "text": "The big sago puffs are so light and crunchy! Unique texture."
      },
      {
        "name": "Manga T.",
        "location": "Guntur",
        "stars": 4,
        "text": "Love the airy crunch. Perfect for snacking!"
      }
    ]
  },
  {
    "id": 88,
    "name": "Small Saggubiyam Mixture",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Small Saggubiyam Mixture prepared fresh in the authentic sweet shop tradition of Guntur.",
    "ingredients": [
      "Small Sabudana (Sago/Tapioca Pearls)",
      "Peanuts",
      "Red Chili Powder",
      "Curry Leaves",
      "Salt",
      "Oil",
      "Turmeric"
    ],
    "tradition": "Small Saggubiyam Mixture uses finer sago pearls that create a denser, crunchier texture compared to the big version. The smaller pearls absorb more spice coating, delivering a more intense flavor. This version is preferred by those who enjoy a tighter, more satisfying crunch.",
    "variants": [
      {
        "weight": "250g",
        "price": 90
      },
      {
        "weight": "500g",
        "price": 180
      },
      {
        "weight": "1kg",
        "price": 360
      }
    ],
    "reviews": [
      {
        "name": "Sujatha M.",
        "location": "Guntur",
        "stars": 5,
        "text": "More crunchy than the big version! Great spice level."
      },
      {
        "name": "Prasad K.",
        "location": "Guntur",
        "stars": 4,
        "text": "The small pearls have more flavor. Very addictive!"
      }
    ]
  },
  {
    "id": 89,
    "name": "Marwadi Mixture",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Rajasthani-style spicy mixture.",
    "ingredients": [
      "Moth Dal",
      "Besan Sev",
      "Peanuts",
      "Green Peas",
      "Raisins",
      "Red Chili",
      "Chaat Masala",
      "Oil",
      "Salt"
    ],
    "tradition": "Marwadi Mixture hails from the Marwar region of Rajasthan, home to India's most famous namkeen traditions. The Marwari community's mercantile heritage spread their distinctive snack recipes across India. This mixture features a unique sweet-salty-spicy balance with the signature Rajasthani use of moth dal.",
    "variants": [
      {
        "weight": "250g",
        "price": 95
      },
      {
        "weight": "500g",
        "price": 190
      },
      {
        "weight": "1kg",
        "price": 380
      }
    ],
    "reviews": [
      {
        "name": "Lakshmi R.",
        "location": "Guntur",
        "stars": 5,
        "text": "The Rajasthani flavors are authentic! Love the moth dal crunch."
      },
      {
        "name": "Kishan M.",
        "location": "Guntur",
        "stars": 5,
        "text": "Different from our local mixtures, but absolutely delicious!"
      }
    ]
  },
  {
    "id": 90,
    "name": "Maramarala Mixture",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Maramarala Mixture prepared fresh in the authentic sweet shop tradition of Guntur.",
    "ingredients": [
      "Maramaralu (Puffed Rice)",
      "Peanuts",
      "Curry Leaves",
      "Red Chili Powder",
      "Mustard Seeds",
      "Turmeric",
      "Salt",
      "Oil"
    ],
    "tradition": "Maramaralu (puffed rice) Mixture is the lightest and most airy of all namkeen varieties. Puffed rice has been a staple of Indian snacking for millennia, from Bengal's jhalmuri to Maharashtra's bhel puri. The Telugu version tempered with curry leaves and mustard seeds is distinctly South Indian.",
    "variants": [
      {
        "weight": "250g",
        "price": 90
      },
      {
        "weight": "500g",
        "price": 180
      },
      {
        "weight": "1kg",
        "price": 360
      }
    ],
    "reviews": [
      {
        "name": "Bhagyamma S.",
        "location": "Guntur",
        "stars": 5,
        "text": "So light and crunchy! The puffed rice absorbs all the spice perfectly."
      },
      {
        "name": "Ramu K.",
        "location": "Guntur",
        "stars": 4,
        "text": "My go-to evening snack. Light, flavorful, and satisfying!"
      }
    ]
  },
  {
    "id": 91,
    "name": "Navratna Mixture",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Nine-ingredient premium mixture blend.",
    "ingredients": [
      "Besan Sev",
      "Boondi",
      "Lentils (Masoor)",
      "Moong Dal",
      "Peanuts",
      "Cashews",
      "Raisins",
      "Potato Sticks",
      "Spice Blend"
    ],
    "tradition": "Navratan (meaning 'nine gems') Mixture is the royal blend of Indian savory snacks. True to its name, it contains nine distinct crispy elements, combining savory sev, spiced lentils, peanuts, and dry fruits like raisins and cashews. It represents the rich diversity of texture in royal culinary traditions.",
    "variants": [
      {
        "weight": "250g",
        "price": 120
      },
      {
        "weight": "500g",
        "price": 240
      },
      {
        "weight": "1kg",
        "price": 480
      }
    ],
    "reviews": [
      {
        "name": "Ravi G.",
        "location": "Guntur",
        "stars": 5,
        "text": "Love the combination of sweet raisins and spicy sev. True gem of mixtures!"
      },
      {
        "name": "Anitha V.",
        "location": "Guntur",
        "stars": 5,
        "text": "Packed with cashews and peanuts. Very high quality and delicious!"
      }
    ]
  },
  {
    "id": 92,
    "name": "Kaara Boondi",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Spiced savoury boondi.",
    "ingredients": [
      "Besan (Gram Flour)",
      "Salt",
      "Red Chili Powder",
      "Asafoetida",
      "Curry Leaves",
      "Oil"
    ],
    "tradition": "Plain savory Boondhi is the backbone of South Indian snacking. These tiny, crisp gram flour droplets are seasoned with chili and curry leaves, making them the simplest yet most addictive namkeen. In Andhra homes, a jar of boondhi is always within arm's reach for unexpected guests.",
    "variants": [
      {
        "weight": "250g",
        "price": 70
      },
      {
        "weight": "500g",
        "price": 140
      },
      {
        "weight": "1kg",
        "price": 280
      }
    ],
    "reviews": [
      {
        "name": "Srinivas G.",
        "location": "Guntur",
        "stars": 5,
        "text": "Crispy and perfectly seasoned. The curry leaf aroma is wonderful!"
      },
      {
        "name": "Padma V.",
        "location": "Guntur",
        "stars": 4,
        "text": "Simple but irresistible. Great with evening tea."
      }
    ]
  },
  {
    "id": 93,
    "name": "Sanna Boondi",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Fine textured savoury boondi.",
    "ingredients": [
      "Fine Besan (Gram Flour)",
      "Salt",
      "Red Chili Powder",
      "Asafoetida",
      "Curry Leaves",
      "Oil"
    ],
    "tradition": "Sanna (fine/small) Boondhi uses a finer sieve to create delicate, tiny droplets that are even crunchier than regular boondhi. The smaller size means more surface area for the spices to cling to, delivering an intense flavor punch in every handful. A favorite in Guntur's tea stalls.",
    "variants": [
      {
        "weight": "250g",
        "price": 70
      },
      {
        "weight": "500g",
        "price": 140
      },
      {
        "weight": "1kg",
        "price": 280
      }
    ],
    "reviews": [
      {
        "name": "Sarada M.",
        "location": "Guntur",
        "stars": 5,
        "text": "So tiny and crunchy! More flavorful than regular boondhi."
      },
      {
        "name": "Venkat R.",
        "location": "Guntur",
        "stars": 5,
        "text": "The fine texture makes it melt in your mouth. Superb quality!"
      }
    ]
  },
  {
    "id": 94,
    "name": "Masala Chekkalu",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Spiced masala rice crackers.",
    "ingredients": [
      "Rice Flour",
      "Chili Powder",
      "Cumin Seeds",
      "Sesame Seeds",
      "Butter",
      "Salt"
    ],
    "tradition": "Chekkalu (Rice Crackers) are a traditional Telugu snack made during Diwali and Sankranti. The masala version adds a spicy kick to the crunchy rice cracker base. Making chekkalu at home is a family activity where everyone sits together to shape each piece by hand.",
    "variants": [
      {
        "weight": "250g",
        "price": 90
      },
      {
        "weight": "500g",
        "price": 180
      },
      {
        "weight": "1kg",
        "price": 360
      }
    ],
    "reviews": [
      {
        "name": "Padmavathi N.",
        "location": "Guntur",
        "stars": 5,
        "text": "The masala flavor is just right. Not too spicy!"
      },
      {
        "name": "Venu G.",
        "location": "Guntur",
        "stars": 4,
        "text": "Crunchy and flavorful. Great with tea!"
      }
    ]
  },
  {
    "id": 95,
    "name": "Butter Chekkalu",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Crispy rice crackers with butter flavour.",
    "ingredients": [
      "Rice Flour",
      "Butter",
      "Cumin Seeds",
      "Sesame Seeds",
      "Salt",
      "Green Chili"
    ],
    "tradition": "Butter Chekkalu are the richer, more indulgent version of traditional rice crackers. The butter adds a golden crispiness and rich flavor that makes these an irresistible snack. They represent the Andhra love for bold, buttery flavors in savory snacks.",
    "variants": [
      {
        "weight": "250g",
        "price": 100
      },
      {
        "weight": "500g",
        "price": 200
      },
      {
        "weight": "1kg",
        "price": 400
      }
    ],
    "reviews": [
      {
        "name": "Saroja K.",
        "location": "Guntur",
        "stars": 5,
        "text": "The butter flavor makes all the difference! So rich and crunchy."
      },
      {
        "name": "Hari M.",
        "location": "Guntur",
        "stars": 4,
        "text": "Can't stop at one! The buttery taste is addictive."
      }
    ]
  },
  {
    "id": 96,
    "name": "Chitti Chekkalu",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Mini crispy rice crackers.",
    "ingredients": [
      "Rice Flour",
      "Cumin Seeds",
      "Sesame Seeds",
      "Red Chili Powder",
      "Butter",
      "Salt",
      "Oil"
    ],
    "tradition": "Chitti (small) Chekkalu are bite-sized rice crackers that are easy to snack on. Their petite size makes them ideal for children's tiffin boxes and for serving with afternoon tea. In Telugu homes, making chitti chekkalu is a family affair, children press the tiny discs while elders supervise the frying.",
    "variants": [
      {
        "weight": "250g",
        "price": 85
      },
      {
        "weight": "500g",
        "price": 170
      },
      {
        "weight": "1kg",
        "price": 340
      }
    ],
    "reviews": [
      {
        "name": "Anuradha K.",
        "location": "Guntur",
        "stars": 5,
        "text": "Perfectly sized for snacking! My children love these."
      },
      {
        "name": "Durga Rao P.",
        "location": "Guntur",
        "stars": 4,
        "text": "Small but packed with flavor. Great in kids' lunch boxes!"
      }
    ]
  },
  {
    "id": 97,
    "name": "Saggubiyyam Chekkalu",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Saggubiyyam Chekkalu prepared fresh in the authentic sweet shop tradition of Guntur.",
    "ingredients": [
      "Sabudana (Sago/Tapioca)",
      "Rice Flour",
      "Cumin Seeds",
      "Red Chili Powder",
      "Salt",
      "Oil"
    ],
    "tradition": "Saggubiyam (sago) Chekkalu combine tapioca pearls with rice flour to create an incredibly light, airy cracker. When fried, the sago puffs up, creating tiny bubbles throughout the chekkalu that shatter with a satisfying crunch. These are a must-have Diwali snack in many Andhra homes.",
    "variants": [
      {
        "weight": "250g",
        "price": 90
      },
      {
        "weight": "500g",
        "price": 180
      },
      {
        "weight": "1kg",
        "price": 360
      }
    ],
    "reviews": [
      {
        "name": "Kanaka Durga M.",
        "location": "Guntur",
        "stars": 5,
        "text": "So airy and light! The sago makes them uniquely crunchy."
      },
      {
        "name": "Ravi Kumar S.",
        "location": "Guntur",
        "stars": 5,
        "text": "The bubbled texture is amazing. Best chekkalu for Diwali!"
      }
    ]
  },
  {
    "id": 98,
    "name": "Tapala Chekkalu",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Tapala Chekkalu prepared fresh in the authentic sweet shop tradition of Guntur.",
    "ingredients": [
      "Rice Flour",
      "Sesame Seeds",
      "Cumin Seeds",
      "Red Chili Powder",
      "Curry Leaves",
      "Salt",
      "Oil"
    ],
    "tradition": "Tapala Chekkalu are flat, pressed rice crackers made by flattening the dough on a wet cloth (tapala) before frying. This traditional pressing method creates ultra-thin, extra-crispy crackers. The technique has been passed down through Telugu generations and is considered a mark of cooking skill.",
    "variants": [
      {
        "weight": "250g",
        "price": 90
      },
      {
        "weight": "500g",
        "price": 180
      },
      {
        "weight": "1kg",
        "price": 360
      }
    ],
    "reviews": [
      {
        "name": "Savitramma N.",
        "location": "Guntur",
        "stars": 5,
        "text": "Paper-thin and incredibly crunchy! Old-fashioned perfection."
      },
      {
        "name": "Prasanna K.",
        "location": "Guntur",
        "stars": 4,
        "text": "The tapala technique really makes a difference. So crispy!"
      }
    ]
  },
  {
    "id": 99,
    "name": "Murukulu",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Spiral rice flour muruku, crunchy and addictive.",
    "ingredients": [
      "Rice Flour",
      "Urad Dal Flour",
      "Cumin Seeds",
      "Sesame Seeds",
      "Asafoetida",
      "Salt",
      "Oil"
    ],
    "tradition": "Murukulu (Murukku), meaning 'twisted' in Tamil, are iconic South Indian spiral snacks pressed through a mould and deep-fried. This ancient snack has been made for centuries during Diwali and Karthigai Deepam. The art of pressing perfect spirals is a skill mastered through years of practice in every South Indian kitchen.",
    "variants": [
      {
        "weight": "250g",
        "price": 90
      },
      {
        "weight": "500g",
        "price": 180
      },
      {
        "weight": "1kg",
        "price": 360
      }
    ],
    "reviews": [
      {
        "name": "Seetamma V.",
        "location": "Guntur",
        "stars": 5,
        "text": "Classic murukku! Perfectly twisted and crunchy."
      },
      {
        "name": "Rajendra P.",
        "location": "Guntur",
        "stars": 5,
        "text": "The crunch of fresh murukku is unmatched. Traditional perfection!"
      }
    ]
  },
  {
    "id": 100,
    "name": "Chala Chakralu",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Flat crispy chakralu made with rice.",
    "ingredients": [
      "Rice Flour",
      "Buttermilk (Challa)",
      "Cumin Seeds",
      "Sesame Seeds",
      "Red Chili Powder",
      "Salt",
      "Oil"
    ],
    "tradition": "Challa (buttermilk) Chakralu use tangy buttermilk in the dough, giving these spiral crackers a distinctive sour-spicy flavor. Buttermilk is sacred in Telugu culture, offered to Lord Vishnu and consumed daily for digestion. These chakralu carry that cultural significance in every tangy, crunchy bite.",
    "variants": [
      {
        "weight": "250g",
        "price": 90
      },
      {
        "weight": "500g",
        "price": 180
      },
      {
        "weight": "1kg",
        "price": 360
      }
    ],
    "reviews": [
      {
        "name": "Vijaya Lakshmi S.",
        "location": "Guntur",
        "stars": 5,
        "text": "The buttermilk tanginess is so unique! Perfectly crunchy."
      },
      {
        "name": "Nagaraju T.",
        "location": "Guntur",
        "stars": 5,
        "text": "My favorite chakralu! The tangy flavor is unbeatable."
      }
    ]
  },
  {
    "id": 101,
    "name": "Minapa Chakralu",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Urad dal chakralu, traditional Andhra snack.",
    "ingredients": [
      "Minapa Pappu (Urad Dal Flour)",
      "Rice Flour",
      "Cumin Seeds",
      "Sesame Seeds",
      "Black Pepper",
      "Curry Leaves",
      "Salt",
      "Oil"
    ],
    "tradition": "Minapa (black gram) Chakralu feature urad dal flour that adds a rich, earthy depth to the classic spiral cracker. Black gram chakralu are traditionally made during Sankranti and Diwali in Andhra households. The urad dal gives them extra protein and a more satisfying, nutty crunch.",
    "variants": [
      {
        "weight": "250g",
        "price": 95
      },
      {
        "weight": "500g",
        "price": 190
      },
      {
        "weight": "1kg",
        "price": 380
      }
    ],
    "reviews": [
      {
        "name": "Bhavani R.",
        "location": "Guntur",
        "stars": 5,
        "text": "The urad dal flavor is rich and earthy. Festival favorite!"
      },
      {
        "name": "Srinu M.",
        "location": "Guntur",
        "stars": 4,
        "text": "More substantial than regular chakralu. Love the protein boost!"
      }
    ]
  },
  {
    "id": 102,
    "name": "Vam Chekkalu",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Vam Chekkalu prepared fresh in the authentic sweet shop tradition of Guntur.",
    "ingredients": [
      "Rice Flour",
      "Urad Dal Flour",
      "Cumin Seeds",
      "Sesame Seeds",
      "Red Chili Powder",
      "Salt",
      "Oil"
    ],
    "tradition": "Vam Chakralu are large, spiral-shaped rice crackers, 'Vam' meaning big/full-sized in Telugu. These impressive crackers are pressed using a traditional brass mould (achchu) and deep-fried whole. Their large size makes them a showpiece snack, often displayed prominently at festival gatherings.",
    "variants": [
      {
        "weight": "250g",
        "price": 90
      },
      {
        "weight": "500g",
        "price": 180
      },
      {
        "weight": "1kg",
        "price": 360
      }
    ],
    "reviews": [
      {
        "name": "Annapurna Devi S.",
        "location": "Guntur",
        "stars": 5,
        "text": "Huge spirals! Impressive size and great crunch."
      },
      {
        "name": "Bala Krishna P.",
        "location": "Guntur",
        "stars": 5,
        "text": "The full-size chakralu are the real deal. Perfect for festivals!"
      }
    ]
  },
  {
    "id": 103,
    "name": "Palli Pakodi",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Peanut pakodi, crunchy snack.",
    "ingredients": [
      "Peanuts",
      "Besan (Gram Flour)",
      "Rice Flour",
      "Red Chili",
      "Curry Leaves",
      "Oil",
      "Salt"
    ],
    "tradition": "Palli (peanut) Pakodi is the beloved snack of Andhra Pradesh, crunchy peanut fritters that are the perfect companion for evening tea or coffee. In Telugu homes, the sound of pakodi being fried is the signal that guests are expected and hospitality is in full swing.",
    "variants": [
      {
        "weight": "250g",
        "price": 85
      },
      {
        "weight": "500g",
        "price": 170
      },
      {
        "weight": "1kg",
        "price": 340
      }
    ],
    "reviews": [
      {
        "name": "Sita G.",
        "location": "Guntur",
        "stars": 5,
        "text": "Crunchy and spicy! The peanut crunch is addictive."
      },
      {
        "name": "Krishna D.",
        "location": "Guntur",
        "stars": 5,
        "text": "Best palli pakodi in the market. Always fresh!"
      }
    ]
  },
  {
    "id": 104,
    "name": "Chekka Pakodi",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Traditional chekka pakodi, crispy and spiced.",
    "ingredients": [
      "Rice Flour",
      "Besan (Gram Flour)",
      "Red Chili Powder",
      "Sesame Seeds",
      "Cumin Seeds",
      "Curry Leaves",
      "Butter",
      "Salt",
      "Oil"
    ],
    "tradition": "Cheka Pakodi combines the best of two worlds, the crispness of chekkalu with the richness of pakodi. This hybrid snack from Andhra kitchens features a rice and gram flour base studded with aromatic seeds, creating a snack that is both sturdy and intensely flavorful.",
    "variants": [
      {
        "weight": "250g",
        "price": 90
      },
      {
        "weight": "500g",
        "price": 180
      },
      {
        "weight": "1kg",
        "price": 360
      }
    ],
    "reviews": [
      {
        "name": "Varalakshmi N.",
        "location": "Guntur",
        "stars": 5,
        "text": "The best of both worlds! Crunchy like chekkalu, rich like pakodi."
      },
      {
        "name": "Prabhakar M.",
        "location": "Guntur",
        "stars": 4,
        "text": "Great texture and flavor. A unique Andhra snack!"
      }
    ]
  },
  {
    "id": 105,
    "name": "Kaju Pakodi",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Crunchy cashew pakodi.",
    "ingredients": [
      "Cashew Nuts",
      "Besan (Gram Flour)",
      "Rice Flour",
      "Red Chili Powder",
      "Curry Leaves",
      "Salt",
      "Oil"
    ],
    "tradition": "Kaju Pakodi are premium cashew fritters where whole cashews are coated in spiced gram flour batter and deep-fried. This luxury snack combines the richness of cashews with the crunch of pakodi. Served at weddings and VIP gatherings, kaju pakodi represents the premium tier of Andhra namkeen.",
    "variants": [
      {
        "weight": "250g",
        "price": 180
      },
      {
        "weight": "500g",
        "price": 360
      },
      {
        "weight": "1kg",
        "price": 720
      }
    ],
    "reviews": [
      {
        "name": "Srinivasa Rao G.",
        "location": "Guntur",
        "stars": 5,
        "text": "Whole cashews in each pakodi! True premium snacking."
      },
      {
        "name": "Jaya Lakshmi M.",
        "location": "Guntur",
        "stars": 5,
        "text": "Rich, crunchy, and loaded with cashews. Absolutely worth it!"
      }
    ]
  },
  {
    "id": 106,
    "name": "Sanna Pusa",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Sanna Pusa prepared fresh in the authentic sweet shop tradition of Guntur.",
    "ingredients": [
      "Rice Flour",
      "Jaggery",
      "Sesame Seeds",
      "Cardamom",
      "Ghee",
      "Oil"
    ],
    "tradition": "Sannapusa are small, puffed sweet rice balls, a traditional Telugu snack where rice flour dough is sweetened with jaggery and deep-fried until it puffs up. 'Sanna' means small in Telugu. These airy, golden puffs are a beloved Sankranti delicacy, symbolizing abundance and prosperity.",
    "variants": [
      {
        "weight": "250g",
        "price": 90
      },
      {
        "weight": "500g",
        "price": 180
      },
      {
        "weight": "1kg",
        "price": 360
      }
    ],
    "reviews": [
      {
        "name": "Rama Devi M.",
        "location": "Guntur",
        "stars": 5,
        "text": "Light, puffy, and perfectly sweet! A Sankranti must-have."
      },
      {
        "name": "Harinath K.",
        "location": "Guntur",
        "stars": 4,
        "text": "Airy and crispy with jaggery sweetness. Traditional and delicious!"
      }
    ]
  },
  {
    "id": 107,
    "name": "Vamu Pusa",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Vamu Pusa prepared fresh in the authentic sweet shop tradition of Guntur.",
    "ingredients": [
      "Rice Flour",
      "Jaggery",
      "Sesame Seeds",
      "Cardamom",
      "Coconut",
      "Ghee",
      "Oil"
    ],
    "tradition": "Vam (big) Pusa are the larger version of the traditional puffed rice balls. The bigger size allows for a softer interior that contrasts beautifully with the crispy exterior. Often enriched with grated coconut, these generous puffs are a centerpiece of the Telugu festival snack platter.",
    "variants": [
      {
        "weight": "250g",
        "price": 90
      },
      {
        "weight": "500g",
        "price": 180
      },
      {
        "weight": "1kg",
        "price": 360
      }
    ],
    "reviews": [
      {
        "name": "Padmavathi G.",
        "location": "Guntur",
        "stars": 5,
        "text": "Big, beautiful puffs! The coconut filling is a lovely surprise."
      },
      {
        "name": "Satya Narayana R.",
        "location": "Guntur",
        "stars": 4,
        "text": "Crispy outside, soft inside. The perfect festival treat!"
      }
    ]
  },
  {
    "id": 108,
    "name": "Potato Chips",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Potato Chips prepared fresh in the authentic sweet shop tradition of Guntur.",
    "ingredients": [
      "Potatoes",
      "Salt",
      "Red Chili Powder",
      "Oil"
    ],
    "tradition": "Indian-style potato chips are thinner, crispier, and spicier than their Western counterparts. Made fresh in sweet shops across India, these chips are a testament to the Indian approach of taking a simple ingredient and elevating it with bold spicing and expert frying technique.",
    "variants": [
      {
        "weight": "250g",
        "price": 90
      },
      {
        "weight": "500g",
        "price": 180
      },
      {
        "weight": "1kg",
        "price": 360
      }
    ],
    "reviews": [
      {
        "name": "Kiran T.",
        "location": "Guntur",
        "stars": 5,
        "text": "Thin, crispy, and perfectly spiced! Freshly made."
      },
      {
        "name": "Ravi L.",
        "location": "Guntur",
        "stars": 4,
        "text": "Way better than packaged chips. The freshness shows!"
      }
    ]
  },
  {
    "id": 109,
    "name": "Samosa",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Crispy triangles stuffed with spiced potatoes.",
    "ingredients": [
      "Maida Flour",
      "Potatoes",
      "Green Peas",
      "Cumin",
      "Coriander",
      "Green Chili",
      "Oil"
    ],
    "tradition": "The Samosa arrived in India through Central Asian traders in the 14th century and became India's most iconic snack. From street corners to five-star hotels, the triangular stuffed pastry transcends all social boundaries. It is India's contribution to the world's greatest street foods.",
    "variants": [
      {
        "weight": "2 pcs",
        "price": 30
      },
      {
        "weight": "6 pcs",
        "price": 80
      }
    ],
    "reviews": [
      {
        "name": "Arun B.",
        "location": "Guntur",
        "stars": 5,
        "text": "Crispy crust, perfectly spiced potato filling! Classic!"
      },
      {
        "name": "Meera K.",
        "location": "Guntur",
        "stars": 5,
        "text": "Hot, fresh samosas from Murali Sweets, the best in Guntur!"
      }
    ]
  },
  {
    "id": 110,
    "name": "Dry Fruit Samosa",
    "category": "Hot & Savory",
    "badge": "New",
    "description": "Premium samosa with dry fruit filling.",
    "ingredients": [
      "Maida Flour",
      "Mixed Dry Fruits",
      "Coconut",
      "Sugar",
      "Ghee",
      "Cardamom"
    ],
    "tradition": "Dry Fruit Samosa is a sweet variant of the traditional samosa, filled with a mixture of chopped dry fruits instead of potatoes. This premium offering combines the familiar shape of India's beloved snack with a luxurious filling, making it a popular Diwali gift item.",
    "variants": [
      {
        "weight": "4 pcs",
        "price": 80
      },
      {
        "weight": "8 pcs",
        "price": 150
      }
    ],
    "reviews": [
      {
        "name": "Pallavi M.",
        "location": "Guntur",
        "stars": 5,
        "text": "Sweet samosa with dry fruits, what a genius idea!"
      },
      {
        "name": "Rohit S.",
        "location": "Guntur",
        "stars": 4,
        "text": "Perfect blend of savory shell and sweet filling. Unique!"
      }
    ]
  },
  {
    "id": 111,
    "name": "Kachori",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Flaky pastry with spiced dal filling.",
    "ingredients": [
      "Maida Flour",
      "Moong Dal",
      "Spices",
      "Green Chili",
      "Fennel Seeds",
      "Oil"
    ],
    "tradition": "Kachori is a beloved Indian snack from Rajasthan, where the Pyaaz ki Kachori of Jodhpur is legendary. The crispy shell filled with spiced dal or onion mixture is a testament to Indian culinary ingenuity, transforming simple ingredients into an extraordinary snack experience.",
    "variants": [
      {
        "weight": "4 pcs",
        "price": 50
      },
      {
        "weight": "8 pcs",
        "price": 90
      }
    ],
    "reviews": [
      {
        "name": "Suman R.",
        "location": "Guntur",
        "stars": 5,
        "text": "Perfectly flaky and the filling is so flavorful!"
      },
      {
        "name": "Dinesh P.",
        "location": "Guntur",
        "stars": 5,
        "text": "Hot kachori with green chutney, paradise!"
      }
    ]
  },
  {
    "id": 112,
    "name": "Sweet Gavvalu",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Shell-shaped sweet pasta, crunchy and glazed.",
    "ingredients": [
      "Maida Flour",
      "Sugar Syrup",
      "Ghee",
      "Cardamom"
    ],
    "tradition": "Gavvalu are shell-shaped sweet snacks from Andhra Pradesh, their name literally meaning 'shells' in Telugu. The tiny, curved shapes are hand-rolled one by one and deep-fried before being coated in sugar syrup. This labor-intensive process makes each piece a testament to patience and craftsmanship.",
    "variants": [
      {
        "weight": "250g",
        "price": 100
      },
      {
        "weight": "500g",
        "price": 200
      },
      {
        "weight": "1kg",
        "price": 400
      }
    ],
    "reviews": [
      {
        "name": "Suhasini P.",
        "location": "Guntur",
        "stars": 5,
        "text": "Each tiny shell is perfect! So much skill in each piece."
      },
      {
        "name": "Raju G.",
        "location": "Guntur",
        "stars": 4,
        "text": "Crunchy little shells coated in syrup. Addictive!"
      }
    ]
  },
  {
    "id": 113,
    "name": "Hot Gavvalu",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Spicy shell-shaped savoury pasta.",
    "ingredients": [
      "Maida Flour",
      "Rice Flour",
      "Red Chili Powder",
      "Cumin Seeds",
      "Sesame Seeds",
      "Ajwain",
      "Salt",
      "Oil"
    ],
    "tradition": "Hot Gavvalu are the spicy counterpart of sweet gavvalu, shell-shaped snacks but with a fiery chili kick. Each tiny shell is hand-rolled and deep-fried to golden perfection. While sweet gavvalu are for celebrations, hot gavvalu are for everyday snacking with a cup of strong Andhra filter coffee.",
    "variants": [
      {
        "weight": "250g",
        "price": 90
      },
      {
        "weight": "500g",
        "price": 180
      },
      {
        "weight": "1kg",
        "price": 360
      }
    ],
    "reviews": [
      {
        "name": "Sarojini P.",
        "location": "Guntur",
        "stars": 5,
        "text": "Spicy little shells! Perfect crunch and heat."
      },
      {
        "name": "Krishna Murthy G.",
        "location": "Guntur",
        "stars": 4,
        "text": "Love the shape and the kick. Great chai-time snack!"
      }
    ]
  },
  {
    "id": 114,
    "name": "Atukulu Mix",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Atukulu Mix prepared fresh in the authentic sweet shop tradition of Guntur.",
    "ingredients": [
      "Atukulu (Flattened Rice/Poha)",
      "Peanuts",
      "Curry Leaves",
      "Red Chili Powder",
      "Mustard Seeds",
      "Turmeric",
      "Salt",
      "Oil"
    ],
    "tradition": "Atukulu (flattened rice / poha) is one of India's oldest processed foods, dating back thousands of years. When fried and seasoned with South Indian tempering, these flat rice flakes become irresistibly crunchy. Atukulu is an essential part of the Andhra snack spread, served at every tea-time gathering.",
    "variants": [
      {
        "weight": "250g",
        "price": 90
      },
      {
        "weight": "500g",
        "price": 180
      },
      {
        "weight": "1kg",
        "price": 360
      }
    ],
    "reviews": [
      {
        "name": "Lalitha M.",
        "location": "Guntur",
        "stars": 5,
        "text": "Crunchy poha with perfect masala! A complete tea-time treat."
      },
      {
        "name": "Ganesh V.",
        "location": "Guntur",
        "stars": 4,
        "text": "Light, crispy, and full of flavor. Classic Andhra atukulu!"
      }
    ]
  },
  {
    "id": 115,
    "name": "Cornflakes Mixture",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Crunchy cornflakes mixed with spiced nuts.",
    "ingredients": [
      "Cornflakes",
      "Peanuts",
      "Curry Leaves",
      "Red Chili Powder",
      "Mustard Seeds",
      "Turmeric",
      "Salt",
      "Oil"
    ],
    "tradition": "Cornflex is India's brilliant reinvention of Western breakfast cereal into a spicy snack. Cornflakes are tempered with curry leaves, mustard seeds, and chili to create a uniquely Indian treat. This cross-cultural innovation reflects India's genius for absorbing global ingredients and making them completely its own.",
    "variants": [
      {
        "weight": "250g",
        "price": 80
      },
      {
        "weight": "500g",
        "price": 160
      },
      {
        "weight": "1kg",
        "price": 320
      }
    ],
    "reviews": [
      {
        "name": "Madhavi P.",
        "location": "Guntur",
        "stars": 5,
        "text": "Cornflakes turned spicy! Such a creative snack."
      },
      {
        "name": "Satish G.",
        "location": "Guntur",
        "stars": 4,
        "text": "Crunchy and full of flavor. Perfect party snack!"
      }
    ]
  },
  {
    "id": 116,
    "name": "Dal Mudi",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Crunchy dal snack mix.",
    "ingredients": [
      "Chana Dal",
      "Moong Dal",
      "Urad Dal",
      "Red Chili Powder",
      "Black Pepper",
      "Curry Leaves",
      "Asafoetida",
      "Salt",
      "Oil"
    ],
    "tradition": "Dalmudi is a triple-dal powerhouse snack combining fried chana, moong, and urad dal. Each dal brings a different texture and flavor, chana for nutty crunch, moong for sweetness, and urad for earthiness. This protein-rich snack is a staple in Andhra lunch boxes and bus journey provisions.",
    "variants": [
      {
        "weight": "250g",
        "price": 80
      },
      {
        "weight": "500g",
        "price": 160
      },
      {
        "weight": "1kg",
        "price": 320
      }
    ],
    "reviews": [
      {
        "name": "Venkaiah N.",
        "location": "Guntur",
        "stars": 5,
        "text": "Three dals in one, crunchy, spicy, and protein-packed!"
      },
      {
        "name": "Bharathi S.",
        "location": "Guntur",
        "stars": 5,
        "text": "The perfect travel snack. Always pack some for train journeys!"
      }
    ]
  },
  {
    "id": 117,
    "name": "Mirchi Bajji",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Stuffed green chillies in besan batter, deep fried.",
    "ingredients": [
      "Mirchi/Potato/Banana",
      "Besan (Gram Flour)",
      "Rice Flour",
      "Ajwain",
      "Salt",
      "Baking Soda",
      "Oil",
      "Chaat Masala"
    ],
    "tradition": "Bajji is the quintessential Indian street food, vegetables like long green chilies (Mirchi), potatoes, or raw bananas dipped in spiced gram flour batter and deep-fried. In Guntur, 'Mirchi Bajji' served with raw onions and lemon is a legendary street delicacy enjoyed on rainy evenings.",
    "variants": [
      {
        "weight": "4 pcs",
        "price": 40
      },
      {
        "weight": "8 pcs",
        "price": 70
      }
    ],
    "reviews": [
      {
        "name": "Bhaskar T.",
        "location": "Guntur",
        "stars": 5,
        "text": "Hot, crispy, and spicy! The Guntur-style mirchi bajji is spot on."
      },
      {
        "name": "Lakshmi D.",
        "location": "Guntur",
        "stars": 4,
        "text": "Perfect batter coating, not too heavy. Love it with chai!"
      }
    ]
  },
  {
    "id": 118,
    "name": "Dry Fruits Mixture",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Dry fruits based mixture for health-conscious.",
    "ingredients": [
      "Cashews",
      "Almonds",
      "Raisins",
      "Besan Sev",
      "Curry Leaves",
      "Spices",
      "Ghee"
    ],
    "tradition": "The premium Dry Fruit Mixture represents the luxurious side of Indian namkeen culture. Packed with roasted nuts and fine spices, this is the preferred savory for hosting VIP guests and serving during corporate events and upscale celebrations.",
    "variants": [
      {
        "weight": "250g",
        "price": 160
      },
      {
        "weight": "500g",
        "price": 320
      },
      {
        "weight": "1kg",
        "price": 640
      }
    ],
    "reviews": [
      {
        "name": "Anil P.",
        "location": "Guntur",
        "stars": 5,
        "text": "Loaded with cashews and almonds! Pure premium."
      },
      {
        "name": "Sunitha K.",
        "location": "Guntur",
        "stars": 5,
        "text": "We serve this to our guests. Everyone asks for the source!"
      }
    ]
  },
  {
    "id": 119,
    "name": "Kaju Fry",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Kaju Fry prepared fresh in the authentic sweet shop tradition of Guntur.",
    "ingredients": [
      "Cashew Nuts",
      "Salt",
      "Black Pepper",
      "Red Chili Powder",
      "Turmeric",
      "Oil"
    ],
    "tradition": "Kaju Fry features premium whole cashews deep-fried and seasoned with a special spice blend. The frying process brings out the natural sweetness of cashews while the spice coating adds a savory kick. A luxury snack reserved for special occasions and a popular accompaniment to evening drinks.",
    "variants": [
      {
        "weight": "250g",
        "price": 90
      },
      {
        "weight": "500g",
        "price": 180
      },
      {
        "weight": "1kg",
        "price": 360
      }
    ],
    "reviews": [
      {
        "name": "Rama Rao G.",
        "location": "Guntur",
        "stars": 5,
        "text": "Golden, crunchy cashews with perfect seasoning! Premium quality."
      },
      {
        "name": "Indira N.",
        "location": "Guntur",
        "stars": 5,
        "text": "The best fried cashews in Guntur. Worth every rupee!"
      }
    ]
  },
  {
    "id": 120,
    "name": "Vennundalu",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Vennundalu prepared fresh in the authentic sweet shop tradition of Guntur.",
    "ingredients": [
      "Butter (Venna)",
      "Rice Flour",
      "Sugar",
      "Cardamom"
    ],
    "tradition": "Vennundalu, meaning 'butter balls' in Telugu, are rich, crumbly cookies made with pure butter. These traditional Andhra cookies are a must during Sankranti celebrations and are often prepared alongside ariselu as part of the complete festival spread.",
    "variants": [
      {
        "weight": "250g",
        "price": 90
      },
      {
        "weight": "500g",
        "price": 180
      },
      {
        "weight": "1kg",
        "price": 360
      }
    ],
    "reviews": [
      {
        "name": "Bhavani M.",
        "location": "Guntur",
        "stars": 5,
        "text": "Melt-in-mouth butter cookies! Pure Andhra tradition."
      },
      {
        "name": "Chandra R.",
        "location": "Guntur",
        "stars": 5,
        "text": "The butter flavor is so pure and rich. Can't eat just one!"
      }
    ]
  },
  {
    "id": 121,
    "name": "Madras Vadalu",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Madras Vadalu prepared fresh in the authentic sweet shop tradition of Guntur.",
    "ingredients": [
      "Urad Dal Flour",
      "Rice Flour",
      "Black Pepper",
      "Cumin Seeds",
      "Curry Leaves",
      "Asafoetida",
      "Salt",
      "Oil"
    ],
    "tradition": "Madras Vadalu are crispy, deep-fried lentil fritters inspired by the snack traditions of Madras (Chennai). The combination of urad dal and rice flour creates a dense, crunchy cracker spiced with pepper and asafoetida. These are a staple of South Indian festival snack platters.",
    "variants": [
      {
        "weight": "250g",
        "price": 90
      },
      {
        "weight": "500g",
        "price": 180
      },
      {
        "weight": "1kg",
        "price": 360
      }
    ],
    "reviews": [
      {
        "name": "Padmini G.",
        "location": "Guntur",
        "stars": 5,
        "text": "The pepper bite is wonderful! Authentic Madras flavor."
      },
      {
        "name": "Chandra Sekhar R.",
        "location": "Guntur",
        "stars": 4,
        "text": "Crunchy and full of flavor. Reminds me of Chennai trips!"
      }
    ]
  },
  {
    "id": 122,
    "name": "Big Chekodi",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Big Chekodi prepared fresh in the authentic sweet shop tradition of Guntur.",
    "ingredients": [
      "Urad Dal Flour",
      "Rice Flour",
      "Red Chili Powder",
      "Cumin Seeds",
      "Black Pepper",
      "Asafoetida",
      "Salt",
      "Oil"
    ],
    "tradition": "Big Chekodi (Chegodilu) are ring-shaped, deep-fried lentil snacks that are a Telugu specialty. The ring shape allows for even frying, creating a uniformly crunchy snack. Chekodi is a must-have during Sankranti and Bathukamma festivals, symbolizing the circle of life and seasonal abundance.",
    "variants": [
      {
        "weight": "250g",
        "price": 90
      },
      {
        "weight": "500g",
        "price": 180
      },
      {
        "weight": "1kg",
        "price": 360
      }
    ],
    "reviews": [
      {
        "name": "Nirmala B.",
        "location": "Guntur",
        "stars": 5,
        "text": "Big, crunchy rings! The asafoetida flavor is perfect."
      },
      {
        "name": "Vamsi K.",
        "location": "Guntur",
        "stars": 5,
        "text": "Authentic Telugu chegodilu. Takes me back to my childhood!"
      }
    ]
  },
  {
    "id": 123,
    "name": "Vamu Khajalu",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Ajwain-flavoured diamond-cut snack.",
    "ingredients": [
      "Maida Flour",
      "Sugar Syrup",
      "Ghee",
      "Cardamom",
      "Baking Soda"
    ],
    "tradition": "Vam (big) Kaja is the full-sized version of the legendary South Indian flaky sweet. Each kaja has dozens of paper-thin layers that shatter upon biting, releasing the absorbed sugar syrup. The larger size makes the layering even more dramatic, a testament to the pastry craft perfected in Andhra sweet shops.",
    "variants": [
      {
        "weight": "250g",
        "price": 90
      },
      {
        "weight": "500g",
        "price": 180
      },
      {
        "weight": "1kg",
        "price": 360
      }
    ],
    "reviews": [
      {
        "name": "Satyavathi K.",
        "location": "Guntur",
        "stars": 5,
        "text": "So many flaky layers! The syrup soaks in perfectly."
      },
      {
        "name": "Veeraiah M.",
        "location": "Guntur",
        "stars": 5,
        "text": "Best kaja I've had. The big size lets you truly enjoy the layers!"
      }
    ]
  },
  {
    "id": 124,
    "name": "Bhakarwadi",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Spiral spicy sweet snack rolls.",
    "ingredients": [
      "Maida Flour",
      "Besan (Gram Flour)",
      "Coconut",
      "Sesame Seeds",
      "Poppy Seeds",
      "Tamarind",
      "Jaggery",
      "Red Chili",
      "Cumin",
      "Oil"
    ],
    "tradition": "Bakarwadi is a Maharashtrian masterpiece, crispy spiral rolls with a spiced filling of coconut, sesame, and a tangy-sweet tamarind-jaggery paste. Created by Pune's legendary Chitale Bandhu, this snack has conquered all of India. Each spiral encases layers of complex flavors that unfold with every bite.",
    "variants": [
      {
        "weight": "250g",
        "price": 110
      },
      {
        "weight": "500g",
        "price": 220
      },
      {
        "weight": "1kg",
        "price": 440
      }
    ],
    "reviews": [
      {
        "name": "Swarupa R.",
        "location": "Guntur",
        "stars": 5,
        "text": "The sweet-spicy-tangy spiral is incredible! Authentic Maharashtrian taste."
      },
      {
        "name": "Venkatesh D.",
        "location": "Guntur",
        "stars": 5,
        "text": "Best bakarwadi outside Maharashtra! Every bite has layers of flavor."
      }
    ]
  },
  {
    "id": 125,
    "name": "Chekodi",
    "category": "Hot & Savory",
    "badge": null,
    "description": "Ring-shaped fried snack.",
    "ingredients": [
      "Rice Flour",
      "Moong Dal",
      "Sesame Seeds",
      "Cumin Seeds",
      "Butter",
      "Red Chili Powder",
      "Turmeric",
      "Salt",
      "Oil"
    ],
    "tradition": "Chekodi (Chegodilu) is a popular South Indian ring-shaped snack from Andhra Pradesh. With its crispy texture and golden color, it is seasoned with sesame and cumin seeds. Prepared during festivals like Krishna Janmashtami and Diwali, it is a favorite among children and adults alike.",
    "variants": [
      {
        "weight": "250g",
        "price": 80
      },
      {
        "weight": "500g",
        "price": 160
      },
      {
        "weight": "1kg",
        "price": 320
      }
    ],
    "reviews": [
      {
        "name": "Rambabu P.",
        "location": "Guntur",
        "stars": 5,
        "text": "Extremely crispy and fresh! Perfect ring shape and very tasty."
      },
      {
        "name": "Srilatha K.",
        "location": "Guntur",
        "stars": 5,
        "text": "Tastes exactly like traditional home-made chegodilu. Superb!"
      }
    ]
  }
];

const getSnackSubcategory = (name) => {
  const n = name.toLowerCase();
  if (n.includes('mixture') || n.includes('mix') || n.includes('mudi')) {
    return 'Mixtures';
  }
  if (n.includes('pakodi')) {
    return 'Pakodi';
  }
  if (n.includes('chekkalu') || n.includes('chakralu') || n.includes('murukulu') || n.includes('chekodi')) {
    return 'Chekkalu & Chakralu';
  }
  return 'Snacks';
};

export const products = rawProducts.map(p => {
  if (p.category === 'Hot & Savory') {
    return {
      ...p,
      category: getSnackSubcategory(p.name)
    };
  }
  return p;
});

export const categories = [
  'All', 'Kaju Sweets', 'Kalakand', 'Kova Sweets', 'Peda & Burfi',
  'Laddu', 'Mysurpak', 'Bengali Sweets', 'Halwa', 'Ariselu', 'Malpuri',
  'Jangiri', 'Bobbatlu', 'Badusha', 'Kaja & Kajikai', 'Chikki',
  'Boondi', 'Papidi', 'Special',
  'Hot & Savory', 'Mixtures', 'Pakodi', 'Chekkalu & Chakralu', 'Snacks',
];

// Navigation structure for dropdowns
export const navCategories = {
  sweets: ['Kaju Sweets', 'Kalakand', 'Kova Sweets', 'Mysurpak', 'Peda & Burfi', 'Laddu', 'Bengali Sweets', 'Halwa'],
  andhra: ['Ariselu', 'Malpuri', 'Jangiri', 'Bobbatlu', 'Badusha', 'Kaja & Kajikai', 'Chikki', 'Boondi', 'Papidi'],
  snacks: ['Hot & Savory', 'Mixtures', 'Pakodi', 'Chekkalu & Chakralu', 'Snacks'],
};
