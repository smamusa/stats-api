export default class BadgeData {
  constructor(
    label: string,
    message: string,
    color: string,
    labelColor: string,
    schemaVersion: number = 1
  ) {
    this.schemaVersion = schemaVersion;
    this.label = label;
    this.message = message;
    this.labelColor = labelColor;
    this.color = color;
  }

  readonly schemaVersion: number;
  readonly label: string;
  readonly message: string;
  readonly labelColor: string;
  readonly color: string;
}
