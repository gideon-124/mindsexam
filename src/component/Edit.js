import React, { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const location=useLocation();
  // console.log(location.state.data)
  const [details, setDetails] = useState(location.state.data);
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(details);
      const data = localStorage.getItem("data")
        ? JSON.parse(localStorage.getItem("data"))
        : [];
             const update = data.map((data, ind) =>
               ind === location.state.index ? details : data
             );
             localStorage.setItem("data", JSON.stringify(update));
             navigate("/");
    
  };
  const skills = (value) => {
    setDetails({
      ...details,
      prof_info: {
        ...details.prof_info,
        skills: details.prof_info.skills.includes(value)
          ? details.prof_info.skills.filter((val) => val !== value)
          : [...details.prof_info.skills, value],
      },
    });
  };
  const addexperience = () => {
    setDetails({
      ...details,
      prof_info: {
        ...details.prof_info,
        exp: [
          ...details.prof_info.exp,
          {
            company: "",
            duration: null,
            responsibility: "",
          },
        ],
      },
    });
  };
  const remove = (index) => {
    setDetails({
      ...details,
      prof_info: {
        ...details.prof_info,
        exp: details.prof_info.exp.filter((exp, ind) => ind !== index),
      },
    });
  };
  return (
    <div className="container my-4">
      <main>
        <div className="py-5 text-center">
          <h2>Add Candidate</h2>
        </div>
        <form onSubmit={handlesubmit} className="was-validated">
          <div className="row g-5">
            <div className="col-md-7 col-lg-8 ms-auto me-auto">
              <h4 className="mb-3">Basic Info</h4>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label className="form-label">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={details.firstName}
                    onChange={(e) =>
                      setDetails({ ...details, firstName: e.target.value })
                    }
                    required
                  />
                  <div className="invalid-feedback">Please enter firstName</div>
                </div>

                <div className="col-sm-6">
                  <label className="form-label">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={details.lastName}
                    onChange={(e) =>
                      setDetails({ ...details, lastName: e.target.value })
                    }
                    required
                  />
                  <div className="invalid-feedback">Please enter lastName</div>
                </div>

                <div className="col-12">
                  <label className="form-label">Gender</label>
                  <div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        value="male"
                        checked={details.gender === "male"}
                        onChange={(e) =>
                          setDetails({ ...details, gender: e.target.value })
                        }
                      />
                      <label className="form-check-label">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        value="female"
                        checked={details.gender === "female"}
                        onChange={(e) =>
                          setDetails({ ...details, gender: e.target.value })
                        }
                      />
                      <label className="form-check-label">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        value="other"
                        checked={details.gender === "other"}
                        onChange={(e) =>
                          setDetails({ ...details, gender: e.target.value })
                        }
                      />
                      <label className="form-check-label">Other</label>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="you@example.com"
                    value={details.email}
                    onChange={(e) =>
                      setDetails({ ...details, email: e.target.value })
                    }
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter valid email
                  </div>
                </div>

                <div className="col-12">
                  <label className="form-label">Address</label>
                  <textarea
                    className="form-control"
                    placeholder="1234 Main St"
                    value={details.Address}
                    onChange={(e) =>
                      setDetails({ ...details, Address: e.target.value })
                    }
                    required
                  ></textarea>
                  <div className="invalid-feedback">Please enter Address</div>
                </div>

                <div className="col-md-5">
                  <label className="form-label">Country</label>
                  <select
                    className="form-select"
                    defaultValue={details.country}
                    onChange={(e) =>
                      setDetails({ ...details, country: e.target.value })
                    }
                    required
                  >
                    <option value="">Choose...</option>
                    <option>India</option>
                    <option>United States</option>
                  </select>
                  <div className="invalid-feedback">select country</div>
                </div>

                <div className="col-md-4">
                  <label className="form-label">State</label>
                  <select
                    className="form-select"
                    defaultValue={details.state}
                    onChange={(e) =>
                      setDetails({ ...details, state: e.target.value })
                    }
                    required
                  >
                    <option value="">Choose...</option>
                    <option>Maharashtra</option>
                    <option>Karnataka</option>
                  </select>
                  <div className="invalid-feedback">select state</div>
                </div>

                <div className="col-md-3">
                  <label className="form-label">Pin / Zip</label>
                  <input
                    type="text"
                    className="form-control"
                    value={details.pincode}
                    onChange={(e) =>
                      setDetails({ ...details, pincode: e.target.value })
                    }
                    required
                  />
                  <div className="invalid-feedback">Please enter pincode</div>
                </div>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Professional Info</h4>

              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label">
                    Choose your skills
                    <span className="small text-muted">(min 3 skills)</span>
                  </label>
                  <div className="mb-3">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Angular"
                        checked={details.prof_info.skills.includes("Angular")}
                        onChange={(e) => skills(e.target.value)}
                        
                      />
                      <label className="form-check-label">Angular</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="React"
                        checked={details.prof_info.skills.includes("React")}
                        onChange={(e) => skills(e.target.value)}
                        
                      />
                      <label className="form-check-label">React</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Node.JS"
                        checked={details.prof_info.skills.includes("Node.JS")}
                        onChange={(e) => skills(e.target.value)}
                        
                      />
                      <label className="form-check-label">Node.JS</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="JavaScript"
                        checked={details.prof_info.skills.includes(
                          "JavaScript"
                        )}
                        
                        onChange={(e) => skills(e.target.value)}
                      />
                      <label className="form-check-label">JavaScript</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Flutter"
                        checked={details.prof_info.skills.includes("Flutter")}
                        onChange={(e) => skills(e.target.value)}
                      />
                      <label className="form-check-label">Flutter</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Java"
                        checked={details.prof_info.skills.includes("Java")}
                        onChange={(e) => skills(e.target.value)}
                      />
                      <label className="form-check-label">Java</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row gy-3">
                <div className="col-12">
                  <label className="form-label">
                    <strong>
                      Experience
                      <span className="small text-muted">
                        (min 2, max 5 items)
                      </span>
                    </strong>
                  </label>
                  {details.prof_info.exp.map((ex, index) => (
                    <div key={ex.id} className="card mx-3 mt-3">
                      <div className="card-body">
                        <h6 className="card-title text-muted mb-3">
                          Experience #{index + 1}
                          <span
                            href="#"
                            className="float-end text-danger fw-normal"
                            onClick={() => remove(index)}
                          >
                            Remove
                          </span>
                        </h6>
                        <div className="row g-3">
                          <div className="col-6">
                            <label className="form-label">Company Name</label>
                            <input
                              type="text"
                              className="form-control"
                              value={ex.company}
                              onChange={(e) =>
                                setDetails({
                                  ...details,
                                  prof_info: {
                                    ...details.prof_info,
                                    exp: details.prof_info.exp.map(
                                      (expe, ind) =>
                                        index === ind
                                          ? {
                                              ...expe,
                                              company: e.target.value,
                                            }
                                          : expe
                                    ),
                                  },
                                })
                              }
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter company name
                            </div>
                          </div>
                          <div className="col-6">
                            <label className="form-label">
                              Duration{" "}
                              <span className="text-muted">(in months)</span>
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              value={ex.duration}
                              onChange={(e) =>
                                setDetails({
                                  ...details,
                                  prof_info: {
                                    ...details.prof_info,
                                    exp: details.prof_info.exp.map(
                                      (expe, ind) =>
                                        index === ind
                                          ? {
                                              ...expe,
                                              duration: Number(e.target.value),
                                            }
                                          : expe
                                    ),
                                  },
                                })
                              }
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter duration
                            </div>
                          </div>
                          <div className="col-12">
                            <label className="form-label">
                              Describe your responsibilities
                            </label>
                            <textarea
                              className="form-control"
                              value={ex.responsibility}
                              onChange={(e) =>
                                setDetails({
                                  ...details,
                                  prof_info: {
                                    ...details.prof_info,
                                    exp: details.prof_info.exp.map(
                                      (expe, ind) =>
                                        index === ind
                                          ? {
                                              ...expe,
                                              responsibility: e.target.value,
                                            }
                                          : expe
                                    ),
                                  },
                                })
                              }
                              required
                            ></textarea>
                            <div className="invalid-feedback">
                              Please enter responsibility
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* <div className='card mx-3 mt-3'>
                    <div className='card-body'>
                      <h6 className='card-title text-muted mb-3'>
                        Experience #1
                        <a href='#' className='float-end text-danger fw-normal'>
                          Remove
                        </a>
                      </h6>
                      <div className='row g-3'>
                        <div className='col-6'>
                          <label className='form-label'>Company Name</label>
                          <input type='text' className='form-control' />
                        </div>
                        <div className='col-6'>
                          <label className='form-label'>
                            Duration <span className='text-muted'>(in months)</span>
                          </label>
                          <input type='number' className='form-control' />
                        </div>
                        <div className='col-12'>
                          <label className='form-label'>
                            Describe your responsibilities
                          </label>
                          <textarea className='form-control'></textarea>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="card mx-3 mt-3">
                <div className="card-body">
                  <h6 className="card-title text-muted mb-3">
                    Experience #2
                    <a href="#" className="float-end text-danger fw-normal">Remove</a>
                  </h6>
                  <div className="row g-3">
                    <div className="col-6">
                      <label className="form-label">Company Name</label>
                      <input type="text" className="form-control"/>
                    </div>
                    <div className="col-6">
                      <label className="form-label">Duration <span className="text-muted">(in months)</span></label>
                      <input type="number" className="form-control"/>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Describe your responsibilities</label>
                      <textarea className="form-control"></textarea>
                    </div>
                  </div>
                </div>
              </div> */}
                  <span className="d-block mt-3" onClick={addexperience}>
                    Add more experience
                  </span>
                </div>
              </div>

              <hr className="my-4" />

              <button className="btn btn-primary" type="submit">
                Save Candidate
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Add;
