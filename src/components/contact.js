import React from "react";
import { FaMobileAlt} from "react-icons/fa";
export default function Contact() {
    return (
        <section id="contact">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col text-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-center mb-16 md:mb-0 items-center">
              <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 flex items-center">
                Contact Me <FaMobileAlt className="ml-2" size={40} />
              </h1>
              <h2 className="title-font sm:text-2xl text-3xl mb-4 font-medium">
                I am actively seeking full-time opportunities in Software Engineering. If you know of any available positions, have questions, or would simply like to say hello, please do not hesitate to reach out to me via email at&nbsp;
                <a
                  href="mailto:pranathi.neerudu@gmail.com"
                  className="text-green-500 hover:underline"
                >
                  pranathi.neerudu@gmail.com
                </a>
                .
              </h2>
            </div>
          </div>
        </section>
      );
}
