function Info(data) {
  return (
    <div>
      <h1>{data.name}</h1>
    </div>  
  );
}

function Res() {
  return (
    <div>
      <Info name="Anum" />
    </div>
  );
}
export default Res;