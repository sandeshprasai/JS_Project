    const elements = document.querySelectorAll(".input_label")
    const celsius = document.getElementById("celsius")
    const Fahrenheit = document.getElementById("Fahrenheit")
    const Kelvin = document.getElementById("Kelvin")

    for(element of elements)
    {
        element.addEventListener("keydown",(e)=>
        {
            if(e.key=='Enter')
            {   
                calculateTemperature(e.srcElement.id)
            }
        })
    }

    function calculateTemperature(id)
    {
        const getChangedValue = document.getElementById(id).value;
        
        if(id ==='celsius')
        {
            Fahrenheit.value=parseFloat(getChangedValue * (9/5) + 32).toFixed(2)
            Kelvin.value= parseFloat(getChangedValue)+273.15
        }
        else if(id ==='Fahrenheit')
        {
            celsius.value= parseFloat((getChangedValue-32)*5/9).toFixed(2)
            Kelvin.value= parseFloat(((getChangedValue-32)*5/9)+(273.15)).toFixed(2)
        }
        
        else
        {
            celsius.value= parseFloat(getChangedValue-273.15).toFixed(2)
            Fahrenheit.value= parseFloat((getChangedValue - 273.15) * 1.8 + 32 ).toFixed(2)
        }

    }