const initLoad = (function() {
  $('#verifyForm').hide();
  $('#deleteForm').hide();
  $('#addForm').hide();
  $('#updateForm').hide();
  $('#input').hide();
})();

const showView = function() {
  $('#name').hide();
  $('#input').hide();
  $('#content').show();
  $('#verifyForm').hide();
  $('#deleteForm').hide();
  $('#addForm').hide();
  $('#updateForm').hide();
};

const showAdd = function() {
  $('#content').show();
  $('#addForm').show();
  $('#name').hide();
  $('#updateForm').hide();
  $('#verifyForm').hide();
  $('#deleteForm').hide();
};

const showVerify = function() {
  $('#verifyForm').show();
  $('#content').hide();
  $('#deleteForm').hide();
  $('#updateForm').hide();
  $('#addForm').hide();
};

const showUpdate = function() {
  $('#content').show();
  $('#updateForm').show();
  $('#verifyForm').hide();
  $('#deleteForm').hide();
  $('#addForm').hide();
};

const showDelete = function() {
  $('#deleteForm').show();
  $('#content').show();
  $('#updateForm').hide();
  $('#verifyForm').hide();
  $('#addForm').hide();
};

const render = function(htmlStr) {
  $('#content').html(htmlStr);
};

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
