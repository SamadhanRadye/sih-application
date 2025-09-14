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
            width="800"
            height="600"
            title={currentSimulation.title}
            allowFullScreen
          ></iframe>
        </div>

        {/* MCQ Section */}
        <div style={{ marginLeft: '20px', fontSize: '20px', border: '3px solid grey', padding: '10px', height: '600px' }}>
          MCQ QUESTIONS SECTION
        </div>
      </div>

      {/* Explanation Section */}
      <div style={{ marginLeft: '20px', fontSize: '20px', border: '3px solid grey', padding: '10px', height: '600px' }}>
        <h1>EXPLANATION</h1>
        <h2>{currentSimulation.name}</h2>
        <p>
          This simulation demonstrates concepts related to {currentSimulation.name.toLowerCase()}. 
          Use the interactive elements within the simulation to explore different scenarios and observe 
          how various parameters affect the behavior of the system.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </>
  );
}

export default Simulations;