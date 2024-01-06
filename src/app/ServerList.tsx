import { servers } from "@/constants";
import Appear from "@/components/Appear";
import Server from "@/components/Server";

export default function ServerList() {
  return (
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
  );
}
