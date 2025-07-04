export interface EyeCatch {
  url: string;
  width: number;
  height: number;
}

export interface Work {
  id: string;
  title?: string;
  eyecatch?: EyeCatch;
}
