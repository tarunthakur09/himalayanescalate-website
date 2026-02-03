export interface Destination {
  id: string;
  name: string;
  slug: string;
  region: 'north' | 'south' | 'northeast';
  state: string;
  tagline: string;
  description: string;
  overview: string;
  bestTimeToVisit: string;
  bestFor: string[];
  sampleItineraries: {
    title: string;
    duration: string;
    highlights: string[];
  }[];
  image: string;
  gallery: string[];
}

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Manali',
    slug: 'manali',
    region: 'north',
    state: 'Himachal Pradesh',
    tagline: 'Valley of Gods',
    description: 'A picturesque hill station nestled in the Himalayas, known for its snow-capped peaks, adventure sports, and serene landscapes.',
    overview: 'Manali is a high-altitude Himalayan resort town in India\'s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination. Set on the Beas River, it\'s a gateway for skiing in the Solang Valley and trekking in Parvati Valley. It\'s also a jumping-off point for paragliding, rafting and mountaineering in the Pir Panjal mountains.',
    bestTimeToVisit: 'October to June is the best time to visit Manali. October-February is ideal for snowfall and winter sports, while March-June offers pleasant weather for sightseeing and adventure activities.',
    bestFor: ['Honeymooners', 'Adventure Enthusiasts', 'Nature Lovers', 'Skiing & Snowboarding'],
    sampleItineraries: [
      {
        title: 'Manali Weekend Escape',
        duration: '2 Days',
        highlights: ['Hadimba Temple', 'Mall Road', 'Solang Valley', 'Old Manali']
      },
      {
        title: 'Manali Adventure & Romance',
        duration: '3 Days',
        highlights: ['Rohtang Pass', 'Solang Valley Adventure Sports', 'Vashisht Hot Springs', 'Naggar Castle']
      }
    ],
    image: 'https://images.unsplash.com/photo-1626010448982-5d629e62f3d5?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1626010448982-5d629e62f3d5?w=800&q=80',
      'https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?w=800&q=80',
      'https://images.unsplash.com/photo-1589802829985-817e51171b92?w=800&q=80'
    ]
  },
  {
    id: '2',
    name: 'Spiti Valley',
    slug: 'spiti-valley',
    region: 'north',
    state: 'Himachal Pradesh',
    tagline: 'The Middle Land',
    description: 'A cold desert mountain valley known for its stark beauty, ancient monasteries, and high-altitude villages.',
    overview: 'Spiti Valley is a cold desert mountain valley located high in the Himalayas in the north-eastern part of Himachal Pradesh. The name "Spiti" means "The Middle Land", i.e., the land between Tibet and India. It is known for its high-altitude villages, ancient monasteries, and stunning landscapes that seem otherworldly.',
    bestTimeToVisit: 'May to October is the best time to visit Spiti Valley. The valley remains cut off during winter due to heavy snowfall. June-September offers the most accessible routes.',
    bestFor: ['Adventure Seekers', 'Photography Enthusiasts', 'Spiritual Travelers', 'Road Trip Lovers'],
    sampleItineraries: [
      {
        title: 'Spiti Valley Expedition',
        duration: '3 Days',
        highlights: ['Key Monastery', 'Kaza', 'Chandratal Lake', 'Kunzum Pass']
      },
      {
        title: 'Spiti Cultural Tour',
        duration: '2 Days',
        highlights: ['Tabo Monastery', 'Dhankar Monastery', 'Pin Valley', 'Langza Village']
      }
    ],
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&q=80',
      'https://images.unsplash.com/photo-1566836610593-62a64888a216?w=800&q=80',
      'https://images.unsplash.com/photo-1605648916319-cf082f7524a1?w=800&q=80'
    ]
  },
  {
    id: '3',
    name: 'Shimla',
    slug: 'shimla',
    region: 'north',
    state: 'Himachal Pradesh',
    tagline: 'Queen of Hills',
    description: 'The capital city of Himachal Pradesh, famous for its colonial architecture, toy train, and panoramic mountain views.',
    overview: 'Shimla is the capital of the northern Indian state of Himachal Pradesh, in the Himalayan foothills. Once the summer capital of British India, it remains the terminus of the narrow-gauge Kalka-Shimla Railway, completed in 1903. It\'s also known for the handicraft shops that line The Mall, a pedestrian avenue, as well as the Lakkar Bazaar, a market specializing in wooden toys and crafts.',
    bestTimeToVisit: 'March to June is ideal for pleasant weather. December to February offers snowfall and winter charm. September to November is perfect for clear mountain views.',
    bestFor: ['Families', 'History Buffs', 'Honeymooners', 'Shopping Enthusiasts'],
    sampleItineraries: [
      {
        title: 'Shimla Heritage Walk',
        duration: '2 Days',
        highlights: ['The Ridge', 'Mall Road', 'Jakhoo Temple', 'Christ Church']
      },
      {
        title: 'Shimla & Kufri Delight',
        duration: '3 Days',
        highlights: ['Kufri Adventure Park', 'Green Valley', 'Indian Institute of Advanced Study', 'Toy Train Ride']
      }
    ],
    image: 'https://images.unsplash.com/photo-1561361058-4fccb267a78c?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1561361058-4fccb267a78c?w=800&q=80',
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
      'https://images.unsplash.com/photo-1603287681836-e566f5c1509c?w=800&q=80'
    ]
  },
  {
    id: '4',
    name: 'Leh & Ladakh',
    slug: 'leh-ladakh',
    region: 'north',
    state: 'Ladakh',
    tagline: 'Land of High Passes',
    description: 'A high-altitude desert known for its stunning landscapes, Buddhist monasteries, and adventure activities.',
    overview: 'Leh, a high-desert city in the Himalayas, is the capital of the Leh region in northern India\'s Jammu and Kashmir state. Originally a stop for trading caravans, Leh is now known for its Buddhist sites and nearby trekking areas. Massive 17th-century Leh Palace, modeled on the Dalai Lama\'s former home (Tibet\'s Potala Palace), overlooks the old town\'s bazaar and mazelike lanes.',
    bestTimeToVisit: 'April to June and September to October are the best times to visit Leh-Ladakh. July-August is monsoon season but still accessible. Winter (November-March) is for extreme adventure seekers only.',
    bestFor: ['Adventure Enthusiasts', 'Bikers', 'Photography Lovers', 'Spiritual Seekers'],
    sampleItineraries: [
      {
        title: 'Leh Explorer',
        duration: '3 Days',
        highlights: ['Shanti Stupa', 'Leh Palace', 'Thiksey Monastery', 'Magnetic Hill']
      },
      {
        title: 'Ladakh Adventure',
        duration: '2 Days',
        highlights: ['Pangong Lake', 'Nubra Valley', 'Khardung La', 'Diskit Monastery']
      }
    ],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
      'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=800&q=80',
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80'
    ]
  },
  {
    id: '5',
    name: 'Kerala Backwaters',
    slug: 'kerala-backwaters',
    region: 'south',
    state: 'Kerala',
    tagline: 'God\'s Own Country',
    description: 'A network of tranquil canals, lagoons, and lakes lined with palm trees and traditional houseboats.',
    overview: 'The Kerala Backwaters are a network of brackish lagoons and lakes lying parallel to the Arabian Sea coast of Kerala state in southern India. The network includes five large lakes linked by canals, both man-made and natural, fed by 38 rivers. The backwaters are a unique ecosystem where freshwater from the rivers meets the seawater from the Arabian Sea.',
    bestTimeToVisit: 'October to March is the best time to visit Kerala Backwaters. The weather is pleasant and perfect for houseboat cruises. August-September is also good for experiencing the monsoon charm.',
    bestFor: ['Families', 'Honeymooners', 'Nature Lovers', 'Wellness Seekers'],
    sampleItineraries: [
      {
        title: 'Kerala Houseboat Experience',
        duration: '2 Days',
        highlights: ['Alleppey Houseboat', 'Vembanad Lake', 'Kumarakom Bird Sanctuary', 'Village Walks']
      },
      {
        title: 'Backwaters & Beach Combo',
        duration: '3 Days',
        highlights: ['Kochi Fort', 'Marari Beach', 'Backwater Cruise', 'Kathakali Performance']
      }
    ],
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
      'https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=800&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7e74208?w=800&q=80'
    ]
  },
  {
    id: '6',
    name: 'Rajasthan',
    slug: 'rajasthan',
    region: 'north',
    state: 'Rajasthan',
    tagline: 'Land of Kings',
    description: 'A royal state known for its magnificent forts, palaces, desert landscapes, and vibrant culture.',
    overview: 'Rajasthan is a state in northern India. It covers 342,239 square kilometers or 10.4 percent of India\'s total geographical area. It is the largest Indian state by area and the seventh largest by population. Rajasthan is known for its historical forts, palaces, art, and culture. Every third foreign tourist visiting India travels to Rajasthan.',
    bestTimeToVisit: 'October to March is the best time to visit Rajasthan. The weather is pleasant for sightseeing. November-February offers the most comfortable temperatures.',
    bestFor: ['History Enthusiasts', 'Culture Lovers', 'Photography Buffs', 'Luxury Travelers'],
    sampleItineraries: [
      {
        title: 'Royal Rajasthan',
        duration: '3 Days',
        highlights: ['Udaipur City Palace', 'Jaisalmer Fort', 'Jodhpur Mehrangarh', 'Pushkar Lake']
      },
      {
        title: 'Desert & Palaces',
        duration: '2 Days',
        highlights: ['Jaipur Amber Fort', 'Hawa Mahal', 'Desert Safari', 'Folk Dance Evening']
      }
    ],
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80',
      'https://images.unsplash.com/photo-1585506942812-e72b29cef752?w=800&q=80'
    ]
  },
  {
    id: '7',
    name: 'Rishikesh',
    slug: 'rishikesh',
    region: 'north',
    state: 'Uttarakhand',
    tagline: 'Yoga Capital of the World',
    description: 'A spiritual city on the banks of the Ganges, famous for yoga, meditation, and adventure sports.',
    overview: 'Rishikesh is a city in India\'s northern state of Uttarakhand, in the Himalayan foothills beside the Ganges River. The river is considered holy, and the city is renowned as a center for studying yoga and meditation. Temples and ashrams (centers for spiritual studies) line the eastern bank around Swarg Ashram, a traffic-free, alcohol-free and vegetarian enclave upstream from Rishikesh town.',
    bestTimeToVisit: 'September to November and February to April are the best times to visit Rishikesh. The weather is pleasant for outdoor activities and yoga. Avoid peak summer and monsoon.',
    bestFor: ['Yoga Enthusiasts', 'Adventure Seekers', 'Spiritual Travelers', 'Nature Lovers'],
    sampleItineraries: [
      {
        title: 'Rishikesh Adventure',
        duration: '2 Days',
        highlights: ['River Rafting', 'Bungee Jumping', 'Laxman Jhula', 'Ganga Aarti']
      },
      {
        title: 'Yoga & Wellness Retreat',
        duration: '3 Days',
        highlights: ['Yoga Sessions', 'Meditation', 'Beatles Ashram', 'Neer Garh Waterfall']
      }
    ],
    image: 'https://images.unsplash.com/photo-1586016413664-864c0dd76f53?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586016413664-864c0dd76f53?w=800&q=80',
      'https://images.unsplash.com/photo-1609946860441-a5132887b983?w=800&q=80',
      'https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=800&q=80'
    ]
  },
  {
    id: '8',
    name: 'Jaipur',
    slug: 'jaipur',
    region: 'north',
    state: 'Rajasthan',
    tagline: 'The Pink City',
    description: 'The capital of Rajasthan, known for its pink-hued architecture, magnificent forts, and rich heritage.',
    overview: 'Jaipur is the capital of India\'s Rajasthan state. It evokes the royal family that once ruled the region and that, in 1727, founded what is now called the Old City, or "Pink City" for its trademark building color. At the center of its stately street grid (notable in India) stands the opulent, colonnaded City Palace complex. With gardens, courtyards and museums, part of it is still a royal residence.',
    bestTimeToVisit: 'October to March is the best time to visit Jaipur. The weather is pleasant for exploring the forts and palaces. November-February offers the most comfortable temperatures.',
    bestFor: ['History Buffs', 'Architecture Lovers', 'Shopping Enthusiasts', 'Families'],
    sampleItineraries: [
      {
        title: 'Jaipur Heritage Tour',
        duration: '2 Days',
        highlights: ['Amber Fort', 'Hawa Mahal', 'City Palace', 'Jantar Mantar']
      },
      {
        title: 'Pink City Explorer',
        duration: '3 Days',
        highlights: ['Nahargarh Fort', 'Jal Mahal', 'Bapu Bazaar', 'Chokhi Dhani']
      }
    ],
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80',
      'https://images.unsplash.com/photo-1585506942812-e72b29cef752?w=800&q=80'
    ]
  },
  {
    id: '9',
    name: 'Kashmir',
    slug: 'kashmir',
    region: 'north',
    state: 'Jammu & Kashmir',
    tagline: 'Paradise on Earth',
    description: 'A breathtaking valley known for its pristine lakes, snow-capped mountains, and Mughal gardens.',
    overview: 'Kashmir is the northernmost geographical region of the Indian subcontinent. Until the mid-19th century, the term "Kashmir" denoted only the Kashmir Valley between the Great Himalayas and the Pir Panjal Range. Today, the term encompasses a larger area that includes the Indian-administered territories of Jammu and Kashmir and Ladakh.',
    bestTimeToVisit: 'March to October is the best time to visit Kashmir. April-June for pleasant weather and flowers, July-September for trekking, October for autumn colors, December-February for snowfall.',
    bestFor: ['Honeymooners', 'Nature Lovers', 'Adventure Seekers', 'Families'],
    sampleItineraries: [
      {
        title: 'Kashmir Valley Tour',
        duration: '3 Days',
        highlights: ['Dal Lake Shikara Ride', 'Gulmarg Gondola', 'Pahalgam Valley', 'Mughal Gardens']
      },
      {
        title: 'Srinagar & Beyond',
        duration: '2 Days',
        highlights: ['Houseboat Stay', 'Sonmarg', 'Shankaracharya Temple', 'Old City Walk']
      }
    ],
    image: 'https://images.unsplash.com/photo-1566836610593-62a64888a216?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566836610593-62a64888a216?w=800&q=80',
      'https://images.unsplash.com/photo-1605648916319-cf082f7524a1?w=800&q=80',
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&q=80'
    ]
  },
  {
    id: '10',
    name: 'Andaman',
    slug: 'andaman',
    region: 'south',
    state: 'Andaman & Nicobar',
    tagline: 'Tropical Paradise',
    description: 'An archipelago in the Bay of Bengal known for pristine beaches, coral reefs, and water sports.',
    overview: 'The Andaman Islands are an Indian archipelago in the Bay of Bengal. These roughly 300 islands are known for their palm-lined, white-sand beaches, mangroves and tropical rainforests. Coral reefs supporting marine life such as sharks and rays make for popular diving and snorkeling sites. Indigenous Andaman Islanders inhabit the more remote islands, many of which are off limits to visitors.',
    bestTimeToVisit: 'October to May is the best time to visit Andaman. The weather is pleasant for beach activities and water sports. December-February is peak season.',
    bestFor: ['Beach Lovers', 'Honeymooners', 'Adventure Enthusiasts', 'Families'],
    sampleItineraries: [
      {
        title: 'Andaman Beach Escape',
        duration: '3 Days',
        highlights: ['Radhanagar Beach', 'Cellular Jail', 'Havelock Island', 'Snorkeling']
      },
      {
        title: 'Island Explorer',
        duration: '2 Days',
        highlights: ['Neil Island', 'Ross Island', 'Scuba Diving', 'Mangrove Creek']
      }
    ],
    image: 'https://images.unsplash.com/photo-1589779693199-3a59d6e453e9?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589779693199-3a59d6e453e9?w=800&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80'
    ]
  },
  {
    id: '11',
    name: 'Goa',
    slug: 'goa',
    region: 'south',
    state: 'Goa',
    tagline: 'Beach Capital of India',
    description: 'India\'s smallest state, famous for its beaches, nightlife, Portuguese heritage, and seafood.',
    overview: 'Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area\'s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda.',
    bestTimeToVisit: 'November to February is the best time to visit Goa. The weather is pleasant and perfect for beach activities. December is peak season with Christmas and New Year celebrations.',
    bestFor: ['Beach Lovers', 'Party Enthusiasts', 'Foodies', 'History Buffs'],
    sampleItineraries: [
      {
        title: 'North Goa Beaches',
        duration: '2 Days',
        highlights: ['Baga Beach', 'Anjuna Flea Market', 'Fort Aguada', 'Club Titos']
      },
      {
        title: 'South Goa Serenity',
        duration: '3 Days',
        highlights: ['Palolem Beach', 'Dudhsagar Falls', 'Old Goa Churches', 'Spice Plantation']
      }
    ],
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80'
    ]
  },
  {
    id: '12',
    name: 'Udaipur',
    slug: 'udaipur',
    region: 'north',
    state: 'Rajasthan',
    tagline: 'City of Lakes',
    description: 'A romantic city known for its lakes, palaces, and royal heritage.',
    overview: 'Udaipur, formerly the capital of the Mewar Kingdom, is a city in the western Indian state of Rajasthan. Founded by Maharana Udai Singh II in 1559, it\'s set around a series of artificial lakes and is known for its lavish royal residences. City Palace, overlooking Lake Pichola, is a monumental complex of 11 palaces, courtyards and gardens, famed for its intricate peacock mosaics.',
    bestTimeToVisit: 'September to March is the best time to visit Udaipur. The weather is pleasant for sightseeing and boat rides. Winter (October-February) is ideal.',
    bestFor: ['Honeymooners', 'Luxury Travelers', 'History Enthusiasts', 'Photography Lovers'],
    sampleItineraries: [
      {
        title: 'Udaipur Royal Experience',
        duration: '2 Days',
        highlights: ['City Palace', 'Lake Pichola Boat Ride', 'Jag Mandir', 'Saheliyon Ki Bari']
      },
      {
        title: 'Romantic Udaipur',
        duration: '3 Days',
        highlights: ['Fateh Sagar Lake', 'Monsoon Palace', 'Bagore Ki Haveli', 'Sunset at Ambrai']
      }
    ],
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80',
      'https://images.unsplash.com/photo-1585506942812-e72b29cef752?w=800&q=80',
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80'
    ]
  },
  {
    id: '13',
    name: 'Jim Corbett',
    slug: 'jim-corbett',
    region: 'north',
    state: 'Uttarakhand',
    tagline: 'India\'s First National Park',
    description: 'A wildlife sanctuary famous for Bengal tigers, elephants, and diverse flora and fauna.',
    overview: 'Jim Corbett National Park is a forested wildlife sanctuary in northern India\'s Uttarakhand State. Rich in flora and fauna, it\'s known for its Bengal tigers. Animals, including tigers, leopards and wild elephants, roam the Dhikala zone. On the banks of the Ramganga Reservoir, the Sonanadi zone is home to elephants and leopards, along with hundreds of species of birds.',
    bestTimeToVisit: 'November to June is the best time to visit Jim Corbett. The park is closed during monsoon (July-October). March-May is best for tiger sightings.',
    bestFor: ['Wildlife Enthusiasts', 'Families', 'Nature Photographers', 'Adventure Seekers'],
    sampleItineraries: [
      {
        title: 'Corbett Wildlife Safari',
        duration: '2 Days',
        highlights: ['Jeep Safari', 'Elephant Ride', 'Bird Watching', 'Garjia Temple']
      },
      {
        title: 'Corbett Adventure',
        duration: '3 Days',
        highlights: ['Canter Safari', 'River Rafting', 'Nature Walk', 'Campfire Evening']
      }
    ],
    image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&q=80',
      'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80',
      'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=800&q=80'
    ]
  },
  {
    id: '14',
    name: 'Lansdowne',
    slug: 'lansdowne',
    region: 'north',
    state: 'Uttarakhand',
    tagline: 'Quiet Hill Station',
    description: 'A serene cantonment town known for its unspoiled beauty and peaceful atmosphere.',
    overview: 'Lansdowne is a hill station in the north Indian state of Uttarakhand. It was developed as a cantonment town by the British in the late 19th century. Today, it\'s known for its peaceful atmosphere and unspoiled natural beauty. The Garhwal Rifles Regimental Museum showcases the history of the Indian Army\'s Garhwal Rifles regiment.',
    bestTimeToVisit: 'March to June and September to November are the best times to visit Lansdowne. The weather is pleasant for sightseeing. Winter (December-February) offers snowfall.',
    bestFor: ['Peace Seekers', 'Weekend Travelers', 'Nature Lovers', 'History Buffs'],
    sampleItineraries: [
      {
        title: 'Lansdowne Weekend',
        duration: '2 Days',
        highlights: ['Tip-n-Top Viewpoint', 'St. Mary\'s Church', 'Garhwal Rifles Museum', 'Bhulla Lake']
      },
      {
        title: 'Lansdowne Nature Trail',
        duration: '3 Days',
        highlights: ['Jungle Walk', 'Tarkeshwar Mahadev', 'Sunset Point', 'Camping']
      }
    ],
    image: 'https://images.unsplash.com/photo-1561361058-4fccb267a78c?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1561361058-4fccb267a78c?w=800&q=80',
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
      'https://images.unsplash.com/photo-1603287681836-e566f5c1509c?w=800&q=80'
    ]
  },
  {
    id: '15',
    name: 'Bir-Billing',
    slug: 'bir-billing',
    region: 'north',
    state: 'Himachal Pradesh',
    tagline: 'Paragliding Capital of India',
    description: 'A small village famous for paragliding, Tibetan monasteries, and tea gardens.',
    overview: 'Bir is a village located in the Joginder Nagar Valley in the state of Himachal Pradesh in northern India. Bir is a noted center for ecotourism, spiritual studies, and meditation. Bir is also home to a Tibetan refugee settlement with several Buddhist monasteries and a large stupa. The village is famous for paragliding, with Billing (14 km away) being one of the best paragliding sites in the world.',
    bestTimeToVisit: 'March to June and October to November are the best times to visit Bir-Billing. These months offer ideal conditions for paragliding.',
    bestFor: ['Adventure Seekers', 'Paragliding Enthusiasts', 'Spiritual Travelers', 'Nature Lovers'],
    sampleItineraries: [
      {
        title: 'Bir Paragliding Experience',
        duration: '2 Days',
        highlights: ['Paragliding at Billing', 'Tibetan Monastery', 'Tea Gardens', 'Sunset Point']
      },
      {
        title: 'Bir Adventure & Culture',
        duration: '3 Days',
        highlights: ['Trekking', 'Monastery Visit', 'Camping', 'Local Cuisine']
      }
    ],
    image: 'https://images.unsplash.com/photo-1605648916319-cf082f7524a1?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1605648916319-cf082f7524a1?w=800&q=80',
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&q=80',
      'https://images.unsplash.com/photo-1566836610593-62a64888a216?w=800&q=80'
    ]
  },
  {
    id: '16',
    name: 'Kasauli',
    slug: 'kasauli',
    region: 'north',
    state: 'Himachal Pradesh',
    tagline: 'Colonial Charm',
    description: 'A quaint hill station known for its colonial architecture, walking trails, and serene atmosphere.',
    overview: 'Kasauli is a small hill station in Himachal Pradesh. It is located 77 km from Shimla. The town is a cantonment town and was established by the British in 1842 as a colonial hill station. Kasauli is known for its quiet, peaceful atmosphere, Victorian-style buildings, and beautiful walking trails through pine and cedar forests.',
    bestTimeToVisit: 'March to June and September to November are the best times to visit Kasauli. The weather is pleasant for walks and sightseeing. Winter (December-February) offers snowfall.',
    bestFor: ['Peace Seekers', 'Weekend Travelers', 'Nature Walkers', 'History Enthusiasts'],
    sampleItineraries: [
      {
        title: 'Kasauli Weekend',
        duration: '2 Days',
        highlights: ['Mall Road', 'Sunset Point', 'Christ Church', 'Gilbert Trail']
      },
      {
        title: 'Kasauli Heritage Walk',
        duration: '3 Days',
        highlights: ['Monkey Point', 'Kasauli Brewery', 'Gurkha Fort', 'Nature Walks']
      }
    ],
    image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589802829985-817e51171b92?w=800&q=80',
      'https://images.unsplash.com/photo-1626010448982-5d629e62f3d5?w=800&q=80',
      'https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?w=800&q=80'
    ]
  },
  {
    id: '17',
    name: 'South Goa',
    slug: 'south-goa',
    region: 'south',
    state: 'Goa',
    tagline: 'Tranquil Beaches',
    description: 'The quieter side of Goa with pristine beaches, luxury resorts, and serene atmosphere.',
    overview: 'South Goa is known for its quieter, more pristine beaches compared to the bustling north. It offers a more relaxed and upscale experience with luxury resorts, yoga retreats, and unspoiled natural beauty. The region is perfect for those seeking peace and tranquility away from the party scene.',
    bestTimeToVisit: 'November to February is the best time to visit South Goa. The weather is perfect for beach activities and relaxation.',
    bestFor: ['Honeymooners', 'Luxury Travelers', 'Peace Seekers', 'Yoga Enthusiasts'],
    sampleItineraries: [
      {
        title: 'South Goa Relaxation',
        duration: '2 Days',
        highlights: ['Palolem Beach', 'Agonda Beach', 'Cabo de Rama', 'Butterfly Beach']
      },
      {
        title: 'South Goa Serenity',
        duration: '3 Days',
        highlights: ['Colva Beach', 'Benaulim Beach', 'Turtle Beach', 'Spa & Wellness']
      }
    ],
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80'
    ]
  },
  {
    id: '18',
    name: 'Wayanad',
    slug: 'wayanad',
    region: 'south',
    state: 'Kerala',
    tagline: 'Green Paradise',
    description: 'A scenic hill station known for its tea plantations, wildlife, and ancient caves.',
    overview: 'Wayanad is a rural district in Kerala state, southwest India. In the east, the Wayanad Wildlife Sanctuary is a lush, forested region with areas of high altitude, home to animals including Asiatic elephants, tigers, leopards and egrets. In the Ambukuthi Hills to the south, Edakkal Caves contain ancient petroglyphs, some dating back to the Neolithic age.',
    bestTimeToVisit: 'October to May is the best time to visit Wayanad. The weather is pleasant for sightseeing and wildlife spotting.',
    bestFor: ['Nature Lovers', 'Wildlife Enthusiasts', 'Honeymooners', 'Adventure Seekers'],
    sampleItineraries: [
      {
        title: 'Wayanad Nature Tour',
        duration: '2 Days',
        highlights: ['Edakkal Caves', 'Banasura Sagar Dam', 'Wayanad Wildlife Sanctuary', 'Tea Plantations']
      },
      {
        title: 'Wayanad Explorer',
        duration: '3 Days',
        highlights: ['Chembra Peak', 'Soochipara Falls', 'Pookode Lake', 'Bamboo Forests']
      }
    ],
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
      'https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=800&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7e74208?w=800&q=80'
    ]
  },
  {
    id: '19',
    name: 'Munnar',
    slug: 'munnar',
    region: 'south',
    state: 'Kerala',
    tagline: 'Tea Garden Hills',
    description: 'A hill station known for its sprawling tea plantations, misty mountains, and pleasant climate.',
    overview: 'Munnar is a town in the Western Ghats mountain range in India\'s Kerala state. A hill station and former resort for the British Raj elite, it\'s surrounded by rolling hills dotted with tea plantations established in the late 19th century. Eravikulam National Park, a habitat for the endangered mountain goat Nilgiri tahr, is home to the Lakkam Waterfalls, hiking trails and 2,695m-tall Anamudi Peak.',
    bestTimeToVisit: 'September to March is the best time to visit Munnar. The weather is pleasant for sightseeing and tea estate visits.',
    bestFor: ['Honeymooners', 'Nature Lovers', 'Tea Enthusiasts', 'Photography Lovers'],
    sampleItineraries: [
      {
        title: 'Munnar Tea Trail',
        duration: '2 Days',
        highlights: ['Tea Museum', 'Eravikulam National Park', 'Mattupetty Dam', 'Echo Point']
      },
      {
        title: 'Romantic Munnar',
        duration: '3 Days',
        highlights: ['Kundala Lake', 'Top Station', 'Rose Garden', 'Spice Plantation']
      }
    ],
    image: 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=800&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7e74208?w=800&q=80',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80'
    ]
  },
  {
    id: '20',
    name: 'Gulmarg',
    slug: 'gulmarg',
    region: 'north',
    state: 'Jammu & Kashmir',
    tagline: 'Meadow of Flowers',
    description: 'A popular skiing destination known for its pristine slopes and world\'s highest gondola.',
    overview: 'Gulmarg is a town, a hill station, a popular skiing destination and a notified area committee in the Baramulla district of Jammu and Kashmir, India. The town is situated in the Pir Panjal Range in the Western Himalayas and lies within the boundaries of Gulmarg Wildlife Sanctuary. It is known for having one of the highest gondolas in the world.',
    bestTimeToVisit: 'December to March is best for skiing and snow activities. April to June is ideal for golfing and sightseeing.',
    bestFor: ['Skiing Enthusiasts', 'Adventure Seekers', 'Honeymooners', 'Nature Lovers'],
    sampleItineraries: [
      {
        title: 'Gulmarg Ski Adventure',
        duration: '2 Days',
        highlights: ['Gulmarg Gondola', 'Skiing', 'Snowboarding', 'Strawberry Valley']
      },
      {
        title: 'Gulmarg Winter Wonderland',
        duration: '3 Days',
        highlights: ['Apharwat Peak', 'Gulmarg Biosphere Reserve', 'St. Mary\'s Church', 'Ice Skating']
      }
    ],
    image: 'https://images.unsplash.com/photo-1566836610593-62a64888a216?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566836610593-62a64888a216?w=800&q=80',
      'https://images.unsplash.com/photo-1605648916319-cf082f7524a1?w=800&q=80',
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&q=80'
    ]
  },
  {
    id: '21',
    name: 'Ranthambore',
    slug: 'ranthambore',
    region: 'north',
    state: 'Rajasthan',
    tagline: 'Tiger\'s Den',
    description: 'One of India\'s largest national parks, famous for Bengal tigers and ancient ruins.',
    overview: 'Ranthambore National Park is a large national park in Rajasthan, India. It is situated in the Sawai Madhopur district of southeastern Rajasthan, about 110 km northeast of Kota and 160 km southeast of Jaipur. The park covers an area of 392 km² and is known for its tiger population. It is one of the best places in India to see tigers in their natural habitat.',
    bestTimeToVisit: 'October to June is the best time to visit Ranthambore. The park is closed during monsoon (July-September). April-May offers the best tiger sightings.',
    bestFor: ['Wildlife Enthusiasts', 'Luxury Travelers', 'Photography Lovers', 'Families'],
    sampleItineraries: [
      {
        title: 'Ranthambore Tiger Safari',
        duration: '2 Days',
        highlights: ['Jeep Safari', 'Ranthambore Fort', 'Padam Lake', 'Tiger Spotting']
      },
      {
        title: 'Ranthambore Luxury Experience',
        duration: '3 Days',
        highlights: ['Canter Safari', 'Luxury Resort Stay', 'Village Visit', 'Bird Watching']
      }
    ],
    image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80',
      'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=800&q=80',
      'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&q=80'
    ]
  },
  {
    id: '22',
    name: 'Kumarakom',
    slug: 'kumarakom',
    region: 'south',
    state: 'Kerala',
    tagline: 'Backwater Paradise',
    description: 'A cluster of little islands on Vembanad Lake, known for luxury houseboats and bird sanctuary.',
    overview: 'Kumarakom is a popular tourism destination located near the city of Kottayam, in Kerala, India. It is set in the backdrop of the Vembanad Lake, the largest lake in the state of Kerala. Kumarakom is home to a wide variety of flora and fauna and is noted for its bird sanctuary where many species of migratory birds visit.',
    bestTimeToVisit: 'November to February is the best time to visit Kumarakom. The weather is pleasant and perfect for houseboat cruises. Migratory birds can be spotted during this time.',
    bestFor: ['Luxury Travelers', 'Honeymooners', 'Bird Watchers', 'Nature Lovers'],
    sampleItineraries: [
      {
        title: 'Kumarakom Luxury Escape',
        duration: '2 Days',
        highlights: ['Luxury Houseboat', 'Kumarakom Bird Sanctuary', 'Ayurvedic Spa', 'Sunset Cruise']
      },
      {
        title: 'Kumarakom Wellness Retreat',
        duration: '3 Days',
        highlights: ['Ayurveda Treatment', 'Yoga Sessions', 'Village Walk', 'Fishing']
      }
    ],
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7e74208?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7e74208?w=800&q=80',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
      'https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=800&q=80'
    ]
  },
  {
    id: '23',
    name: 'Srinagar',
    slug: 'srinagar',
    region: 'north',
    state: 'Jammu & Kashmir',
    tagline: 'Venice of the East',
    description: 'The summer capital of Jammu & Kashmir, famous for Dal Lake, houseboats, and Mughal gardens.',
    overview: 'Srinagar is the largest city and the summer capital of Jammu and Kashmir, India. It lies in the Kashmir Valley on the banks of the Jhelum River, a tributary of the Indus, and Dal and Anchar lakes. The city is known for its natural environment, gardens, waterfronts and houseboats. It is also known for traditional Kashmiri handicrafts and dried fruits.',
    bestTimeToVisit: 'April to October is the best time to visit Srinagar. March-May for tulip gardens, June-August for pleasant weather, September-October for autumn colors.',
    bestFor: ['Honeymooners', 'Luxury Travelers', 'Nature Lovers', 'History Enthusiasts'],
    sampleItineraries: [
      {
        title: 'Srinagar Delight',
        duration: '2 Days',
        highlights: ['Dal Lake Shikara', 'Mughal Gardens', 'Hazratbal Shrine', 'Old City Tour']
      },
      {
        title: 'Luxury Srinagar',
        duration: '3 Days',
        highlights: ['Houseboat Stay', 'Shankaracharya Temple', 'Pari Mahal', 'Floating Market']
      }
    ],
    image: 'https://images.unsplash.com/photo-1605648916319-cf082f7524a1?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1605648916319-cf082f7524a1?w=800&q=80',
      'https://images.unsplash.com/photo-1566836610593-62a64888a216?w=800&q=80',
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&q=80'
    ]
  },
  {
    id: '24',
    name: 'Solang Valley',
    slug: 'solang-valley',
    region: 'north',
    state: 'Himachal Pradesh',
    tagline: 'Adventure Hub',
    description: 'A side valley at the top of the Kullu Valley, known for adventure sports and stunning views.',
    overview: 'Solang Valley derives its name from combination of words Solang and Nallah. It is a side valley at the top of the Kullu Valley in Himachal Pradesh, India 14 km northwest of the resort town Manali on the way to Rohtang Pass, and is known for its summer and winter sport conditions. The sports most commonly offered are parachuting, paragliding, skating and zorbing.',
    bestTimeToVisit: 'December to February for skiing and snow activities. March to June for paragliding and other adventure sports.',
    bestFor: ['Adventure Enthusiasts', 'Families', 'Skiing Lovers', 'Nature Lovers'],
    sampleItineraries: [
      {
        title: 'Solang Adventure Day',
        duration: '2 Days',
        highlights: ['Paragliding', 'Zorbing', 'Skiing', 'Cable Car Ride']
      },
      {
        title: 'Solang Valley Explorer',
        duration: '3 Days',
        highlights: ['Snow Activities', 'Trekking', 'Camping', 'Photography']
      }
    ],
    image: 'https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?w=800&q=80',
      'https://images.unsplash.com/photo-1626010448982-5d629e62f3d5?w=800&q=80',
      'https://images.unsplash.com/photo-1589802829985-817e51171b92?w=800&q=80'
    ]
  },
  {
    id: '25',
    name: 'Kasol',
    slug: 'kasol',
    region: 'north',
    state: 'Himachal Pradesh',
    tagline: 'Mini Israel of India',
    description: 'A hamlet in the Parvati Valley known for its scenic beauty, trekking trails, and hippie culture.',
    overview: 'Kasol is a hamlet in the Kullu district of the Indian state of Himachal Pradesh. It is situated in Parvati Valley, on the banks of the Parvati River, on the way between Bhuntar and Manikaran. It is called the "Mini Israel of India" because of the large number of Israeli tourists who visit here. The village is known for its scenic beauty, trekking trails, and relaxed atmosphere.',
    bestTimeToVisit: 'March to June and October to November are the best times to visit Kasol. The weather is pleasant for trekking and outdoor activities.',
    bestFor: ['Backpackers', 'Trekking Enthusiasts', 'Nature Lovers', 'Hippie Culture Seekers'],
    sampleItineraries: [
      {
        title: 'Kasol Weekend',
        duration: '2 Days',
        highlights: ['Parvati River', 'Manikaran Sahib', 'Chalal Village', 'Café Hopping']
      },
      {
        title: 'Kasol Trekking',
        duration: '3 Days',
        highlights: ['Kheerganga Trek', 'Tosh Village', 'Rasol Pass', 'Hot Springs']
      }
    ],
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
      'https://images.unsplash.com/photo-1603287681836-e566f5c1509c?w=800&q=80',
      'https://images.unsplash.com/photo-1561361058-4fccb267a78c?w=800&q=80'
    ]
  }
];

export const getDestinationBySlug = (slug: string): Destination | undefined => {
  return destinations.find(d => d.slug === slug);
};

export const getDestinationsByRegion = (region: string): Destination[] => {
  return destinations.filter(d => d.region === region);
};
