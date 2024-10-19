import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};


export type TResponse<T> = {
    data?: T;
    meta?: TMeta;
    success: boolean;
    message: string;
}

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;


export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
}