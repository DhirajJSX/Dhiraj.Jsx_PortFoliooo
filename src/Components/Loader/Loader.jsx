import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import gif from "../../assets/Img/Wink Emoji GIF - Wink Emoji Apple - Discover & Share GIFs.gif";

const Loader = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prev) => (prev === 1 ? 1.05 : 1));
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black z-[9999]"
      initial={{ scale: 2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* Central Core with a fixed shape */}
      <motion.div
        className="w-48 h-48 relative z-10 rounded-full overflow-hidden"
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Image placed in the center */}
        <img
          src={gif} // Replace this with your image URL
          alt="Loader Image"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
