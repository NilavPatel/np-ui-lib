export class NpModalConfig {
  constructor(item: any) {
    this.hasBackDrop = item.hasBackDrop === false ? false : true;
    this.backDropClass = item.backDropClass;
    this.height = item.height;
    this.width = item.width;
    this.showCloseButton = item.showCloseButton === false ? false : true;
    this.header = item.header;
    this.inputId = item.inputId;
    this.styleClass = item.styleClass;
    this.closeOnClickOutside =
      item.closeOnClickOutside === false ? false : true;
  }
  public hasBackDrop: boolean;
  public backDropClass: string;
  public height: string | number;
  public width: string | number;
  public showCloseButton: boolean;
  public header: string;
  public inputId: string;
  public styleClass: string;
  public closeOnClickOutside: boolean;
}
