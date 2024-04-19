import { CronJob } from "cron";
import { backup } from "./backup";
import { restartDeployment } from "./deployment";
import { env } from "./env";

console.log("NodeJS Version: " + process.version);

const tryBackup = async () => {
  try {
    await backup();
  } catch (error) {
    console.error("Error while running backup: ", error);
  }
}

const tryRestartDeployment = async () => {
  try {
    if (env.RESTART_DEPLOYMENT) {
      await restartDeployment();
    }
  } catch (error) {
    console.error("Error while restarting deployment", error);
  }
}

const job = new CronJob(env.BACKUP_CRON_SCHEDULE, async () => {
  await tryBackup();
  await tryRestartDeployment();
});

if (env.RUN_ON_STARTUP) {
  console.log("Running on start backup...");

  tryBackup();
}

job.start();

console.log("Backup cron scheduled...");