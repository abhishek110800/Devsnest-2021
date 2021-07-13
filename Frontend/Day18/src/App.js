function  Box1() {
  return <div style={{background:'white',
  width:60,
  height:60,
  margin: 0
}}> </div>;
}
function  Box2() {
  return <div style={{background:'black',
  width:60,
  height:60,
  margin: 0
}}> </div>;
}
function Rows(){
return (
  <div style={{ display: 'flex',
    margin: 0}}>
      <Box1/>
      <Box2/>
      <Box1/>
      <Box2/>
      <Box1/>
      <Box2/>
      <Box1/>
      <Box2/>
  </div>
 )
}
function Rows1(){
  return (
      <div  style={{ display:'flex',
        margin: 0}}>
          <Box2/>
          <Box1/>
          <Box2/>
          <Box1/>
          <Box2/>
          <Box1/>
          <Box2/>
          <Box1/>
      </div>
     )
  }
function  Chess() {
  const grey="#000";
  return (
  <div  style={{width: 479,
  height: 479,
  padding: 'none',
  marginLeft: 450,
  marginTop:100,
  boxShadow: `0 0 6px 2px ${grey}`}}>
     <Rows/>
     <Rows1/>
     <Rows/>
     <Rows1/>
     <Rows/>
     <Rows1/>
     <Rows/>
     <Rows1/>
  </div>
  )
}
function App() {
 
  return (
    <div className="App" style={{background:'grey'}}>
     <Chess/>
    </div>
  );
}
export default App;