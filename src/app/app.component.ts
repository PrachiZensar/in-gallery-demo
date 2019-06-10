import {Component,Renderer2} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  details = [
    {
     "cleint_name": "Maria Anders",
     "activity": "In Gallery Appoitment",
     "associate": "Jack",
     "timeToGo": moment().add(10, 'minutes'),
     "location": "FLR1",
     "timeDiff": "",
    },
    {
     "cleint_name": "Francisco Chang",
     "activity": "In Gallery Appoitment",
     "associate": "Lindsey",
     "timeToGo": moment().add(15, 'minutes'),
     "location": "FLR1",
     "timeDiff": "",
    },
    {
     "cleint_name": "Roland Mendel",
     "activity": "Home Visit",
     "associate": "Kim",
     "timeToGo": moment().add(25, 'minutes'),
     "location": "ABC",
     "timeDiff": "",
    },
     {
     "cleint_name": "Helen Bennett",
     "activity": "Home Visit",
     "associate": "Hillary",
     "timeToGo": moment().add(66, 'minutes'),
     "location": "ABCD",
     "timeDiff": "",
    },
     {
     "cleint_name": "Roland Bennett",
     "activity": "In Gallery Appoitment",
     "associate": "Ryan",
     "timeToGo": moment().add(90, 'minutes'),
     "location": "ABCQ",
     "timeDiff": "",
    },
     {
     "cleint_name": "Helen Mendel",
     "activity": "Home Visit",
     "associate": "Leo",
     "timeToGo": moment().add(120, 'minutes'),
     "location": "ABC",
     "timeDiff": "",
    },
     {
     "cleint_name": "Yoshi Tannamuri",
     "activity": "Home Visit",
     "associate": "Gloria",
     "timeToGo": moment().add(4, 'hours'),
     "location": "ABC",
     "timeDiff": "",
    },
     {
     "cleint_name": "Giovanni Rovelli",
     "activity": "In Gallery Appoitment",
     "associate": "Prachi",
     "timeToGo": moment().add(4, 'hours'),
     "location": "XYZ",
     "timeDiff": "",
    },
    {
     "cleint_name": "Maria Anders",
     "activity": "In Gallery Appoitment",
     "associate": "Ved",
     "timeToGo": moment().add(5, 'hours'),
     "location": "FLR1",
     "timeDiff": "",
    },
    {
     "cleint_name": "Francisco Chang",
     "activity": "In Gallery Appoitment",
     "associate": "Priyanka",
     "timeToGo": moment().add(5, 'hours'),
     "location": "FLR1",
     "timeDiff": "",
    },
    {
     "cleint_name": "Roland Mendel",
     "activity": "Home Visit",
     "associate": "Rahul",
     "timeToGo": moment().add(6, 'hours'),
     "location": "ABC",
     "timeDiff": "",
    },
     {
     "cleint_name": "Helen Bennett",
     "activity": "Home Visit",
     "associate": "Priyanshu",
     "timeToGo": moment().add(6, 'hours'),
     "location": "ABCD",
     "timeDiff": "",
    },
     {
     "cleint_name": "Roland Bennett",
     "activity": "In Gallery Appoitment",
     "associate": "Ryan",
     "timeToGo": moment().add(7, 'hours'),
     "location": "ABCQ",
     "timeDiff": "",
    },
  ];
  associates = [];

  rowNo:any = 0;
  columnNo:any = 1;
  setTimer:any;

  addNewFormFlag:boolean=false;

  constructor(private renderer: Renderer2){}
  ngOnInit() {

    
    this.calculateTimeDiff();

    this.setTimer = setInterval(() => {
        this.calculateTimeDiff();
    }, 1000);
   
     // let onElement = this.renderer.selectRootElement('#input32');
     // onElement.focus();
    this.renderer.listen('document', 'keydown', (e) => {
      if(e.keyCode == '37' || e.keyCode == '38' || e.keyCode == '39' || e.keyCode == '40') {
        let currentId = e.target.id,
            mainStr = currentId.slice(5),
            rowArr = mainStr.split("-");

        //down arrow
        if(e.keyCode == '40' && this.rowNo < this.details.length - 1)
          this.rowNo = parseInt(rowArr[0]) + 1;
        //up arrow
        if(e.keyCode == '38' && this.rowNo != 0)
          this.rowNo = parseInt(rowArr[0]) - 1;

        //left arrow
        if(e.keyCode == '37' && this.columnNo != 1)
          this.columnNo = parseInt(rowArr[1]) - 1;

        //right arrow
        if(e.keyCode == '39' && this.columnNo != 4)
          this.columnNo = parseInt(rowArr[1]) + 1;

        let onElement = this.renderer.selectRootElement(`#input${this.rowNo}-${this.columnNo}`);

        onElement.focus();
      }
    });

    //get list of arrays for autocompletion
    this.associates = this.details.map(val => val.associate);
  }

  onFocus = (row,col) => {
    this.rowNo = row;
    this.columnNo = col;
  }

  calculateTimeDiff = () => {
    // this.details.map(notif => {
    //     let duration = moment.duration(moment(notif.timeToGo).diff()),
    //         minsToGo = duration.asMinutes();

    //     if(minsToGo < 65)
    //         notif.timeDiff = moment(notif.timeToGo).fromNow();
    //     else 
    //         notif.timeDiff = moment(notif.timeToGo).format('hh:mm A');
     
    //     return notif;
    // });
  }

  //display form row to add new apt
  addNewApt = () => {
    if(!this.addNewFormFlag)
        this.addNewFormFlag = true;
  }

  //add new apt
  onSubmit = (aptForm) => {
      console.log(aptForm);
  }
  ngOnDestroy() {
      if (this.setTimer) {
        clearInterval(this.setTimer);
      }
  }
}
