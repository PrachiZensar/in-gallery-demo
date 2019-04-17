import {Component,Renderer2} from '@angular/core';

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
     "location": "FLR1"
    },
    {
     "cleint_name": "Francisco Chang",
     "activity": "In Gallery Appoitment",
     "associate": "Lindsey",
     "location": "FLR1"
    },
    {
     "cleint_name": "Roland Mendel",
     "activity": "Home Visit",
     "associate": "Kim",
     "location": "ABC"
    },
     {
     "cleint_name": "Helen Bennett",
     "activity": "Home Visit",
     "associate": "Hillary",
     "location": "ABCD"
    },
     {
     "cleint_name": "Roland Bennett",
     "activity": "In Gallery Appoitment",
     "associate": "Ryan",
     "location": "ABCQ"
    },
     {
     "cleint_name": "Helen Mendel",
     "activity": "Home Visit",
     "associate": "Leo",
     "location": "ABC"
    },
     {
     "cleint_name": "Yoshi Tannamuri",
     "activity": "Home Visit",
     "associate": "Gloria",
     "location": "ABC"
    },
     {
     "cleint_name": "Giovanni Rovelli",
     "activity": "In Gallery Appoitment",
     "associate": "Kim",
     "location": "XYZ"
    },
    {
     "cleint_name": "Maria Anders",
     "activity": "In Gallery Appoitment",
     "associate": "Jack",
     "location": "FLR1"
    },
    {
     "cleint_name": "Francisco Chang",
     "activity": "In Gallery Appoitment",
     "associate": "Lindsey",
     "location": "FLR1"
    },
    {
     "cleint_name": "Roland Mendel",
     "activity": "Home Visit",
     "associate": "Kim",
     "location": "ABC"
    },
     {
     "cleint_name": "Helen Bennett",
     "activity": "Home Visit",
     "associate": "Hillary",
     "location": "ABCD"
    },
     {
     "cleint_name": "Roland Bennett",
     "activity": "In Gallery Appoitment",
     "associate": "Ryan",
     "location": "ABCQ"
    },
  ];

  rowNo:any = 0;
  columnNo:any = 1;

  constructor(private renderer: Renderer2){}
  ngOnInit() {
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

    
  }

  onFocus = (row,col) => {
    this.rowNo = row;
    this.columnNo = col;
  }
}
