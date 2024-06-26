import { envsafe, str, bool } from "envsafe";

export const env = envsafe({
  AWS_ACCESS_KEY_ID: str(),
  AWS_SECRET_ACCESS_KEY: str(),
  AWS_S3_BUCKET: str(),
  AWS_S3_REGION: str(),
  BACKUP_DATABASE_URL: str({
    desc: 'The connection string of the database to backup.'
  }),
  BACKUP_CRON_SCHEDULE: str({
    desc: 'The cron schedule to run the backup on.',
    default: '0 5 * * *',
    allowEmpty: true
  }),
  AWS_S3_ENDPOINT: str({
    desc: 'The S3 custom endpoint you want to use.',
    default: '',
    allowEmpty: true,
  }),
  RUN_ON_STARTUP: bool({
    desc: 'Run a backup on startup of this application.',
    default: false,
    allowEmpty: true,
  }),
  BACKUP_FILE_PREFIX: str({
    desc: 'Prefix to the file name.',
    default: 'backup',
  }),
  RESTART_DEPLOYMENT: bool({
    desc: 'Restart the deployment after a backup is complete.',
    default: false,
    allowEmpty: true,
  }),
  DEPLOYMENT_ID: str({
    desc: 'The deployment id to restart after a backup is complete.',
    default: '',
    allowEmpty: true,
  }),
  RAILWAY_TOKEN: str({
    desc: 'The Railway token to restart the deployment.',
    default: '',
    allowEmpty: true,
  })
})