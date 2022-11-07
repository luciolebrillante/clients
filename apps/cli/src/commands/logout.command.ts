import { AuthService } from "@bitwarden/common/abstractions/auth.service";

import { Response } from "../models/response";
import { MessageResponse } from "../models/response/message.response";

export class LogoutCommand {
  constructor(private authService: AuthService, private logoutCallback: () => Promise<void>) {}

  async run() {
    await this.logoutCallback();
    this.authService.logOut(() => {
      /* Do nothing */
    });
    const res = new MessageResponse("You have logged out.", null);
    return Response.success(res);
  }
}
