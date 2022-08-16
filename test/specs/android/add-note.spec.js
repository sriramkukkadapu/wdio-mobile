describe('notes app test', async ()=>{
    it('notes app testcase 1', async() => {
        // await driver.pause(3000);
        // await $("id=com.android.permissioncontroller:id/permission_allow_button").click();
        // await driver.pause(3000);

        //skip tutorial
        await $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip']").click();

        await expect($('//*[@text="Add note"]')).toBeDisplayed();

        await $('//*[@text="Add note"]').click();

        await $('//*[@text="Text"]').click();

        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        await $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_title']").setValue("Anime List");

        await $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_note']").setValue("Tiger\nElephant\nLion");

        await driver.back();
        await driver.back();

        //edit button displayed
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();        	

        //click view note
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("Tiger\nElephant\nLion");
        
        //click 3 dots button
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/menu_btn"]').click();        	

        //click delete
        await $('//*[@text="Delete"]').click();

        //click ok
        await $('//*[@text="OK"]').click();

        //click hamburger menu
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();        	

        //goto trash can
        await $('//*[@text="Trash Can"]').click();

        //fav anime list displayed
        await expect($('//*[@text="Anime List"]')).toBeDisplayed();



    })
})