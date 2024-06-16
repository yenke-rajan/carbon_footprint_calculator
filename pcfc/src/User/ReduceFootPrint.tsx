import { Fragment } from 'react';

const TipCard = ({ title, description, imageSrc, altText }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
    <div className="w-2/3 pr-8 ml-5">
      <h2 className="text-2xl font-semibold text-green-800">{title}</h2>
      {description.map((text, index) => (
        <p key={index} className="mt-4 text-green-700">{text}</p>
      ))}
    </div>
    <div className="w-1/2">
      <img className="w-60 h-60 ml-20 rounded-lg shadow-lg" src={imageSrc} alt={altText} />
    </div>
  </div>
);

const ReduceFootPrint = () => {
  const tips = [
    {
      title: 'Diet',
      description: [
        'Reduce meat consumption: Opt for plant-based meals more often. Meat production has a significant carbon footprint.',
        'Buy local and seasonal: This reduces transportation emissions and supports local farmers.',
        'Minimize food waste: Plan your meals, buy only what you need, and compost leftover food scraps.'
      ],
      imageSrc: './OIG333.jpeg',
      altText: 'Vegetables'
    },
    {
      title: 'Travel',
      description: [
        'Explore car-free alternatives: Walk, bike, use public transportation, or carpool whenever possible.',
        'Choose fuel-efficient vehicles: If you must drive, consider a hybrid or electric car.',
        'Combine errands: Plan your trips to minimize unnecessary driving.',
        'Explore virtual travel options: Consider virtual tours or online experiences to satisfy your wanderlust.'
      ],
      imageSrc: './OIG4.jpeg',
      altText: 'Bike'
    },
    {
      title: 'Home',
      description: [
        'Upgrade appliances: Invest in energy-efficient models when replacing old appliances.',
        'Air dry clothes: Skip the clothes dryer whenever possible and utilize the natural power of the sun.',
        'Shorten showers: Every minute counts! Aim for shorter showers to reduce water and energy usage.',
        'Seal air leaks: Drafty windows and doors let in cold air in winter and hot air in summer, forcing your HVAC system to work harder. Seal any leaks to improve efficiency.',
        'Adjust your thermostat: A small temperature change can make a big difference. In summer, raise the thermostat a few degrees and wear lighter clothing. In winter, lower the thermostat and layer up.'
      ],
      imageSrc: './OIG1.jpeg',
      altText: 'Home'
    },
    {
      title: 'Personal Habits',
      description: [
        'Reduce, Reuse, Recycle: This timeless mantra is more important than ever. Reduce unnecessary purchases, reuse what you can, and recycle diligently.',
        'Support sustainable businesses: Look for companies committed to eco-friendly practices and fair labor.',
        'Embrace digital communication: Reduce paper use by opting for digital communication and online bill statements.',
        'Green your cleaning routine: Use natural cleaning products whenever possible to avoid harsh chemicals and reduce packaging waste.'
      ],
      imageSrc: './OIG22.jpeg',
      altText: 'Eco-friendly cleaning'
    }
  ];

  return (
    <div className="tips-page bg-green-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-900">Small Steps, Big Impact: Tips for a Greener Life</h1>
          <p className="mt-4 text-lg text-green-800">Incorporate these eco-friendly habits into your daily routine to reduce your carbon footprint.</p>
        </div>
        <div className="mt-10 space-y-10">
          {tips.map((tip, index) => (
            <TipCard key={index} title={tip.title} description={tip.description} imageSrc={tip.imageSrc} altText={tip.altText} />
          ))}
        </div>
      </div>
      <div className="mt-10 p-5 pb-0">
        <h2 className="text-2xl font-semibold text-gray-800">Sign up for our newsletter to receive weekly tips and inspiration!</h2>
        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md shadow-md hover:bg-blue-700"
        >
          Sign Up
        </button>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5 pt-0">
        <img
          className="w-full h-64 object-cover rounded-md shadow-md"
          src="./OIG3.jpeg"
          alt="cycle"
        />
        <img
          className="w-full h-64 object-cover rounded-md shadow-md"
          src="./blob.jpeg"
          alt="pollution"
        />
        <img
          className="w-full h-64 object-cover rounded-md shadow-md"
          src="./harmony.jpeg"
          alt="Mountains"
        />
      </div>
    </div>
  );
};

export default ReduceFootPrint;
