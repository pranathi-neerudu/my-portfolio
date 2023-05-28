import React, { useState } from "react";
import { education, testimonials } from "../data";
import { FaBriefcase,FaExpandAlt } from 'react-icons/fa';

export default function Experience() {
  const [selectedSection, setSelectedSection] = useState("section1");
  const [testimonialsData, setTestimonialsData] = useState(testimonials);
  const [educationData , setEducationData ] =useState(education);

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  const handleCollapse = (id) => {
    const updatedTestimonials = testimonialsData.map((testimonial) => {
      if (testimonial.id === id) {
        return {
          ...testimonial,
          expanded: !testimonial.expanded
        };
      }
      return testimonial;
    });
    setTestimonialsData(updatedTestimonials);
  };
  const handleCollapse1 = (id) => {
    const updatedEducation = educationData.map((education) => {
      if (education.id === id) {
        return {
          ...education,
          expanded: !education.expanded
        };
      }
      return education;
    });
    setEducationData(updatedEducation);
  };

  return (
    <section id="experience">
      <div className="container px-5 py-10 mx-auto text-center">
        <div className="flex flex-col items-center mb-4">
          <FaBriefcase className="ml-2" size={40} />
          <br />
          <div className="flex justify-center">
            <button
              className={`mr-4 ${
                selectedSection === "section1" ? "text-green-400" : "text-white"
              } px-4 py-2 rounded focus:outline-none text-4xl font-bold`}
              onClick={() => handleSectionChange("section1")}
            >
              Work
            </button>
            <button
              className={`mr-4 ${
                selectedSection === "section2" ? "text-green-400" : "text-white"
              } px-4 py-2 rounded focus:outline-none text-4xl font-bold`}
              onClick={() => handleSectionChange("section2")}
            >
              Education
            </button>
          </div>
        </div>

        {selectedSection === "section1" && (
          <React.Fragment>
            <div className="flex flex-col items-center m-4">
              {testimonialsData.map((testimonial) => (
                <div className="p-4 md:w-1/2 w-full" key={testimonial.id}>
                  <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded" >
                  <FaExpandAlt className="ml-2" size={20} />
                    <h3 className="cursor-pointer text-white font-medium mb-4" onClick={() => handleCollapse(testimonial.id)}>
                      {testimonial.title}
                      <br/>
                      {testimonial.company}
                      <br/>
                      {testimonial.year}
                    </h3>
                    {testimonial.expanded && (
                      <React.Fragment>
                        <ul className="leading-relaxed mb-6 pl-4 list-disc text-justify">
                          {testimonial.quote.split("•").map((line, index) => (
                            <li key={index}>{line}</li>
                          ))}
                        </ul>
                        <div className="inline-flex items-center">
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="text-gray-500 text-sm uppercase">
                              {testimonial.company}
                            </span>
                          </span>
                        </div>
                      </React.Fragment>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </React.Fragment>
        )}

        {selectedSection === "section2" && (
          <React.Fragment>
          <div className="flex flex-col items-center m-4">
            {educationData.map((education) => (
              <div className="p-4 md:w-1/2 w-full" key={education.id}>
                <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded" >
                <FaExpandAlt className="ml-2" size={20} />
                  <h3 className="cursor-pointer text-white font-medium mb-4" onClick={() => handleCollapse1(education.id)}>
                    {education.title}
                    <br/>
                    {education.company}
                    <br/>
                    {education.year}
                  </h3>
                  {education.expanded && (
                    <React.Fragment>
                      <ul className="leading-relaxed mb-6 pl-4 list-disc text-justify">
                        {education.quote.split("•").map((line, index) => (
                          <li key={index}>{line}</li>
                        ))}
                      </ul>
                      <div className="inline-flex items-center">
                        <span className="flex-grow flex flex-col pl-4">
                          <span className="text-gray-500 text-sm uppercase">
                            {education.company}
                          </span>
                        </span>
                      </div>
                    </React.Fragment>
                  )}
                </div>
              </div>
            ))}
          </div>
        </React.Fragment>
        )}
      </div>
    </section>
  );
}
