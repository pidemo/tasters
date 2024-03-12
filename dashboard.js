const memberstack = window.$memberstackDom;
memberstack.getCurrentMember().then(({ data: member }) => {
    if (member) {
        const warning = document.querySelector("#account-warning");
        const buttons = document.querySelectorAll('[enroll-button="true"]');
        console.log(member);
        console.log(member.customFields.validated);
        if (member.customFields.validated == "true") {
            console.log("Member Validated");
            warning.classList.add("is-hidden");
            buttons.forEach(button => {
                button.classList.remove('is-hidden');
            });
        } else {
            console.log("Member not Validated");
            warning.classList.remove("is-hidden");
            buttons.forEach(button => {
                button.classList.add('is-hidden');
            });
        };
    }
});