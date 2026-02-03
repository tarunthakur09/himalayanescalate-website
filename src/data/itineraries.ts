export interface ItineraryCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  destinations: {
    name: string;
    slug: string;
    description: string;
    duration: string;
    highlights: string[];
    image: string;
  }[];
}

export const itineraryCategories: ItineraryCategory[] = [
  {
    id: '1',
    name: 'Short Trips / Weekend Getaways',
    slug: 'short-trips',
    description: 'Perfect quick escapes for busy travelers. Experience the best of India in 2-3 days.',
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&q=80',
    destinations: [
      {
        name: 'Rishikesh',
        slug: 'rishikesh',
        description: 'Experience the Yoga Capital with river rafting, Ganga Aarti, and peaceful ashrams.',
        duration: '2 Days',
        highlights: ['River Rafting', 'Ganga Aarti at Triveni Ghat', 'Laxman Jhula', 'Beatles Ashram'],
        image: 'https://images.unsplash.com/photo-1586016413664-864c0dd76f53?w=800&q=80'
      },
      {
        name: 'Jaipur',
        slug: 'jaipur',
        description: 'Explore the Pink City\'s magnificent forts, palaces, and vibrant markets.',
        duration: '2-3 Days',
        highlights: ['Amber Fort', 'Hawa Mahal', 'City Palace', 'Jantar Mantar', 'Local Bazaars'],
        image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80'
      },
      {
        name: 'Lansdowne',
        slug: 'lansdowne',
        description: 'A quiet cantonment town with colonial charm and pristine natural beauty.',
        duration: '2 Days',
        highlights: ['Tip-n-Top Viewpoint', 'St. Mary\'s Church', 'Garhwal Rifles Museum', 'Nature Walks'],
        image: 'https://images.unsplash.com/photo-1561361058-4fccb267a78c?w=800&q=80'
      },
      {
        name: 'Bir-Billing',
        slug: 'bir-billing',
        description: 'India\'s paragliding capital with Tibetan monasteries and tea gardens.',
        duration: '2-3 Days',
        highlights: ['Paragliding', 'Tibetan Monastery', 'Tea Gardens', 'Sunset Point'],
        image: 'https://images.unsplash.com/photo-1605648916319-cf082f7524a1?w=800&q=80'
      },
      {
        name: 'Kasauli',
        slug: 'kasauli',
        description: 'A quaint hill station with colonial architecture and peaceful walking trails.',
        duration: '2 Days',
        highlights: ['Mall Road', 'Sunset Point', 'Christ Church', 'Gilbert Trail'],
        image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?w=800&q=80'
      }
    ]
  },
  {
    id: '2',
    name: 'Family Tours',
    slug: 'family-tours',
    description: 'Carefully crafted itineraries for memorable family vacations across India.',
    image: 'https://images.unsplash.com/photo-1542037104857-4bb4b9fe2433?w=800&q=80',
    destinations: [
      {
        name: 'Kerala',
        slug: 'kerala-backwaters',
        description: 'God\'s Own Country with houseboats, beaches, and wildlife sanctuaries.',
        duration: '5-7 Days',
        highlights: ['Houseboat Cruise', 'Munnar Tea Gardens', 'Thekkady Wildlife', 'Kovalam Beach'],
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80'
      },
      {
        name: 'Kashmir',
        slug: 'kashmir',
        description: 'Paradise on Earth with stunning valleys, lakes, and gardens.',
        duration: '5-6 Days',
        highlights: ['Dal Lake Shikara', 'Gulmarg Gondola', 'Pahalgam Valley', 'Mughal Gardens'],
        image: 'https://images.unsplash.com/photo-1566836610593-62a64888a216?w=800&q=80'
      },
      {
        name: 'Rajasthan (Udaipur-Jaisalmer)',
        slug: 'rajasthan',
        description: 'Royal heritage, desert safaris, and magnificent forts and palaces.',
        duration: '6-7 Days',
        highlights: ['Udaipur City Palace', 'Jaisalmer Fort', 'Desert Safari', 'Camel Ride'],
        image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80'
      },
      {
        name: 'Andaman',
        slug: 'andaman',
        description: 'Pristine beaches, water sports, and historical landmarks.',
        duration: '5-6 Days',
        highlights: ['Radhanagar Beach', 'Cellular Jail', 'Havelock Island', 'Snorkeling'],
        image: 'https://images.unsplash.com/photo-1589779693199-3a59d6e453e9?w=800&q=80'
      },
      {
        name: 'Jim Corbett',
        slug: 'jim-corbett',
        description: 'India\'s first national park with thrilling wildlife safaris.',
        duration: '2-3 Days',
        highlights: ['Jeep Safari', 'Elephant Ride', 'Bird Watching', 'Nature Walk'],
        image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&q=80'
      }
    ]
  },
  {
    id: '3',
    name: 'Honeymoon Packages',
    slug: 'honeymoon-packages',
    description: 'Romantic getaways designed for couples to create lasting memories.',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80',
    destinations: [
      {
        name: 'Manali & Spiti',
        slug: 'manali',
        description: 'Snow-capped peaks, adventure, and romantic mountain retreats.',
        duration: '5-6 Days',
        highlights: ['Rohtang Pass', 'Solang Valley', 'Hadimba Temple', 'Old Manali'],
        image: 'https://images.unsplash.com/photo-1626010448982-5d629e62f3d5?w=800&q=80'
      },
      {
        name: 'Andaman (Havelock Island)',
        slug: 'andaman',
        description: 'Tropical paradise with pristine beaches and crystal-clear waters.',
        duration: '5-7 Days',
        highlights: ['Radhanagar Beach', 'Elephant Beach', 'Candlelight Dinner', 'Water Sports'],
        image: 'https://images.unsplash.com/photo-1589779693199-3a59d6e453e9?w=800&q=80'
      },
      {
        name: 'South Goa',
        slug: 'south-goa',
        description: 'Tranquil beaches, luxury resorts, and romantic sunsets.',
        duration: '4-5 Days',
        highlights: ['Palolem Beach', 'Agonda Beach', 'Sunset Cruise', 'Spa & Wellness'],
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80'
      },
      {
        name: 'Wayanad – Munnar',
        slug: 'wayanad',
        description: 'Tea gardens, misty hills, and serene backwaters of Kerala.',
        duration: '5-6 Days',
        highlights: ['Tea Plantations', 'Eravikulam National Park', 'Houseboat Stay', 'Spice Gardens'],
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80'
      },
      {
        name: 'Ladakh',
        slug: 'leh-ladakh',
        description: 'High-altitude romance with stunning landscapes and monasteries.',
        duration: '6-7 Days',
        highlights: ['Pangong Lake', 'Nubra Valley', 'Shanti Stupa', 'Stargazing'],
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80'
      }
    ]
  },
  {
    id: '4',
    name: 'Adventure Tours',
    slug: 'adventure-tours',
    description: 'Thrilling experiences for adrenaline junkies and outdoor enthusiasts.',
    image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80',
    destinations: [
      {
        name: 'Ladakh',
        slug: 'leh-ladakh',
        description: 'High-altitude trekking, biking, and river rafting adventures.',
        duration: '7-10 Days',
        highlights: ['Chadar Trek', 'Bike Expedition', 'River Rafting', 'Camping'],
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80'
      },
      {
        name: 'Rishikesh',
        slug: 'rishikesh',
        description: 'River rafting, bungee jumping, and cliff jumping adventures.',
        duration: '2-3 Days',
        highlights: ['River Rafting', 'Bungee Jumping', 'Flying Fox', 'Cliff Jumping'],
        image: 'https://images.unsplash.com/photo-1586016413664-864c0dd76f53?w=800&q=80'
      },
      {
        name: 'Spiti Valley',
        slug: 'spiti-valley',
        description: 'Remote Himalayan trekking and road trip adventures.',
        duration: '7-9 Days',
        highlights: ['Chandratal Lake Trek', 'Pin Valley Trek', 'Road Trip', 'Camping'],
        image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&q=80'
      },
      {
        name: 'Bir-Billing',
        slug: 'bir-billing',
        description: 'World-class paragliding and trekking experiences.',
        duration: '2-4 Days',
        highlights: ['Paragliding', 'Trekking', 'Camping', 'Mountain Biking'],
        image: 'https://images.unsplash.com/photo-1605648916319-cf082f7524a1?w=800&q=80'
      },
      {
        name: 'Gulmarg',
        slug: 'gulmarg',
        description: 'Premier skiing destination with world\'s highest gondola.',
        duration: '3-5 Days',
        highlights: ['Skiing', 'Snowboarding', 'Gondola Ride', 'Snowshoeing'],
        image: 'https://images.unsplash.com/photo-1566836610593-62a64888a216?w=800&q=80'
      }
    ]
  },
  {
    id: '5',
    name: 'Luxury Tours',
    slug: 'luxury-tours',
    description: 'Premium experiences with world-class accommodations and exclusive services.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    destinations: [
      {
        name: 'Udaipur',
        slug: 'udaipur',
        description: 'Royal palaces, luxury hotels, and romantic boat rides.',
        duration: '3-4 Days',
        highlights: ['Taj Lake Palace', 'City Palace', 'Private Boat Ride', 'Heritage Walk'],
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80'
      },
      {
        name: 'Ranthambore',
        slug: 'ranthambore',
        description: 'Luxury wildlife resorts with premium safari experiences.',
        duration: '2-3 Days',
        highlights: ['Luxury Resort', 'Private Safari', 'Spa Treatment', 'Fine Dining'],
        image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80'
      },
      {
        name: 'Kumarakom',
        slug: 'kumarakom',
        description: 'Luxury houseboats and Ayurvedic wellness retreats.',
        duration: '3-4 Days',
        highlights: ['Luxury Houseboat', 'Ayurvedic Spa', 'Private Chef', 'Sunset Cruise'],
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7e74208?w=800&q=80'
      },
      {
        name: 'Srinagar',
        slug: 'srinagar',
        description: 'Heritage houseboats and Mughal garden experiences.',
        duration: '3-4 Days',
        highlights: ['Heritage Houseboat', 'Shikara Ride', 'Mughal Gardens', 'Private Dining'],
        image: 'https://images.unsplash.com/photo-1605648916319-cf082f7524a1?w=800&q=80'
      }
    ]
  },
  {
    id: '6',
    name: 'Corporate / Group Tours',
    slug: 'corporate-group-tours',
    description: 'Team-building retreats and group travel experiences across India.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    destinations: [
      {
        name: 'Jim Corbett',
        slug: 'jim-corbett',
        description: 'Wildlife safaris and team-building in nature.',
        duration: '2-3 Days',
        highlights: ['Team Safari', 'Bonfire', 'Nature Walk', 'Group Activities'],
        image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&q=80'
      },
      {
        name: 'Goa',
        slug: 'goa',
        description: 'Beach activities, water sports, and vibrant nightlife.',
        duration: '3-4 Days',
        highlights: ['Beach Games', 'Water Sports', 'Beach Party', 'Team Dinner'],
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80'
      },
      {
        name: 'Rishikesh',
        slug: 'rishikesh',
        description: 'Adventure activities and wellness retreats for teams.',
        duration: '2-3 Days',
        highlights: ['River Rafting', 'Yoga Session', 'Camping', 'Team Building'],
        image: 'https://images.unsplash.com/photo-1586016413664-864c0dd76f53?w=800&q=80'
      },
      {
        name: 'Manali / Solang Valley',
        slug: 'manali',
        description: 'Mountain adventures and snow activities for groups.',
        duration: '3-4 Days',
        highlights: ['Snow Activities', 'Paragliding', 'Camping', 'Group Trek'],
        image: 'https://images.unsplash.com/photo-1626010448982-5d629e62f3d5?w=800&q=80'
      }
    ]
  }
];

export const getCategoryBySlug = (slug: string): ItineraryCategory | undefined => {
  return itineraryCategories.find(c => c.slug === slug);
};
