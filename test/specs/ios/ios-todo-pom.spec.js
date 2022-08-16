// const ToDoScreen = require("../../screenobjects/ios/todo.screen");
import ToDoScreen from "../../screenobjects/ios/todo.screen";

describe('todo list suite', async()=>{
    it.only('todo list create and add item', async () => {
        await ToDoScreen.createListBtn.click();
        await ToDoScreen.listNameInput.addValue("Test");
        await ToDoScreen.createBtn.click();


        await expect(await ToDoScreen.listNameGenerated("Test")).toExist();

        // await $('~Test').click();

        // await $('~Add').click();

        // await $('//*[@value="Title"]').addValue("buy groceries");

        // await $('//*[@value="Due"]').click();
        
        // await $('~Date Picker').click();
        // await $('~Date Picker').click();
        
        // await $('~Wednesday, August 17').click();

        // await $('//XCUIElementTypeWindow[@index=2]').click();

        // // await $('//*[@value="Add To Do"]').click();

        // await $('~Create').click();

        // await expect(await $('~buy groceries')).toExist();
    })
})