const showView = function() {
  $('#name').hide();
  $('#input').hide();
  $('#content').show();
  $('#verifyForm').hide();
  $('#deleteForm').hide();
};

const showAdd = function() {
  $('#name').hide();
  $('#input').show();
  $('#content').show();
  $('#verifyForm').hide();
  $('#deleteForm').hide();
};

const showDelete = function() {
  $('#deleteForm').show();
  $('#content').show();
  $('#input').hide();
};

const showVerify = function() {
  $('#deleteForm').hide();
  $('#content').hide();
  $('#input').hide();
  $('#verifyForm').show();
};

const showUpdate = function() {
  $('#content').show();
  $('#input').show();
  $('#name').hide();
  $('#verifyForm').hide();
  $('#deleteForm').hide();
};

const render = function(htmlStr) {
  $('#content').html(htmlStr);
};

const initLoad = (function() {
  $('#verifyForm').hide();
  $('#deleteForm').hide();
  $('#input').hide();
})();

const getNames = function() {
  let employees = '';
  for (let i = 0; i < employeeList.length; i++) {
    employees += `
    <div class="card m-2">
      <div class="card-body">
        <p>${employeeList[i].name}</p>
        <p>${employeeList[i].officeNum}</p>
        <p>${employeeList[i].phoneNum}</p>
      </div>
    </div>`;
  }
  render(employees);
};

getNames();

const addNew = function(e) {
  e.preventDefault();
  const name = $('#nameInput').val();
  const roomNum = $('#officeNum').val();
  const phoneNum = $('#phoneNum').val();

  console.log(name, roomNum, phoneNum);

  employeeList.push({
    name: name,
    officeNum: roomNum,
    phoneNum: phoneNum
  });

  $('#nameInput').val('');
  $('#officeNum').val('');
  $('#phoneNum').val('');

  getNames();
};

const deleteEntry = function(event) {
  event.preventDefault();
  const name = $('#nameOnly').val();
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name === name) {
      employeeList.splice(i, 1);
    }
  }
  $('#nameOnly').val('');
  getNames();
};

const verifyEntry = function(e) {
  e.preventDefault();
  const name = document.querySelector('div#verifyForm input').value;
  let htmlStr = '<p>No</p>';
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name === name) {
      htmlStr = '<p>Yes</p>';
    }
  }
  $('.contentDiv').html(htmlStr);
};

// $("#submit").click(function() {
//     employeeList.push($("#fullForm").val().trim());
//     $("#fullForm").val("");
//     render();
// });

$('#add').on('click', showAdd);
$('#view').on('click', showView);
$('#delete').on('click', showDelete);
$('#update').on('click', showUpdate);
$('#verify').on('click', showVerify);

$('#submit').on('click', addNew);
// $('#submitName').on('click', deleteEntry);
$('.submitName').on('click', verifyEntry);
