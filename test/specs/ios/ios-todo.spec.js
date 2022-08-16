describe('todo list suite', async()=>{
    it('todo list basic suite', async ()=>{
        await $('//*[@label="Create list"]').click();
        await $('//*[@value="List Name"]').addValue("Things to do");
        await $('~Create').click();

        await expect(await $('~Things to do')).toExist();
    })

    it.only('todo list create and add item', async () => {
        await $('//*[@label="Create list"]').click();
        await $('//*[@value="List Name"]').addValue("Test");
        await $('~Create').click();

        await $('~Test').click();

        await $('~Add').click();

        await $('//*[@value="Title"]').addValue("buy groceries");

        await $('//*[@value="Due"]').click();
        
        await $('~Date Picker').click();
        await $('~Date Picker').click();
        
        await $('~Wednesday, August 17').click();

        await $('//XCUIElementTypeWindow[@index=2]').click();

        // await $('//*[@value="Add To Do"]').click();

        await $('~Create').click();

        await expect(await $('~buy groceries')).toExist();
    })
})