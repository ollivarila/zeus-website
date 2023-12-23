import Appear from '@/components/Appear'
import Server, { ServerProps } from '@/components/Server'
import Slide from '@/components/Slide'

const servers: ServerProps[] = [
  {
    name: 'Minecraft',
    description: 'A Minecraft server',
  },
  {
    name: 'CS2',
    description: 'CS2 surf server',
  },
  {
    name: 'Factorio',
    description: 'Modded factorio server',
  },
  {
    name: 'Factorio',
    description: 'Modded factorio server',
  },
  {
    name: 'Factorio',
    description: 'Modded factorio server',
  },
]

export default function Home() {
  return (
    <main className="w-full">
      <div className="flex items-center mt-10 flex-col p-20 pt-0 gap-4">
        <Appear delay={500}>
          <Slide delay={400}>
            <h1 className="text-8xl text-cyan-100">Zeus⚡</h1>
          </Slide>
        </Appear>
        <div>
          <Appear delay={1000}>
            <p className="text-cyan-100 mb-2">Game servers:</p>
          </Appear>
          <div className="grid lg:grid-cols-3 gap-2 md:grid-cols-2">
            {servers.map((server, i) => (
              <Appear delay={1000 + 200 * i} key={server.name + i}>
                <Server {...server} />
              </Appear>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
