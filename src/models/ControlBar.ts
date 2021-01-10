interface IdentifyObject {
  id: number;
}

export interface PositionItem extends IdentifyObject {
  name: string;
}

export interface AddedInputs extends IdentifyObject {
  amount: number;
}
