const Faq = () => {
  return (
    <div className="my-10">
      <h1 data-aos="zoom-in-right" className="text-2xl text-center font-semibold capitalize lg:text-3xl ">
        Frequently Asked <span className="text-[#CA8787]">Questions</span>
      </h1>

      <p data-aos="zoom-in-right" className="mt-4 text-center md:w-[70%] mx-auto xl:mt-6">
        Embark on a journey of knowledge with our comprehensive online study
        platform. Access diverse courses, expert guidance, and interactive
        resources to enhance your learning experience and achieve your academic
        goals efficiently
      </p>
      <div className="flex flex-col lg:flex-row gap-8 mt-10">
        <div data-aos="zoom-in-right" className="basis-1/2">
          <img
            className="rounded hover:scale-105 transition-all duration-300"
            src="https://i.ibb.co/tphQvqW/photo-1616400619175-5beda3a17896.jpg"
            alt=""
          />
        </div>
        <div data-aos="zoom-in" className="basis-1/2 space-y-4">
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              How do I enroll in a course?
            </div>
            <div className="collapse-content">
              <p>
                To enroll in a course, simply browse our catalog, select the
                desired course, and click on the Enroll button. Follow the
                prompts to complete the enrollment process
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Can I access course materials offline?
            </div>
            <div className="collapse-content">
              <p>
                Yes, you can! Many of our courses offer downloadable resources,
                allowing you to study offline at your convenience. Look for the
                Download option within the course materials.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Are there any prerequisites for specific courses?
            </div>
            <div className="collapse-content">
              <p>
                Prerequisites vary depending on the course. Check the course
                description for details on any required prior knowledge or
                skills. Some courses may have recommended prerequisites, but
                they are not mandatory.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How long do I have access to a course after enrolling?
            </div>
            <div className="collapse-content">
              <p>
                After enrolling in a course, you will typically have unlimited
                access to the course materials for as long as the course remains
                available on our platform. Enjoy the flexibility to learn at
                your own pace.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What should I do if I encounter technical difficulties while
              studying?
            </div>
            <div className="collapse-content">
              <p>
                If you encounter any technical difficulties, don't worry! Our
                support team is here to help. Contact us through our support
                portal or email us at [support@example.com], and we'll assist
                you promptly to ensure a smooth learning experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
