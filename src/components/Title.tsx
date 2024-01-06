import Appear from "./Appear";
import Slide from "./Slide";

export default function Title() {
  return (
    <Appear delay={500}>
      <Slide delay={400}>
        <h1 className="text-8xl text-cyan-100">Zeus⚡</h1>
      </Slide>
    </Appear>
  );
}
