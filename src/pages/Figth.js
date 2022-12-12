function Figth() {
    console.log(window.user);
    if(window.user == undefined) {
        window.user = JSON.parse(localStorage.getItem('user'));
      }
  return (
    <>
    <div>
        <p>{window.user.team[0].name}</p>
    </div>
    </>
  );
}

export default Figth;