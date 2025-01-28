async function getCars()
{
    try{
        const response = await fetch("https://https://surveys-5jvt.onrender.com/api/cars/");
        const data = await response.json();
        return data;
    }
    catch(error)
    {
        console.log('Err',error);
    }

}


async function getCarById(id)
{
    try{
        const response = await fetch("https://surveys-5jvt.onrender.com/api/cars/"+id);
        const data = await response.json();
        return data;
    }
    catch(error)
    {
        console.log('Err',error);
    }

}

async function createCar(model, brand,year)
{
    try{
        const response = await fetch("https://surveys-5jvt.onrender.com/api/cars/",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({model,brand,year})
        });
        const data = await response.json();
        return data;
    }
    catch(error)
    {
        console.log('Err',error);
    }

}


async function updateCar(id,model, brand,year)
{
    try{
        const response = await fetch("https://surveys-5jvt.onrender.com/api/cars/"+id,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({model,brand,year})
        });
        const data = await response.json();
        return data;
    }
    catch(error)
    {
        console.log('Err',error);
    }

}

async function deleteCar(id)
{
    try{
        const response = await fetch("https://surveys-5jvt.onrender.com/api/cars/"+id,{
            method: 'DELETE',
        });
        const data = await response.json();
        return data;
    }
    catch(error)
    {
        console.log('Err',error);
    }

}


async function main()
{
    //console.log(await getCars());
    //console.log(await createCar('Audi','A4',2010));
    //console.log(await updateCar(18,'Bmw','E5',2010));
    //console.log(await deleteCar(18));
     //console.log(await getCarById(19));

}

main();