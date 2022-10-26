import request from "../utils/request";
import { Login } from "./type";

export const login = (data: Login): Promise<any> => {
  return request({
    url: "/login",
    method: "post",
    data,
  });
};
