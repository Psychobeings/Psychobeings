
import therapy1 from '../assets/singletherepay.webp'; // Ensure to use correct paths for images
import therapy2 from '../assets/coupletherapy1.svg';
import therapy3 from '../assets/pricing1.png';
import therapy4 from '../assets/grouptherepay.svg';

import img1 from '../assets/lifetime.png';
import img2 from '../assets/validity.png';
import img3 from '../assets/img3.png';
import img5 from '../assets/img4.png';
import img6 from '../assets/img6.png';
import img4 from '../assets/couple-therapy1.png';
export const cardsData = [
    {
      id: 1,
      title: 'Individual Therapy',
      image: therapy1,
      description: 'One-on-one sessions with a professional therapist.',
      rating: 4.8,
      price: '$70/hour',
    },
    {
      id: 2,
      title: 'Couples Therapy',
      image: therapy2,
      description: 'Sessions to improve communication and connection.',
      rating: 4.6,
      price: '$90/hour',
    },
    {
      id: 3,
      title: 'Family Therapy',
      image: therapy3,
      description: 'Helping families build stronger relationships.',
      rating: 4.7,
      price: '$100/hour',
    },
    {
      id: 4,
      title: 'Group Therapy',
      image: therapy4,
      description: 'Support groups led by experienced professionals.',
      rating: 4.5,
      price: '$50/hour',
    },
  ];
   // Dummy data for the new feature section (replace with actual icons/images as needed)
   export  const featuresData = [
    { id: 1, icon: img1, title: 'Therapist (45 mins)', subtitle: 'Psychiatrist (30 mins)' },
    { id: 2, icon: img2, title: 'Lifetime Validity', subtitle: '30 Day Refund Policy' },
    { id: 3, icon: img3, title: 'Uniform Pricing', subtitle: 'Video | Call | Chat' },
    { id: 4, icon: img4, title: 'Couple Appointment', subtitle: '= 2 Sessions' },
    { id: 5, icon: img5, title: '7-Day Customer', subtitle: 'Care Support' },
    { id: 6, icon: img6, title: '100% Confidential', subtitle: '& Secure' },
  ];


//   export default {cardsData, featuresData};