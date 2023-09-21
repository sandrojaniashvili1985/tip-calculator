// variables
const bill = $("#bill"),
  numberOfPeople = $("#numOfPeople"),
  tip = $("#tip").text(),
  total = $("#total").text(),
  reset = $("#reset"),
  custom = $(".custom");
  let mesagePeople = $(".invalid-massage-people");
  let mesageBill = $(".invalid-massage-bill");

// events and properties  for bill input fields and number of people input fields for validation
$(".procents *").on("click", function () {
  if (numberOfPeople.val() <= 0 || numberOfPeople.val() == NaN) {
    return mesagePeople.text("Can't be zero");
  }
  mesagePeople.text("");
  if (bill.val() <= 0 || bill.val() == NaN) {
    return mesageBill.text("Can't be zero");
  }

  let tipPerson = ((bill.val() * $(this).text().slice(0, -1)) / 100 / numberOfPeople.val()).toFixed(2);
  if((this.id) == "custumInput"){
    tipPerson = (bill.val() * $(this).val() / 100 / numberOfPeople.val()).toFixed(2);
  }
  // custom input validation
  if(this.id == "prevCostum"){
    return 
  }

  mesageBill.text("");
  const totalPerson = (bill.val() / numberOfPeople.val() + Number(tipPerson)).toFixed(2);
  $("#tip").text(`$${tipPerson}`);
  $("#total").text(`$${totalPerson}`);
});

// reset button state after a successful calculation
reset.on("click", function () {
  bill.val(0);
  numberOfPeople.val(0);
  $("#tip").text("$0.00");
  $("#total").text("$0.00");
  $("#custumInput").css("display", "none");
  $("#prevCostum").css("display", "flex");
  $("#custumInput").val(0);

  mesageBill.text("");
  mesagePeople.text("")
});

// change the state of the custom input
custom.on("click", function () { 
  $("#custumInput").css("display", "flex");
  $("#prevCostum").css("display", "none");
});