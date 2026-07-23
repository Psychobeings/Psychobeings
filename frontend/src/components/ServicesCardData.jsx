
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
      url:'individual-therapy',
      image: therapy1,
      description: 'One-on-one sessions with a professional therapist.',
      rating: 4.8,
      price: '1000₹ Per Session',
    },
    {
      id: 2,
      title: 'Corporate Wellness Counselling',
      url:'corporate-wellness-counselling',
      image: therapy2,
      description: 'Sessions to improve communication and connection.',
      rating: 4.6,
      price: '8000₹ for 6 Sessions',
    },
    {
      id: 3,
      title: 'Child & Adolescent Counselling',
      url:'child-adolescent-counselling',
      image: therapy3,
      description: 'Helping families build stronger relationships.',
      rating: 4.7,
      price: '700₹ Per Session',
    },
    {
      id: 4,
      title: 'Workshops & Group Therapy',
      url:'group-therapy',
      image: therapy4,
      description: 'Support groups led by experienced professionals.',
      rating: 4.5,
      price: '500₹',
    },
    {
      id: 5,
      title: 'Workshops & Group Therapy',
      url:'Workshops & Group Therapy',
      image: therapy4,
      description: 'Support groups led by experienced professionals.',
      rating: 4.5,
      price: '15000₹ Per Session',
    },
    {
      id: 6,
      title: 'Group Therapy',
      url:'group-therapy',
      image: therapy4,
      description: 'Support groups led by experienced professionals.',
      rating: 4.5,
      price: '500₹',
    },
  ];
   // Dummy data for the new feature section (replace with actual icons/images as needed)
   export  const featuresData = [
    { id: 1, icon: img1, title: 'Registered Psychologists/Counselling Psychologists and Therapists ', subtitle: '' },
    { id: 2, icon: img2, title: 'Completely confidential care', subtitle: '' },
    { id: 3, icon: img3, title: 'Personalised and evidence based treatment', subtitle: '' },
    { id: 4, icon: img4, title: 'Records safely stored & protected, with rare legal exceptions', subtitle: '' },
    { id: 5, icon: img5, title: 'A safe space for everyone, free of judgment', subtitle: '' },
    { id: 6, icon: img6, title: "No judgment, no disclosure", subtitle: '' },
  ];


//   export default {cardsData, featuresData};