import React, { useState } from "react";
// import "react-datepicker/dist/react-datepicker.css";
import './Profile.scss';
const Profile=()=>{
    const [date,setDate]=useState('');
    const loggeduser=JSON.parse(localStorage.getItem('user'));
    return(
        <div className="profile">
            <p className="header">Please complete the information below</p>
            <h3>Profile</h3>
            <div className="information">
                <h2>*Information</h2>
                <img src="https://i0.wp.com/1.bp.blogspot.com/-ucVL77xIkEY/X-BBSqbLNDI/AAAAAAAHcyA/AgEAuYpbcyMrr732KS8sG7WFcN5XnJ0jgCLcBGAsYHQ/s1600/MAD_branding_2.jpg?ssl=1" alt=''/>
            </div>
            <div className="data">
                <h4>Name / Nick Name</h4>
                <p className="name">{loggeduser.name} {loggeduser.surname}</p>
                <h4>Email</h4>
                <p className="email">{loggeduser.email}</p>
                <div className="birthday">
                <h4>Birthday (for special gift)</h4>
                    <select className="month" id='month' name="month" value={date} onChange={(e)=>setDate(e.target.value)}>
                    <option>Month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                    </select>
                    <select className="day" id='day' name='day' value={date} onChange={(e)=>setDate(e.target.value)}>
                        <option>Day</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                    </select>
                    <input className="year" type='number'placeholder="Year"></input>
                </div>
                <h4>Gender</h4>
                <p className="gender">{loggeduser.gender}</p><br></br>
                <h4>Phone number</h4>
                <input type='number'placeholder="Phone number" onChange={(e)=>setDate(e.target.value)}></input>
            </div>
        </div>
    )
}
export default Profile;