import { ServerProps } from "./components/Server";

export const text = {
  h1: "text-8xl text-cyan-100",
  h2: "text-6xl text-cyan-100",
  p: "text-cyan-100",
} as const;

export const servers: ServerProps[] = [
  {
    name: "Minecraft",
    description: "A Minecraft server",
  },
  {
    name: "CS2",
    description: "CS2 surf server",
  },
  {
    name: "Factorio",
    description: "Modded factorio server",
  },
] as const;
