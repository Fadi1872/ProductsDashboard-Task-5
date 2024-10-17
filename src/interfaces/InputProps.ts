import { Type } from "../enums/Type";

export interface InputProps {
    type: Type;
    placeholder: string;
    name: string;
    id?: string;
    set?: any;
    state?: any
  }