import { httpClient } from "./src/constants";

export const getRoomChats = async obj => {
  let response = await httpClient("chats", "POST", obj);
  // console.warn("response", response);
  return response;
};
