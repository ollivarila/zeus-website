import { text } from '../constants'
import { Check, PowerOff } from '@mui/icons-material'
import CopyButton from './CopyButton'
import { capitalize } from '@/lib/util'
import ToggleBtn from './ToggleBtn'

export type ServerProps = {
  name: string
  description: string
  loggedIn: boolean
  status: string
  version: string
}

export default function Server({
  name,
  description,
  loggedIn,
  status,
  version,
}: ServerProps) {
  const url = 'skd.servegame.com'

  return (
    <div className="flex flex-row bg-slate-800 justify-between p-2">
      <div className="flex flex-col items-start gap-4 shadow-lg p-4 rounded-sm">
        <div className="flex items-center">
          <h2 className={text.h2}>
            {capitalize(name)} v.{version}
          </h2>
          {status === 'Running' ? (
            <Check className="text-yellow-400 ml-2" />
          ) : (
            <PowerOff className="text-red-500 ml-2" />
          )}
        </div>
        <p className="text-cyan-100 text-sm">{description}</p>
      </div>
      <div className="self-top p-1 flex flex-col gap-4">
        <CopyButton text={url} />
        {loggedIn && <ToggleBtn status={status} name={name} />}
      </div>
    </div>
  )
}
