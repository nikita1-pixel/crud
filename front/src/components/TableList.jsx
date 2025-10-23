    export default function TableList() {

        clients = [{
            name : "nicky Singh", email : "Nicky.Singh@gmail.com", jon: "Developer", rate : "$500", isactive : true
        }]

        return (
            <>
            <div className="overflow-x-auto mt-10">
    <table className="table">
        {/* head */}
        <thead>
        <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
        </tr>
        </thead>
        <tbody className="hover">
        {/* row 1 */}
        <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
        </tr>
        {/* row 2 */}
        <tr className="hover:bg-base-300">
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
        </tr>
        {/* row 3 */}
        <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
        </tr>
        </tbody>
    </table>
    </div>
            </>
        );
    }