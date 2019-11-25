import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { GridComponent} from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import * as ReactDOM from "react-dom";


export default class App extends React.Component<{}, {}> {
  
  public render() {
    return (
       // specifies the tag for render the DropDownList component
       <div>
      <DropDownListComponent id='ddlelement' />
      <GridComponent id='grid'/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('sample'));
