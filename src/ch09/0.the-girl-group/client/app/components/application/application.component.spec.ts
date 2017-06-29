import ApplicationComponent from "./application.component";

describe('ApplicatoinComponent', () => {
  it('is successfully instantiated', () => {
    const app = new ApplicationComponent();
    expect(app instanceof ApplicationComponent).toEqual(true);
  });
});
