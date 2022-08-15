class AddNoteScreen{

    get skipBtn(){
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip']");
    }

    get addNoteTxt(){
        return $("//*[@text='Add note']");
    }

    get addNoteBtn(){
        return $('//*[@text="Add note"]');
    }

    get textOption(){
        return $('//*[@text="Text"]');
    }

    get editingLabel(){
        return $('//*[@text="Editing"]');
    }

    get titleText(){
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_title']");
    }

    get editNote(){
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_note']");
    }

    get editBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }

    get viewNote(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }

    get menuBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/menu_btn"]');
    }

    get deleteBtn(){
        return $('//*[@text="Delete"]');
    }

    get okBtn(){
        return $('//*[@text="OK"]');
    }

    get navMenu(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get trashCan(){
        return $('//*[@text="Trash Can"]');
    }

    get favAnimeList(){
        return $('//*[@text="Fav Anime List"]');
    }
}

module.exports = new AddNoteScreen();