import React from 'react';

const simulationStyle = {
    marginTop: '80px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '20px',
    marginLeft: '7vw'
};

function MathsSimulations() {
    return (
        <div style={simulationStyle}>
            <iframe src="https://phet.colorado.edu/sims/html/quadrilateral/latest/quadrilateral_en.html"
                width="400"
                height="200"
                title="Maths Simulation1"
                allowfullscreen>
            </iframe>
            <iframe src="https://phet.colorado.edu/sims/html/number-pairs/latest/number-pairs_en.html"
                width="400"
                height="200"
                title="Maths Simulation2"
                allowfullscreen>
            </iframe>
            <iframe src="https://phet.colorado.edu/sims/html/calculus-grapher/latest/calculus-grapher_en.html"
                width="400"
                height="200"
                title="Maths Simulation3"
                allowfullscreen>
            </iframe>
        </div>
    );
}

export default MathsSimulations;
