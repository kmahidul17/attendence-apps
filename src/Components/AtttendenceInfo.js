import React from "react";

export const AttendenceInfo = () => {

      return (
            <>

                  <div className="container">
                        <div className="attenInfo">
                              <h1>Attendence Information</h1>
                        </div>
                        <table class="table">
                              <thead>
                                    <tr>
                                          <th scope="col">Date</th>
                                          <th scope="col">Employee Name</th>
                                          <th scope="col">Status</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    <tr>
                                          <th scope="row">11/7/16</th>
                                          <td>Mark</td>
                                          <td>Absent</td>
                                    </tr>
                                    <tr>
                                          <th scope="row">12/7/16</th>
                                          <td>Jacob</td>
                                          <td>Present</td>
                                    </tr>
                                    <tr>
                                          <th scope="row">24/7/16</th>
                                          <td>Macob</td>
                                          <td>Present</td>
                                    </tr>
                              </tbody>
                        </table>
                  </div>


            </>
      )

}