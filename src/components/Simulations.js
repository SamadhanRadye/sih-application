import React from 'react';

const containerStyle = {
  marginTop: '80px',
  display: 'flex',
  flexDirection: 'row',
};

const asideContainerStyle = {
  width: '200px',
  height: '600px',
  marginLeft: '20px',
  border: '3px solid grey',
  marginRight: '20px',
  textAlign: 'center',
  paddingTop: '10px',
  backgroundColor: '#f0f0f0',
};

const aside = {
  listStyleType: 'none',
  padding: '20px',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  cursor: 'pointer',
  backgroundColor: '#007bff',
  color: 'white',
  borderRadius: '4px',
  border: 'none',
};

const activeButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#0056b3',
};

function Simulations() {
  const [activeSimulation, setActiveSimulation] = React.useState(1);

  const simulations = [
    {
      id: 1,
      name: "Solar System",
      src: "https://phet.colorado.edu/sims/html/my-solar-system/latest/my-solar-system_en.html",
      title: "Solar System Simulation"
    },
    {
      id: 2,
      name: "State of matter",
      src: "https://phet.colorado.edu/sims/html/states-of-matter/latest/states-of-matter_en.html",
      title: "States of Matter Simulation"
    },
    {
      id: 3,
      name: "Projectile Motion",
      src: "https://phet.colorado.edu/sims/html/curve-fitting/latest/curve-fitting_en.html",
      title: "Curve Fitting Simulation"
    },
    {
      id: 4,
      name: "Electric Field",
      src: "https://phet.colorado.edu/sims/html/models-of-the-hydrogen-atom/latest/models-of-the-hydrogen-atom_en.html",
      title: "Hydrogen Atom Models Simulation"
    },
    {
      id: 5,
      name: "Magnetic Field",
      src: "https://phet.colorado.edu/sims/html/generator/latest/generator_en.html",
      title: "Generator Simulation"
    },
    {
      id: 6,
      name: "Wave Interference",
      src: "https://phet.colorado.edu/sims/html/sound-waves/latest/sound-waves_en.html",
      title: "Sound Waves Simulation"
    }
  ];

  const handleSimulationClick = (simulationId) => {
    setActiveSimulation(simulationId);
  };

  const currentSimulation = simulations.find(sim => sim.id === activeSimulation);

  return (
    <>
      <div className="container-stimulators-aside" style={containerStyle}>
        {/* Left Aside Menu */}
        <div>
          <div style={asideContainerStyle}>
            <ul style={aside}>
              {simulations.map((simulation) => (
                <li key={simulation.id}>
                  <button
                    style={activeSimulation === simulation.id ? activeButtonStyle : buttonStyle}
                    type="button"
                    onClick={() => handleSimulationClick(simulation.id)}
                  >
                    {simulation.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Simulator Section */}
        <div className="stimulator">
          <iframe
            src={currentSimulation.src}
            width="700"
            height="600"
            title={currentSimulation.title}
            allowFullScreen
          ></iframe>
        </div>

        {/* MCQ Section */}
        <div style={{ marginLeft: '20px', fontSize: '20px', border: '3px solid grey', padding: '10px', height: '600px' }}>
          MCQ QUESTIONS SECTION
          <h4>1.⁠ ⁠Why are the water molecules packed closely together at 146 K in the simulation?</h4>
          <input type="radio" id="huey" name="drone" value="huey" />
          <label for="huey">A. Because they are in the solid state</label><br />
          <input type="radio" id="huey" name="drone" value="huey" />
          <label for="huey">B. Because they are in the liquid state</label><br />
          <input type="radio" id="huey" name="drone" value="huey" />
          <label for="huey">C. Because they are in a gaseous state</label><br />
          <input type="radio" id="huey" name="drone" value="huey" />
          <label for="huey">D. Because they have maximum kinetic energy</label><br />
          <button type="button" className="btn btn-primary mt-3">Submit</button>
        </div>
      </div>

      {/* Explanation Section */}
      <div style={{ marginLeft: '20px', fontSize: '20px', border: '3px solid grey', padding: '10px', height: '600px' }}>
        <h1>EXPLANATION</h1>
        <h2>{currentSimulation.name}</h2>
        <h3>Correct Answer for Q1: A. Because they are in the solid state</h3>
        <h3>At 146 K (Kelvin):</h3>
        The temperature is very low, so molecules have very little kinetic energy (they can only vibrate, not move freely).
        Since they cannot overcome the intermolecular attractive forces, they stay locked in fixed positions.
        In the simulator, you see the water molecules clustered tightly at the bottom — this represents the solid state (ice).

        <h3>Potential Energy Aspect:</h3>
        In solids, particles have low potential energy because they are strongly bound together in fixed positions.
        The strong attractions keep them close, so potential energy is minimum (lowest state of energy).

        <h3>Kinetic Energy Aspect:</h3>
        Because of low temperature, molecules have minimum kinetic energy (just vibrating in place).
        They are not moving around freely like in liquids or gases.

        <h3>Simulator Demonstration:</h3>
        If you press "Heat", the thermometer rises.
        First, kinetic energy increases (molecules vibrate faster).
        At the melting point, heat energy goes into increasing potential energy (breaking bonds), while temperature stays constant.
        Molecules then spread out to form a liquid.
      </div>
    </>
  );
}

export default Simulations;