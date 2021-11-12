import React from 'react';
import { Link } from 'react-router-dom'


const Home = () => {

return (
    <div className="home-container">
    <h2>Top Accounts</h2>
    <br></br>
    <ul>
        <li>Track and coordinate engagement with external contacts</li>
    <li>Plan future activities and keep a record of past activities</li>
    <li>Add emails, meetings, events, financial activities, documents, account summaries, or objectives</li>
    </ul>
    <br></br>
    <p> Click on <Link to="/accounts">Accounts</Link> to see your list of accounts and then choose one to see more detail</p>
    
    </div>
)
}

export default Home