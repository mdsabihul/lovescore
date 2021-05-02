function calc() {
    var person1 = document
        .getElementById("input1")
        .value;
    var person2 = document
        .getElementById("input2")
        .value;
    var output = Math.random();
    output = (output * 70) + 30;

    if (person1 != person2) {

        if (output >= 35 && output < 70) {
            alert(person1 + " and " + person2 + " you got " + (
                Math.floor(output)
            ) + "%,  you both are love birds.  ");
        } else if (output >= 70 && output <= 100) {
            alert(
                person1 + " and " + person2 + " you got " + (
                    Math.floor(output)
                ) + "%,  you both are made for each other.  "
            );
        } else {
            alert(person1 + " and " + person2 + " you got " + (
                Math.floor(output)
            ) + "%, Go ahead .  ");
        }
    } else {
        alert("please enter a valid input");
    }
}
