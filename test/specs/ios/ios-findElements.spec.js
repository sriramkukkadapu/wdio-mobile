describe('iOS find elements', async ()=>{
    it('find using accessibility od', async ()=>{
        await $('~Alert Views').click();
        await $('~Simple').click();

        const title = await driver.getAlertText();
        console.log("========> Alert text"+ title);

        await $('~OK').click();
    })

    it('find by tag name', async ()=>{
        console.log(await $('XCUIElementTypeStaticText').getText());
        
        //multiple elements
        console.log("========> All text elements: ")
        const eles = await $$('XCUIElementTypeStaticText');
        let allText = "";
        for(const ele of eles){
            allText = allText+ await ele.getText()+" ";
        }

        console.log("========>: "+allText);
    })

    it('find by xpath', async ()=>{
        // await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
        // await $('//XCUIElementTypeStaticText[@name="Simple"]').click();

        await $('//*[@name="Alert Views"]').click();
        await $('//*[@name="Simple"]').click();

        await $('(//XCUIElementTypeOther[@name="Horizontal scroll bar, 1 page"])[2]').click();
    })

    it('find by class chain', async ()=>{
        // const alertText = '**/XCUIElementTypeStaticText[`label == "Alert Views"`]';
        const alertText = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]';
        await $(`-ios class chain:${alertText}`).click();
        await $('//*[@name="Simple"]').click();

        await $('(//XCUIElementTypeOther[@name="Horizontal scroll bar, 1 page"])[2]').click();
    })

    it('find by predicate string', async ()=>{
        // const alertText = 'label == "Alert Views"';
        const alertText = 'value BEGINSWITH[c] "alert"';
        await $(`-ios predicate string:${alertText}`).click();
        await $('//*[@name="Simple"]').click();

        await $('(//XCUIElementTypeOther[@name="Horizontal scroll bar, 1 page"])[2]').click();
    })

    it.only('search excersise', async ()=>{

        await $('~Search').click();
        await $('~Default').click();
        await $("//*[@type='XCUIElementTypeSearchField']").setValue("this is a sample text");
        await $('~Clear text').click();
        await expect($("//*[@type='XCUIElementTypeSearchField']").getText()).not.toEqual("this is a sample text");

        //autocomplete test
        // await $('test').click
    })

})
