import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
const Event = () => {
  return (
    <div className="mt-8">
      <ul className="flex flex-col gap-6">
        {events.map((events, index) => (
          <li key={index}>
            <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }}>
              <div className="grid md:grid-flow-col grid-flow-dense place-items-center gap-6 items-center py-10 border-b border-darkLight">
                <div className="w-56 ">
                  <img src={events.thumbniel} alt="" className="rounded-lg" />
                </div>
                <div className="flex flex-col items-center gap-2 md:items-baseline ">
                  <div className="flex gap-2 text-sm md:text-md">
                    <p className="md:text-md">{events.date}</p>
                    <p className="font-thin uppercase">{events.eventType}</p>
                  </div>
                  <h1 className="text-xl font-bold text-center md:text-2xl md:text-left">{events.title}</h1>
                  <p className="text-primary">{events.categorie}</p>
                  <p className="text-center md:text-left">{events.description}</p>
                  <div>
                    <button className="px-8 py-2 mt-2 bg-gradient-to-r from-green-400 to-green-600 rounded-xl">
                      <a href={events.link} className="flex items-center gap-2">
                        Join Now <FiArrowUpRight className="text-xl" />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const events = [
  {
    thumbniel: "/images/dummy-thumbniel.jpg",
    date: "Mar 27, 2023",
    eventType: "WORKSHOP / STUDY GROUP",
    title: "Study Jam - Web Basic",
    categorie: "Web",
    description: "Intro to web development, this class will be cover basic of web development weekly every monday so what you waiting for, join now!",
    link: "https:///asdasd.com",
  },
  {
    thumbniel: "/images/dummy-thumbniel.jpg",
    date: "April 15, 2023",
    eventType: "Speaker Session / Tech Talk",
    title: "Data Scientist Career Path",
    categorie: "Data Scientist",
    description: "Intro to Data Scinetist, this class will be cover basic of Data Scientist weekly every monday so what you waiting for, join now!",
    link: "https:///asdasd.com",
  },
];
export default Event;
