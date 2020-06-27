import { createLogger, transports } from 'winston'

const { Console } = transports

const Logger = createLogger({
  level: 'info',
  defaultMeta: {
    projectLabel: 'Eligibility Worker'
  },
  exitOnError: false,
  transports: [
    new Console()
  ]
})

export {
  Logger
}
