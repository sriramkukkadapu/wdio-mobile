describe('Android Elements tests', () => {

    it('Find Element By Accessibility ID', async () => {
        
        //find ele, click, do assertion
        const appOption = await $('~App'); //tilt symbol for accessibility id.
        
        //click element
        await appOption.click();

        //assertion
        // const actionBar = await $('~Action Bar');
        // await expect(actionBar).toBeExisting();

    });

    it('Find multiple elements', async () => {
        // const expectedList = ["API Demos","Access'ibility","Accessibility","Animation","App","Content","Graphics","Media","NFC","OS","Preference","Text","Views"];
        const expectedList = ["API Demos","Action Bar","Activity","Alarm","Alert Dialogs","Device Admin","Fragment","Launcher Shortcuts","Loader","Menu","Notification","Search","Service","Text-To-Speech","Voice Recognition"];
        const actualList = [];

        const eles = await $$('android.widget.TextView');
        for(const ele of eles){
            const text = await ele.getText();
            actualList.push(text);
        }
        // console.log("Actual List: "+ actualList);
        expect(actualList).toEqual(expectedList);
    })

    it('Find by class name', async () => {

        const className = $('android.widget.TextView');

        console.log(await className.getText());
        await expect(className).toHaveText("API Demos");

        // await $('~App').click();

    })

    it('Find by xpath', async () => {

        // await $('~App').click();
        await $('//*[@content-desc="Alert Dialogs"]').click();
        await $('//*[@resource-id="io.appium.android.apis:id/select_button"]').click();

        await $('//android.widget.TextView[@text="Command two"]').click();

        const ele = await $('//android.widget.TextView');
        expect(ele).toHaveText("You selected: 1 , Command two");
    })

    it('Find BY UI automator2', async () => {

        await $('android=new UiSelector().textContains("You selected: 1 , Command two")').click();
    })


    it.only('Work with text field', async ()=>{
        await $('~Views').click();
        await $('~Auto Complete').click();
        await $('~1. Screen Top').click();

        const textField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
        await textField.addValue("Canada");
        await $('~Give me Focus').click();
        expect(textField).toHaveText("Canada");
    })
});