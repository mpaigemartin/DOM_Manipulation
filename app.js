const showView = function() {
  $("#name").hide();
  $("#input").hide();
  $("#content").show();
};

const showAdd = function() {
  $("#name").hide();
  $("#input").show();
  $("#content").show();

};

const showDelete = function() {
  $("#name").show();
  $("#content").show();
  $("#input").hide();
};

const showVerify = function() {
  $("#input").hide();
  $("#content").hide();
  $("#name").show();
};

const showUpdate = function() {
  $("#name").hide();
  $("#content").show();
  $("#input").show();
};

const render = function(htmlStr) {
  $("#content").html(htmlStr);
};

const getNames = function() {
  let employees = "";
  for (let i = 0; i < employeeList.length; i++) {
    employees += `
        <p>${employeeList[i].name}</p> 
        <p>${employeeList[i].officeNum}</p>
        <p>${employeeList[i].phoneNum}</p>`;
  }
  render(employees);
};

getNames();

const addNew = function(e) {
  e.preventDefault()
const name = $('#nameInput').val()
const roomNum = $('#officeNum').val()
const phoneNum = $('#phoneNum').val()

console.log(name, roomNum, phoneNum);


    employeeList.push({
      name: name,
      officeNum: roomNum,
      phoneNum: phoneNum
    });

    $('#nameInput').val('');
    $('#officeNum').val('');
    $('#phoneNum').val('');

    getNames()
}

const deleteEntry = function(event) {
    event.preventDefault();
    const remove = $("#nameOnly").val();
    // let employees = "";
    // for (let i = 0; i < employeeList.length; i++) {
    //   employees += `
    //       <p>${employeeList[i].name}</p> 
    //       <p>${employeeList[i].officeNum}</p>
    //       <p>${employeeList[i].phoneNum}</p>`
    employeeList.splice(remove);
    $("#nameOnly").val("");
    getNames();
}

const verifyEntry = function (event){
  event.preventDefault();
  const verify = $("#nameOnly").val();
  let contains = employeeList.Contains(verify);
  console.log(verifyEntry)

}

// $("#submit").click(function() {
//     employeeList.push($("#fullForm").val().trim());
//     $("#fullForm").val("");
//     render();
// });


$("#add").on("click", showAdd);
$("#view").on("click", showView);
$("#delete").on("click", showDelete);
$("#update").on("click", showUpdate);
$("#verify").on("click", showVerify);

$("#submit").on("click", addNew);
$("#Submitname").on("click", deleteEntry);
$("verify").on("click", verifyEntry);