const ShowInput = ({ data }) => {
  return (
    <div>
      <h4>{data.header}</h4>
      <div className="form-placeholder">
        {data.logo && data.logo}
        <p>{data.placeholder}</p>
      </div>
      <div></div>
    </div>
  );
};
export default ShowInput;
