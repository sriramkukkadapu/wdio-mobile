const AddNoteScreen = require("../../screenobjects/android/add-note.screen");

class EditNoteScreen{

    async  skipTutorial(){
        await AddNoteScreen.skipBtn.click();

        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed(); 

    }

    async addAndSaveNote(noteHeading, noteBody){
        await AddNoteScreen.addNoteBtn.click();

        await AddNoteScreen.textOption.click();

        await expect(AddNoteScreen.editingLabel).toBeDisplayed();

        await AddNoteScreen.titleText.setValue("Fav Anime List");

        await AddNoteScreen.editNote.setValue("Tiger\nElephant\nLion");

        await driver.back();
        await driver.back();
    }
}

module.exports = new EditNoteScreen();