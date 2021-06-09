export class Alert {
  constructor(
    public readonly alertType: AlertType,
    public readonly message: string
  ) {}
}

export enum AlertType {
  SUCCESS,
  WARNING,
  DANGER,
  INFO,
}

export type Alerts = Array<Alert>;
