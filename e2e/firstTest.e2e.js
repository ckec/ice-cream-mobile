describe('App', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have Ice-Cream text', async () => {
    await expect(element(by.text('Ice-Cream'))).toBeVisible();
  });
});
