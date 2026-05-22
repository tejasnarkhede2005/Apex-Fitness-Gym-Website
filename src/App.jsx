export default function App() {
  const services = [
    'Strength Training',
    'Muscle Building',
    'Weight Loss',
    'Personal Training',
    'Cardio Workouts',
    'Functional Fitness',
  ];

  const features = [
    'Certified Trainers',
    'Quality Equipment',
    'Motivating Environment',
    'Unisex Gym',
    'Clean Interiors',
    'Strength-Focused Training',
    'Friendly Community',
    'Modern Workout Space',
  ];

  const testimonials = [
    'Amazing trainers with quality equipment and a very motivating environment.',
    'Perfect gym for strength training and muscle building. Great atmosphere.',
    'Clean surroundings, energetic vibe, and supportive trainers who push you forward.',
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-red-500">APEX FITNESS</h1>

          <nav className="hidden md:flex gap-6 text-gray-300">
            <a href="#home" className="hover:text-red-500">Home</a>
            <a href="#about" className="hover:text-red-500">About</a>
            <a href="#services" className="hover:text-red-500">Programs</a>
            <a href="#contact" className="hover:text-red-500">Contact</a>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center text-center px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1974&auto=format&fit=crop')",
        }}
      >
        <div className="max-w-4xl">
          <p className="text-red-500 mb-4 font-semibold">⭐ 4.9 Rated Gym in Wardha</p>

          <h2 className="text-5xl md:text-7xl font-extrabold uppercase leading-tight mb-6">
            Build Strength <br /> Build Confidence
          </h2>

          <p className="text-lg text-gray-300 mb-8">
            Premium fitness training, expert guidance, and a motivating atmosphere designed to help you become your strongest self.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-xl font-semibold transition">
              Join Now
            </button>

            <button className="border border-gray-600 hover:border-red-500 px-8 py-4 rounded-xl font-semibold transition">
              Explore Gym
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
            alt="Gym"
            className="rounded-3xl shadow-2xl w-full"
          />

          <div>
            <p className="text-red-500 uppercase tracking-widest mb-3">About Apex Fitness</p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Body Into Power
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg mb-8">
              At Apex Fitness, fitness is more than workouts. It’s a mindset built through consistency, discipline, and progress.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-black border border-gray-800 p-6 rounded-2xl text-center">
                <h3 className="text-3xl font-bold text-red-500">500+</h3>
                <p className="text-gray-400 mt-2">Happy Members</p>
              </div>

              <div className="bg-black border border-gray-800 p-6 rounded-2xl text-center">
                <h3 className="text-3xl font-bold text-red-500">10+</h3>
                <p className="text-gray-400 mt-2">Expert Trainers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red-500 uppercase tracking-widest mb-3">Programs</p>

          <h2 className="text-4xl md:text-5xl font-bold mb-14">
            Fitness Programs Designed For Results
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-black border border-gray-800 rounded-3xl p-8 hover:border-red-500 transition"
              >
                <div className="text-4xl mb-4">💪</div>

                <h3 className="text-2xl font-bold mb-4">{service}</h3>

                <p className="text-gray-400">
                  Professional guidance and focused training plans designed to help you achieve your goals.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red-500 uppercase tracking-widest mb-3">Why Choose Us</p>

          <h2 className="text-4xl md:text-5xl font-bold mb-14">
            More Than Just A Gym
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#111111] border border-gray-800 rounded-2xl p-6 hover:border-red-500 transition"
              >
                <h3 className="text-xl font-semibold">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-red-600 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold uppercase mb-6">
            Your Progress Begins With One Decision
          </h2>

          <p className="text-xl mb-8">
            Start today and become stronger every single day.
          </p>

          <button className="bg-white text-black px-10 py-4 rounded-xl font-bold hover:scale-105 transition">
            Start Your Fitness Journey
          </button>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red-500 uppercase tracking-widest mb-3">Testimonials</p>

          <h2 className="text-4xl md:text-5xl font-bold mb-14">
            What Members Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((review, index) => (
              <div
                key={index}
                className="bg-black border border-gray-800 rounded-3xl p-8"
              >
                <div className="text-red-500 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-300">{review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-red-500 uppercase tracking-widest mb-3">Contact</p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready To Transform Your Lifestyle?
          </h2>

          <p className="text-gray-400 text-lg mb-10">
            Join Apex Fitness today and start building strength, discipline, and confidence.
          </p>

          <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8 max-w-2xl mx-auto">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 outline-none"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 py-4 rounded-xl font-semibold transition"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-800 py-8 text-center bg-black text-gray-500">
        <h3 className="text-2xl font-bold text-white mb-3">APEX FITNESS</h3>
        <p>Discipline Creates Results.</p>
        <p className="mt-3 text-sm">© 2026 Apex Fitness. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
