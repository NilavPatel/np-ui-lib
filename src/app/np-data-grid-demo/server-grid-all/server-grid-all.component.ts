import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import {
  DataSource,
  NpDataGridComponent,
  DataTypes,
  SortDirections,
  State,
  FilterTypes,
  LoadOptions,
  Column,
  NpMenuItem,
} from "np-ui-lib";
import { DataService } from "../data.service";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-server-grid-all",
  templateUrl: "./server-grid-all.component.html",
})
export class ServerGridAllComponent implements OnInit {
  gridColumns: any[];
  gridDataSource: BehaviorSubject<DataSource>;

  toggleColumn = true;
  showFilters = true;
  isLoading = true;
  menuItems: NpMenuItem[];

  @ViewChild("actionButtonsTemplate", { static: true })
  actionButtonsTemplate: TemplateRef<any>;
  @ViewChild("summaryTemplate", { static: true })
  summaryTemplate: TemplateRef<any>;

  @ViewChild("serverSideGrid", { static: true })
  serverSideGrid: NpDataGridComponent;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.gridColumns = [
      new Column({
        dataField: "Id",
        visible: true,
        caption: "Id",
        dataType: DataTypes.Number,
        sortEnable: true,
        filterEnable: true,
        onCellClick: this.cellClicked,
      }),
      new Column({
        dataField: "FirstName",
        visible: true,
        caption: "First Name",
        dataType: DataTypes.String,
        sortEnable: true,
        filterEnable: true,
      }),
      new Column({
        dataField: "LastName",
        visible: true,
        caption: "Last Name",
        dataType: DataTypes.String,
      }),
      new Column({
        dataField: "BirthDate",
        visible: true,
        caption: "Birth Date",
        dataType: DataTypes.Date,
        sortEnable: true,
        filterEnable: true,
      }),
      new Column({
        dataField: "Age",
        visible: true,
        dataType: DataTypes.Number,
        sortEnable: true,
        filterEnable: true,
        styleClass: "np-text-danger",
        rightAlignText: true,
      }),
      new Column({
        dataField: "Active",
        visible: true,
        caption: "Is Active?",
        dataType: DataTypes.Boolean,
        filterEnable: true,
      }),
      new Column({
        visible: true,
        cellTemplate: this.actionButtonsTemplate,
        width: 50,
      }),
    ];
    this.gridDataSource = new BehaviorSubject(null);

    this.setStateForServerSideGrid();

    this.menuItems = [
      new NpMenuItem({ label: "Edit" }),
      new NpMenuItem({ label: "Delete" }),
    ];
  }

  onLoadData(options: LoadOptions) {
    this.isLoading = true;
    this.dataService.getDataUsingLoadOptions(options).subscribe((data: any) => {
      const result = new DataSource(
        data.data,
        data.total,
        { totalCount: data.total },
        options.isAllPages
      );
      this.gridDataSource.next(result);
      this.isLoading = false;
    });
  }

  cellClicked(event: any, column: any, row: any) {
    alert(
      "column " +
        column.dataField +
        " clicked. Value is " +
        row[column.dataField]
    );
  }

  onClickMenuItem($event, rowData: any) {
    if ($event.label === "Edit") {
      alert("Edit button click for row: " + rowData.Id);
    }
    if ($event.label === "Delete") {
      alert("Delete button click for row: " + rowData.Id);
    }
  }

  getSelectedRowKeys() {
    const keys = this.serverSideGrid.getSelectedRowKeys();
    alert(keys);
  }

  toggleFirstColumn() {
    this.toggleColumn = !this.toggleColumn;
    if (this.toggleColumn) {
      this.serverSideGrid.showColumnByIndex(0);
    } else {
      this.serverSideGrid.hideColumnByIndex(0);
    }
  }

  changeColumns() {
    const columns = this.serverSideGrid.getColumns();
    columns[0].sortDirection = SortDirections.Descending;
    columns[1].filterOperator = FilterTypes.StartsWith;
    columns[1].filterValue = "Philip";
    columns[2].visible = false;
    this.serverSideGrid.setColumns(columns);
  }

  setStateForServerSideGrid() {
    const columns = [
      new Column({
        dataField: "Id",
        visible: true,
        width: 100,
        caption: "Id",
        dataType: DataTypes.Number,
        sortEnable: true,
        filterEnable: true,
        onCellClick: this.cellClicked,
      }),
      new Column({
        dataField: "FirstName",
        visible: true,
        width: 150,
        caption: "First Name",
        dataType: DataTypes.String,
        sortEnable: true,
        filterEnable: true,
        sortDirection: SortDirections.Descending,
      }),
      new Column({
        dataField: "LastName",
        visible: true,
        width: 150,
        caption: "Last Name",
        dataType: DataTypes.String,
      }),
      new Column({
        dataField: "BirthDate",
        visible: true,
        width: 150,
        caption: "Birth Date",
        dataType: DataTypes.Date,
        filterEnable: true,
      }),
      new Column({
        dataField: "Age",
        visible: true,
        width: 100,
        dataType: DataTypes.Number,
        sortEnable: true,
        filterEnable: true,
        styleClass: "np-text-danger",
        filterValue: "50",
        filterOperator: FilterTypes.GreaterThan,
      }),
      new Column({
        dataField: "Active",
        visible: true,
        width: 150,
        caption: "Is Active?",
        dataType: DataTypes.Boolean,
        filterEnable: true,
      }),
      new Column({ visible: false, cellTemplate: this.actionButtonsTemplate }),
    ];
    const state = new State("Age more than 50", columns);
    this.serverSideGrid.setAllState([state]);
  }

  onInit() {
    console.log("grid initializing at" + new Date().toTimeString());
  }

  onAfterInit() {
    console.log("grid initialized at" + new Date().toTimeString());
  }

  goToPage(num) {
    this.serverSideGrid.goToPage(num);
  }

  clearFilters() {
    this.serverSideGrid.removeAllFilters();
  }

  clearSorting() {
    this.serverSideGrid.removeAllSorting();
  }

  reset() {
    this.serverSideGrid.reset();
  }

  updateFirstName() {
    const keys = this.serverSideGrid.getSelectedRowKeys();
    if (keys && keys.length > 0) {
      this.dataService.updateFirstName(keys).subscribe((data: any) => {});
    }
  }

  refresh() {
    this.serverSideGrid.refresh();
  }
}
