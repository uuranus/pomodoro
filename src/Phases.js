import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";

function Phases({ phases, mode }) {

  const mobileMaxWidth = 775;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= mobileMaxWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= mobileMaxWidth);
    };

    window.addEventListener("resize", handleResize); // 리사이즈 이벤트 리스너 등록
    return () => window.removeEventListener("resize", handleResize); // 클린업
  }, []);

  return (
    <PhasesContainer>
      <PhaseTable>
        {isMobile ? (
          <>
            {phases.map((phase, index) => (
              <React.Fragment key={`phase-${index}`}>
                {/* Phase */}
                {index === mode ? (
                  <ActivePhase>{phase}</ActivePhase>
                ) : (
                  <Phase>{phase}</Phase>
                )}

                {/* Arrow */}
                <Arrow>
                  {index === mode && (
                    <ActiveArrow xmlns="http://www.w3.org/2000/svg">
                      <polygon points="16,0 0,8 16,16 " />
                    </ActiveArrow>
                  )}
                </Arrow>
              </React.Fragment>
            ))}
          </>
        ) : (
          <>
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
          </>
        )}

      </PhaseTable>
    </PhasesContainer>
  );
};

export default Phases;

const PhasesContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media (max-width: 775px) {
    flex: 2;
  }
`;

const PhaseTable = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.primary};
  display: grid;
  grid-template-columns: repeat(8, 1fr); 
  margin: 50px 25px 0px 25px;

  @media (max-width: 775px) {
    width: 50%;
    grid-template-columns: repeat(2,1fr) ;
    border-bottom: 0px;
  }
`;

const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  padding-bottom: 25px;

`;

const ActiveArrow = styled.svg`
  width: 16px;
  height: 16px;
  fill: ${(props) => props.theme.primary}; 
`;

const Phase = styled.div`
  font-size: 24px;
  font-family: Playfair Display, serif;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.primary};
  padding-bottom: 25px;

  @media (max-width: 1135px) {
    font-size: 20px;
  }

  @media (max-width: 775px) {
    font-size: 16px;
    border-right: 1px solid  ${(props) => props.theme.primary};
  }
`;

const ActivePhase = styled(Phase)`
  font-weight: bold;
`;