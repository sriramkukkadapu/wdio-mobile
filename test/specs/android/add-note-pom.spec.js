const AddNoteScreen = require("../../screenobjects/android/add-note.screen");

describe('notes app test', async ()=>{
    it('notes app testcase 1', async() => {
        // await driver.pause(3000);
        // await $("id=com.android.permissioncontroller:id/permission_allow_button").click();
        // await driver.pause(3000);

        //skip tutorial
        await AddNoteScreen.skipBtn.click();

        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed(); 

        await AddNoteScreen.addNoteBtn.click();

        await AddNoteScreen.textOption.click();

        await expect(AddNoteScreen.editingLabel).toBeDisplayed();

        await AddNoteScreen.titleText.setValue("Fav Anime List");

        await AddNoteScreen.editNote.setValue("Tiger\nElephant\nLion");

        await driver.back();
        await driver.back();

        //edit button displayed
        await expect(AddNoteScreen.editBtn).toBeDisplayed();        	

        //click view note
        await expect(AddNoteScreen.viewNote).toHaveText("Tiger\nElephant\nLion");
        
        //click 3 dots button
        await AddNoteScreen.menuBtn.click();        	

        //click delete
        await AddNoteScreen.deleteBtn.click();

        //click ok
        await AddNoteScreen.okBtn.click();

        //click hamburger menu
        await AddNoteScreen.navMenu.click();        	

        //goto trash can
        await AddNoteScreen.trashCan.click();

        //fav anime list displayed
        await expect(AddNoteScreen.favAnimeList).toBeDisplayed();



    })
})