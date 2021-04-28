import { Component, OnInit, ViewChild } from "@angular/core";
import {
  DataSource,
  DataTypes,
  NpDataGridComponent,
  State,
  Column,
  FilterTypes,
  SortDirections,
} from "np-ui-lib";
import { DataService } from "../data.service";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-state-management-grid",
  templateUrl: "./state-management-grid.component.html",
})
export class StateManagementGridComponent implements OnInit {
  gridColumns: any[];
  isReadOnlyStates = false;
  gridDataSource: BehaviorSubject<DataSource> = new BehaviorSubject(null);
  @ViewChild("stateManagementGrid", { static: true })
  stateManagementGrid: NpDataGridComponent;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.gridColumns = [
      new Column({
        dataField: "Id",
        visible: true,
        dataType: DataTypes.Number,
        sortEnable: true,
        filterEnable: true,
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
        sortEnable: true,
        filterEnable: true,
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
      }),
      new Column({
        dataField: "Active",
        visible: true,
        caption: "Is Active?",
        dataType: DataTypes.Boolean,
        sortEnable: true,
        filterEnable: true,
      }),
    ];

    this.dataService.getAll().subscribe((data: any) => {
      const dataSource = new DataSource(data, 0, { totalCount: 10000 });
      this.gridDataSource.next(dataSource);
    });
  }

  onStatesUpdate(event) {
    console.log(event);
    localStorage.setItem(
      "statemanagementgrid",
      JSON.stringify(this.stateManagementGrid.getAllState())
    );
  }

  onInitDataGrid() {
    const states = localStorage.getItem("statemanagementgrid");
    if (states) {
      this.stateManagementGrid.setAllState(JSON.parse(states));
    } else {
      const columns = [
        new Column({
          dataField: "Id",
          visible: false,
          dataType: DataTypes.Number,
          sortEnable: true,
          filterEnable: true,
        }),
        new Column({
          dataField: "FirstName",
          visible: true,
          caption: "First Name",
          dataType: DataTypes.String,
          sortEnable: true,
          filterEnable: true,
          sortDirection: SortDirections.Ascending,
        }),
        new Column({
          dataField: "LastName",
          visible: true,
          caption: "Last Name",
          dataType: DataTypes.String,
          sortEnable: true,
          filterEnable: true,
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
          filterOperator: FilterTypes.GreaterThan,
          filterValue: "40",
        }),
        new Column({
          dataField: "Active",
          visible: true,
          caption: "Is Active?",
          dataType: DataTypes.Boolean,
          sortEnable: true,
          filterEnable: true,
        }),
      ];

      const state = new State("Age more than 40", columns);
      this.stateManagementGrid.setAllState([state]);
    }
  }

  loadStateByName() {
    this.stateManagementGrid.loadStateByName("Age more than 40");
  }
}
