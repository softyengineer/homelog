document.body.onload = connectToSql();

function connectToSql() {
  document.getElementById("connResult").innerHTML = "Connected!";
  import { createConnection } from "mysql";

  // var con = createConnection({
  //   host: "",
  //   user: "",
  //   password: ""
  // });

  // con.connect(function(err) {
  //   if (err) throw err;
  // });
}
