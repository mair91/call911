const btn = document.querySelector('#btn');
// handle click button

btn.onclick = function () {
    const rbs1 = document.querySelectorAll('input[name="R1"]');
    const rbs2 = document.querySelectorAll('input[name="R2"]');
    const rbs3 = document.querySelectorAll('input[name="R3"]');
    const rbs4 = document.querySelectorAll('input[name="R4"]');
    const rbs5 = document.querySelectorAll('input[name="R5"]');
    const rbs6 = document.querySelectorAll('input[name="R6"]');
    const rbs7 = document.querySelectorAll('input[name="R7"]');
    const rbs8 = document.querySelectorAll('input[name="R8"]');

    let R1;
    let R2;
    let R3;
    let R4;
    let R5;
    let R6;
    let R7;
    let R8;
    
    for (const rb of rbs1) {
        console.log(rb)
        if (rb.checked) {
            R1 = rb.value;
            break;
        }
    }
    
    for (const rb of rbs2) {
        console.log(rb)
        if (rb.checked) {
            R2 = rb.value;
            break;
        }
    }
    
    for (const rb of rbs3) {
        console.log(rb)
        if (rb.checked) {
            R3 = rb.value;
            break;
        }
    }
    
    for (const rb of rbs4) {
        console.log(rb)
        if (rb.checked) {
            R4 = rb.value;
            break;
        }
    }
    
    for (const rb of rbs5) {
        console.log(rb)
        if (rb.checked) {
            R5 = rb.value;
            break;
        }
    }
    
    for (const rb of rbs6) {
        console.log(rb)
        if (rb.checked) {
            R6 = rb.value;
            break;
        }
    }
    
    for (const rb of rbs7) {
        console.log(rb)
        if (rb.checked) {
            R7 = rb.value;
            break;
        }
    }
    
    for (const rb of rbs8) {
        console.log(rb)
        if (rb.checked) {
            R8 = rb.value;
            break;
        }
    }
    
    d3.json(`/api/${R1}/${R2}/${R3}/${R4}/${R5}/${R6}/${R7}/${R8}`).then(data => {
        if (data['prediction'] == 'FALSE') {
            alert('You are not in danger');
        } else {
            alert('Call 911 now!');
        }
    })
};