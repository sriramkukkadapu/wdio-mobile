const AddNoteScreen = require("../../screenobjects/android/add-note.screen");
const EditNoteScreen = require("../../screenobjects/android/edit-note.screen");

describe('notes app test', async ()=>{
    it('notes app testcase 1', async() => {
        // await driver.pause(3000);
        // await $("id=com.android.permissioncontroller:id/permission_allow_button").click();
        // await driver.pause(3000);

        //skip tutorial
        await EditNoteScreen.skipTutorial();

        await EditNoteScreen.addAndSaveNote("Fav Anime List", "Tiger\nElephant\nLion");

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