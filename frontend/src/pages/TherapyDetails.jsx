import React from "react";
import { useParams } from "react-router-dom";
import therapy1 from '../assets/singletherepay.webp'; // Ensure to use correct paths for images
import therapy2 from '../assets/coupletherapy1.svg';
import therapy3 from '../assets/pricing1.png';
import therapy4 from '../assets/grouptherepay.svg';
import { Link } from "react-router-dom";

const services = [
  {
    serviceId: 1,
    name: "Individual Therapy",
    image: therapy1,
    description: "One-on-one sessions with a professional therapist to help you grow. Individual therapy focuses on personal issues like stress, anxiety, and depression. Tailored strategies and coping mechanisms will help you achieve a balanced mental state and a better quality of life.",
    price: 500,
    url: 'individual-therapy',
  },
  {
    serviceId: 2,
    name: "Couples Therapy",
    image: therapy2,
    description: "Sessions to improve communication and connection. Couples therapy helps resolve relationship challenges, improve emotional intimacy, and strengthen bonds through guided exercises and effective communication techniques.",
    price: 500,
    url: 'couples-therapy',
  },
  {
    serviceId: 3,
    name: "Family Therapy",
    image: therapy3,
    description: "Helping families navigate challenges together. Family therapy addresses conflicts, improves communication, and nurtures strong familial connections by promoting mutual understanding and harmony.",
    price: 500,
    url: 'family-therapy',
  },
  {
    serviceId: 4,
    name: "Group Therapy",
    image: therapy4,
    description: "Find support in a safe group environment. Group therapy encourages sharing experiences, learning from others, and building a sense of community to help navigate common issues collectively.",
    price: 500,
    url: 'group-therapy',
  },
  {
    serviceId: 5,
    name: "Child Therapy",
    image: therapy1,
    description: "Specialized sessions for children to support their mental health. Child therapy addresses emotional and behavioral challenges through creative and age-appropriate methods in a safe and nurturing environment.",
    price: 500,
    url: 'child-therapy',
  },
  {
    serviceId: 6,
    name: "Online Therapy",
    image: therapy2,
    description: "Flexible online sessions from the comfort of your home. Online therapy ensures accessibility, convenience, and privacy while providing expert guidance to help you address your mental health needs.",
    price: 500,
    url: 'online-therapy',
  },
];

const TherapyDetails = () => {
  const { therapyId } = useParams();
  const service = services.find(
    (service) => service.serviceId === parseInt(therapyId)
  );

  if (!service) {
    return (
      <p className="text-center text-red-500 font-semibold mt-10">
        Service not found!
      </p>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 rounded-xl shadow-lg mt-8 mb-12">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
        {service.name}
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        <img
          src={service.image}
          alt={service.name}
          className="w-full lg:w-1/2 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
        />
        <div className="space-y-6 text-gray-700 lg:w-1/2">
          <p className="text-lg leading-relaxed">{service.description}</p>
          <p className="text-green-600 font-semibold text-2xl">
            Price: ₹{service.price}
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link to={`/${service.url}`}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transform hover:translate-y-1 transition-all duration-300">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapyDetails;
