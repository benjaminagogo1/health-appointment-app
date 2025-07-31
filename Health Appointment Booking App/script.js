function showMessage(){
    alert("Hello, This is your message");
}
 let userName = "Benjamin";
 alert("Hello, " +  userName  +" !  Welcome to your app");


 function showOtherField() {
    const deptSelect = document.getElementById("department");
    const otherField = document.getElementById("otherDeptField");

    if( deptSelect.value === "other") {
        otherField.style.display = "block";

    } else{
        otherField.style.display = "none";
    }
 }

 function showOtherField() {
    const deptSelect = document.getElementById("department");
    const otherField = document.getElementById("otherDeptField");

    if( deptSelect.value === "other") {
        otherField.style.display = "block";

    } else{
        otherField.style.display = "none";
    }
 }