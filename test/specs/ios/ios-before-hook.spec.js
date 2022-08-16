// const ToDoScreen = require("../../screenobjects/ios/todo.screen");
import ToDoScreen from "../../screenobjects/ios/todo.screen";

describe('todo list suite', async()=>{

    before(async ()=>{

        await ToDoScreen.createListBtn.click();
        await ToDoScreen.listNameInput.addValue("Test");
        await ToDoScreen.createBtn.click();

    })

    beforeEach(async ()=>{
        console.log("BEFORE EACH HOOK!!")
    })

    after(async ()=>{
        console.log("AFTER HOOK!!")
    })

    afterEach(async ()=>{
        console.log("AFTER EACH HOOK!!")
    })

    it('todo list create and add item', async () => {
        await expect(await ToDoScreen.listNameGenerated("Test")).toExist();
    })

    it('hook test', async () => {
        // await expect(await ToDoScreen.listNameGenerated("Test")).toExist();
        console.log("INSIDE THE IT BLOCK!!")
    })
})