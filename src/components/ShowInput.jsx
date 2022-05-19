const ShowInput = ({ data }) => {
  return (
    <div style={{ padding: '10px 20px' }}>
      <h4 style={{ color: '#003566' }}>{data.header}</h4>
      <div className="form-placeholder">
        {data.logo && data.logo}
        <p style={{ color: '#9E9E9E' }}>{data.placeholder}</p>
      </div>
      <div style={{ width: '100%', border: '1px solid #003566' }}></div>
    </div>
  );
};
export default ShowInput;
