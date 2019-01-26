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

const addNew = function() {
    // event.preventDefault();
    const add = $("#fullForm").val().trim();
    employeeList.push(add);
    $("#fullForm").val("");
    render();
}

const deleteEntry = function() {
    // event.preventDefault();
    const remove = $("#nameOnly").val().trim();
    employeeList.hide(remove);
    $("#nameOnyl").val("");
    render();
}



$("#add").on("click", showAdd);
$("#view").on("click", showView);
$("#delete").on("click", showDelete);
$("#update").on("click", showUpdate);
$("#verify").on("click", showVerify);

$("#Submit").on("click", addNew);
$("#Submitname").on("click", deleteEntry);
