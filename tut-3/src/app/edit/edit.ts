import { Component } from '@angular/core';
import { canComponentdeactivate } from '../Gaurd/editgaurd-guard';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  imports: [FormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class Edit implements canComponentdeactivate{
  
  save:boolean = false;

  saveForm(){
    this.save = true;
  }

  myname = "";

  candeactivate(){
    if(!this.save){
      return confirm("Data is not saved are you sure do you want to leave.");
    }

    return true;
  }
}
