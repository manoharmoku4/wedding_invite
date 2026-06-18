export interface EventTheme {
  primary: string
  secondary: string
  bgFrom: string
  bgVia: string
  bgTo: string
  textAccent: string
  borderColor: string
}

export interface WeddingEvent {
  id: string
  name: string
  subtitle: string
  date: string
  time: string
  venue: string
  dressCode: string
  theme: EventTheme
  image: string
  mapsUrl: string
}

export const events: WeddingEvent[] = [
  {
    id: 'engagement',
    name: 'Engagement',
    subtitle: 'Where it all begins ✨',
    date: 'Sunday, August 16, 2026',
    time: '10:30 AM',
    venue: 'Rock Enclave, Hyderabad',
    dressCode: 'Festive — Purples & Golds',
    theme: {
      primary: '#7C3AED',
      secondary: '#C084FC',
      bgFrom: '#2e1065',
      bgVia: '#4a1d96',
      bgTo: '#1e1b4b',
      textAccent: 'text-purple-300',
      borderColor: 'border-purple-400/30',
    },
    image: '/events/engagement.jpg',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rock+Enclave+Hyderabad',
  },
  {
    id: 'mehndi',
    name: 'Mehndi',
    subtitle: 'Art on hands, joy in hearts 🌿',
    date: 'Wednesday, August 19, 2026',
    time: '4:00 PM',
    venue: 'Rock Enclave, Hyderabad',
    dressCode: 'Pastels & Florals',
    theme: {
      primary: '#16A34A',
      secondary: '#86EFAC',
      bgFrom: '#052e16',
      bgVia: '#14532d',
      bgTo: '#022c22',
      textAccent: 'text-green-300',
      borderColor: 'border-green-400/30',
    },
    image: '/events/mehndi.jpg',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rock+Enclave+Hyderabad',
  },
  {
    id: 'haldi',
    name: 'Haldi',
    subtitle: 'Blessed in turmeric & sunshine ☀️',
    date: 'Thursday, August 20, 2026',
    time: '10:00 AM',
    venue: 'Rock Enclave, Hyderabad',
    dressCode: 'Yellow & Marigold',
    theme: {
      primary: '#D97706',
      secondary: '#FDE68A',
      bgFrom: '#451a03',
      bgVia: '#78350f',
      bgTo: '#431407',
      textAccent: 'text-amber-300',
      borderColor: 'border-amber-400/30',
    },
    image: '/events/haldi.jpg',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rock+Enclave+Hyderabad',
  },
  {
    id: 'pellikuthuru',
    name: 'Pellikuthuru',
    subtitle: 'The sacred bridal ceremony 🪔',
    date: 'Thursday, August 20, 2026',
    time: '4:00 PM',
    venue: 'Rock Enclave, Hyderabad',
    dressCode: 'Traditional — Oranges & Reds',
    theme: {
      primary: '#C2410C',
      secondary: '#FB923C',
      bgFrom: '#431407',
      bgVia: '#7c2d12',
      bgTo: '#450a0a',
      textAccent: 'text-orange-300',
      borderColor: 'border-orange-400/30',
    },
    image: '/events/pellikuthuru.jpg',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rock+Enclave+Hyderabad',
  },
  {
    id: 'shaadi',
    name: 'Shaadi',
    subtitle: 'Two souls, one forever 🔥',
    date: 'Friday, August 21, 2026',
    time: '11:30 AM',
    venue: 'Rock Enclave, Hyderabad',
    dressCode: 'Traditional — Reds & Golds',
    theme: {
      primary: '#991B1B',
      secondary: '#F59E0B',
      bgFrom: '#450a0a',
      bgVia: '#7f1d1d',
      bgTo: '#1c0505',
      textAccent: 'text-amber-300',
      borderColor: 'border-amber-400/30',
    },
    image: '/events/shaadi.jpg',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rock+Enclave+Hyderabad',
  },
  {
    id: 'reception',
    name: 'Reception',
    subtitle: 'Celebrate love in style 🥂',
    date: 'Sunday, August 23, 2026',
    time: '7:00 PM',
    venue: 'Rock Enclave, Hyderabad',
    dressCode: 'Glamorous — Blues & Silvers',
    theme: {
      primary: '#1D4ED8',
      secondary: '#818CF8',
      bgFrom: '#0f172a',
      bgVia: '#1e1b4b',
      bgTo: '#030712',
      textAccent: 'text-indigo-300',
      borderColor: 'border-indigo-400/30',
    },
    image: '/events/reception.jpg',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rock+Enclave+Hyderabad',
  },
]

export const imagePrompts: Record<string, string> = {
  engagement:
    'Indian couple engagement ceremony, woman in purple gold lehenga with diamond jewelry, man in purple sherwani, purple orchids and roses mandap, fairy lights, golden decorations, illustrated anime digital art style, vibrant, ultra detailed',
  mehndi:
    'Indian couple mehndi ceremony, woman in pastel green pink floral lehenga showing henna hands, man in mint green kurta, lush garden pink white flowers marigold decorations fairy lights golden lanterns, illustrated anime digital art style, soft dreamy, ultra detailed',
  haldi:
    'Indian couple haldi ceremony, woman in bright yellow lehenga with marigold jewelry, man in yellow kurta, bowls of turmeric haldi paste, marigold garlands, yellow flower petals falling, golden sunlight, illustrated anime digital art style, vibrant yellow golden, ultra detailed',
  pellikuthuru:
    'South Indian Telugu bride preparation, woman in orange red half saree gold jewelry jasmine flowers in hair, brass diyas lit, temple pillars, traditional Telugu decor warm orange, illustrated anime digital art style, amber warm lighting, ultra detailed',
  shaadi:
    'Telugu Hindu wedding ceremony, bride in red gold Kanjivaram silk saree heavy gold temple jewelry, groom in cream gold sherwani safa turban, sacred fire agni, jasmine garlands, banana leaves, traditional mandap brass lamps marigolds, illustrated anime digital art style, rich red gold, ultra detailed',
  reception:
    'Indian wedding reception night, woman in royal blue silver sequin gown diamond jewelry, man in navy blue suit, crystal chandeliers, blue purple uplighting, confetti, champagne glasses, modern luxury ballroom, illustrated anime digital art style, glamorous, ultra detailed',
}
