export default function LandingPage() {
  return (
    <div className="landing-page bg-green-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Reduce Your Carbon Footprint: Start Today!
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Join us in the fight against climate change. Every small action counts!
          </p>
        </div>
        <div className="mt-10">
          <img
            className="w-full h-64 object-cover rounded-md shadow-md"
            src="./UntitledDesign.png"
            alt="Nature"
          />
        </div>
        <div className="text-center mt-10">
          <p className="text-lg text-gray-600">
            In a world increasingly concerned with environmental sustainability, it's important to understand and reduce our carbon footprint. Our Personal Carbon Footprint Calculator is designed to help you do just that. Whether you're an individual looking to make a difference or a family eager to reduce your environmental impact, our calculator provides the tools and resources you need to track, analyze, and minimize your carbon emissions.
          </p>
        </div>
        <div className="mt-10 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Calculate Your Carbon Footprint</h2>
          <p className="text-gray-700">
            Our calculator uses data from leading environmental agencies to estimate your carbon emissions from various activities, such as transportation, energy consumption, and waste generation. Simply input your daily habits and lifestyle choices to see where your carbon footprint is largest and where there's room for improvement.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">Track Your Progress</h2>
          <p className="text-gray-700">
            Monitoring your daily carbon footprint is key to understanding your impact on the environment. Our tracker shows how your carbon emissions change over time, giving you insights into the effectiveness of your efforts to reduce them.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">Compare and Compete</h2>
          <p className="text-gray-700">
            Join our community to compare your carbon footprint with others and compete for a better, more sustainable lifestyle. See how your efforts stack up against your peers and get motivated to make even more environmentally friendly choices.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">Take Action</h2>
          <p className="text-gray-700">
            Reducing your carbon footprint is easier than you might think. Our calculator provides personalized tips and resources to help you make greener choices in your daily life, from energy-efficient home improvements to eco-friendly transportation options.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">Join Our Community</h2>
          <p className="text-gray-700">
            Connect with like-minded individuals, share your progress, and inspire others to make a difference. Together, we can work towards a more sustainable future for all.
          </p>
        </div>
     </div>
    </div>
  );
}
