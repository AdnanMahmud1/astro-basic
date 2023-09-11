

const Capsule = ({ capsuleData }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Id</th>
            <th>Status</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {
            capsuleData.map((caps, index) => {
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
      </table>
    </>
  );
};

export default Capsule;
