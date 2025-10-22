import { $, expect } from '@wdio/globals';

class Page {
  // App title
  get AddNumber() {
    return $('//android.widget.TextView[@text="AddNumber"]');
  }

  // Field that shows "Hello World!" and the calculation result
  get resultLabel() {
    return $('//*[@resource-id="com.browserstack.addnumber:id/sampleLabel"]');
  }

  // Input fields for numbers
  get num1Input() {
    return $('//*[@resource-id="com.browserstack.addnumber:id/num1"]');
  }

  get num2Input() {
    return $('//*[@resource-id="com.browserstack.addnumber:id/num2"]');
  }

  // Add button
  get addButton() {
    return $('//*[@resource-id="com.browserstack.addnumber:id/addBtn"]');
  }

  // Element visibility checks
  async AddNumberDisplayed() {
    await this.AddNumber.waitForDisplayed();
    await expect(this.AddNumber).toBeDisplayed();
  }

  async resultLabelDisplayed() {
    await this.resultLabel.waitForDisplayed();
    await expect(this.resultLabel).toBeDisplayed();
  }

  // Enter numbers
  async enterNum1(value: number) {
    await this.num1Input.waitForDisplayed();
    await this.num1Input.setValue(value.toString());
    await expect(this.num1Input).toHaveText(value.toString());
  }

  async enterNum2(value: number) {
    await this.num2Input.waitForDisplayed();
    await this.num2Input.setValue(value.toString());
    await expect(this.num2Input).toHaveText(value.toString());
  }

  // Click the Add button
  async clickAddButton() {
    await this.addButton.waitForDisplayed();
    await this.addButton.click();
  }

  // Method to sum two numbers
  async sumNumbers(num1: number, num2: number) {
    await this.enterNum1(num1);
    await this.enterNum2(num2);
    await this.clickAddButton();

    const expectedSum = (num1 + num2).toString();
    await expect(this.resultLabel).toHaveText(`Answer: ${expectedSum}`);
  }
}

export default new Page();
