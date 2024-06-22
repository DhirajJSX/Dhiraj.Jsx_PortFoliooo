import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";

import particlesOptions from "./options.js";

const ParticlesBG = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(() => particlesOptions, []);

  return init ? <Particles id="tsparticles" options={options} /> : <></>;
};

export default ParticlesBG;