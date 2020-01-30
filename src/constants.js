//dev
export const API_URL =
  "https://test-app3117-accountable-wombat-hx.eu-gb.mybluemix.net/";

// local
// export const API_URL = "http://localhost:8080/";

export const SOCKET_PATHS = {
  CONNECT: "CONNECT_BOT",
  BOT_RESPONSE: "BOT_RESPONSE",
  CONNECT_ROOMS: "CONNECT_ROOMS",
  GET_ROOMS: "GET_ROOMS",
  NEW_ROOMS: "NEW_ROOMS"
};

export const IF_USER_IS = {
  user: "USER",
  watson: "WATSON",
  agent: "AGENT"
};

export const USER_ABB = {
  [IF_USER_IS.agent]: "AG",
  [IF_USER_IS.user]: "US",
  [IF_USER_IS.watson]: "WA"
};

export const httpClient = async (
  url,
  type,
  obj = undefined,
  contentType = "application/json; charset=utf-8"
) => {
  try {
    type = type.toUpperCase();
    if (type.toLowerCase() === "get" && obj) {
      var params = Object.keys(obj)
        .map(function(key) {
          return key + "=" + obj[key];
        })
        .join("&");
      url += "?" + params;
      obj = undefined;
    }
    let apiUrl = API_URL;
    let res = await fetch(apiUrl + url, {
      method: type.toUpperCase(),
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": contentType
        // at: getToken()
      }
    });
    return await res.json();
  } catch (error) {
    console.group(`API ${type} Error`);
    console.error(error);
    console.groupEnd();
    throw error;
  }
};
