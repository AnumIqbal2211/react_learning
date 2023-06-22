function Info(data) {
  return (
    <div>
      <h2>{data.name}</h2>
    </div>
  );
}

function Res() {
  return (
    <div>
      <Info name="Anum" />
      <Info name= "Iqbal" />
    </div>
  );
}
export default Res;