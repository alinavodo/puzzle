export interface BaseInterfaces {
  tag: string;
  classNames?: string[];
  textContent?: string;
  elemType?: string;
  callback?: (event: Event) => void;
}
