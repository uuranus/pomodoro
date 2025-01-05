import styled from "styled-components";
import React, { useState } from "react";


function ThemeChangeCircle({ currentTheme,themeColorList,onThemeColorChange }) {

    const [isThemeListVisible, setIsThemeListVisible] = useState(false); // 테마 리스트 표시 여부

    const handleThemeChange = (selectedTheme) => {
        setIsThemeListVisible(false); // 테마 리스트 닫기
        onThemeColorChange(selectedTheme)
    };

    return (
        <ThemeContainer>
            <CurrentThemeCircle
                theme={currentTheme}
                onClick={() => setIsThemeListVisible((prev) => !prev)}
            />

            {isThemeListVisible && (
                <ThemeList theme={currentTheme}>
                    {themeColorList.map((theme, index) => (
                        <ThemeItem
                            key={index}
                            theme={theme}
                            onClick={() => handleThemeChange(theme)}/>
                    ))}
                </ThemeList>
            )}
        </ThemeContainer>
    );
}

export default ThemeChangeCircle;

const ThemeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative; 
`;

const CurrentThemeCircle = styled.div`
  height: 100%;
  aspect-ratio:  1; 
  width: auto;
  border-radius: 50%;
  background: ${(props) =>
        `linear-gradient(to right, ${props.theme.primary}, ${props.theme.background})`};
  cursor: pointer;
  border:  ${(props) => `2px solid ${props.theme.primary}`};
  z-index: 5;
  box-sizing: border-box;
`;

const ThemeList = styled.div`
  position: absolute; /* CurrentThemeCircle 옆에 ThemeList 배치 */
  top: 30px; /* CurrentThemeCircle 아래로 이동 */
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 10px;
  margin-top: 10px;
  padding: 10px;
  z-index:5;
  border: ${({theme}) => `1px solid ${theme.primary}` };
  background-color: ${ ({theme}) => theme.background};
`;

// 테마 리스트의 각 아이템
const ThemeItem = styled.div`
  height: 30px;
  aspect-ratio:  1; /* 가로:세로 비율을 1:1로 유지 */
  width: auto;
  border-radius: 50%;
  background: ${(props) =>
        `linear-gradient(to right, ${props.theme.primary}, ${props.theme.background})`};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid black;
  color: black;
  font-size: 14px;
  font-weight: bold;

`;
