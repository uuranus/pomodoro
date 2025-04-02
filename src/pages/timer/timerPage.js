import { Headline } from "../../components/headline.js";
import { ThemeBox } from "../../components/ThemeBox.js";
import { TimeLine } from "../../components/timeline.js";
import * as S from "./styles.js";

export const TimerPage = () => {
  return (
    <S.Container>
      <S.TimerBox>
        <Headline>Pomodoro Timer</Headline>
        <S.TimerContent>
          <S.TimerText>16:35</S.TimerText>
          {/* <S.Divider/> */}
          <S.ModeText>Focus</S.ModeText>
        </S.TimerContent>
      </S.TimerBox>

      <S.TimeLineBox>
        <Headline>TimeLine</Headline>
        <S.TimeLineContent>
          <TimeLine text="Focus" minutes={25} />

          <TimeLine text="Break" minutes={5} />

          <TimeLine text="Focus" minutes={25} />

          <TimeLine text="Break" minutes={5} />

          <TimeLine text="Focus" minutes={25} />

          <TimeLine text="Break" minutes={5} />

          <TimeLine text="Focus" minutes={25} />

          <TimeLine text="Long Break" minutes={40} />
        </S.TimeLineContent>
      </S.TimeLineBox>
      <ThemeBox />
    </S.Container>
  );
};
