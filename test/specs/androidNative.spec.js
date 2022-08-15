describe ('Native actions', async ()=>{

    it('Package, activity example', async ()=>{

        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");
        const ele =await $('//*[@text="App/Alert Dialogs"]');
        await expect(ele).toExist();
    })


    it('alert box', async ()=>{
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();
        
        // driver.acceptAlert();
        // driver.dismissAlert();
        
        console.log("Alert Text ----> "+ await driver.getAlertText());

        await $('//*[@resource-id="android:id/button1"]').click();
        
        const alertMsg = await $('//*[@resource-id="android:id/alertTitle"]');
        await expect(alertMsg).not.toExist();
    })

    it('Scrolling', async ()=>{
        await $('~App').click();
        await $('~Activity').click();

        //Scroll till end
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
        // await $('~Secure Surfaces').click();
        
        
        //Scroll text into view - efficient and stable
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        
        await expect($('~Secure Dialog')).toExist();
    })

    it('Scrolling horizontal', async ()=>{
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.Gallery1");

        //horizontal scrolling
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
        // await driver.pause(3000);
    })

    it.only('Date Selection example - scrolling', async () =>{
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.DateWidgets1")
        const dateValue = await $("id=io.appium.android.apis:id/dateDisplay").getText();
        console.log("=======> Date: "+dateValue);

        await $("~change the date").click();
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $("~10 September 2022").click();
        
        await $("id=android:id/button1").click();
        // browser.pause(2000);
        const updatedDateValue = await $("id=io.appium.android.apis:id/dateDisplay").getText();
        console.log("=======> Date: "+updatedDateValue);
        await expect(updatedDateValue).not.toEqual(dateValue);

    })

})