export interface FormType {
  name: string,
  description: string
}

export interface TodosType {
  _id: string;
  name?: string;
  description?: string;
  completed?: boolean;
}
