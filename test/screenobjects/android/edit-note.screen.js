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

        await AddNoteScreen.titleText.setValue(noteHeading);

        await AddNoteScreen.editNote.setValue(noteBody);

        await driver.back();
        await driver.back();
    }
}

module.exports = new EditNoteScreen();