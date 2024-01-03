import { useSelector } from "react-redux";

function AccountDetails(){
  let {balance,fullname,mobile}=useSelector((state)=>{
    return state;
  })
  return(
    <div className=" container col-4 mx-5">
    <table className=' table table-bordered '>
    <thead>
    <tr>
    <th>Balance</th>
    <th>FullName</th>
    <th>Mobile</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>{balance}</td>
    <td>{fullname}</td>
    <td>{mobile}</td>
    </tr>
    </tbody>
    </table>
    
    </div>

    
  )
}
export default AccountDetails;