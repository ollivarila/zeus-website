import { text } from '../constants'
import { Check, PowerOff } from '@mui/icons-material'
import CopyButton from './CopyButton'

export type ServerProps = {
  name: string
  description: string
}

export default function Server({ name, description }: ServerProps) {
  // TODO get status
  const status = 'online'
  const gameVersion = '1.17.1'
  const url = 'skd.servegame.com'
  return (
    <div className="flex flex-row bg-slate-800 justify-between">
      <div className="flex flex-col items-start gap-4 shadow-lg p-4 rounded-sm">
        <div className="flex items-center">
          <h2 className={text.h2}>
            {name} {gameVersion}
          </h2>
          {status === 'online' ? (
            <Check className="text-yellow-400 ml-2" />
          ) : (
            <PowerOff className="text-red-500 ml-2" />
          )}
        </div>
        <p className="text-cyan-100 text-sm">{description}</p>
      </div>
      <div className="self-top p-1">
        <CopyButton text={url} />
      </div>
    </div>
  )
}
