function EmployeesData({ allData }) {
  console.log("alldata", allData);
  return (
    <div className="all-data-container">
      <h1>Data</h1>
      <table>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Marital Status</th>
          </tr>
        </thead>
        <tbody>
          {allData.map((elem, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{elem.name}</td>
                <td>{elem.age}</td>
                <td>{elem.address}</td>
                <td>{elem.department}</td>
                <td>{elem.salary}</td>
                <td>{elem.maritalStatus == "on" ? "YES" : "NO"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeesData;
