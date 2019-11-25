import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group } from '@syncfusion/ej2-react-grids';
import { Inject, Page, PageSettingsModel, Sort, SortSettingsModel } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Ajax } from '@syncfusion/ej2-base';

export default class App extends React.Component<{}, {}> {
  // define the array of data
  public pageSettings: PageSettingsModel = { pageSize: 6 }
  public sortSettings: SortSettingsModel = { columns: [
                          {field: 'EmployeeID', direction: 'Ascending' }
                      ] };
  private themes: string[] = ['material', 'fabric', 'bootstrap'];

  public onChange(e: any) {
        if (e && e.itemData.value) {
            const ajax: Ajax = new Ajax('http://cdn.syncfusion.com/ej2/' + e.itemData.value + '.css', 'GET', true);
            ajax.send().then((result: any) => {
              const style: HTMLCollectionOf<HTMLStyleElement> = document.getElementsByTagName('style') as HTMLCollectionOf<HTMLStyleElement>;
              style[0].innerHTML = `/*${e.itemData.value}*/` + result;
            });
          }       
  };


  public render() {
    return (
        // specifies the tag for render the DropDownList component
        <div>
      <DropDownListComponent id="ddlelement" dataSource={this.themes}  placeholder="Select a theme"  change={this.onChange} />
<br/>
<br/>
     <GridComponent id="grid" dataSource={data} allowPaging={true} pageSettings={ this.pageSettings }
            allowSorting={true} sortSettings={ this.sortSettings }>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
                <ColumnDirective field='CustomerID' width='100'/>
                <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
                <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
                <ColumnDirective field='ShipCountry' width='100'/>
            </ColumnsDirective>
            <Inject services={[Page, Sort, Filter, Group]} />
        </GridComponent>
        </div>
      
      );   
  
  }
}


ReactDOM.render(<App />, document.getElementById('sample'));