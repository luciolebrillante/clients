import { LogLevelType } from "@bitwarden/common/enums/logLevelType";
import { ConsoleLogService } from "@bitwarden/common/services/consoleLog.service";

export class CliConsoleLogService extends ConsoleLogService {
  constructor(isDev: boolean, filter: (level: LogLevelType) => boolean = null) {
    super(isDev, filter);
  }

  write(level: LogLevelType, message: string) {
    if (this.filter != null && this.filter(level)) {
      return;
    }

    if (process.env.BW_RESPONSE === "true") {
      // eslint-disable-next-line
      console.error(message);
      return;
    }

    super.write(level, message);
  }
}
