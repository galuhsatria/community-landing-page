import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
const Team = () => {
  return (
    <div className="pb-8 my-4 border-b border-darkLight">
      <ul className="grid lg:grid-cols-4 md:grid-cols-3 max-[567px]:grid-cols-1 grid-cols-2 gap-4">
        {teams.map((teams, index) => (
          <motion.li key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="flex flex-col items-center gap-3 py-10 rounded-md bg-darkLight p-7">
              <div className="w-[12.7rem] h-[12.7rem] rounded-full mb-8">
                <img src={teams.profil} alt="" className="object-cover w-56 h-[12.7rem] rounded-full" />
              </div>
              <div className="text-center">
                <p className="text-lg font-bold capitalize">{teams.name}</p>
                <p className="font-thin">{teams.postition}</p>
              </div>
              <div className="flex gap-3">
                <a href={teams.socialMedia.instagram}>
                  <BsInstagram />
                </a>
                <a href={teams.socialMedia.facebook}>
                  <BsFacebook />
                </a>
                <a href={teams.socialMedia.linkedin}>
                  <BsLinkedin />
                </a>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

const teams = [
  {
    profil: "/src/assets/images/p.jpeg",
    name: "Wahyu Ananta",
    postition: "Lead",
    socialMedia: {
      instagram: "dasda",
      facebook: "dasdas",
      linkedin: "dasda",
    },
  },
  {
    profil: "/src/assets/images/p1.jpeg",
    name: "Dedi Saputra",
    postition: "Co Lead",
    socialMedia: {
      instagram: "dasda",
      facebook: "dasdas",
      linkedin: "dasda",
    },
  },
  {
    profil: "/src/assets/images/p2.jpeg",
    name: "alvain Ananda",
    postition: "Creative",
    socialMedia: {
      instagram: "dasda",
      facebook: "dasdas",
      linkedin: "dasda",
    },
  },
  {
    profil: "/src/assets/images/p3.jpeg",
    name: "Adi Saputra",
    postition: "Event",
    socialMedia: {
      instagram: "dasda",
      facebook: "dasdas",
      linkedin: "dasda",
    },
  },
];
export default Team;
