const Features = () => {
  return (
    <section className="text-base-content">
      <div className="container py-10 mx-auto">
        <h1 className="text-2xl text-center font-semibold capitalize lg:text-3xl ">
          explore our <br /> awesome{" "}
          <span className="text-[#CA8787]">Features</span>
        </h1>

        <p className="mt-4 text-center md:w-[70%] mx-auto xl:mt-6">
          Embark on a journey of knowledge with our comprehensive online study
          platform. Access diverse courses, expert guidance, and interactive
          resources to enhance your learning experience and achieve your
          academic goals efficiently
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div className="p-8 space-y-3 border-2 border-[#CA8787] rounded-xl">
            <span className="inline-block text-[#CA8787]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.879 16.121A3 3 0 100 11L11 14H9c0 .768.293 1.536.879 2.121z"
                />
              </svg>
            </span>

            <h1 className="text-xl font-semibold">Interactive Learning</h1>

            <p className="">
              Engage with immersive simulations, quizzes, and interactive
              lessons to reinforce understanding and make learning enjoyable.
            </p>
          </div>
          <div className="p-8 space-y-3 border-2 border-[#CA8787] rounded-xl">
            <span className="inline-block text-[#CA8787]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.879 16.121A3 3 0 100 11L11 14H9c0 .768.293 1.536.879 2.121z"
                />
              </svg>
            </span>

            <h1 className="text-xl font-semibold">Personalized Study Plans</h1>

            <p className="">
              Tailor your learning journey with customized study plans, progress
              tracking, and adaptive recommendations based on your strengths and
              areas for improvement.
            </p>
          </div>
          <div className="p-8 space-y-3 border-2 border-[#CA8787] rounded-xl">
            <span className="inline-block text-[#CA8787]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.879 16.121A3 3 0 100 11L11 14H9c0 .768.293 1.536.879 2.121z"
                />
              </svg>
            </span>

            <h1 className="text-xl font-semibold">Expert Support</h1>

            <p className="">
              Receive guidance from experienced educators and tutors through
              live sessions, discussion forums, and one-on-one consultations to
              enhance comprehension and academic success
            </p>
          </div>

          {/* Repeat similar structure for other components */}
        </div>
      </div>
    </section>
  );
};

export default Features;
