import  Page  from '../pageobjects/page.ts';

describe('AddNumber App', () => {
  it('should display AddNumber title', async () => {
    await Page.AddNumberDisplayed();
  });

  it('should display result label', async () => {
    await Page.resultLabelDisplayed();
  });

  it('should input 1 to the first field and check it', async () => {
    await Page.enterNum1(1);
  });

  it('should input 2 to the second field and check it', async () => {
    await Page.enterNum2(2);
  });

  it('should sum 1 + 2 correctly', async () => {
    await Page.sumNumbers(1, 2);
  });
});
