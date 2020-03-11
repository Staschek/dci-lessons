import React, {Component} from 'react'

class Calender extends Component {
  today= new Date();
  state={
      currentDate : this.today.getDate(),
 currentMonth : this.today.getMonth(),
 currentYear : this.today.getFullYear()
  }

    componentDidMount(){
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");
let monthAndYear = document.getElementById("monthAndYear");
let tbl = document.getElementById("calendar-body"); // body of the calendar
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

tbl.onclick = disableDate;

//console.log('this.state.currentMonth', this.state.currentMonth)

function disableDate(e){
    let cell = e.target.closest("td")
    if(cell.classList.contains("bg-danger")){
        alert('Spast, das ist schon rot')
    }else{
        cell.classList.add("bg-danger");
    }
}
 const showCalendar = (month, year) => {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();


    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay-1) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                if (date === this.state.currentDate && year === this.state.currentYear && month === this.state.currentMonth) {
                    cell.classList.add("bg-info");
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }
        }
        tbl.appendChild(row); // appending each row into calendar body.
    }
}
showCalendar(this.state.currentMonth, this.state.currentYear);

    }

    componentDidUpdate(){
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");
let tbl = document.getElementById("calendar-body"); // body of the calendar
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthAndYear = document.getElementById("monthAndYear");

tbl.onclick = disableDate;


function disableDate(e) {
    let cell = e.target.closest("td")
    console.log(tbl)
    if(cell.classList.contains("bg-danger")){
        alert('Spast, das ist schon rot')
    }else{
        cell.classList.add("bg-danger");
    }
}

 const next = () => {
    this.state.currentYear = (this.state.currentMonth === 11) ? this.state.currentYear + 1 : this.state.currentYear;
    this.state.currentMonth = (this.state.currentMonth + 1) % 12;
    this.showCalendar(this.state.currentMonth, this.state.currentYear);
}

 const previous = () => {
    this.state.currentYear = (this.state.currentMonth === 0) ? this.state.currentYear - 1 : this.state.currentYear;
    this.state.currentMonth = (this.state.currentMonth === 0) ? 11 : this.state.currentMonth - 1;
    this.showCalendar(this.state.currentMonth, this.state.currentYear);
}

 const jump = () => {
    this.state.currentYear = parseInt(selectYear.value);
    this.state.currentMonth = parseInt(selectMonth.value);
    this.showCalendar(this.state.currentMonth, this.state.currentYear);
}

 const showCalendar = (month, year) => {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();


    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay-1) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                if (date === this.state.currentDate && year === this.state.currentYear && month === this.state.currentMonth) {
                    cell.classList.add("bg-info");
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }
        }
        tbl.appendChild(row); // appending each row into calendar body.
    }
}
this.showCalendar(this.state.currentMonth, this.state.currentYear);

    }

render(){
        return (
          <div className='container col-sm-10 mt-5'>
      <h1>Calendar</h1>
      <div className='card'>
        <h3 className='card-header' id='monthAndYear'></h3>
        <table className='table table-bordered table-responsive-sm' id='calendar'>
          <thead>
            <tr>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
              <th>Sun</th>
            </tr>
          </thead>

          <tbody id='calendar-body'></tbody>
        </table>

        <div className='form-inline justify-content-center'>
          <button
            className='btn btn-outline-info col-sm-4'
            id='previous'
             onClick={() => {this.previous()}}
          >
            Previous
          </button>

          <button
            className='btn btn-outline-info col-sm-4 align-self-end'
            id='next'
            onClick={() =>{this.next()}}
          >
            Next
          </button>
        </div>
        <br />
        <form className='form-inline justify-content-center pb-3'>
          <label className='lead mr-2 ml-2' htmlFor='month'>
            Date:{' '}
          </label>
          <select
            className='form-control col-sm-4'
            name='month'
            id='month'
            onChange={() => {this.jump()}}
          >
            <option value='0'>January</option>
            <option value={1}>February</option>
            <option value={2}>March</option>
            <option value={3}>April</option>
            <option value={4}>May</option>
            <option value={5}>June</option>
            <option value={6}>July</option>
            <option value={7}>August</option>
            <option value={8}>September</option>
            <option value={9}>October</option>
            <option value={10}>November</option>
            <option value={11}>December</option>
          </select>

          <label htmlFor='year'></label>
          <select
            className='form-control col-sm-4'
            name='year'
            id='year'
            onChange={() => {this.jump()}}
          >
            <option value={1990}>1990</option>
            <option value={1991}>1991</option>
            <option value={1992}>1992</option>
            <option value={1993}>1993</option>
            <option value={1994}>1994</option>
            <option value={1995}>1995</option>
            <option value={1996}>1996</option>
            <option value={1997}>1997</option>
            <option value={1998}>1998</option>
            <option value={1999}>1999</option>
            <option value={2000}>2000</option>
            <option value={2001}>2001</option>
            <option value={2002}>2002</option>
            <option value={2003}>2003</option>
            <option value={2004}>2004</option>
            <option value={2005}>2005</option>
            <option value={2006}>2006</option>
            <option value={2007}>2007</option>
            <option value={2008}>2008</option>
            <option value={2009}>2009</option>
            <option value={2010}>2010</option>
            <option value={2011}>2011</option>
            <option value={2012}>2012</option>
            <option value={2013}>2013</option>
            <option value={2014}>2014</option>
            <option value={2015}>2015</option>
            <option value={2016}>2016</option>
            <option value={2017}>2017</option>
            <option value={2018}>2018</option>
            <option value={2019}>2019</option>
            <option value={2020}>2020</option>
            <option value={2021}>2021</option>
            <option value={2022}>2022</option>
            <option value={2023}>2023</option>
            <option value={2024}>2024</option>
            <option value={2025}>2025</option>
            <option value={2026}>2026</option>
            <option value={2027}>2027</option>
            <option value={2028}>2028</option>
            <option value={2029}>2029</option>
            <option value={2030}>2030</option>
          </select>
        </form>
      </div>
    </div>

        )
    
}
}

export default Calender
