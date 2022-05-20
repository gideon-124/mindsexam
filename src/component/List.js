import React,{useState} from 'react'
import {useNavigate,Link} from "react-router-dom"

const List = () => {

    const navigate = useNavigate();
    const datalist=localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data"))
      : [];
    const [data, setData] = useState(datalist);

    const handleDelete = (index) => {
      const localdata = JSON.parse(localStorage.getItem("data"));
      const update = localdata.filter((itm, ind) => ind !== index);
      localStorage.setItem("data", JSON.stringify(update));
      setData(update);
    };
  return (
    <div className="container my-4">
      <main>
        <div className="py-5">
          <h2>
            Candidates List
            <Link to="/add" className="btn btn-primary float-end">
              Add Candidate
            </Link>
          </h2>
        </div>

        <div className="row">
          <div className="col-12 ms-auto me-auto">
            <div className="card">
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Number of Skills</th>
                      <th>Total Work Experience (in months)</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((details, index) => {
                      const duration = details.prof_info.exp.map(
                        (exp) => exp.duration
                      );

                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{details.firstName + " " + details.lastName}</td>
                          <td>{details.email}</td>
                          <td>{details.prof_info.skills.length}</td>
                          <td>
                            {duration.reduce((month, value) => month + value)}
                          </td>
                          <td>
                            <span
                              style={{ color: "green", cursor: "pointer" }}
                              onClick={() =>
                                navigate("/edit", {
                                  state: { data: details, index: index },
                                })
                              }
                            >
                              Edit
                            </span>
                            <Link
                              to=""
                              className="text-danger ms-2"
                              onClick={() => handleDelete(index)}
                            >
                              Delete
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  {/* <tr>
                                        <td>1</td>
                                        <td>Abhijit Borade</td>
                                        <td>abhijit@angularminds.com</td>
                                        <td>5</td>
                                        <td>60</td>
                                        <td>
                                            <span>Edit</span>
                                            <span className="text-danger ms-2">Delete</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Abhijit Borade</td>
                                        <td>abhijit@angularminds.com</td>
                                        <td>5</td>
                                        <td>60</td>
                                        <td>
                                            <span>Edit</span>
                                            <span className="text-danger ms-2">Delete</span>
                                        </td>
                                    </tr> */}
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default List