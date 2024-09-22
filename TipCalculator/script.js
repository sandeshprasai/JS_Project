    const totalField = document.getElementById("totalAmount");

let total =0;
function calculateTip()
{
    const bill = parseFloat(document.getElementById("BillField").value);
    const tips = parseFloat(document.getElementById("TipField").value);
    if(isNaN(bill) || isNaN(tips))
    {
        alert("Enter bill field and tips field")

    }   

    else
    {
        total =  bill + bill * tips/100
        totalField.innerHTML = `${total.toFixed(2)}`;


    }

    document.getElementById("BillField").value=''
    document.getElementById("TipField").value=''

    
}