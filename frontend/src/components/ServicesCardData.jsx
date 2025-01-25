
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
      price: '500₹',
    },
    {
      id: 2,
      title: 'Couples Therapy',
      url:'couples-therapy',
      image: therapy2,
      description: 'Sessions to improve communication and connection.',
      rating: 4.6,
      price: '500₹',
    },
    {
      id: 3,
      title: 'Family Therapy',
      url:'family-therapy',
      image: therapy3,
      description: 'Helping families build stronger relationships.',
      rating: 4.7,
      price: '500₹',
    },
    {
      id: 4,
      title: 'Group Therapy',
      url:'group-therapy',
      image: therapy4,
      description: 'Support groups led by experienced professionals.',
      rating: 4.5,
      price: '500₹',
    },
    {
      id: 5,
      title: 'Group Therapy',
      url:'group-therapy',
      image: therapy4,
      description: 'Support groups led by experienced professionals.',
      rating: 4.5,
      price: '500₹',
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
    { id: 1, icon: img1, title: 'Registered psychiatrists and therapists ', subtitle: '' },
    { id: 2, icon: img2, title: 'Completely confidential care', subtitle: '' },
    { id: 3, icon: img3, title: 'Personalised and evidence based treatment', subtitle: '' },
    { id: 4, icon: img4, title: 'For everyone - Men, Women, LGBTQ+', subtitle: '' },
    { id: 5, icon: img5, title: 'Made by doctors', subtitle: '' },
    { id: 6, icon: img6, title: "Discreet delivery of medicines", subtitle: '' },
  ];


//   export default {cardsData, featuresData};