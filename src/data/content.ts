export const NAV_LINKS = [
  { id: 'destinations', label: 'Destinations' },
  { id: 'services', label: 'Hotels' },
  { id: 'services', label: 'Flights' },
  { id: 'bookings', label: 'Bookings' },
] as const

export const SERVICES = [
  {
    title: 'Calculated Weather',
    text: 'Built Wicket longer admire do barton vanity itself do in it.',
    tone: 'yellow',
    icon: 'weather',
  },
  {
    title: 'Best Flights',
    text: 'Engrossed listening. Park gate sell they west hard for the.',
    tone: 'coral',
    icon: 'plane',
  },
  {
    title: 'Local Events',
    text: 'Barton vanity itself do in it. Preferred to men it engrossed listening.',
    tone: 'teal',
    icon: 'event',
  },
  {
    title: 'Customization',
    text: 'We deliver outsourced aviation services for military customers.',
    tone: 'purple',
    icon: 'settings',
  },
] as const

export const IMAGES = {
  hero: '/images/hero-image.png',
  greece: '/images/greece.jpg',
} as const

export const DESTINATIONS = [
  {
    name: 'Rome, Italy',
    price: '$5.42k',
    duration: '10 Days Trip',
    image: '/images/destination1.png',
  },
  {
    name: 'London, UK',
    price: '$4.2k',
    duration: '12 Days Trip',
    image: '/images/destination2.png',
  },
  {
    name: 'Full Europe',
    price: '$15k',
    duration: '28 Days Trip',
    image: '/images/destination3.png',
  },
] as const

export const BOOKING_STEPS = [
  {
    title: 'Choose Destination',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
  },
  {
    title: 'Make Payment',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
  },
  {
    title: 'Reach Airport on Selected Date',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
  },
] as const

export const TESTIMONIALS = [
  {
    quote:
      'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.',
    name: 'Mike Taylor',
    role: 'Lahore, Pakistan',
  },
  {
    quote:
      'After going through a number of sites, I had to settle for Jadoo because honestly it was a no brainer trying someone else.',
    name: 'Chris Thomas',
    role: 'CEO of Red Button',
  },
  {
    quote:
      'Traveling with Jadoo was seamless from booking to landing. Highly recommend for anyone planning their next adventure.',
    name: 'Sarah Connor',
    role: 'Globetrotter',
  },
] as const

export const PARTNERS = ['axon', 'jetstar', 'expedia', 'qantas', 'alitalia'] as const

export const FOOTER_LINKS = {
  company: ['About', 'Careers', 'Mobile'],
  contact: ['Help/FAQ', 'Press', 'Affiliates'],
  more: ['Airlinefees', 'Airline', 'Low fare tips'],
} as const
