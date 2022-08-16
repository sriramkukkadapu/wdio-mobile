class ToDoScreen{

    get createListBtn(){
        return $('//*[@label="Create list"]');
    }

    get listNameInput(){
        return $('//*[@value="List Name"]');
    }

    get createBtn(){
        return $('~Create');
    }

    listNameGenerated(name){
        return $(`~${name}`);
    }
}

// module.exports = new ToDoScreen();

export default new ToDoScreen();
