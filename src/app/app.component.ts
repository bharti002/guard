import { Component, Inject } from '@angular/core';
//mport { HttpClient } from 'angular/common/http';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject (MyserviceService) public ht){
    this.funGetData();
  }
  empname;
  empaddress;
  empmobile;
  empsalary;
  var_data;

  funinsert(){
    var Obj={EmpName:this.empname,EmpAddress:this.empaddress,EmpMobile:this.empmobile,EmpSalary:this.empsalary}
    this.ht.Fun_insert(Obj).subscribe(dt=>{
      alert(dt.result);
      this.funGetData();
      

    })
  }
  funGetData(){
    this.ht.fun_get().subscribe(dt=>{
      this.var_data=dt
    })
  }
  selectdata;
  temp=0;
  funEdit(seldata){
    this.temp=seldata._id;
    this.selectdata=seldata;
    console.log(this.selectdata)


  }
loadtmp: boolean=false;
  funmodify(){
    var oldobj={_id:this.selectdata._id}
    var newobj={$set:{_id:this.selectdata._id,
      EmpName:this.selectdata.EmpName,
      EmpAddress:this.selectdata.EmpAddress,
      EmpMobile:this.selectdata.EmpMobile,
      EmpSalary:this.selectdata.EmpSalary  }}
      this.ht.funUpdateData([oldobj,newobj]).subscribe(dt=>{
        alert(dt.result)
        this.temp=0;
        this.funGetData()
      })


  }


}
