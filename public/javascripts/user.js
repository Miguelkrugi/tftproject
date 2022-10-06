
async function registar() {

  console.log("Doing...");

  try{

    var dinheiro_base = 500;

    let data = {

       utilizador_name: document.getElementById("fusername").value,
       utilizador_password: document.getElementById("fpassword").value,
       utilizador_email: document.getElementById("femail").value,
       utilizador_dinheiro: dinheiro_base

    }

    let newUser = await $.ajax({

        url: "/users/insertnewuser",
        method: "post",
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "json"

    });

   // console.log("Inserted new user with id: " + newUser.utilizador_id)

   console.log("Done");

    alert("Done POST");
     
  } catch (err) {

     console.log(err);

  }







}



       