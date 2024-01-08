import Appear from './Appear'
import Slide from './Slide'

export default function Title() {
  return (
    <Appear delay={100}>
      <Slide delay={169}>
        <h1 className="text-8xl text-cyan-100 mb-32">Zeus⚡</h1>
      </Slide>
    </Appear>
  )
}
