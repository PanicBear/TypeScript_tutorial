{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  type SuccessState = {
    result: "success";
  };

  type NetworkErrorState = {
    result: "fail";
    reason: "offline" | "server down" | "timeout";
  };

  // make expectable situations type
  type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient {
    tryConnect(): ResultState {
      // return {result : "success"}
      return { result: "fail", reason: "offline" };
    }
  }

  // if you catch error super class, there's nothing you can do except print log
  class UserService {
    constructor(private client: NetworkClient) {}
    login() {
      return this.client.tryConnect();
    }
  }

  // better catch error where you can handle it
  class App {
    constructor(private userService: UserService) {}
    run() {
      return this.userService.login();
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  console.log(app.run());
}
