import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";

function Phases({ mode }) {
  const phases = [
    "Focus",
    "Rest",
    "Focus",
    "Rest",
    "Focus",
    "Rest",
    "Focus",
    "Long Rest",
  ];

  return (
    <PhasesContainer>
      <PhaseTable>
        {phases.map((phase, index) => (
          <Arrow key={`arrow-${index}`}>
            {index === mode && (
              <ActiveArrow xmlns="http://www.w3.org/2000/svg">
                <polygon points="0,0 16,0 8,16" />
              </ActiveArrow>
            )}
          </Arrow>
        ))}

        {phases.map((phase, index) =>
          index === mode ? (
            <ActivePhase key={`phase-${index}`}>{phase}</ActivePhase>
          ) : (
            <Phase key={`phase-${index}`}>{phase}</Phase>
          )
        )}
      </PhaseTable>
    </PhasesContainer>
  );
};

export default Phases;

const PhasesContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const PhaseTable = styled.div`
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: repeat(8, 1fr); 
  margin: 12px;
`;

const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  margin-bottom: 25px;
`;

const ActiveArrow = styled.svg`
  width: 16px;
  height: 16px;
  fill: black; 
`;

const Phase = styled.div`
  font-size: 24px;
  font-family: Playfair Display, serif;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  margin-bottom: 25px;
`;

const ActivePhase = styled(Phase)`
  font-weight: bold;
`;