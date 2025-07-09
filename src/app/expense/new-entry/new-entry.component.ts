import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent {
    expenseForm=new FormGroup({
      title:new FormControl('',[Validators.required]),
      amount:new FormControl('',[Validators.required]),
      date:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required])
    })

    onSubmit(){
      if(this.expenseForm.valid){
        console.log("Expense submitted",this.expenseForm.value)
        alert("Expense Submitted")
        // this.expenseForm.reset()
      }
      else{
        alert("please fill all the fields correctly")
      }
    }

}
