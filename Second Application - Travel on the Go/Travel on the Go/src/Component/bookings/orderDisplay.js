import React from 'react';

const BookingDisplay = (props) => {
 let ticketname=sessionStorage.getItem('ticketname')
    const renderTable = ({orderData}) => {
        if(orderData){
            return orderData.map((item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.hotel_name}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>Rs.{item.cost}</td>                       
                        <td>{item.status}</td>
                        <td>{item.bank_name}</td>
                    </tr>
                )
            } )
        }
    }

    return(
        <div className="container-fluid" style={{marginTop:'5%',padding:'2%',fontFamily:'georgia'}}>
            <center><h3>Your Bookings</h3></center>
            <br/>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>TicketId</th>
                        <th>TicketName</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Cost</th>                        
                        <th>Status</th>
                        <th>BankName</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )
}

export default BookingDisplay