export default function Navbar({ onOpen, onSearch }) {

    const handleSearchChange = (event) =>{
        onSearch(event.target.value);//call the onSearch callback with the input value
    }

    return (
        <>
           <div className="navbar bg-base-100 p-4">
            <div className="navbar-start">
                {/* -- drop down <div></div> */}
                {/* ++ logo */}
                <a className="btn btn-ghost text-xl">Client</a>
                {/* ++ search input */}
                
            </div>
            <div className="navbar-center">
                <div className="form-control">
                    {/* w-48 */}
                    <input type="text" placeholder="Search" onChange={handleSearchChange} className=" input input-bordered w-48 md:w-auto" />
                </div>
                
            </div>
            <div className="navbar-end">

                <button onClick={onOpen} className="btn btn-primary">Add Client</button>

            </div>
            </div>
</>
    )
}