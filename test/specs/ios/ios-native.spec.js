describe('iOS native actions', async ()=>{
    it('ios native test', async ()=>{
        await $('~Alert Views').click();
        await $('~Okay / Cancel').click();
        // await $('~OK').click();

        console.log("========> Alert Text: "+await driver.getAlertText());
        driver.acceptAlert();

        await expect($('~OK')).not.toExist();

    })


    it.only('ios scrolling', async ()=>{
        // await driver.execute('mobile:scroll', {direction: "down"})
        // await driver.execute('mobile:scroll', {direction: "up"})

        await $('~Picker View').click();
        // await driver.execute('mobile:scroll', {direction: "up"})
        
        const redPicker = await $('~Red color component value');
        const greenPicker = await $('~Green color component value');
        const bluePicker = await $('~Blue color component value');


        await driver.execute('mobile:scroll', {element: redPicker.elementId, direction: "down"})
        await driver.execute('mobile:scroll', {element: bluePicker.elementId, direction: "up"})

        await driver.pause(2000);
        
        await redPicker.addValue('125');
        await greenPicker.addValue('0');
        await bluePicker.addValue('125');

        await driver.pause(2000);
    })
})
