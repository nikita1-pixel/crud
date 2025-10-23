        export default function TableList() {

            const clients = [
                {
                id : 1, name : "nicky Singh", email : "Nicky.Singh@gmail.com", jon: "Developer", rate : "$500", isactive : true
            },
            {
                id : 2, name : "nicky Singh2", email : "Nicky.Singh2@gmail.com", jon: "Developer2", rate : "$400", isactive : true
            },
            {
                id : 3,  name : "nicky Singh3", email : "Nicky.Singh3@gmail.com", jon: "Developer3", rate : "$700", isactive : false
            },
        ];

            return (
                <>
                <div className="overflow-x-auto mt-10">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Job</th>
                <th>Rate</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody className="hover">
            {/* row 1 */}
            {clients.map((client)=> (
                <tr>
                <th>{client.id}</th>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.job}</td>
                <td>{client.rate}</td>
                <td>
                    <button className={`btn rounded-full w-20  ${client.isactive ? `btn-primary` : `btn-outline btn-primary`}`}>
                        {client.isactive ? 'Active' : 'Inactive'}
                    </button>
                </td>
                <td>
                    <button className=" btn btn-secondary">Update</button>
                </td>
                <td>
                    <button className=" btn btn-accent">Delete</button>
                </td>
            </tr>
                ))}
        
            </tbody>
        </table>
        </div>
                </>
            );
        }