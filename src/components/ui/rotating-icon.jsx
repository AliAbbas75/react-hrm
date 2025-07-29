import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown,ChevronDownSquareIcon } from "lucide-react";

export default function RotatingIcon({className="",open}) {
  const [rotated, setRotated] = useState(false);

  return (
    <motion.div
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => setRotated(!rotated)}
      className="cursor-pointer inline-block "
    >
      <ChevronDownSquareIcon className={`h-5 w-5 ${className}`} />
    </motion.div>
  );
}
