import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles: [`
  .textcolor{
    color: white;
}
  `]
})
export class DatabindingComponent implements OnInit {

  show:boolean = true;
  username = '';
  showparagrapgh :boolean = true;
  name : any = 'ved'
  data: any = [];
  constructor() { }

  ngOnInit(): void {
    
  }

 
reset(){
this.username = '';
 this.show = true;
}

checkval(event){
  console.log('valu',this.show ,event.target.value);
  if(event.target.value == ''){
    this.show = true;
  }else{
    this.show = false;
  }
    

}

adddata(){

  this.showparagrapgh = !this.showparagrapgh;
    let timestamp =  new Date().getTime(); 

    this.data.push(timestamp);
console.log(this.data ,'current timestamp');

}



}
