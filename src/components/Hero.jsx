import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="mt-20 text-center layout">
        <div className="leading-tight text-center">
          <h1 className="md:text-[4rem] text-[2.8rem] font-bold ">
            Programing
            <br /> Community
          </h1>
          <h2 className="text-2xl font-bold text-primary">Pround Of Your Code</h2>
        </div>
        <p className="my-5 text-sm">Yuk, gabung ke komunitas kita dan kembangkan skillmu!</p>
        <button className="px-8 py-2 mt-4 bg-gradient-to-r from-green-400 to-green-600 rounded-xl">Join Us</button>
      </div>
    </motion.div>
  );
};

export default Hero;
