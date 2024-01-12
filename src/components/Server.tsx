import { text } from '../constants'
import { Check, PowerOff } from '@mui/icons-material'
import CopyButton from './CopyButton'
import { capitalize } from '@/lib/util'
import ToggleBtn from './ToggleBtn'
import config from '@/lib/config'

export type ServerProps = {
  name: string
  description: string
  loggedIn: boolean
  status: string
  version: string
  port: number
}

export default function Server({
  name,
  description,
  loggedIn,
  status,
  version,
  port,
}: ServerProps) {
  const url = `${config.PROD_URL}:${port}`

  return (
    <div className="flex flex-row bg-slate-800 justify-between p-2 shadow-md rounded-md">
      <div className="flex flex-col items-start gap-4 p-4">
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
