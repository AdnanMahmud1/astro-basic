import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

const Capsule = ({ capsuleData }) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Id</th>
            <th>Status</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {capsuleData.map((caps, index) => {
            return (
              <tr>
                <th>{caps.capsule_serial}</th>
                <th>{caps.capsule_id}</th>
                <th>{caps.status}</th>
                <th>{caps.type}</th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Capsule;
