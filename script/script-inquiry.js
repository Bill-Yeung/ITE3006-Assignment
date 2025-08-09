function sendInquiry() {

    var submitString = "";

    var name = document.form.name.value;
    submitString += "Name = " + name;

    var email = document.form.email.value;
    submitString += "\nEmail = " + email;

    var phoneNumber = document.form.phone.value;
    if (phoneNumber == "") {
        submitString += "\nPhone Number = " + "not submitted";
    } else {
        submitString += "\nPhone Number = " + phoneNumber;
    }

    var travelStartDate = document.form.startDate.value;
    if (travelStartDate == "") {
        submitString += "\nTravel Start Date = " + "not submitted";
    } else {
        submitString += "\nTravel Start Date = " + travelStartDate;
    }

    var travelEndDate = document.form.endDate.value;
    if (travelEndDate == "") {
        submitString += "\nTravel Start Date = " + "not submitted";
    } else {
        submitString += "\nTravel Start Date = " + travelEndDate;
    }

    var index = document.form.inquiryType.selectedIndex;
    var inquiryType = document.form.inquiryType.options[index].text;
    submitString += "\nInquiry Type = " + inquiryType;

    var question = document.form.question.value;
    submitString += "\nQuestion = " + question;

    submitString += "\n\nThank you for your inquiry! We will get back to you as soon as possible."

    alert(submitString);

}