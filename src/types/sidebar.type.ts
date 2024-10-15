import { ReactNode } from 'react';

export type TUserPath = {
    label: string;
    path?: string;
    element?: ReactNode,
    children?: TUserPath[]
  }
  
export type TSidebarItem = {
      key: string;
      label: ReactNode;
      children?: TSidebarItem[] //children?: {key: string;, label: ReactNode;}[]
  }